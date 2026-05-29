import React from "react";
import Fields from "../FloatingInputs.tsx";
import {User, LockKeyhole} from "lucide-react";

interface userReg{ 
    id: number,
    fname: string,
    lname: string,
    contact: number,
    email: string,
    pass: string
}

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, setUser] = React.useState<userReg[]>([]);
    
  return (

    <div className="w-[479px] h-auto bg-white rounded-lg shadow-xl p-12">
        <div className="justify-center items-center flex flex-col gap-2">
            <img className="w-16" src="/openbooklogo.png" alt="logo" />
            <h1 className="text-2xl font-bold text-[#1E293B]">OPEN BOOK</h1>
            <p className="text-sm text-[#1E293B]">Login to get started</p>
        </div>
        <div className="fields">
            <form>
                <div> 
                    <Fields
                        icon = {<User/>} 
                        label="Email" 
                        type="email" 
                        value= {email}
                        onChange={(e) => setEmail(e.target.value)} required />

                    <Fields 
                        icon = {<LockKeyhole/>} 
                        label="Password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value) } required />
                </div>
                
                <div>
                    <button className="font-bold w-full bg-[#3671D9] text-white py-2 rounded-md hover:bg-[#1E293B] transition-colors">
                        Log in
                    </button>
                    <p className="text-sm text-gray-500 mt-4 w-full text-center">
                        Don't have an account? <a href="#" className="text-[#1E293B] hover:underline">Click here to <strong>Sign Up</strong></a>
                    </p>
                </div>
            </form>
        </div>
        
    </div>
  )
}

function Registration() {
    return (
        <div>
            <div className="header">
                <img className="" src="/openbooklogo.png" alt="logo" />
                <h1 className="text-2xl font-bold">OPEN BOOK</h1>
                <p className="text-sm text-gray-500">Create an account</p>
                <div className="navigation-wizard"></div>
            </div>
            <div className="fields"></div>
            <div className="footer"></div>
        </div>
    )
}


export default {Login, Registration}