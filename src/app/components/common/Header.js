'use client'
import React,{useState} from 'react'
import {BsBagPlusFill,BsListNested,BsXCircle} from 'react-icons/bs'
import Link from 'next/link';

export default function Header() {

    const[menu,setMenu]=useState(false);
    const[signIn, setSignIn] = useState(true);

    return (
        <>
        <nav className="flex fixed mb-10 w-screen flex-row justify-between items-center bg-[#007676] p-2 ">
            <div className="font-bold text-white ">Logo</div>

            <div classNameName='flex md:flex-row flex-col'>
                <ul className='hidden lg:flex list-none justify-around gap-6 text-white  '>
                    <Link href="/layout" ><li className='hover:bg-white  hover:text-[#007676] px-4  py-1 rounded-sm'>Home</li></Link>
                    <Link href="/" ><li className='hover:bg-white  hover:text-[#007676] px-4  py-1 rounded-sm'>Order</li></Link>
                    <Link href="/" ><li className='hover:bg-white  hover:text-[#007676] px-4  py-1 rounded-sm'>Resaurant</li></Link>
                    <Link href="/" ><li className='hover:bg-white  hover:text-[#007676] px-4  py-1 rounded-sm'>Track Order</li></Link>
                    <Link href="/chat" ><li className='hover:bg-white  hover:text-[#007676] px-4  py-1 rounded-sm'>Get Recipe</li></Link>
                </ul>
            </div>

        

            <div className='hidden lg:flex gap-2 p-2 items-center '>
                {
                    signIn === false ?

                    <Link href='/signin'><button className='text-[#007676] bg-white rounded-sm p-1 font-semibold uppercase' onClick={()=>setSignIn(!signIn)}>SignIn</button></Link>
                    :
                    <Link href='/login'><button className='text-[#007676] bg-white rounded-sm p-1 font-semibold uppercase' onClick={()=>setSignIn(!signIn)}>LogIn</button></Link>
                }
                
                <input type="text" placeholder='Search Product..'
                    className='p-1 rounded-sm text-sm'
                />
                <i ><BsBagPlusFill className='text-2xl ml-2 text-white' /></i>
            </div>

            <i className='lg:hidden text-white'
                onClick={() => setMenu(!menu)}
            > 
            {menu === false ?
            <BsListNested className='text-3xl bg-[#007676] text-white  p-1 rounded-sm' />
            :
            <BsXCircle className='text-3xl bg-[#007676] text-white  p-1 rounded-sm'/>
            }
            </i>

        
        </nav>
        
        
        {menu === true ?
            <div className='top-11 fixed w-screen flex md:flex-row flex-col h-screen bg-[#EAF2F5]'>
                
                <ul className='flex flex-col m-4  list-none justify-around gap-6 text-[#007676]  '>
                    
                    <Link href="/layout" onClick={() => setMenu(false)} ><li className='hover:bg-[#007676]  hover:text-white px-4  py-1 '>Home</li></Link>
                    <Link href="/" onClick={() => setMenu(false)} ><li className='hover:bg-[#007676]  hover:text-white px-4  py-1 '>Order</li></Link>
                    <Link href="/" onClick={() => setMenu(false)} ><li className='hover:bg-[#007676]  hover:text-white px-4  py-1 '>Resaurant</li></Link>
                    <Link href="/" onClick={() => setMenu(false)} ><li className='hover:bg-[#007676]  hover:text-white px-4  py-1 '>Track Order</li></Link>
                    <Link href="/chat" onClick={() => setMenu(false)} ><li className='hover:bg-[#007676]  hover:text-white px-4  py-1 '>Get Recipe</li></Link>
                </ul>
            </div>
            :
            null
        }
        </>
    )
}
