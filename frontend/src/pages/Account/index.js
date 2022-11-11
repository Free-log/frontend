import { Route, Routes } from "react-router-dom";
import FindId from "./FindId";
import FindPassword from "./FindPassword";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { ErrorPage } from "@pages";

function Account() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="find">
        <Route path="id" element={<FindId />} />
        <Route path="password" element={<FindPassword />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Account;
