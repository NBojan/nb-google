import axios from "axios";
import { googleKey, googleUrl, engine } from "@/utils/useful";
import { WebCard, Pagination, NoMatch } from "@/app/components";

const getData = async (searchTerm: string, start: string | undefined) => {
  const response = await axios(
    `${googleUrl}key=${googleKey}&cx=${engine}&q=${searchTerm}&start=${
      start || 1
    }`
  ).catch((err) => {
    console.log(err);
    throw new Error(err.message);
  });

  return response.data;
};

const WebSearch = async ({
  searchParams: { searchTerm, start },
}: {
  searchParams: {
    searchTerm: string;
    start?: string;
  };
}) => {
  const data = await getData(searchTerm, start);

  return (
    <section className="search-page px-5">
      <div className="py-4  md:pl-[9rem]">
        <p className="text-gray-600 text-sm mb-5">
          About {data.searchInformation.formattedTotalResults} results (
          {data.searchInformation.formattedSearchTime} seconds)
        </p>

        {data.items ? (
          <>
            <div className="card-container">
              {data.items.map((item: any, index: number) => (
                <WebCard item={item} key={index} />
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

export default WebSearch;
