import { ChangeEvent, useContext } from "react"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RegisterContext } from "@/contexts/RegisterContext"

interface Props {
  text: string
  name: string
  className?: string
  value: string
}

// add value attribute to the Input element

const InputField = ({ text, name, className, value }: Props) => {
  const { userInfo, setUserInfo } = useContext(RegisterContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    // If the input name is 'age' it will change it number. We need that to add sort functionality to the dashboard
    setUserInfo({ ...userInfo, [name]: name === 'age' ? Number(value) : value });
  }

  return (
    <div className={`grid gap-2 ${className}`}>
      <Label htmlFor={`${name}`}>{text}</Label>
      <Input name={`${name}`} required onChange={(event) => handleChange(event)} value={value}/>
    </div>
  )
}
export default InputField