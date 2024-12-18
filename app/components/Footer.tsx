import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-col mt-[100px] bg-[#F0F0F0]'>

        
        
        <div className='h-[700px] w-full mobile:h-[2000px]'>
        
        {/* black div */}
        <div className='h-[180px] ml-[100px] bg-[#000000] rounded-2xl mobile:h-[300px] mobile:w-[358px] mobile:ml-1'>
            <div className='flex justify-evenly mb-[44px] mobile:flex-col '><h1 className='w-[551px] h-[94px] font-extrabold text-[40px] text-[#FFFFFF] mt-10 mobile:text-[32px] mobile:w-[297px] mobile:mt-1 mobile:ml-10 mobile:mb-6'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1><h2 className='flex flex-col w-[349px] h-[108px] gap-[14px] mt-10 '><Button variant={'apnaStyle'} className='w-[349px] h-[48px] bg-[#FFFFFF] text-[#848080]'><Image src={"/images/message box.svg"}alt="email"width={24} height={24}/><input type="text" placeholder="Enter your email address"></input></Button>
            <Button variant={'apnaStyle'} className='w-[349px] h-[48px] bg-[#FFFFFF] text-[#000000]'><input type="text" placeholder="Subscribe to news letter"></input></Button></h2></div>
            </div>
        {/* black div end */}



        <div className='mt-[100px] ml-[100px]'>
        {/* col div */}
            <div className='flex gap-[110px] mobile:flex-col'>
                {/* 1st */}
                <div className=' flex flex-col w-[248px] h-[117px] gap-[35px]'>
                    <h1 className='text-[33px] font-extrabold'>SHOP.CO</h1>
                    <h2>We have clothes that suits your style and which you{`’`}re proud to wear. From women to men.</h2>
                    <h3 className='flex gap-[16px]'><Image src={"/images/icon twitter.svg"}alt="icon"width={28} height={28}/><Image src={"/images/icon facebook.svg"}alt="icon"width={28} height={28}/><Image src={"/images/icon instagram.svg"}alt="icon"width={28} height={28}/><Image src={"/images/icon github.svg"}alt="icon"width={28} height={28}/></h3>
                </div>

                {/* 2nd col */}
                <div className=' flex flex-col w-[104px] h-[177px] gap-[26px]'>
                    <h1 className='font-semibold text-[16px]'>COMPANY</h1>
                    <h2>About</h2>
                    <h3>Features</h3>
                    <h4>Works</h4>
                    <h5>Career</h5>
                </div>

                {/* 3rd col */}
                <div className='flex flex-col w-[136px] h-[177px] gap-[26px]'>
                <h1 className='font-semibold text-[16px]'>HELP</h1>
                    <h2>Customer Support</h2>
                    <h3>Delivery Details</h3>
                    <h4>Terms & Conditions</h4>
                    <h5>Privacy Policy</h5>
                </div>

                {/* 4th col */}
                <div className='flex flex-col w-[149px] h-[177px] gap-[26px]'>
                <h1 className='font-semibold text-[16px]'>FAQ</h1>
                    <h2>Account</h2>
                    <h3>Manage Deliveries</h3>
                    <h4>Orders</h4>
                    <h5>Payments</h5>
                </div>

                {/* 5th col */}
                <div className='flex flex-col w-[149px] h-[177px] gap-[26px]'>
                <h1 className='font-semibold text-[16px]'>RESOURCES</h1>
                    <h2>Free eBooks</h2>
                    <h3 className='text-[16px]'>Development Tutorial</h3>
                    <h4>How to-Blog</h4>
                    <h5>Youtube Playlist</h5>
                </div>


            </div>

        
        
        
        
        
        
        
        {/* line */}
        <div className=' border-[1px] border-[#d4d0d0] mt-32 mobile:w-[358px] mobile:ml-[-95px]'></div>

        <div className='flex justify-between mt-10 mobile:flex-col mobile:ml-[-50px]'>
            <div className='text-[#bcb8b8]'>Shop.co © 2000-2023, All Rights Reserved</div>
            <div className=' flex w-[281px] h-[30px] gap-[12px]'><Image src={"/images/Badge1.svg"}alt="badge"width={46} height={30}/><Image src={"/images/Badge2.svg"}alt="badge"width={46} height={30}/><Image src={"/images/Badge3.svg"}alt="badge"width={46} height={30}/><Image src={"/images/Badge4.svg"}alt="badge"width={46} height={30}/><Image src={"/images/Badge5.svg"}alt="badge"width={46} height={30}/></div>
        
        
        
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
       

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Footer
