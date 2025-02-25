import { Heading } from "./sub-components/Heading";
import { SubHeading } from "./sub-components/SubHeading";
import { InputBox } from "./sub-components/InputBox";
import { Button } from "./sub-components/Button";
import { BottomWarning } from "./sub-components/BottomWarning";
export default function SignIn() {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading
              label={"Enter your credential to access your account"}
            />

            <InputBox placeholder="username@gmail.com" label={"Email"} />
            <InputBox placeholder="123456" label={"Password"} />
            <div className="pt-4">
              <Button label={"Sign up"} />
            </div>
            <BottomWarning
              label={"Don't have any account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
