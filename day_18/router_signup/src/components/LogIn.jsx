import { useState } from "react"
import { useNavigate, Link } from 'react-router'
import bcrypt from 'bcryptjs'
import { openDB } from 'idb';

const Login = ({ login }) => {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const openUserDB = async () => {
        return openDB('userDB', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'username' });
                }
                if (!db.objectStoreNames.contains('currentUser')) {
                    db.createObjectStore('currentUser', { keyPath: 'id' });
                }
            }
        });
    };

    const getAllUsers = async () => {
        const db = await openUserDB();
        return db.getAll('users');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const savedUsers = await getAllUsers();
        const user = savedUsers.find(user => user.username === username);

        if (!user) {
            setError('User not found');
            return false;
        }
        
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            saveUsernameToDB(username);
            login(username, password);
            navigate('/home');
        } else {
            setError('Incorrect Password');
        }
    };

    const saveUsernameToDB = async (username) => {
        const db = await openUserDB();
        await db.put('currentUser', { id: 1, username });
    };

    return (
        <div className="masterofpuppets">
            <div className="authBox">
                <h2>Login</h2>
                <form onSubmit={handleLogin} >
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
                <p>Don't have an account? <Link to={'signup'}>Sign Up</Link></p>
            </div>
        </div>
    )
};

export default Login;