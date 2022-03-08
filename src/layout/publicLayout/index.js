import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

const PublicLayout = () => {
  const loginTokenRes = false;
  console.log("PublicLayout");
  return (
    <>
      {!loginTokenRes ? (
        <div className="public-pages">
          <div className="public-container">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};

export default PublicLayout;
