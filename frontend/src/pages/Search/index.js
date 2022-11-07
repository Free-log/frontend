import { Route, Routes } from "react-router-dom";
import PostSearch from "./PostSearch";
import UserSearch from "./UserSearch";
import { ErrorPage } from "@pages";

function Posts() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="user/:searchKeyword" element={<UserSearch />} />
      <Route path="post/:searchKeyword" element={<PostSearch />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Posts;
