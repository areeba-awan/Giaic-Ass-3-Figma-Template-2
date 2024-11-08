import React from 'react'
import Image from 'next/image'

function Sponsers() {
  return (
    <>
        <section className='gap-[100px] px-[220px] py-[140px]'>
            <div className="w-[1482px] h-[87px] flex justify-center text-center">
                <h2 className='text-[72px] font-bold'>Our Sponsors</h2>
            </div>

            <div>
            <Image src={"/sponsors.png"} 
                            alt='Our Sponsors'  
                            width={1482}
                            height={71}
                            className='mt-[100px]'
            />
            </div>
        </section>
    </>
  )
}

export default Sponsers