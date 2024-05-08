import React from 'react'
import {BsGoogle,BsFacebook,BsTwitterX,BsInstagram,BsYoutube} from 'react-icons/bs'
import img3 from '../../images/gplay.png';
import img4 from '../../images/apple.png';
import Image from 'next/image';

function Footer() {
    return (
        <div className='w-screen'>
            <footer className="lg:flex w-screen  bg-[#eaf9ff]">

                <div className="lg:w-2/5 p-4 m-auto ">
                    <h1 className="text-2xl font-bold text-[#007676] ml-4">Logo</h1>
                    <span className="flex gap-8 text-2xl m-4 text-gray-800">
                        <i><BsGoogle className='text-white'/></i>
                        <i><BsInstagram className='text-white'/></i>
                        <i><BsFacebook className='text-white'/></i>
                        <i><BsYoutube className='text-white'/></i>
                        <i><BsTwitterX className='text-white'/></i>
                    </span>

                    <span className="my-2 flex items-center  ">
                        <button>
                            <Image src={img3} alt="gplay" className='w-[200px]' />
                        </button>
                        <button>
                            <Image src={img4} alt="ApplePlay" className='w-[150px]' />
                        </button>
                    </span>
                </div>


                <div className="lg:w-3/5 w-full p-2 flex gap-4 list-none ">
                    <div className="m-2 flex flex-col gap-4">
                        <li className="font-medium text-[#007676] ">Useful Links</li>
                        <li className='text-gray-800'>Menu</li>
                        <li className='text-gray-800'>Restaurants</li>
                        <li className='text-gray-800'>Your Orders</li>
                        <li className='text-gray-800'>Track Order</li>
                        <li className='text-gray-800'>Support</li>
                    </div>
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium text-[#007676]">Information</li>
                        <li className='text-gray-800'>About Us</li>
                        <li className='text-gray-800'>Privacy Policy</li>
                        <li className='text-gray-800'>Terms & Conditions</li>
                        <li className='text-gray-800'>What info we collect ?</li>
                    </div>
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium text-[#007676]">Contact Us</li>
                        <li className='text-gray-800'>Our main restaurant is located on Street 231, NYC</li>
                        <li className='text-gray-800'>Phone - +00 1234567890</li>
                        <li className='text-gray-800'>Email - help@logo.com</li>
                        <li className='text-gray-800'>FAQ</li>
                    </div>
                </div>
            </footer>
            <div className="bg-[#007676] p-2 text-center font-semibold text-white">
                Designed & 👨‍💻 by Modern Web
            </div>
        </div>
    )
}

export default Footer
