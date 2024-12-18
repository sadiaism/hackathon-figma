import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        {/* section 1 */}
        <section id="Shop">
       <div className=" w-[1440px] h-[663px] bg-[url('/images/couple.svg')] mt-[45px] mobile:hidden">
        {/* text div */}
        <div className='flex flex-col'>
            <h1 className='w-[500px] h-[93px] font-extrabold ml-[100px] mt-[138px] text-[45px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <h2 className='w-[550px] h-[50px] mt-[110px] ml-[100px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h2>
            <Button variant={'apnaStyle'} className='w-[200px] h-[52px] bg-[#000000] text-[#FFFFFF] rounded-full ml-[100px] mt-[20px]'>Shop Now</Button>
        </div>
    </div>
    {/* section 1  mobile*/}
    <div className='flex flex-col w-[390px] mt-[45px] bg-[#F2F0F1] lg:hidden '>
        {/* text div */}
        <h1 className='w-[315px] h-[93px] mt-[138px] ml-[16px] font-extrabold text-[36px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <h2 className='w-[358px] h-[50px] ml-[16px] mt-[100px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h2>
        <Button variant={'apnaStyle'} className='w-[358px] h-[52px] bg-[#000000] text-[#FFFFFF] rounded-full ml-[16px] mt-[50px]'>Shop Now</Button>

        <div className='flex w-[278px] h-[52px] mt-[50px] ml-[56px] gap-[32px]'>
            <div className='flex flex-col w-[106px] h-[48px]'><h1>200+</h1><h2></h2>International Brands</div>
            <div className='flex flex-col w-[117px] h-[48px]'><h1>2.00+</h1><h2></h2>High Quality Products</div>
        </div>

        <div className='flex flex-col w-[103px] h-[48px] ml-[144px] mt-[50px]'><h1>30.000+</h1><h2>Happy Customers</h2></div>
        {/* img div */}
       <div className='w-[390px] h-[448px] mt-[32px]'>
        <Image src={"/images/mobilecouple.svg"}alt="couple"width={390} height={448}/>
       </div>
      </div>

      </section>

      {/* sec 2 */}
      <section id="Brands">
      <div className='flex w-[1440px] h-[122px] mt-[32px] bg-[#000000] mobile:flex-col mobile:w-[390px] mobile:h-screen'>
      <h1 className='mt-[50px] ml-[100px]'><Image src={"/images/Vector1.svg"}alt="couple"width={166} height={33}/></h1>

      <h1 className='mt-[50px] ml-[100px]'><Image src={"/images/vector2.svg"}alt="couple"width={91} height={38}/></h1>

      <h1 className='mt-[50px] ml-[100px]'><Image src={"/images/vector3.svg"}alt="couple"width={156} height={36}/></h1>

      <h1 className='mt-[50px] ml-[100px]'><Image src={"/images/vector4.svg"}alt="couple"width={194} height={32}/></h1>

      <h1 className='mt-[50px] ml-[100px]'><Image src={"/images/Vector5.svg"}alt="couple"width={206} height={33}/></h1>
      </div>
      </section>


      {/* section 3 */}
      <section id="New Arrivals">
      <div className='flex flex-col mt-[100px] w-[1440px]'>

        {/* text div */}
        <div className='flex justify-center text-[48px] font-extrabold mobile:flex mobile:justify-start items-start'>NEW ARRIVALS</div>

        {/* col div */}
        <div className='grid grid-cols-4 w-[1330px] ml-[100px] mobile:grid-cols-1 mobile:ml-10'>

            {/* 1st col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/shirt.svg"}alt="couple"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>T-SHIRT WITH TAPE DETAILS</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <h3 className='font-bold text-[24px]'>$120</h3>
            </div>
            </div>
            {/* 1st col end */}


            {/* 2nd col */}
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
            {/* 2nd col end */}


            {/* 3rd col */}
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
            {/* 3rd col end */}



            {/* 4th col */}
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
            {/* 4th col end */}
            </div>

        {/* button */}
        <Button variant={'apnaStyle'} className='ml-[611px] border-[1px] border-[#dfdede] w-[218px] h-[52px] rounded-full mt-[32px]  mobile:ml-20'> View All</Button>


        <div className='w-[1240px] mt-[100px] border-[1px] border-[#cac8c8] ml-[100px] mobile:w-[300px] mobile:ml-10'></div>
</div>
</section>
        
        {/* section 4 */}
        <section id="On Sale">

        <div className='flex flex-col mt-[100px] w-[1440px]'>

        {/* text div */}
        <div className='flex justify-center text-[48px] font-extrabold mobile:flex mobile:justify-start items-start'>TOP SELLING</div>

        {/* col div */}
        <div className='grid grid-cols-4 w-[1330px] ml-[100px] mobile:ml-10 mobile:grid-cols-1'>

            {/* 1st col */}
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
            {/* 1st col end */}


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
            {/* 2nd col end */}


            {/* 3rd col */}
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
            {/* 3rd col end */}



            {/* 4th col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/fadedjeans.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>FADED SKINNY JEANS</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <h3 className='font-bold text-[24px]'>$210</h3>
                
            </div>
            </div>
            {/* 4th col end */}
            </div>

        {/* button */}
        <Button variant={'apnaStyle'} className='ml-[611px] border-[1px] border-[#dfdede] w-[218px] h-[52px] rounded-full mt-[32px] mobile:ml-20 '> View All</Button>
</div>
</section>


{/* section 5 */}

<div className='w-[1239px] ml-[100px] mt-[100px] bg-[#F0F0F0] pt-1 mobile:ml-[5px] mobile:h-[1100px] mobile:w-[358px]'>
  {/* text div */}
  <div className='flex justify-center items-center  mt-[70px] font-extrabold text-[48px]'>BROWSE BY DRESS STYLE</div>
  {/* image div */}

  <div className='flex gap-[16px] mt-[44px] mobile:flex-col mobile:mt-0'> 
    <div className='ml-[64px] rounded-xl mobile:ml-6 mobile:w-[310px] mobile:h-[190px]'><Link href="./categorypage"><Image src={"/images/casual.svg"}alt="casual"width={407} height={64}/></Link></div>
  <div className='w-[684px] h-[289px] mobile:w-[310px] mobile:h-[190px] mobile:ml-6'><Image src={"/images/formal.svg"}alt="star"width={684} height={64}/></div></div>


 <div className='flex gap-[16px] mt-[16px] mobile:flex-col mobile:mt-0'>
    <div className='ml-[64px] mobile:w-[310px] mobile:h-[190px] mobile:ml-6'><Image src={"/images/party.svg"}alt="star"width={684} height={289}/></div>
    <div className='mobile:w-[310px] mobile:h-[190px] mobile:ml-6'><Image src={"/images/gym.svg"}alt="star"width={407} height={289}/></div>

 </div>
</div>





{/* section 6*/}
<div className='flex flex-col'>
    {/* head div */}
<div className='mt-[100px] ml-[100px] text-[48px] font-extrabold mobile:ml-2'>OUR HAPPY CUSTOMERS</div>

{/* text div */}
<div className='flex gap-[12px] mobile:flex-col'>
    {/* 1st div */}
    <div className='flex flex-col w-[400px] h-[240px] ml-[100px] border-[1px] border-[#9e9d9d] gap-[342px] rounded-2xl mobile:ml-2 mobile:w-[358px]'>
        <div className='flex flex-col w-[336px] h-[162px] mt-[20px] ml-[20px] gap-[16px]'>
        <Image src={"/images/Five star.svg"}alt="star"width={139} height={23}/>
        <div className='flex'>Sarah M.<Image src={"/images/green tick.svg"}alt="star"width={24} height={24}/></div>
        <div>{`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`}</div>
      </div>
      </div>


    {/* 2nd div */}
    <div className='flex flex-col w-[400px] h-[240px] border-[1px] border-[#9e9d9d] gap-[342px] rounded-2xl mobile:w-[358px] mobile:ml-2'>
    
        <div className='flex flex-col w-[336px] h-[162px] mt-[20px] ml-[20px] gap-[16px]'>
        <Image src={"/images/Five star.svg"}alt="star"width={139} height={23}/>
        <div className='flex'>Alex K.<Image src={"/images/green tick.svg"}alt="star"width={24} height={24}/></div>
        <div>{`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`}</div>
      </div>
      </div>
    {/* 3rd div */}
    <div className='flex flex-col w-[400px] h-[240px] border-[1px] border-[#9e9d9d] gap-[342px] rounded-2xl mobile:w-[358px] mobile:ml-2'>
        <div className='flex flex-col w-[336px] h-[162px] mt-[20px] ml-[20px] gap-[16px]'>
        <Image src={"/images/Five star.svg"}alt="star"width={139} height={23}/>
        <div className='flex'>James L.<Image src={"/images/green tick.svg"}alt="star"width={24} height={24}/></div>
        <div>{`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`}</div>
      </div>
      </div>
</div>
</div>





       

 
    
    
    
    </div>
  )
}

export default Home
