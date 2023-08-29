import Link from "next/link";
import parse from "html-react-parser";

const WebCard = ({item}:any) => {
    return (  
        <div className="mb-8 max-w-[600px]">
            <Link href={item.link} className="block group">
                <p className="text-sm line-clamp-1">{item.formattedUrl}</p>
                <h6 className="line-clamp-1 text-blue-800 decoration-blue-800 group-hover:underline text-xl">{item.title}</h6>
            </Link>

            <p className="line-clamp-3 text-gray-600">{parse(item.htmlSnippet)}</p>
        </div>
    );
}
 
export default WebCard;