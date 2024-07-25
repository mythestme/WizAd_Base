"use client"
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useRouter } from 'next/navigation';
import { signUpAPI } from '@/utils/service';
import { useState } from 'react';
export default function () {
    const router = useRouter()
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        signUpAPI(firstName,lastName, email, password).then((response) => {
            console.log({ response })
            if (response.status == 201) {
                
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
                        <p className=" text-4xl">
                            <b>Create an account</b>
                        </p>
                    </div>
                    <div id="fields" className="w-full flex flex-col justify-around">

                        <div id="fName" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">
                                <div>

                                    <p>First Name</p>
                                </div>
                                <div id="firstNameContainer" className="w-[480px]">
                                    <input type="text" name="FirstName" value={firstName} onChange={e => setFirstName(e.target.value)} id="FirstName" className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                                </div>
                            </div>
                        </div>

                        <div id="lName" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">
                                <div>

                                    <p>Last Name</p>
                                </div>
                                <div id="firstNameContainer" className="w-[480px]">
                                    <input type="text" name="FirstName" id="FirstName" value={lastName} onChange={e => setLastName(e.target.value)} className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                                </div>
                            </div>
                        </div>

                        <div id="country" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">
                                <div>

                                    <p>Country</p>
                                </div>
                                <div id="firstNameContainer" className="w-[480px]">
                                    <input type="text" name="FirstName" id="FirstName" className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                                </div>
                            </div>
                        </div>

                        <div id="E-mail" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">
                                <div>

                                    <p>E-Mail</p>
                                </div>
                                <div id="firstNameContainer" className="w-[480px]">
                                    <input type="text" name="FirstName" id="FirstName" value={email} onChange={e => setEmail(e.target.value)} className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                                </div>
                            </div>
                        </div>


                        <div id="passwordField" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex flex-col w-[480px] h-[88px] justify-between">

                                <div>

                                    <p>Password</p>
                                </div>
                                <div id="pwdContainer" className="w-[480px]">
                                    <input type="password" name="lastName" id="lastName" value={password} onChange={e => setPassword(e.target.value)} className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                                </div>

                            </div>

                        </div>

                        <div id="tac" className="w-full h-28 flex justify-center items-center ">

                            <div className="flex w-[480px] h-[88px] items-center">
                                <FormControlLabel
                                  label="I agree to the Terms of Service and Privacy Policy."
                                  control={
                                    <Checkbox
                                      value=""
                                      onChange={null}
                                      color="primary"
                                    />
                                  }
                                />


                            </div>

                        </div>

                        <div id="submission" className=" h-16 w-full py-3 px-4">

                            <button onClick={handleSubmit} className="w-[480px] h-10 bg-blue-500 text-white rounded-xl">Create an account</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}