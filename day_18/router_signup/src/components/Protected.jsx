import { Navigate, Outlet } from "react-router";

const Protected = (props) => (
        props.auth ? <Outlet /> : <Navigate to='/' />
    )
    
export default Protected;