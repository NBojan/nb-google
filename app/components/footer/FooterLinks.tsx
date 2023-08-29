import { footerOne, footerTwo } from "@/utils/footerLinks";
import Link from "next/link";

const FooterLinks = () => {
    return (  
        <div className="py-3 px-6 flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6 mb-4 sm:mb-0">
                {footerOne.map((link, index) => <Link href={link.url} key={index} className="block hover:underline">{link.text}</Link>)}
            </div>

            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
                {footerTwo.map((link, index) => <Link href={link.url} key={index} className="block hover:underline">{link.text}</Link>)}
            </div>
        </div>
    );
}
 
export default FooterLinks;