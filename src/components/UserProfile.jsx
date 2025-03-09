import myImage from "../assets/myImage.png";
import Navbar from "./Navbar";

const UserProfile = ()=>{
    return(
        <>
        <Navbar title="User Profile"/>
        <div className ="flex flex-row justify-between items-center h-full p-8">
            <div className="flex flex-col justify-center h-100 w-1/3 items-center shadow-2xl">
                {/* <h1>left div</h1> */}
                <img src={myImage} alt="user" className="border-1 rounded-full h-32 w-32 m-4"/>
                <div className="flex flex-col gap-4">
                    <h1>Username</h1>
                    <h1>Designation</h1>
                    <h1>Branch</h1>
                    <h1>Section</h1>
                    <h1>Email</h1>
                </div>
            </div >
            <div className="flex flex-col justify-center items-center">
                <div >
                    <h1 className="text-2xl m-4 p-4">Change Details</h1>
                    <div className="flex flex-col gap-4 mr-120">
                        <input type="text" placeholder="Username" className="border-1 p-4 rounded-sm"/>
                        <input type="text" placeholder="Designation" className="border-1 p-4 rounded-sm"/>
                        <input type="text" placeholder="Branch" className="border-1 p-4 rounded-sm"/>
                        <input type="text" placeholder="Section" className="border-1 p-4 rounded-sm"/>
                        <input type="text" placeholder="Email" className="border-1 p-4 rounded-sm"/>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile;