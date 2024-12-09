import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Footer from '../components/Footer'
import Header from '../components/Header'

const page = () => {
  return (
    <div>
        <Header/>

        <div className='h-screen ml-[100px] mt-[100px] mobile:ml-[2px] mb-[1000px] mobile:mb-[5100px]'>

{/* main work */}
        <div className='flex gap-[12px]'>
        <h1 className='flex'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1>
        <h2>Casual</h2>
        </div>

{/* 2nd */}
        <div className='flex mobile:flex-col'>
            {/* left side */}
            <div className='flex w-[295px] h-[1220px] mt-[100px] border-[1px] border-[#9e9e9e] rounded-xl mobile:ml-[30px]'>

            <div className='flex flex-col gap-[44px] ml-[24px] mt-[24px]'>
                
            <div className='flex flex-col gap-[12px]'>
            <h1 className='flex justify-between w-[247px] h-[27px]'>Frame<Image src={"/images/frame.svg"}alt="sign"width={24} height={24}/></h1>
            <h2 className='flex justify-between'>Shorts<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
            <h3 className='flex justify-between'>Shirts<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h3>
            <h4 className='flex justify-between'>Hoodie<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h4>
            <h3 className='flex justify-between'>Jeans<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h3></div>

            <div><Image src={"/images/Priceline.svg"}alt="sign"width={247} height={90}/></div>

            <div><Image src={"/images/colorsMulti.svg"}alt="sign"width={247} height={137}/></div>

            <div><Image src={"/images/buttonsMulti.svg"}alt="sign"width={247} height={274}/></div>

            <div className='flex flex-col gap-[12px]'>
                <h1>Dress Style</h1>
                <h2 className='flex justify-between'>Casual<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Formal<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Party<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Gym<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
            </div>
            <Button variant={'apnaStyle'} className='w-[247px] h-[48px] bg-black text-[#FFFFFF] rounded-full'>Apply Now</Button>
            
            
            
            </div>
            </div>



    {/* right side */}
            <div className='flex flex-col w-[900px] h-[1400px] mt-[100px] ml-[32px] mobile:h-[4000px] mobile:ml-[2px]'>
                <div className='flex justify-between mobile:flex-col'>
                    <h1 className='text-[32px] font-extrabold'>Casual</h1>
                    <h2 className='flex'>Showing 1-10 of 100 Products.Sort By.MostPopular<Image src={"/images/downArrow.svg"}alt="sign"width={16} height={16}/></h2>
                </div>

                {/* col div */}
                <div className='grid grid-cols-3 mobile:grid-cols-1 mobile:ml-[24px]'>
                   {/*1st col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/GradientT-shirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Gradient Graphic T-shirt</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>3.5/5</h2>
                <h3 className='font-bold text-[24px]'>$145</h3>
                
            </div>
            </div>
            {/* 1st col end */}

           
            
            {/* 2nd col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/TippingShirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Polo with Tipping Details</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <h3 className='font-bold text-[24px]'>$180</h3>
                
            </div>
            </div>
            {/* 2nd col end */}

            {/*3rd col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/Blackshirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Black Striped T-shirt</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$120</h1><h2>$150</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-30%</Button></div>
            </div>
            </div>
            {/* 3rd col end */}

            {/* 4 col */}
            <div className='flex flex-col gap-[20px] '> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/Fitjeans.svg"}alt="jeans"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>SKINNY FIT JEANS</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>3.5/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$240</h1><h2>$260</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-20%</Button></div>
            </div>
            </div>
            {/* 4 col end */}

            {/* 5 col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/checkshirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>CHECKERED SHIRT</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <h3 className='font-bold text-[24px]'>$180</h3>
            </div>
            </div>
            {/* 5 end */}

            {/* 6 col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/T-shirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>SLEEVE STRIPED T-SHIRT</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$130</h1><h2>$160</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-30%</Button></div>
            </div>
            </div>
            {/* 6 col end */}

            {/* 7 col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/stripped shirt.svg"}alt="couple"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>VERTICAL STRIPED SHIRT</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$212</h1><h2>$232</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-30%</Button></div>
            </div>
            </div>
            {/* 8 col end */}

            {/* 2nd col */}
            <div className='flex flex-col gap-[20px] '> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/GraphicShirt.svg"}alt="jeans"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>COURAGE GRAPHIC T-SHIRT</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.0/5</h2>
                <h3 className='font-bold text-[24px]'>$145</h3>
                
            </div>
            </div>
            {/* 8 col end */}

            {/* 9 col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/looseFit.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>LOOSE FIT BERMUDA SHORTS</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>3.0/5</h2>
                <h3 className='font-bold text-[24px]'>$80</h3>
            </div>
            </div>
            {/* 9 col end */}

            </div>
       </div>
            {/* right end */}

            

        </div>
        {/* 2nd */}
        <div className='flex justify-between w-[920px] h-[20px] ml-[350px] mobile:ml-[20px] mobile:w-[300px]'>
            <h1 className='flex'><Image src={"/images/arrow-left.svg"}alt="star"width={20} height={20}/>Previous</h1>
            <h2 className='flex'>Next<Image src={"/images/arrow-right.svg"}alt="star"width={20} height={20}/></h2>
        </div>

        






















      
        </div>
        {/* main work */}




















































      <Footer/>
    </div>
  )
}

export default page
