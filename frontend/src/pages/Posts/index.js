import { Route, Routes } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";
import ModifyPost from "./ModifyPost";
import WritePost from "./WritePost";

function Posts() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="/:postId">
        <Route index element={<Post />} />
        <Route path="comments" element={<Comments />} />
        <Route path="mod" element={<ModifyPost />} />
      </Route>
      <Route path="write" element={<WritePost />} />
    </Routes>
  );
}

export default Posts;
