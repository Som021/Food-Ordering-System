'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import img1 from '../../images/ThreeDish.png';
import img2 from '../../images/sixDish.png';
import img3 from '../../images/gplay.png';
import img4 from '../../images/apple.png';
import img5 from '../../images/phone.png';
import ChatText from './chattext/ChatText';
import { BsBagPlusFill, BsListNested, BsGoogle, BsFacebook, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs'





export default function page() {

    const [menu, setMenu] = useState(false);

    const [close1, setClose1] = useState(false);
    const [close2, setClose2] = useState(false);
    const [close3, setClose3] = useState(false);
    const [close4, setClose4] = useState(false);
    const [close5, setClose5] = useState(false);

    return (
        <>
            <div className='fixed top-[80%]'>
                <ChatText />
            </div>
   

            <div className="w-sceen m-auto pt-[20%] lg:pt-1 lg:flex lg:flex-row flex-col-reverse h-screen bg-[#EAF2F5]">
                <div className="lg:w-2/5 w-full p-4 text-sm m-auto border-[1px] ">
                    <h1 className="py-2 text-[40px] font-bold text-[#007676]">Eat the best</h1>
                    <p className="py-2">Explore and understand the culture more by tasting the amazing dishes of that culture</p>

                    <input type="text"
                        placeholder='Search restorant...'
                        className="my-4 w-full p-2 "
                    />

                    <span className="my-2 flex items-center gap-2 text-sm text-[#007676]">
                        <button className="w-1/3 rounded-sm bg-[#007676] lg:py-4 py-2 text-white">Order Food</button>
                        or
                        <button className="w-1/3 rounded-sm border-[1px] border-[#007676] lg:py-4 py-2 text-[#007676]">Order Food</button>
                    </span>

                </div>

                <div className="lg:w-1/2 w-full m-auto">
                    <Image src={img1} alt="loadImg" />
                </div>
            </div>

            <div className="w-sceen m-auto lg:flex flex-c h-screen">
                <div className="lg:w-1/2 w-full m-auto">
                    <Image src={img2} alt="loadImg" />
                </div>

                <div className="lg:w-1/2 w-full p-8 text-sm m-auto border-l-2 border-[#007676]">
                    <p className="max-w-fit border-2 bg-[#0076761A] p-2 font-semibold text-[#007676]">From professional chef</p>

                    <h1 className="my-8 text-[50px]">1000+</h1>
                    <p className="py-2">Order from our 1000+ food and beverages menu. Food for every taste and mood.</p>

                    <span className="my-2 flex items-center justify-between gap-2 text-sm text-[#007676]">
                        <button className="w-1/3 rounded-sm bg-[#007676] p-2 text-white">Order Food</button>
                    </span>
                </div>
            </div>

            <h1 className='text-3xl text-center font-bold my-4 text-[#007676]'> Order Now </h1>
            <div className="w-screen flex flex-wrap m-auto justify-center">

                <div className="lg:w-1/5 flex flex-col gap-4 rounded-sm p-2 bg-[#EAF2F5] text-sm lg:m-1  m-4  ">
                    <span className="bg-red-600 rounded max-w-fit px-1 font-medium text-white absolute m-1">50% off</span>
                    <div className="overflow-hidden rounded-sm">
                        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt=""
                            className="rounded hover:scale-110 ease-in duration-500"
                        />
                    </div>
                    <span className="flex justify-between">
                        <h1 className="text-xl font-bold" >Restaurant 01</h1>
                        <span className="bg-[#007676] text-white rounded-sm px-2 flex items-center">4.2#</span>
                    </span>

                    <p className="text-gray-400">Burgers, Fries, Nugg...</p>
                    <p className="font-semibold">New York</p>
                    <p className="text-[#007676] rounded-sm">50% on your first reservation</p>
                </div>
                <div className="lg:w-1/5 flex flex-col gap-4 rounded-sm p-2 bg-[#EAF2F5] text-sm lg:m-1  m-4 ">
                    <div className="overflow-hidden rounded-sm">
                        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt=""
                            className="rounded hover:scale-110 ease-in duration-500"
                        />
                    </div>
                    <span className="flex justify-between">
                        <h1 className="text-xl font-bold" >Restaurant 01</h1>
                        <span className="bg-[#007676] text-white rounded-sm px-2 flex items-center">4.2#</span>
                    </span>

                    <p className="text-gray-400">Burgers, Fries, Nugg...</p>
                    <p className="font-semibold">New York</p>
                    <p className="text-[#007676] rounded-sm">50% on your first reservation</p>
                </div>
                <div className="lg:w-1/5 flex flex-col gap-4 rounded-sm p-2 bg-[#EAF2F5] text-sm lg:m-1  m-4 ">
                    <div className="overflow-hidden rounded-sm">
                        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt=""
                            className="rounded hover:scale-110 ease-in duration-500"
                        />
                    </div>
                    <span className="flex justify-between">
                        <h1 className="text-xl font-bold" >Restaurant 01</h1>
                        <span className="bg-[#007676] text-white rounded-sm px-2 flex items-center">4.2#</span>
                    </span>

                    <p className="text-gray-400">Burgers, Fries, Nugg...</p>
                    <p className="font-semibold">New York</p>
                    <p className="text-[#007676] rounded-sm">50% on your first reservation</p>
                </div>

                <div className="lg:w-1/5 flex flex-col gap-4 rounded-sm p-2 bg-[#EAF2F5] text-sm lg:m-1  m-4 ">
                    <div className="overflow-hidden rounded-sm">
                        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt=""
                            className="rounded hover:scale-110 ease-in duration-500"
                        />
                    </div>
                    <span className="flex justify-between">
                        <h1 className="text-xl font-bold" >Restaurant 01</h1>
                        <span className="bg-[#007676] text-white rounded-sm px-2 flex items-center">4.2#</span>
                    </span>

                    <p className="text-gray-400">Burgers, Fries, Nugg...</p>
                    <p className="font-semibold">New York</p>
                    <p className="text-[#007676] rounded-sm">50% on your first reservation</p>
                </div>
                <div className="lg:w-1/5 flex flex-col gap-4 rounded-sm p-2 bg-[#EAF2F5] text-sm lg:m-1  m-4 ">
                    <div className="overflow-hidden rounded-sm">
                        <img src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt=""
                            className="rounded hover:scale-110 ease-in duration-500"
                        />
                    </div>
                    <span className="flex justify-between">
                        <h1 className="text-xl font-bold" >Restaurant 01</h1>
                        <span className="bg-[#007676] text-white rounded-sm px-2 flex items-center">4.2#</span>
                    </span>

                    <p className="text-gray-400">Burgers, Fries, Nugg...</p>
                    <p className="font-semibold">New York</p>
                    <p className="text-[#007676] rounded-sm">50% on your first reservation</p>
                </div>

            </div>

            <div>

            </div>

            <div className="w-sceen m-auto lg:flex h-screen">
                <div className="lg:w-1/2 w-full">
                    <Image src={img5} alt="loadImg" />
                </div>

                <div className="lg:w-1/2 w-full p-4 text-sm m-auto">
                    <p className="max-w-fit border-2 bg-[#0076761A] p-2 font-semibold text-[#007676]">Download our app to stay updated</p>

                    <h1 className="my-8 text-3xl">Make orders from your phone</h1>
                    <p className="py-2">Get extra feature on app including tracking order, managing account and much more.</p>

                    <span className="my-2 flex items-center gap-2 ">
                        <button>
                            <Image src={img3} alt="gplay" className='w-[200px]' />
                        </button>
                        <button>
                            <Image src={img4} alt="ApplePlay" className='w-[150px]' />
                        </button>
                    </span>
                </div>
            </div>


            <h1 className='text-3xl font-bold text-center'>Frequently Ask Questions</h1>
            <div className='w-screen p-4 lg:text-xl flex flex-col gap-8 my-8'>
                <div className='lg:w-1/2 w-full lg:m-auto flex items-center justify-between shadow-sm bg-slate-100'
                    onClick={() => setClose1(!close1)}
                >
                    <span className='p-2 shadow-sm text-center'>How can I cancel my reservation ?</span>
                    <span className='p-2 text-[#007676] font-semibold '>
                        {close1 === true ? " - " : " + "}
                    </span>
                </div>
                {close1 && (
                    <p className='lg:w-1/2 w-full m-auto p-2  shadow-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue turpis. Phasellus in dapibus tortor. Aenean quis nisl cursus, condimentum diam a
                    </p>
                )}

                <div className='lg:w-1/2 w-full lg:m-auto flex items-center justify-between shadow-sm bg-slate-100 '
                    onClick={() => setClose2(!close2)}
                >
                    <span className='p-2 shadow-sm text-center'>How can I cancel my reservation ?</span>
                    <span className='p-2 text-[#007676] font-semibold'>
                    {close2 === true ? " - " : " + "}
                    </span>
                </div>
                {close2 && (
                    <p className='lg:w-1/2 w-full m-auto p-2  shadow-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue turpis. Phasellus in dapibus tortor. Aenean quis nisl cursus, condimentum diam a
                    </p>
                )}

                <div className='lg:w-1/2 w-full lg:m-auto flex items-center justify-between shadow-sm bg-slate-100 '
                    onClick={() => setClose3(!close3)}>
                    <span className='p-2 shadow-sm text-center'
                    >How can I cancel my reservation ?</span>
                    <span className='p-2 text-[#007676] font-semibold'>
                    {close3 === true ? " - " : " + "}
                    </span>
                </div>
                {close3 && (
                    <p className='lg:w-1/2 w-full m-auto p-2  shadow-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue turpis. Phasellus in dapibus tortor. Aenean quis nisl cursus, condimentum diam a
                    </p>
                )}

                <div className='lg:w-1/2 w-full lg:m-auto flex items-center justify-between shadow-sm bg-slate-100 '
                    onClick={() => setClose4(!close4)}>
                    <span className='p-2 shadow-sm text-center'>How can I cancel my reservation ?</span>
                    <span className='p-2 text-[#007676] font-semibold'>
                    {close4 === true ? " - " : " + "}
                    </span>
                </div>
                {close4 && (
                    <p className='lg:w-1/2 w-full m-auto p-2  shadow-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue turpis. Phasellus in dapibus tortor. Aenean quis nisl cursus, condimentum diam a
                    </p>
                )}


                <div className='lg:w-1/2 w-full lg:m-auto flex items-center justify-between shadow-sm bg-slate-100 '
                    onClick={() => setClose5(!close5)}>
                    <span className='p-2 shadow-sm text-center'>How can I cancel my reservation ?</span>
                    <span className='p-2 text-[#007676] font-semibold'>
                    {close5 === true ? " - " : " + "}
                    </span>
                </div>
                {close5 && (
                    <p className='lg:w-1/2 w-full m-auto p-2  shadow-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue turpis. Phasellus in dapibus tortor. Aenean quis nisl cursus, condimentum diam a
                    </p>
                )}





            </div>



            <div className="bg-[#EAF2F5]">
                <img src="https://s3-alpha-sig.figma.com/img/2108/e38a/f80fcd77f9f7d85d115c1633d8508a16?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCr7ldRXbR3X7hLFzQUnl6SBr8kfEYaizzE-IpaAXI67wVhNDSmmzqxL6oGE0NsU8bm1DTKxvWskXUGj95PVzetvzehXpKTedqUWLeX6CvP8gDvR5X4RlSU8-K38gytfd2FKTMy-rfj6HrHK2vVbdIvspBNRYVNwZshCD78tn-TEHEDEu1RFoAdpnfDaQpJOZ-xkB0fsyr7q5~sdvmdzKDt0JKEDWmF~KaDfn9Zvgov751QelbunpbrycXxVvIRvOhYkj4KsBAb2ayUw0Jn-VlckMj~IzlcPdQyIS-SJsJ50gPIwg1v6haDLyc56JELMMaMno6FfYia4EGoc4pNH4A__" alt="" />
                <div className="">
                    <div className="w-1/2 p-2 flex flex-col gap-2 ">
                        <h1 className="text-2xl">Get an extra 20% off on your first order</h1>
                        <p>Use this code during checkout</p>
                        <button className="max-w-fit rounded px-2 uppercase bg-white text-[#007676]">Welcome</button>
                    </div>
                    <div className="w-1/2 p-2"></div>
                </div>
            </div>

        </>
    )
}
