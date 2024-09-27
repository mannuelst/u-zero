type Props = {
  msg: string
}
export function Feedback({ msg }: Props) {
  return (
    <div>
      <p className="font-bold text-center py-4">
        {msg}
      </p>
    </div>
  )

}