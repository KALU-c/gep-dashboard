import { Label } from "../../components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

interface Props {
  label: string
  option1: string
  option2: string
}

const SelectableField = ({ label, option1, option2 }: Props) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="last-name">{label}</Label>
      <Select defaultValue="Male">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="text-white opacity-100">
          <SelectGroup>
            <SelectItem value="male">{option1}</SelectItem>
            <SelectItem value="female">{option2}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
export default SelectableField