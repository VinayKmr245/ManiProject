// Classname , semester , branch , section , stream , days , from time , to time 
// subject staff id isavailabe

import { useRef, useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBell, FaUser } from "react-icons/fa6";

const Navbar = (props) => {
    const op = useRef(null);
    const notifications = [{notification:"Notification 1"}, {notification:"Notification 2"}, {notification:"Notification 3"}];
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = (event) => {
        op.current.toggle(event);
    };

    return (
        <nav className="flex w-full justify-between items-center bg-gray-800 text-white p-4">
            <div className="navbar-left">
                <a href="/" className="text-xl font-bold text-white no-underline mx-4">
                    {props.title}
                </a>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row self-center items-center justify-center">
                    <button className="text-white cursor-pointer ml-4 mx-2 border-1 p-2 rounded-2xl" onClick={toggleNotifications}>
                        <FaBell />
                        {showNotifications && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
            <h3 className="font-bold mb-2">Notifications</h3>
            <ul>
              {notifications.slice(0, 5).map((notification, index) => (
                <li key={index} className="text-sm text-gray-700 border-b py-1">{notification}</li>
              ))}
            </ul>
          </div>
        )}
                    </button>
                    
                    <a href="/account" className="text-white no-underline ml-4 border-1 p-2 rounded-2xl">
                        <FaUser />
                    </a>
                    <a href="/login" className="text-white no-underline ml-4 border-1 p-2 rounded-2xl">
                        <FaSignOutAlt />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;