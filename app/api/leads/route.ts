import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { MomentumTool } from "@/lib/momentumTools";

const tools = new Set<MomentumTool>([
  "intake-deadline-planner",
  "occupation-in-demand",
  "compare-countries",
  "crs-score-calculator",
  "express-entry-tracker"
]);

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

export async function POST(request: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Lead storage is not configured yet." },
      { status: 503 }
    );
  }

  const body = (await request.json().catch(() => null)) as {
    tool?: MomentumTool;
    inputs?: Record<string, unknown>;
    result?: Record<string, unknown>;
    email?: string;
    whatsappClicked?: boolean;
  } | null;

  if (!body?.tool || !tools.has(body.tool) || !body.inputs || !body.result) {
    return NextResponse.json({ error: "Invalid lead payload." }, { status: 400 });
  }
  if (body.email && !/^\S+@\S+\.\S+$/.test(body.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("tool_leads")
    .insert({
      tool: body.tool,
      inputs: body.inputs,
      result: body.result,
      email: body.email?.trim().toLowerCase() || null,
      whatsapp_clicked: Boolean(body.whatsappClicked)
    })
    .select("id")
    .single();

  if (error) {
    console.error("Tool lead insert failed", error.message);
    return NextResponse.json({ error: "Could not store this lead." }, { status: 500 });
  }
  return NextResponse.json({ id: data.id }, { status: 201 });
}

export async function PATCH(request: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ error: "Lead storage is not configured yet." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as {
    id?: string;
    whatsappClicked?: boolean;
  } | null;
  if (!body?.id || body.whatsappClicked !== true) {
    return NextResponse.json({ error: "Invalid update payload." }, { status: 400 });
  }

  const { error } = await supabase
    .from("tool_leads")
    .update({ whatsapp_clicked: true })
    .eq("id", body.id);
  if (error) {
    console.error("Tool lead update failed", error.message);
    return NextResponse.json({ error: "Could not update this lead." }, { status: 500 });
  }
  return NextResponse.json({ updated: true });
}
