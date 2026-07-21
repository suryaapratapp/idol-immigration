alter table public.tool_leads
  drop constraint if exists tool_leads_tool_check;

alter table public.tool_leads
  add constraint tool_leads_tool_check check (
    tool in (
      'intake-deadline-planner',
      'occupation-in-demand',
      'compare-countries',
      'crs-score-calculator',
      'express-entry-tracker'
    )
  );
