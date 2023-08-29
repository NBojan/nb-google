import { SearchHeader } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NB Google - Search",
};
const Layout = ({children}: {children: React.ReactNode}) => {
    return (  
        <>
            <SearchHeader />
            {children}
        </>
    );
}
 
export default Layout;