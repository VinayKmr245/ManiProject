// src/components/LoginPage.jsx
    import { useNavigate } from 'react-router-dom';
    import { InputText } from "primereact/inputtext";
    import './Login.css';
    import { useState, useContext } from "react";
    import AuthContext from '../context/AuthContext';

    const LoginPage = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();
        const { setIsAuthenticated } = useContext(AuthContext);

        const handleLogin = async (event) => {
            event.preventDefault(); // Prevent page reload
            try {
                const response = await fetch('http://localhost:8090/login/validate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: String(username), password: String(password) }),
                });

                if (!response.ok) {
                    throw new Error('Login failed');
                }

                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    const data = await response.json();
                    if (data.data === "Incorrect Password") {
                        setError("Invalid Password");
                    } else if (data.data === "No User Found") {
                        setError("No User found");
                    } else if (data.data !== undefined) {
                        localStorage.setItem('token', data.data.token); // Store token in local storage
                        setIsAuthenticated(true); // Set authentication status
                        if (data.data.role === "STUDENT" || data.data.role === "TEACHER") {
                            navigate('/timetable'); // Navigate to timetable page
                        } else if (data.data.role === "ADMIN") {
                            navigate('/account'); // Navigate to account page
                        }
                    }
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        const registerUser = (event) => {
            event.preventDefault(); // Prevent page reload
            navigate('/register'); // Navigate to register page
        };

        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="card">
                    <form className="flex flex-col gap-2 rounded-md border-2 p-4 mt-16 px-8" onSubmit={handleLogin}>
                        <label htmlFor="username">Username</label>
                        <InputText
                            id="username"
                            className="border-1 rounded-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-describedby="username-help"
                        />
                        <small id="username-help">
                            Enter your username to Login.
                        </small>
                        <label htmlFor="password">Password</label>
                        <InputText
                            id="password"
                            className="border-1 rounded-sm"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-describedby="password-help"
                        />
                        <small id="password-help">
                            Enter your password to Login.
                        </small>
                        {error && <div className="text-red-500">{error}</div>}
                        <div className="m-4 p-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                                type="submit"
                            >
                                Login
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                                onClick={registerUser}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default LoginPage;