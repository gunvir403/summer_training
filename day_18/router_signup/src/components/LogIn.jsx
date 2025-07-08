import { useState } from "react"
import { useNavigate, Link } from 'react-router'
import bcrypt from 'bcryptjs'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = savedUsers.find(user => user.username === username);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!user) {
            setError('User not found');
            return false;
        }

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            navigate('/home');
        } else {
            setError('Incorrect Password');
        }
    };

    return (
        <div className="masterofpuppets">
            <div className="authBox">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="fields">
                        <label>Enter your username</label><br />
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="fields">
                        <label>Enter your password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Log In</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                <p>Don't have an account? <Link to={'/'}>Sign Up</Link></p>
            </div>
        </div>
    )
};

export default Login;