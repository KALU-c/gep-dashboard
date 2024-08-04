import { Link } from "react-router-dom"

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import { DatePicker } from "./Signup/DatePicker"
import InputField from "./Signup/InputField"
import RadioField from "./Signup/RadioField"
import SelectableField from "./Signup/SelectableField"
import Navbar from "@/components/Navbar"

export function SignupForm() {
  return (
    <>
    <Navbar hideTabs={true} />
    <div className="mt-10 flex justify-center items-center">
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">GEP</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <InputField text="ስም"/>
              <InputField text="የአባት ስም"/>
              <InputField text="የአያት ስም"/>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <InputField text="እድሜ" />
              <InputField text="ስልክ ቁጥር" />
              <SelectableField
                label="ጾታ"
                option={["ወንድ", "ሴት"]}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <SelectableField
                label="የትምህርት ደረጃ"
                option={["1 - 8", "8 - 10", "11 - 12", "UnderGraduate", "PostGraduate"]}
              />
            </div>
            <DatePicker />
            {/* <div className="flex justify-between my-4 mx-2">
              <RadioField
                label="ጋብቻ"
                option1="ያገባ"
                option2="ያላገባ" 
              />
              <RadioField
                label="አባልነት"
                option1="ቆራቢ"
                option2="ያልሆነ" 
              />
              <RadioField
                label="ስራ"
                option1="የግል"
                option2="የመንግስት" 
              />
              <RadioField
                label="ጥምቀት"
                option1="የተጠመቀ"
                option2="ያልትጠመቀ" 
              />
            </div> */}
            
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
    </>
  )
}
