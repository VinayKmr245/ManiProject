import { InputText } from "primereact/inputtext";
import './Login.css';
import Navbar from "./Navbar";

const LoginPage = (props) => {
    function registerUser(){
        window.location.href = "/register";
    }
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <Navbar title="Time Table Manager"/>
            <div className="card">
                <div className="flex flex-col gap-2 rounded-md border-2 p-4 mt-16 px-8">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" classname="border-1 rounded-sm" aria-describedby="username-help" />
                    <small id="username-help">
                        Enter your username to Login.
                    </small>
                    <label htmlFor="username">Password</label>
                    <InputText id="password" classname="border-1 rounded-sm" aria-describedby="password-help" />
                    <small id="password-help">
                        Enter your password to Login.
                    </small>
                <div className="m-4 p-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        Login
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={registerUser}>
                        Register
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;

