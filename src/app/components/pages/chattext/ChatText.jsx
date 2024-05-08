'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import {BsChatTextFill} from 'react-icons/bs'

function ChatText() {
  const [yes, setYes] = useState('');
  const [yes1, setYes1] = useState('');
  const [no, setNo] = useState('');
  const [no1, setNo1] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when component updates
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, [yes, yes1, no, no1]);

  const [chat , setChat] = useState(false);

  const handleOnClickYes1 = () => {
    setYes1(true);
  };

  const handleOnClickYes = () => {
    setYes(true);
  };

  const handleOnClickNo = () => {
    setNo(true);
  };

  const handleOnClickNo1 = () => {
    setNo1(true);
  };

  return (

    <>
    
    {
      chat === true ?
      <div className='h-[83px] overflow-y-auto ml-2 text-white' ref={chatContainerRef}>

      <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>Hello Sir,👩🏻‍🍳</p>
      <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>Good Morning</p>
      <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>Are You Hungry 👩🏻‍🍳 ?  </p>
      <button onClick={handleOnClickYes} className='bg-[#007676] m-1 px-4 py-1 border-2 '>
        Yes 😋
      </button>
      <button onClick={handleOnClickNo} className='bg-[#007676] m-1 px-4 py-1 border-2 '>
        No
      </button>

      
      
      {yes === true ? (
        <div>
          <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>You Want To Make Awesome Recipe 👩🏻‍🍳 ?</p>
          <button onClick={handleOnClickYes1} className='bg-[#007676] m-1 px-4 py-1 border-2 '>
            Yes 😋
          </button>
          <button onClick={handleOnClickNo1} className='bg-[#007676] m-1 px-4 py-1 border-2 '>
            No
          </button>
        </div>
      ) : no === true ? (
        <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>Thank you, Sir 👩🏻‍🍳</p>
      ) : null}

      {yes1 === true ? (
        <div>
          <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>Click On Button to Search Recipe</p>
          <Link href="/chat">
          
          <button className='bg-blue-400 m-1 px-4 py-1 border-2 '>Click Me 👩🏻‍🍳</button>
          </Link>
        </div>
      ) : no1 === true ? (
        <p className='border-[#007676] text-[#007676] bg-[#EAF2F5] px-4 py-1 max-w-fit border-2 rounded-e-xl rounded-es-xl m-1'>thank you</p>
      ) : null}
    </div>
      :
      null
    }
      <button className='fixed top-[92%] ml-4 px-4 py-2 text-4xl bg-[#007676] text-white rounded-full' onClick={()=>setChat(!chat)}>
        <BsChatTextFill/>
      </button>
      </>
  );
}

export default ChatText;
