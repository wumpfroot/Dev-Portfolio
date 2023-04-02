import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<section className="bg-slate-900 flex justify-between items-center sticky top-0">
			<h1 className="text-2xl">Markus Kojo</h1>
			<div className="flex items-center gap-2">
				<button>
					<a href="./files/CV2022.pdf">Resume</a>
				</button>
				<RxHamburgerMenu
					onClick={() => setMobileNav((bool) => !bool)}
					size={30}
					style={{ cursor: "pointer" }}
				/>
			</div>
			<nav
				className={
					!mobileNav ? "hidden" : "absolute bg-slate-300 right-0 top-8"
				}
			>
				<ul>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</nav>
		</section>
	);
};
export default Navbar;
