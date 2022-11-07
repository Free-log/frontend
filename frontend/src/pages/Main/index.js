import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import { ErrorPage } from "@pages";

function Main() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path=":tempName" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Main;
