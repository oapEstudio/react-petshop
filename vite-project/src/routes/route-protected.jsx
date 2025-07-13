import { Navigate } from "react-router-dom";

const ROUTE_PROTECTED = ({isAuthenticated,children})=>{

    if(!isAuthenticated) return <Navigate to='/login' replace/>

    return children;
};

export default ROUTE_PROTECTED;