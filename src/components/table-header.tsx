const tableHeaders = ["Nome", "Email", "Role", "Action"];

export function TableHeader({ title }: { title: string }) {
  return (
    <th className="py-3 px-4 text-lg text-left">{title}</th>
  );
}

export function TableHeaders() {
  return (
    <tr>
      {tableHeaders.map((header, index) => (
        <TableHeader key={index} title={header} />
      ))}
    </tr>
  );
}