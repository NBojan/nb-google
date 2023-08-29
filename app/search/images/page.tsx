import axios from "axios";
import { ImageCard, NoMatch, Pagination } from "@/app/components";
import { googleUrl, googleKey, engine } from "@/utils/useful";

const getData = async (searchTerm: string, start: string | undefined) => {
  const response = await axios(
    `${googleUrl}key=${googleKey}&cx=${engine}&q=${searchTerm}&searchType=image&start=${
      start || 1
    }`
  ).catch((err) => {
    console.log(err);
    throw new Error(err.message);
  });

  return response.data;
};

const ImageSearch = async ({
  searchParams: { searchTerm, start },
}: {
  searchParams: { searchTerm: string; start?: string };
}) => {
  const data = await getData(searchTerm, start);

  return (
    <section className="search-page px-5">
      <div className="py-4">
        
      {data.items ? (
          <>
            <div className="card-container flex flex-wrap justify-between">
              {data.items.map((item: any, index: number) => (
                <ImageCard item={item} key={index} />
              ))}
            </div>
            <Pagination searchTerm={searchTerm} start={start} />
          </>
        ) : (
          <NoMatch searchTerm={searchTerm} />
        )}
      </div>
    </section>
  );
};

export default ImageSearch;
