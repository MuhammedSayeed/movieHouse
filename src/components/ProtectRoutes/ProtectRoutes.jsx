import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Hooks/Context/AuthContext.jsx"


function ProtectRoutes({ children }) {
    const { user } = useContext(UserContext);
    const lsUser = localStorage.getItem("uid");

    

    if(lsUser == null || user == null){
        return <Navigate to={'/auth'}/>
    }

    return children;

}

export default ProtectRoutes;