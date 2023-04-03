import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<section className="bg-[#1c1b22] flex justify-between items-center sticky top-0 p-4">
			<h1 className="text-2xl">Markus Kojo</h1>
			<div className="hidden md:block">
				<nav>
					<ul className="flex gap-10 text-xl">
						<li>
							<a className="hover:text-cyan-400" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="duration-200 hover:text-cyan-400" href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a className="duration-200 hover:text-cyan-400" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="duration-200 hover:text-cyan-400" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="flex items-center gap-2 md:hidden">
				<button>
					<a href="./files/CV2022.pdf">Resume</a>
				</button>
				{!mobileNav ? (
					<RxHamburgerMenu
						onClick={() => setMobileNav(true)}
						size={30}
						style={{ cursor: "pointer" }}
					/>
				) : (
					<RxCross1
						onClick={() => setMobileNav(false)}
						size={30}
						style={{ cursor: "pointer" }}
					/>
				)}
			</div>
			<nav
				className={
					!mobileNav
						? "hidden"
						: "absolute bg-slate-300 w-72 text-center text-xl text-black top-12 right-4 p-8"
				}
			>
				<ul className="flex flex-col gap-11">
					<li>
						<a onClick={() => setMobileNav(false)} href="#about">
							About
						</a>
					</li>
					<li>
						<a onClick={() => setMobileNav(false)} href="#skills">
							Skills
						</a>
					</li>
					<li>
						<a onClick={() => setMobileNav(false)} href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a onClick={() => setMobileNav(false)} href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
};
export default Navbar;
