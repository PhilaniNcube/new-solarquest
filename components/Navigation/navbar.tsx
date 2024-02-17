import DesktopNavigation from "./desktop-navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/installation", label: "Installation" },
  { href: "/waterheating", label: "Water Heating" },
  { href: "/poolpumps", label: "Pool Pumps" },
  // { href: "/solar-potential", label: "Solar Potential" },
  // { href: "/faq", label: "FAQs" },
  // { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const Navbar = () => {
  return <header>
    <DesktopNavigation links={links} />
  </header>;
};
export default Navbar;
