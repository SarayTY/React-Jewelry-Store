import { Navigate } from "react-router-dom";
import usersService from "../../frontServices/usersService";

const ProtectedRoute = ({ children , bizOnly }) => {
    const currentUser = usersService.getUser();

    if(!currentUser || (bizOnly && !currentUser.biz)) {
        return <Navigate to="/signin"/>
    }
    return children;
};
export default ProtectedRoute;