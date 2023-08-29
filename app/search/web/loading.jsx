const customLoading = () => {
  return (
    <section className="search-page px-5">
      <div className="py-4 md:pl-[9rem]">
        <p className="mb-5 bg-gray-300 h-1.5 rounded-full w-full max-w-sm"></p>

        <div className="card-container">
          {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((item) => (
            <div className="web-card mb-8 max-w-[600px]" key={item}>
              <p className="h-1.5 mb-2 rounded-full w-full max-w-md bg-gray-300"></p>
              <h6 className="h-2 mb-2 rounded-full w-full max-w-lg bg-gray-300"></h6>
              <p className="h-1.5 mb-2 rounded-full w-full max-w-[600px] bg-gray-300"></p>
              <p className="h-1.5 rounded-full w-full max-w-[600px] bg-gray-300"></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default customLoading;
