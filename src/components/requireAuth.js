import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({ children }) => {
  const location = useLocation();

  const auth=useSelector((state)=> state.userAuth.user)
 
  if (!auth) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
