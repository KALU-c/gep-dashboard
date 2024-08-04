import { Label } from "../../components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

type Props = {
  label: string
  option: string[]
}

const SelectableField = ({ option, label }: Props) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="last-name">{label}</Label>
      <Select defaultValue="Male">
        <SelectTrigger className="w-[180px]">
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