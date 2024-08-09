import { useContext } from "react"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RegisterContext } from "@/contexts/RegisterContext"

interface Props {
  text: string
  name: string
}

// add value attribute to the Input element

const InputField = ({ text, name }: Props) => {
  const { userInfo, setUserInfo } = useContext(RegisterContext);

  return (
    <div className="grid gap-2">
      <Label htmlFor={`${name}`}>{text}</Label>
      <Input name={`${name}`} required onChange={(event) => setUserInfo({...userInfo, [event.target.name]: event.target.value})}/>
    </div>
  )
}
export default InputField