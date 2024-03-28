import { useState } from "react";

import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const NavMobile = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<>
			<div className="flex items-center gap-2 md:hidden">
				<a className="text-cyan-400" href="./files/CV2023.pdf" download>
					Resume
				</a>
				{!mobileNav ? <RxHamburgerMenu onClick={() => setMobileNav(true)} size={35} /> : <RxCross1 onClick={() => setMobileNav(false)} size={35} />}
			</div>
			<motion.nav animate={{ display: mobileNav ? "block" : "none" }} className="absolute bg-slate-300 w-72 text-center text-xl text-black top-14 right-4 p-8 rounded">
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
				<div className="flex items-center justify-between mt-10 text-4xl">
					<a onClick={() => setMobileNav(false)} href="https://www.linkedin.com/in/markus-kojo/" title="LinkedIn">
						<AiOutlineLinkedin />
					</a>
					<a onClick={() => setMobileNav(false)} href="https://github.com/wumpfroot" title="Github">
						<AiOutlineGithub />
					</a>
					<a onClick={() => setMobileNav(false)} href="mailto:itswumpa@gmail.com" title="email">
						<AiOutlineMail />
					</a>
				</div>
			</motion.nav>
		</>
	);
};
export default NavMobile;
