import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

interface Props {
  text: string
}

const InputField = ({ text}: Props) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="first-name">{text}</Label>
      <Input id="first-name" placeholder="" required />
    </div>
  )
}
export default InputField