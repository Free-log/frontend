import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { File, Container } from "@components";
import { Redirector } from "@utils";

import Find from "./Find";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import styled from "styled-components";

const HeadContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function Account() {
  const token = useSelector((state) => state.token.accessToken);
  const open = useSelector((state) => state.fileEffect.open);
  const counter = useRef(1);
  const navigate = useNavigate();

  const animation1 = open ? { fadeOut: { duration: 1, delay: 0 } } : { fadeIn: { duration: 1, delay: 1 } };
  const animation2 = open ? { fadeOut: { duration: 1, delay: 0 } } : { fadeIn: { duration: 1, delay: 0.5 } };
  const animation3 = { fadeIn: { duration: 1, delay: 0 } };

  useEffect(() => {
    if (token) navigate("../../main/trend");
  }, [navigate, token]);

  return (
    <HeadContainer>
      <File deg="-5" fileColor="1" coordinate={{ X: "32vw", Y: "20vh" }} animation={animation1} />
      <File deg="4" fileColor="2" coordinate={{ X: "64vw", Y: "16vh" }} animation={animation2} />
      <File animation={animation3} open={open} />
      <Routes>
        <Route path="signin" element={<SignIn counter={counter} />} />
        <Route path="signup" element={<SignUp counter={counter} />} />
        <Route path="find" element={<Find counter={counter} />} />
        <Route path="*" element={<Redirector />} />
      </Routes>
    </HeadContainer>
  );
}

export default Account;
