import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"

interface Props {
  label: string
  option1: string
  option2: string
}

const RadioField = ({ label, option1, option2 }: Props) => {
  return (
    <div>
      <Label className="font-semibold">{label}</Label>
      <RadioGroup defaultValue="Married" className="mt-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">{option1}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="single" id="r3" />
          <Label htmlFor="r3">{option2}</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
export default RadioField