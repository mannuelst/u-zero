import { ProviderProp } from "@/utils/definitions";

export function TableData({ children }: ProviderProp) {
  return (
    <td className="py-3 px-4 text-left "> {children}</td>
  )
}