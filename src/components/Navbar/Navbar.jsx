'use client'
import Link from "next/link";
import logo from '../../../public/Assets/Images/logo.jpg'
import Image from "next/image";
import { usePathname } from "next/navigation";
function Navbar() {
    const path = usePathname();
    console.log(path, ((path !== '/') || (path !== '/signUp')) ? true : false);
    return (
        <nav id="navBar" className="w-full h-16 fixed px-10 shadow-[0px_2px_0px_0px_#00000024] top-[0] bg-white z-50" >
            <div id="navBarInnerContainer" className="w-full h-16 flex">
                <div id="left" className=" w-1/2 flex items-center" >
                    <div id="leftInnerContainer" className=" w-[115px] h-5 flex items-center justify-around">

                        <div id="Logo">
                            <Image alt="Image" src={logo} className=" h-9 w-9" />
                        </div>
                        <h2 id="name">WizAd</h2>
                    </div>
                </div>
                <div id="right" className=" w-1/2 flex justify-center items-center">
                    <div id="rightInnerContainer" className="flex justify-around w-full">
                        <div id="options" className="flex text-sm justify-around w-[414px] items-center">

                            <Link href="/login" className=" cursor-pointer">
                                <p>
                                    How it works
                                </p>
                            </Link>

                            <Link href="/login" className=" cursor-pointer">
                                <p>
                                    Pricing
                                </p>
                            </Link>

                            <Link href="/login" className=" cursor-pointer">
                                <p>
                                    Resources
                                </p>
                            </Link>

                            <Link href="/login" className=" cursor-pointer">
                                <p>
                                    FAQ
                                </p>
                            </Link>

                            <Link href="/login" className={((path === '/') || (path === '/signUp')) ? "cursor-pointer" : "hidden"}>
                                <p>
                                    Login
                                </p>
                            </Link>

                        </div>
                        <Link href="/signUp" id="signUpContainer" className={((path === '/') || (path === '/login')) ? "cursor-pointer" : "hidden"}>
                            <button className=" w-20 h-10 rounded-xl bg-blue-600 text-white text-sm">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;