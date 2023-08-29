import "../app/globals.css";
import Image from "next/image";
import notFound from "../public/notFound.svg";

const custom404 = () => {
    return (
      <section className="px-5">
        <article className="flex flex-col sm:flex-row justify-center items-center max-w-[800px] min-h-screen mx-auto">
          <div className="mb-4 sm:mb-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
              width={150}
              height={60}
              alt="Google"
              className="mb-5"
            />
            <p className="mb-5">
              <span className="font-bold">404.</span>{" "}
              <span className="text-gray-600">That's an error.</span>
            </p>

            <p>
              <span>
                The requested URL was not found on this server
              </span>{" "}
              <span className="text-gray-600">That’s all we know.</span>
            </p>
          </div>

          <div>
            <img src={notFound.src} alt="Not Found" className="w-[200px] sm:w-full sm:max-w-[420px]" />
          </div>
        </article>
      </section>
    );
}
 
export default custom404;