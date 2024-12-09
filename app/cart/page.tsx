import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>

        <Header/>

        {/* main work */}
        <div className='flex flex-col ml-[100px] mt-[100px] mb-[100px] mobile:ml-[2px]'>

            <div className='flex w-[106px] h-[22px]'><h1 className='flex gap-[12px]'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1><h2>Cart</h2></div>


            <div className='mt-[100px] font-extrabold text-[40px]'>Your Cart</div>

            <div className='flex mt-[50px] mobile:flex-col'>
                {/* left side */}
                <div className='flex flex-col w-[715px] h-[508px] border-[1px] border-[#e8e7e7] rounded-lg gap-[20px] ml-[1px] mobile:w-[370px]'>
                    
                    {/* 1st col */}
                  <div className='flex w-[667px] h-[124px] gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg mt-[24px] ml-[24px] mobile:w-[350px] mobile:h-[350px] mobile:ml-[6px]'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/GradientT-shirt.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Gradient Graphic T-shirt<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Large</h2>
                        <h3>Color: White</h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$145<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                  </div>
                  {/* 1st end */}

                  {/* 2nd col */}
                  <div className='flex w-[667px] h-[124px] gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg mt-[24px] ml-[24px] mobile:w-[350px] mobile:h-[350px] mobile:ml-[6px]'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/checkshirt.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Checkered Shirt<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Medium</h2>
                        <h3>Color: Red</h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$180<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                  </div>
                  {/* 2nd end */}

                  {/* 3rd col */}
                  <div className='flex w-[667px] h-[124px] gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg mt-[24px] ml-[24px] mobile:w-[350px] mobile:h-[350px] mobile:ml-[6px]'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/Fitjeans.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Skinny Fit Jeans<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Large</h2>
                        <h3>Color: Blue</h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$240<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                  </div>
                  {/* 3rd end */}








                </div>

            {/* right side */}
            <div className='flex flex-col w-[505px] h-[458px] gap-[24px] ml-[50px] mobile:ml-[2px]'>
                <h1 className='text-[24px] font-extrabold'>Order Summary</h1>
                <h2 className='flex flex-col w-[457px] h-[193px] gap-[20px] mobile:w-[200px]'>
                    <div className='flex justify-between'><h2>Subtotal</h2><h3 className='font-bold'>$565</h3></div>
                    <div className='flex justify-between'><h2>Discount (-20%)</h2><h3 className='text-[#DB4444]'>-$113</h3></div>
                    <div className='flex justify-between'><h2>Delivery Fee</h2><h3 className='font-bold'>$15</h3></div>
                    <div className='flex justify-between'><h2 className='font-bold'>Total</h2><h3 className='text-[24px] font-bold'>$467</h3></div>
                </h2>

                <div className='flex w-[457px] h-[48px] gap-[24px]'>
                    <Button className='w-[326px] h-[48px] bg-[#b7b6b6] rounded-full gap-[12px] text-[#818181] mobile:w-[200px]'><Image src={"/images/promocode.svg"}alt="shirt"width={24} height={24}/>Add promo code</Button>
                    <Button className='w-[119px] h-[48px] bg-[#000000] rounded-full text-[#FFFFFF]'>Apply</Button>
                </div>

                <Button className='w-[457px] h-[48px] bg-[#000000] rounded-full text-[#FFFFFF] mobile:w-[300px]'>Go to Checkout<Image className='bg-white' src={"/images/arrow-right.svg"}alt="shirt"width={24} height={24}/></Button>




                
                

            
            
            </div>

            
            
            
            </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
{/* work end */}

<Footer/>
      
    </div>
  )
}

export default page
