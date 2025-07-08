import { Link } from "react-router"

const Welcome = () => (
    <div id="main">
        <h2>Welcome</h2>
        <div id="links">
            <p>Don't Have an Account?</p>
            <Link to="/signup">Sign Up</Link>
            <p>Already Have an Account?</p>
            <Link to="/login">Login</Link>
        </div>
    </div>
)

export default Welcome;