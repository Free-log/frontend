import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirector } from "@utils";
import { Account, Posts, Profile, Search, Main } from "@pages";
import { fileEffectSlice } from "@stores";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.accessToken);
  dispatch(fileEffectSlice.actions.getInitialValue(token));

  return (
    <Routes>
      <Route path="account/*" element={<Account />} />
      <Route path="post/*" element={<Posts />} />
      <Route path="profile/*" element={<Profile />} />
      <Route path="search/*" element={<Search />} />
      <Route path="main/*" element={<Main />} />
      <Route path="*" element={<Redirector />} />
    </Routes>
  );
}

export default App;
