import { Heading } from "./sub-components/Heading";
import { SubHeading } from "./sub-components/SubHeading";
import { InputBox } from "./sub-components/InputBox";
import { Button } from "./sub-components/Button";
import { BottomWarning } from "./sub-components/BottomWarning";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your infromation to create an account"} />
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="John"
              label={"First Name"}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Doe"
              label={"Last Name"}
            />
            <InputBox
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="username@gmail.com"
              label={"Email"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="123456"
              label={"Password"}
            />
            <div className="pt-4">
              <Button
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      firstName: firstName,
                      lastName: lastName,
                      userName: userName,
                      password: password,
                    }
                  );

                  if (!response) {
                    alert("please enter required fields");
                  }
                  localStorage.setItem("token", response.data.token);
                  navigate("/Dashboard");
                }}
                label={"Sign up"}
              />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
