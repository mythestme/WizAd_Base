"use client"
import { Add, DehazeOutlined, Image, PaymentOutlined } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useRef, useState } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import AdLibrary from '@/components/AdLibrary/AdLibrary';
import NewAd from '@/components/NewAd/NewAd';
import AdManager from '@/components/AdManager/AdManager';
import Billing from '@/components/Billing/Billing';
function page() {
    const [activeTab, setActiveTab] = useState("tab_dashboard")

    const initialTabRef = useRef(null)

    useEffect(() => {

        initialTabRef.current.focus()

    }, [])

    useEffect(() => {
        console.log({ activeTab });
    }, [activeTab])

    function handleMenuClick(e) {

        e.stopPropagation()
        let id = e.target.id
        if (id.includes("tab_")) {

            setActiveTab(id)
        }
    }

    function RightContent(activeTab) {
        switch (activeTab) {
            case "tab_dashboard":
                return <Dashboard />;
            case "tab_ad_library":
                return <AdLibrary />;
            case 'tab_new_ad':
                return <NewAd />;
            case 'tab_ads_manager':
                return <AdManager />;
            case 'tab_billing':
                return <Billing />;
            default:
                return null;
        }
    }

    return (
        <div className="w-full h-screen flex pt-5">
            <div id="menu" className=" w-1/5 h-screen px-8">
                <h1 className=' text-xl px-5'>Hi User!</h1>
                <div id="menuWrapper" className="w-full mt-3">
                    <button ref={initialTabRef} id="tab_dashboard" tabIndex={1} onClick={(e) => handleMenuClick(e)} className=' relative flex w-full items-center mt-3 focus:bg-blue-50  rounded-md cursor-pointer px-2 h-10'>
                        <HomeIcon id="tab_dashboard" />
                        <p className='px-2' id="tab_dashboard" >Dashboard</p>
                    </button>
                    <button id="tab_ad_library" tabIndex={1} onClick={(e) => handleMenuClick(e)} className='flex w-full items-center mt-3 focus:bg-blue-50  rounded-md cursor-pointer px-2 h-10'>
                        <Image id="tab_ad_library" />
                        <p className='px-2' id="tab_ad_library">Ad Library</p>
                    </button>
                    <button id="tab_new_ad" tabIndex={1} onClick={(e) => handleMenuClick(e)} className='flex w-full items-center mt-3 focus:bg-blue-50  rounded-md cursor-pointer px-2 h-10'>
                        <Add id="tab_new_ad" />
                        <p className='px-2' id="tab_new_ad">New Ad</p>
                    </button>
                    <button id="tab_ads_manager" tabIndex={1} onClick={(e) => handleMenuClick(e)} className='flex w-full items-center mt-3 focus:bg-blue-50  rounded-md cursor-pointer px-2 h-10'>
                        <DehazeOutlined id="tab_ads_manager" />
                        <p className='px-2' id="tab_ads_manager">Ads Manager</p>
                    </button>
                    <button id="tab_billing" tabIndex={1} onClick={(e) => handleMenuClick(e)} className='flex w-full items-center mt-3 focus:bg-blue-50  rounded-md cursor-pointer px-2 h-10'>
                        <PaymentOutlined id="tab_billing" />
                        <p className='px-2' id="tab_billing">Billing</p>
                    </button>
                </div>

            </div>
            <div id="content" className='w-4/5' >
            { RightContent(activeTab) }
            </div>
        </div>
    );
}

export default page;