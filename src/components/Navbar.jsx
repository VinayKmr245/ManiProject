// Classname , semester , branch , section , stream , days , from time , to time 
// subject staff id isavailabe

import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBell, FaUser } from "react-icons/fa6";

const Navbar = (props) => {
    const op = useRef(null);
    const notifications = [{notification:"Notification 1"}, {notification:"Notification 2"}, {notification:"Notification 3"}];

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
                    </button>
                    <OverlayPanel ref={op}>
                        <div className='flex flex-col gap-2'>
                        {notifications.map((notification, index) => (
                            // <Notification index={index} notification={notification.notification} key={index} />
                            <span key={index}>{notification.notification}</span>
                        ))}
                        </div>
                    </OverlayPanel>
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