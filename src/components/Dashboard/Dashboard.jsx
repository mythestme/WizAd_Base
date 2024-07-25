"use client"
import { fetchAds } from '@/utils/service';
import { Avatar, Switch } from '@mui/material';
import { useEffect } from 'react';

function Dashboard() {

    useEffect(() => {

        fetchAds().then((response) => {
            console.log({ response })
        })
        console.log("Dashboard")
    }, [])
    return (
        <div>

            <div id="heading">
                <h1 className='text-2xl font-bold'>Your Ad dashboard</h1>
                <p className='text-slate-400 text-sm mt-2'>Welcome to your dashboard. Here you can view and manage your ads, audiences and reporting. </p>
            </div>

            <div id="data" className='w-full'>
                <div id="cardContainers" className='flex justify-around w-full mt-10'>
                    <div id="totalSpend" className=' bg-slate-200 h-28 w-56 rounded-xl px-5 flex flex-col justify-center'>
                        <h3 className='font-bold'>Total spend</h3>
                        <h1 className='font-bold'>$2,500</h1>

                    </div>
                    <div id="activeAds" className=' bg-slate-200 h-28 w-56 rounded-xl px-5 flex flex-col justify-center'>
                        <h3 className='font-bold'>Active Ads</h3>
                        <h1 className='font-bold'>5</h1>
                    </div>
                    <div id="pendingAds" className=' bg-slate-200 h-28 w-56 rounded-xl px-5 flex flex-col justify-center'>
                        <h3 className='font-bold'>Pending Ads </h3>
                        <h1 className='font-bold'>1</h1>
                    </div>
                    <div id="totalAds" className=' bg-slate-200 h-28 w-56 rounded-xl px-5 flex flex-col justify-center'>
                        <h3 className='font-bold'>Total Ads</h3>
                        <h1 className='font-bold'>6</h1>
                    </div>
                </div>

                <div id='activeAdListing' className='py-8'>
                    <h2 className='font-bold'>
                        Active Ads
                    </h2>
                    <div id='table' className=' mt-8 w-full border-2 border-slate-100 rounded-md'>
                        <div id="tableHeadings" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'> Ad</label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-medium'>Title</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className=' font-medium'>Spend</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className=' font-medium'>Impressions</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className=' font-medium'>Status</label>
                            </div>

                        </div>

                        {/* Listings */}
                        <div id="row_1" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'>
                                    <Avatar>N</Avatar>
                                </label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-thin text-slate-500'>Some_Ad_._</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className='font-thin text-slate-500'>$500</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className='font-thin text-slate-500'>1000</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className='font-thin text-slate-500'>
                                    <Switch defaultChecked /> Active

                                </label>
                            </div>
                        </div>


                        <div id="row_1" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'>
                                    <Avatar>G</Avatar>
                                </label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-thin text-slate-500'>Some_Ad_._</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className='font-thin text-slate-500'>$500</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className='font-thin text-slate-500'>1000</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className='font-thin text-slate-500'>
                                    <Switch defaultChecked={true} /> Active

                                </label>
                            </div>
                        </div>

                        <div id="row_2" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'>
                                    <Avatar>A</Avatar>
                                </label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-thin text-slate-500'>Some_Ad_._</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className='font-thin text-slate-500'>$500</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className='font-thin text-slate-500'>1000</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className='font-thin text-slate-500'>
                                    <Switch defaultChecked={true} /> Active

                                </label>
                            </div>
                        </div>

                        <div id="row_3" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'>
                                    <Avatar>S</Avatar>
                                </label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-thin text-slate-500'>Some_Ad_._</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className='font-thin text-slate-500'>$500</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className='font-thin text-slate-500'>1000</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className='font-thin text-slate-500'>
                                    <Switch defaultChecked={true} /> Active

                                </label>
                            </div>
                        </div>

                        <div id="row_4" className='w-full border-b-2 border-slate-100 pl-3 py-2 flex justify-between'>
                            <div className='w-1/5' id="adTemplate">
                                <label htmlFor="" className=' font-medium'>
                                    <Avatar>D</Avatar>
                                </label>
                            </div>

                            <div className='w-1/5' id="adTitle">
                                <label htmlFor="" className=' font-thin text-slate-500'>Some_Ad_._</label>
                            </div>

                            <div className='w-1/5' id="adSpend">
                                <label htmlFor="" className='font-thin text-slate-500'>$500</label>
                            </div>

                            <div className='w-1/5' id="adImpressions">
                                <label htmlFor="" className='font-thin text-slate-500'>1000</label>
                            </div>

                            <div className='w-1/5' id="adStatus">
                                <label htmlFor="" className='font-thin text-slate-500'>
                                    <Switch defaultChecked={true} /> Active

                                </label>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
