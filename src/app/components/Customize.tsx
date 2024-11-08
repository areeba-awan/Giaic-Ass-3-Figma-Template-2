import React from 'react'

function Cuztomize() {
  return (
	<>
	<div className='py-[140px] px-[220px] top-[921px]  text-white flex flex-row-reverse justify-center items-center gap-[60px]'>
		<div className='w-[669px] h-[411px]'>
			<div>
				<h2 className='font-bold text-[72px] text-[#212529] leading-[77.45px] tracking-[-0.02em] mb-6'>
				Customise it
				to your needs
				</h2>
				<p className='font-normal text-lg leading-[30px] text-[#212529] tracking-[-0.02em]'>
				Customise the app with plugins, custom themes and multiple text 
				editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
				</p>
				<button className="bg-[#4F9CF9;] w-[219px] h-[63px] rounded-lg p-5 mt-[60px]  hover:bg-blue-600
					transition-transform duration-200 ease-in transform hover:scale-105">
				Let’s Go -&gt;
				</button>
			</div>
		</div>

		<div className='w-[714px] h-[532.09px] bg-[#C4DEFD] transition-transform duration-200 ease-in transform hover:scale-105' ></div>
	</div>
</>
  )
}

export default Cuztomize