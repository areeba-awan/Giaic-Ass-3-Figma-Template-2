import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <>
			<div className='py-[140px] px-[220px] top-[921px]  text-white flex flex-row-reverse justify-center items-center gap-[100px]'>
				<div className='w-[672px] h-[411px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[72px] text-[#212529] leading-[77.45px] tracking-[-0.02em] mb-6'>
                            Work together
						</h2>
						<p className='font-normal text-lg leading-[30px] text-[#212529] tracking-[-0.02em]'>
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                        </p>
                        <button className="bg-[#4F9CF9;] w-[219px] h-[63px] rounded-lg p-5 mt-[60px]  hover:bg-blue-600 
                            transition-transform duration-200 ease-in transform hover:scale-105
                        ">
                        Try it now -&gt;
                        </button>
					</div>
				</div>

				<div className='w-[710px] h-[661px] mt-[100px] '>
                    <Image src={"/Work Together Image.png"} 
                            alt='Work Together'  
                            width={710}
                            height={661}

                            />
                </div>
			</div>
		</>
  )
}

export default Project