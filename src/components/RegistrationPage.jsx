import { InputText } from "primereact/inputtext";
import { useState } from "react";
import './Login.css';
import Navbar from "./Navbar";
const RegistrationPage = (props) => {
    const [details,setDetails] = useState({
        userName:"",
        email:"",
        password:""
    });
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <Navbar title="Time Table Manager"/>
            <div className=" card">
                <div className="flex flex-col gap-2 rounded-md border-2 p-4 mt-16">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" classname="border-1 rounded-sm" aria-describedby="username-help" />
                    <label htmlFor="username">Password</label>
                    <InputText id="password" classname="border-1 rounded-sm" aria-describedby="password-help" />
                <div className="m-4 p-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                        Submit
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;

