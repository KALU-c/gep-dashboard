import { RegisterContext } from "@/contexts/RegisterContext"
import { Label } from "../../components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { useContext } from "react"

type Props = {
  label: string
  option: string[]
  name: string
  className?: string
  value: string
}

const SelectableField = ({ option, label, name, className, value }: Props) => {
  const { userInfo, setUserInfo } = useContext(RegisterContext);

  return (
    <div className={`grid gap-2 ${className}`}>
      <Label htmlFor={`${label}`}>{label}</Label>
      <Select defaultValue="" disabled={false} name={`${name}`} onValueChange={value => setUserInfo({...userInfo, [name]: value})} value={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="text-white opacity-100">
          <SelectGroup>
            {
              option.map((list, index) => (
                <SelectItem key={index} value={`${list}`}>{list}</SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
export default SelectableField