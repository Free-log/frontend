import { Route, Routes } from "react-router-dom";
import TempName from "./TempName";
import { ErrorPage } from "@pages";

function Profile() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="/:userId">
        <Route index element={<TempName />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Profile;
