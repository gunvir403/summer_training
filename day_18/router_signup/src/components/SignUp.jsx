import { useState } from "react"
import { useNavigate, Link } from "react-router";
import bcrypt from "bcryptjs";
import { openDB } from "idb";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const usernameRegex = /^[0-9a-z._-]{3,10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    const getAllUsers = async () => {

        const db = await openDB('userDB', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'username' });
                }
            }
        });
        return db.getAll('users');
    };

    const addUserToDB = async (user) => {
        const db = await openDB('userDB', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'username' });
                }
            }
        });
        await db.add('users', user);
    };

    const validateForm = async () => {

        const savedUsers = await getAllUsers();
        const userExists = savedUsers.some(user => user.username === username);

        if (!usernameRegex.test(username)) {
            setError("Invalid Username");
            return false;
        }

        if (userExists) {
            setError('Username already taken');
            return false;
        }

        if (!emailRegex.test(email)) {
            setError("Invalid Email Address");
            return false;
        }

        if (password!==confirmPassword) {
            setError("Passwords do not match");
            return false;
        }

        if (!passwordRegex.test(password)) {
            setError("Invalid Password");
            return false;
        }

        setError("");
        return true;
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (await validateForm()) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { username, email, password: hashedPassword };
            await addUserToDB(newUser);
            navigate('/');
        }
    };

    return (
        <div className="masterofpuppets">
            <div className="authBox">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="fields">
                        <label>Enter a username</label><br />
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="fields">
                        <label>Enter an E-mail Address</label><br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="fields">
                        <label>Enter Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="fields">
                        <label>Confirm Password</label><br />
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit">Sign Up</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                <p>Already have an account? <Link to={'/'}>Log In</Link></p>
            </div>
            <div className="rules">
                <h2>Rules</h2>
                <h4>Username</h4>
                <p>Length: 3-10 characters</p>
                <p>Allowed Characters: Letters, Numbers, Hyphens, Dashes and Periods</p>
                <h4>E-mail</h4>
                <p>Valid E-mail Address</p>
                <h4>Password</h4>
                <p>Length: 8 to 16 characters</p>
                <p>Atleast one Uppercase, one number and one special character</p>
            </div>
        </div>
    )

}

export default SignUp;