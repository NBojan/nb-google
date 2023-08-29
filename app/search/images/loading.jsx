const customLoading = () => {
    return (
      <section className="search-page px-5">
        <div className="py-4">
          <div className="card-container flex flex-wrap justify-between">
            {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).map((item) => (
              <div
                className="image-card mb-8 basis-full sm:basis-[48.5%] lg:basis-[31.5%] xl:basis-[23.5%] 2xl:basis-[18.5%]"
                key={item}
              >
                <div className="w-full h-[240px] mb-3 bg-gray-300"></div>
                <h6 className="w-full h-2 mb-2 bg-gray-300"></h6>
                <p className="w-full h-2 bg-gray-300"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
 
export default customLoading;