import Image from "next/image";
import { HomeForm } from "../index";

const HomeSearch = () => {
    return (  
        <section className="page flex items-center px-6">
            <div className="w-full flex flex-col items-center">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" width={300} height={100} alt="Google" className="mb-5" />
                <HomeForm />
            </div>
        </section>
    );
}
 
export default HomeSearch;