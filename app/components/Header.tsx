"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from "react";
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";



const Header = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
return (
    <div>
{/* top header */}
    <div className=' flex justify-between w-[1440px] h-[38px] bg-[#000000] '>
      <div className='ml-[544px] text-[#FFFFFF] mobile:ml-[8px]'>Sign up and get 20% off to your first order.<Button variant={"apnaStyle"} className='underline'>Sign Up Now</Button></div>
      <div><Image src={"/images/cross.svg"}alt="cross"width={20}height={20}/></div>
        </div>

{/* navbar */}
   <div className='flex w-[1240px] h-[41px] mt-[20px] ml-[100px] gap-[40px] mobile:hidden'>

   <div className='flex justify-between w-[577px] gap-[2px] mt-3'>
   <h1 className='text-[24px] font-bold text-[#000000]'>SHOP.CO</h1>
   
   
   <nav className='mobile:hidden'>
   <ul className='flex gap-[48px] text-[16px] mt-1'>

<li className='flex flex-col w-[48px] h-[24px] underline'>
  <Link href='#Shop' className='flex hover:text-blue-500' target="_blank">Shop<Image src={"/images/downArrow.svg"}alt="sign"width={16} height={16}/></Link>
  <Link href='./productdetailpage' className='hover:text-blue-500' target="_blank">productdetailpage</Link>

  <Link href='./categorypage' className='hover:text-blue-500' target="_blank">CategoryPage</Link>

  <Link href='./cart' className='hover:text-blue-500' target="_blank">Cart</Link></li>
  

<li className='w-[66px] h-[24px]'>
<Link href='#On Sale' className='hover:text-blue-500' target="_blank">On Sale</Link></li>

<li className='w-[100px] h-[24px]'>
<Link href='#New Arrivals' className='hover:text-blue-500'>New Arrivals</Link></li>

<li className='w-[61px] h-[24px]'>
<Link href='#Brands' className='hover:text-blue-500'>Brands</Link></li>
</ul>
   </nav>
   </div>

<div className='w-[577px] h-[48px]  bg-[#F0F0F0] rounded-full'>
    <div className='flex pl-[16px] pt-[12px] pb-[12px] gap-[12px]'><Image src={"/images/search bar.svg"}alt="cross"width={24}height={24}/>Search for products</div>
</div>


<div className='flex w-[62px] h-[24px] gap-[14px] mt-2'>
<Image src={"/images/shopping.svg"}alt="shop"width={24}height={24}/>
<Image src={"/images/email icon.svg"}alt="icon"width={24}height={24}/>

</div>
</div>{/* nav end */}





{/* mobile navbar */}

<div className='flex justify-evenly w-[390px] lg:hidden'>

<div className="flex mt-3"
                  onClick={toggleMenu}>
                    {isMenuOpen ?<AiOutlineClose size={30}/>:
                    <AiOutlineMenu size={30}/>
                  }
                </div>
                {
          isMenuOpen && (
            <ul className='flex flex-col gap-4 lg:hidden'>
              
              <li>
                <Link href="#Shop" onClick={toggleMenu}>Shop</Link>
                <Link href="./productdetailpage" onClick={toggleMenu}>productdetailpage</Link>
                <Link href="./categorypage" onClick={toggleMenu}>Categorypage</Link>
                <Link href="./cart" onClick={toggleMenu}>Cart</Link>

              </li>
              <li>
                <Link href="./onsale" onClick={toggleMenu}>On sale</Link>
              </li>
              <li>
                <Link href="#New Arrivals" onClick={toggleMenu}>New Arrivals</Link>
              </li>
              <li>
                <Link href="#Brands" onClick={toggleMenu}>Brands</Link>
              </li>
              


            </ul>
          )
        }

<h1 className='text-[24px] font-bold text-[#000000] mt-[10px]'>SHOP.CO</h1>
<h3 className='flex gap-[12px]'><Image src={"/images/search bar.svg"}alt="cross"width={24}height={24}/><Image src={"/images/shopping.svg"}alt="shop"width={24}height={24}/>
<Image src={"/images/email icon.svg"}alt="icon"width={24}height={24}/></h3>






</div>

























</div>
  )
}

export default Header
