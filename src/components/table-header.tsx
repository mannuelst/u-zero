import { ProviderProp } from "@/utils/definitions";
import React from 'react';

type TableCellProps = {
  children: React.ReactNode;
  hideOnMobile?: boolean;
  isHeader?: boolean;
}

function TableCell({ children, hideOnMobile, isHeader = false }: TableCellProps) {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component className={`py-3 px-4 text-lg text-left ${hideOnMobile ? "hidden sm:table-cell" : ""}`}>
      {children}
    </Component>
  );
}

export function TableHeader({ title, hideOnMobile }: { title: string; hideOnMobile?: boolean }) {
  return <TableCell isHeader hideOnMobile={hideOnMobile}>{title}</TableCell>;
}

export function TableData({ children, hideOnMobile }: ProviderProp & { hideOnMobile?: boolean }) {
  return <TableCell hideOnMobile={hideOnMobile}>{children}</TableCell>;
}

export function TableHeaders() {
  return (
    <tr>
      <TableHeader title="Nome" />
      <TableHeader title="Email" hideOnMobile />
      <TableHeader title="Role" hideOnMobile />
      <TableHeader title="Action" />
    </tr>
  );
}