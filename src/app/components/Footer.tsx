import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-[#043873]  text-white py-8 ">
      <div className="container mx-auto  h-[289px] pt-[100px] px-[220px]">
        <div className="flex justify-between items-center ">
          
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          <div>
          <div className="flex space-x-4">
            <Image src="/Logo.png" alt="Logo" width={191} height={34} />
          </div>
            <ul className='w-[240px] h-[120px] mt-[15px]'>
              <li className=" text-lg">whitepace was created for the new ways we live and work. We make a better workspace around the world</li>
            </ul>
          </div>


          <div  className='w-[295px] h-[127px] gap-[15px] ml-[100px]'>
            <h3 className="font-bold">Product</h3>
            <ul className='mt-[15px] font-normal text-base leading-5 tracking-[-0.02em] h-[127px]'>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Overveiw</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Pricing</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Cuztomer stories</a></li>
            </ul>
          </div>


          <div  className='w-[295px] h-[127px] gap-[15px] ml-[100px]'>
            <h3 className="font-bold">Resources</h3>
            <ul className='mt-[15px] font-normal text-base leading-5 tracking-[-0.02em] h-[127px]'>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Docs</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Blog</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Contact</a></li>
            </ul>
          </div>

          <div  className='w-[295px] h-[127px] gap-[15px] ml-[100px]'>
            <h3 className="font-bold">Campany</h3>
            <ul className='mt-[15px] font-normal text-base leading-5 tracking-[-0.02em] h-[127px]'>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Abouot us</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Career</a></li>
              <li className='mt-[15px]'><a href="#" className="hover:underline mt-[15px]">Media kit</a></li>
            </ul>
          </div>

          
        </div>
      </div>

      <div className="flex flex-col items-center w-full py-4 mt-[100px] pb-[32px]">
    <hr className="w-3/4 border-t-2 border-[#305177] my-4" />
    <p className="font-normal text-lg">©2021 Whitepace LLC.</p>
</div>

    </footer>


  )
}

export default Footer