import { useState } from "react";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavMobile = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<>
			<div className="flex items-center gap-2 md:hidden">
				<button>
					<a href="./files/CV2023.pdf" download>
						Resume
					</a>
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
		</>
	);
};
export default NavMobile;
