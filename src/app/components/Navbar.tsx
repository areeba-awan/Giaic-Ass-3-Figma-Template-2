import Image from "next/image";
// import logo from "";
//  import logo from "/Logo.png"


const Navbar = () => {
	return (
		<>
			<div className='w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center'>
				<div className='w-[191px] h-[34px]'>
					<Image src="/Logo.png" alt='Logo' width={192} height={34}/>
				</div>
				<div className='w-[737.5px] h-[60px] flex justify-between items-center'>
					<div className='w-[549px] h-[23px] '>
						<ul className='flex flex-row justify-between text-white'>
							<li><a href="" className="hover:text-green-500">Products</a></li>
							<li><a href="" className="hover:text-green-500">Solutions</a></li>
							<li><a href="" className="hover:text-green-500">Resources</a></li>
							<li><a href="" className="hover:text-green-500">Pricing</a></li>
						</ul>
					</div>
					<div className='w-[126px] h-[60px]'>
						<button className='px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-red-400 ml-[60px]'>
							Login
						</button>
					</div>	
				</div> <p className="text-[#043873]">x</p>
			</div>
		</>
	);
};

export default Navbar;