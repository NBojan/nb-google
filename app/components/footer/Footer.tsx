import { FooterLinks, Location } from "../index";

const Footer = () => {
    return (  
        <footer className="bg-[#f2f2f2] text-gray-500 text-sm">
            <Location />
            <hr className="border-gray-200"/>
            <FooterLinks />
        </footer>
    );
}
 
export default Footer;