"use client"

import { loginAPI } from "@/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";


function page() {
    const router = useRouter()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function loginFunction() {
        console.log("getting logged");
        loginAPI(userName, password).then((response) => {
            console.log({ response })

           if (response?.status == 200) {
               router.push("/home")
           }else{
               alert("something went wrong")
           }

            
        })
    }
    return (
        <div id="LoginPage">
            <div id="container" className=" w-full flex justify-center items-center">
                <div id="loginBox" className=" w-[512px] py-3">
                    <div id="welcome" className="w-full h-20 flex justify-center items-center">
                        <p className="w-full text-4xl">
                            <b>Welcome back</b>
                        </p>
                    </div>
                    <div id="fields" className="w-full flex flex-col h-[325px] justify-around">

                        <div id="usernameField" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">
                                <div>

                                    <p>E-mail</p>
                                </div>
                                <div id="emailInputContainer" className="w-[480px]">
                                    <input type="email" name="mail" id="em" value={userName} onChange={e => setUserName(e.target.value)} className=" w-full text-base rounded-xl bg-gray-100 h-14 px-2" />
                                </div>
                            </div>
                        </div>

                        <div id="passwordField" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">

                                <div>
                                    <p>Password</p>
                                </div>
                                <div id="passwordInputContainer" className="w-[480px]">
                                    <input type="password" name="pass" id="pass" value={password} onChange={e => setPassword(e.target.value)} className="w-full text-base rounded-xl bg-gray-100 h-14 px-2" />
                                </div>

                            </div>

                        </div>

                        <div id="submission" className=" h-16 w-full py-3 px-4">

                            <button onClick={loginFunction} className="w-[480px] h-10 bg-blue-500 text-white rounded-xl">Sign in</button>
                        </div>

                        <div id="forgot" className="flex justify-center items-center w-full h-9">
                            <div id="forgotContainer" className="flex justify-center items-center w-[480px] h-5">
                                <p className="text-sm text-gray-400 cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default page;