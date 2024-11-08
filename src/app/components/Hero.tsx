// Hero page which contain all the main content of a website

import React from "react";

const Hero = () => {
	return (
		<>
			<div className='py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[361px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Get More Done with whitepace
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Project management software that enables your teams to
							collaborate, plan, analyze and manage everyday tasks
						</p>
					</div>
				</div>
				<div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>
			</div>
		</>
	);
};

export default Hero;