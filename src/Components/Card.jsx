export default function Card({ news }) {
  return (
    <div id="cardHolder" className="m-auto w-4/5 flex flex-wrap justify-center items-center ">
      {news?.map((curItem, index) => {
        if (!curItem.urlToImage || !curItem.author) {
          return null;
        } else {
          return (
            <div
              id="card"
              className="w-[280px] m-5  bg-white p-3 rounded-md"
              key={index}
            >
              <div>
                <img className="rounded-md" src={curItem.urlToImage} />
                <p className="text-blue-500 mt-2 underline underline-offset-8">
                  {curItem.author}
                </p>
                <h2
                  className="font-bold cursor-pointer hover:text-blue-700 mt-2 mb-2"
                  target="_blank"
                  onClick={() => window.open(curItem.url)}
                >
                  {curItem.title}
                </h2>
                <p>{curItem.description.substring(0,100)}...</p>
                <button
                  id="read"
                  target="_blank"
                  onClick={() => window.open(curItem.url)}
                  className="bg-orange-400 border-2 hover:border-orange-500
                                    w-[100px] p-1 rounded-md hover:bg-white hover:text-orange-400 
                                    hover:font-bold"
                >
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
