import { HomeHeader, HomeSearch } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NB Google - Home",
};

const Home = () => {
  return (  
    <>
      <HomeHeader />
      <HomeSearch />
    </>
  );
}
 
export default Home;