type ComparisonRow = {
  label: string;
  details: string;
};

const rows: ComparisonRow[] = [
  {
    label: "Cost planning",
    details:
      "Tuition, living costs, visa fees, travel, initial setup and emergency buffer."
  },
  {
    label: "Timeline reality",
    details:
      "When to start, when to apply, what can delay the file and when Plan B is needed."
  },
  {
    label: "Document readiness",
    details:
      "Passport, funds, academics, employment history, SOP, invitation, sponsorship and ties."
  },
  {
    label: "Settlement preparation",
    details:
      "Accommodation, SIM, bank account, local travel, CV, emergency contacts and confidence."
  }
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Migration planning areas Idol Immigration reviews</caption>
        <thead className="bg-ink text-white">
          <tr>
            <th className="px-5 py-4 font-semibold" scope="col">Planning area</th>
            <th className="px-5 py-4 font-semibold" scope="col">What we clarify</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => (
            <tr key={row.label}>
              <th className="px-5 py-4 font-semibold text-ink" scope="row">
                {row.label}
              </th>
              <td className="px-5 py-4 leading-7 text-slate-600">{row.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
