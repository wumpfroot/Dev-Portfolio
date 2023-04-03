const NavDesktop = () => {
	return (
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
	);
};
export default NavDesktop;
