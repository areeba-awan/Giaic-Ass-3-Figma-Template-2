import React from 'react'

const Project = () => {
  return (
    <>
			<div className='py-[140px] px-[220px] top-[921px]  text-white flex items-center'>
				<div className='w-[672px] h-[411px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[72px] text-[#212529] leading-[77.45px] tracking-[-0.02em] mb-6'>
                            Project Management
						</h2>
						<p className='font-normal text-lg leading-[30px] text-[#212529] tracking-[-0.02em]'>
                        Images, videos, PDFs and audio files are supported. Create math expressions and 
                        diagrams directly from the app. Take photos with the mobile app and save them to a note.
						</p>
                        <button className="bg-[#4F9CF9;] w-[219px] h-[63px] rounded-lg p-5 mt-[60px]  hover:bg-blue-600
                        transition-transform duration-200 ease-in transform hover:scale-105">
                            Get Started -&gt;
                        </button>
					</div>
				</div>

				<div className='w-[748px] h-[547px] bg-[#C4DEFD] transition-transform duration-200 ease-in transform hover:scale-105'></div>
			</div>
		</>
  )
}

export default Project