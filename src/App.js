import { Route, Routes } from "react-router-dom";
import { Account, Profile } from "./components/organisms";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import User from "./pages/User";
function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
        <Route path="account" element={<Account />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
