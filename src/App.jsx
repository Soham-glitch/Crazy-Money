import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import DashBoard from "./components/DashBoard";
import SendMoney from "./components/SendMoney";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Send" element={<SendMoney />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
