"use client";

import { useCallback, useState } from "react";
import {
  createToolLead,
  markToolLeadWhatsAppClicked,
  type MomentumTool
} from "@/lib/momentumTools";

export function useToolLead(
  tool: MomentumTool,
  inputs: Record<string, unknown>,
  result: Record<string, unknown>
) {
  const [leadId, setLeadId] = useState<string>();

  const saveEmail = useCallback(
    async (email: string) => {
      const id = await createToolLead({ tool, inputs, result, email });
      if (id) setLeadId(id);
    },
    [inputs, result, tool]
  );

  const markWhatsAppClicked = useCallback(() => {
    if (leadId) {
      void markToolLeadWhatsAppClicked(leadId).catch(() => undefined);
      return;
    }
    void createToolLead({ tool, inputs, result, whatsappClicked: true }).catch(
      () => undefined
    );
  }, [inputs, leadId, result, tool]);

  return { saveEmail, markWhatsAppClicked };
}
