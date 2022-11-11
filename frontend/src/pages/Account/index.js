import { Route, Routes } from "react-router-dom";
import { File, Container } from "@components";
import Find from "./Find";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { Redirector } from "@utils";
import { useRef, useState } from "react";

function Account() {
  const [open, setOpen] = useState(false);
  const counter = useRef(1);

  return (
    <Container>
      <File type="1" fadeIn="1s" open={open} />
      <File type="2" fadeIn="1s" delay="0.5s" open={open} />
      <File fadeIn="1s" delay="1s" open={open} />
      <Routes>
        <Route path="signin" element={<SignIn counter={counter} />} />
        <Route path="signup" element={<SignUp counter={counter} />} />
        <Route path="find" element={<Find counter={counter} />} />
        <Route path="*" element={<Redirector />} />
      </Routes>
    </Container>
  );
}

export default Account;
