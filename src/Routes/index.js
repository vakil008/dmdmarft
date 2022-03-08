import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layout/publicLayout";
import PrivateLayout from "../layout/privateLayout";
import Login from "../pages//Login";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import Lead from "../pages/Lead";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/lead" element={<Lead />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
