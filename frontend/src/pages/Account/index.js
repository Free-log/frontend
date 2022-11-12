import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { File, Container } from "@components";
import { Redirector } from "@utils";
import Find from "./Find";
import SignIn from "./SignIn";
import SignUp from "./Signup";

function Account() {
  const token = useSelector((state) => state.token.accessToken);
  const open = useSelector((state) => state.fileEffect.open);
  const counter = useRef(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("../../main/trend");
  }, [navigate, token]);

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
