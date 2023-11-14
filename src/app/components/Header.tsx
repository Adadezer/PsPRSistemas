"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";


function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[92px] flex justify-between items-center shadow-2xl" >
      <Link href="/">
        <div className="relative w-[210px] h-[80px]">
          <Image src="/Logo.png" alt="logo PR Sistemas" fill />
        </div>
      </Link>

      <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <IconButton variant="text" color="white" onClick={handleMenuClick} className="cursor-pointer">
            <Bars3Icon className="h-4 w-4" />
          </IconButton>

          <Image
            width={34}
            height={34}
            className='rounded-full'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            alt='imagem usuário'
          />

          {menuIsOpen && (
            <div className='z-50 absolute top-16 left-0 w-full h-[30px] bg-secondary rounded-lg shadow-md flex flex-col justify-center items-center'>

              <button className='text-primary text-sm font-semibold'>
                Logout
              </button>
            </div>
          )}
        </div>
    </div>
  );
}

export default Header