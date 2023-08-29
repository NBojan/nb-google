import Link from "next/link";

const ImageCard = ({item}:any) => {
    return (  
        <div className="mb-8 basis-full sm:basis-[48.5%] lg:basis-[31.5%] xl:basis-[23.5%] 2xl:basis-[18.5%]">
            <Link href={item.link} className="flex mb-1 hover:shadow-lg" target="_blank">
                <img src={item.link} alt={item.title} className="w-full h-[240px] object-contain" />
            </Link>

            <Link href={item.image.contextLink} className="block group" target="_blank">
                <h6 className="line-clamp-1 text-xl group-hover:underline">{item.snippet}</h6>
                <p className="line-clamp-1 text-gray-600 group-hover:underline">{item.displayLink}</p>
            </Link>
        </div>
    );
}
 
export default ImageCard;