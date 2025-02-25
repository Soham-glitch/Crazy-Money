import { Appbar } from "./dashboard-login-components/AppBar";
import { Balance } from "./dashboard-login-components/Balance";
import { Users } from "./dashboard-login-components/Users";

export default function DashBoard() {
  return (
    <>
      <div>
        <Appbar />
        <Balance value={10000000000000000} />
        <Users />
      </div>
    </>
  );
}
