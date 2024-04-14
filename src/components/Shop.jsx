// eslint-disable-next-line react/prop-types
export default function Shop({ children }) {
  return (
    <>
      <article>
        <div className="container mx-auto flex px-5 items-center justify-center flex-col p-4 max-w-5xl m-4 ">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="font-mono uppercase title-font sm:text-3xl lg:text-5xl text-3xl mb-4 font-bold text-gray-900 ">
              Explore your own style!
            </h1>
            <p className=" mb-4 leading-relaxed ">
              Our extensive collection features top brands and exclusive
              designs, curated to suit every taste and occasion. From
              casualstreetwear to athletic performance.
            </p>

            <div className="lex justify-center">
              <button
                className="text-white
               bg-gray-800
               hover:bg-gray-900 
               dark:bg-gray-800
               dark:hover:bg-gray-700
               dark:focus:ring-gray-700
               dark:border-gray-700
               focus:outline-none focus:ring-4
               focus:ring-gray-300 font-medium 
               rounded-lg text-sm                     
               px-3 py-2.5"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </article>
      <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        <h2
          className="font-mono 
                     text-dark-600 
                     text-4xl"
        >
          New Arrivals..
        </h2>
        <ul>{children}</ul>
      </section>
    </>
  );
}
