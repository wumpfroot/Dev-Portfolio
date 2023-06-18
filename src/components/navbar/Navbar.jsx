import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = () => {
	return (
		<section className="bg-neutral-950 flex justify-between items-center sticky top-0 p-4 z-10">
			<h1 className="text-2xl">
				<a href="#hero">Markus Kojo</a>
			</h1>
			<NavDesktop />
			<NavMobile />
		</section>
	);
};
export default Navbar;
