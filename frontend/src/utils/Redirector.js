import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Redirector() {
  const accessToken = useSelector((state) => state.token.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) navigate("/main/trend");
    else navigate("/account/signin");
  }, []);
  return <Outlet />;
}

export default Redirector;
