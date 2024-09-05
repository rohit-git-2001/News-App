import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function News() {
  const [news, setNews] = useState();
  const [search, setSearch] = useState("india");
  const [query, setQuery] = useState("india");
  const [lang, setLang] = useState("hi");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&language=${lang}&apiKey=c66887260083453088f62057966b20eb`,
        {
          headers: {
            Upgrade: "HTTP/2.0",
          },
        }
      );
      // console.log(response.data.articles)
      // const pureData = response;
      // console.log(pureData.articles)
      if (response.data.articles) {
        setNews(response.data.articles);
      }

      // const response = await axios.get(`https://newsapi.org/v2/everything`, {
      //   params: {
      //     q: search,
      //     language: lang,
      //     apiKey: "c66887260083453088f62057966b20eb",
      //   },
      // });
      // if (response.data.articles) {
      //   setNews(response.data.articles);
      // }
    } catch (error) {
      console.log("Error here Rohit : ", error);
    }
  };

  useEffect(() => {
    getData();
  });

  const changeSearch = (e) => {
    setQuery(e.target.value);
  };

  const changeLang = () => {
    if (lang == "hi") {
      setLang("en");
    } else {
      setLang("hi");
    }
  };

  const searchNow = (e) => {
    if (e.target.value) {
      setSearch(e.target.value);
    } else {
      setSearch(query);
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full z-1 bg-black p-3">
        <div id="header" className="bg-blue-600  m-1 p-1 rounded-md ">
          <nav id="nav" className="flex w-full justify-around">
            <div className="bg-white px-2 rounded-md font-bold">
              <p>Daily News Portal</p>
            </div>
            <div id="searchLine" className="w-[420px] flex justify-between">
              <input
                className="w-[230px] rounded-md text-xs 
                        px-4 focus:outline-none"
                type="text"
                placeholder="Search News"
                onChange={changeSearch}
              />
              <button
                className="bg-black text-white px-4 rounded-md text-sm hover:text-black hover:bg-white"
                onClick={searchNow}
              >
                Search
              </button>
              <div className="dropdown">
                <button
                  className="btn bg-white dropdown-toggle text-xs"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hi/En
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item text-center cursor-pointer"
                      onClick={changeLang}
                    >
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-center cursor-pointer"
                      onClick={changeLang}
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          id="options"
          className="bg-white m-auto  mt-4 p-2 text-sm w-2/3 rounded-md "
        >
          <ul className="w-full flex justify-around">
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="all"
            >
              All
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="trend"
            >
              Trend
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="books"
            >
              Books
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="sports"
            >
              Sports
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="politics"
            >
              Politics
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="entertainement"
            >
              Entertainment
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="movies"
            >
              Movies
            </button>
            <button
              className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
              onClick={searchNow}
              value="space"
            >
              Space
            </button>
          </ul>
        </div>
      </div>
      <Card news={news} />
    </>
  );
}

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./Card";

// export default function News() {
//   const [news, setNews] = useState([]);
//   const [search, setSearch] = useState("india");
//   const [query, setQuery] = useState("india");
//   const [lang, setLang] = useState("hi");

//   const getData = async () => {
//     try {
//       const response = await axios.get(`https://newsapi.org/v2/everything`, {
//         params: {
//           q: search,
//           language: lang,
//           apiKey: "c66887260083453088f62057966b20eb",
//         },
//         headers: {
//           'Accept': 'application/json', // Ensure proper API headers
//           'Content-Type': 'application/json',
//         },
//       });
//       if (response.data.articles) {
//         setNews(response.data.articles);
//       }
//     } catch (error) {
//       console.log("Error fetching data: ", error.response ? error.response.data : error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [search, lang]);

//   const changeSearch = (e) => {
//     setQuery(e.target.value);
//   };

//   const changeLang = (newLang) => {
//     setLang(newLang);
//   };

//   const searchNow = () => {
//     if (query) {
//       setSearch(query);
//     }
//   };

//   return (
//     <>
//       <div id="header" className="bg-blue-600 m-1 p-1 rounded-md">
//         <nav id="nav" className="flex w-full justify-around">
//           <div className="bg-white px-2 rounded-md font-bold">
//             <p>Daily News Portal</p>
//           </div>
//           <div id="searchLine" className="w-[420px] flex justify-between">
//             <input
//               className="w-[230px] rounded-md text-xs px-4 focus:outline-none"
//               type="text"
//               placeholder="Search News"
//               value={query}
//               onChange={changeSearch}
//             />
//             <button
//               className="bg-black text-white px-4 rounded-md text-sm hover:text-black hover:bg-white"
//               onClick={searchNow}
//             >
//               Search
//             </button>
//             <div className="dropdown">
//               <button
//                 className="btn bg-white dropdown-toggle text-xs"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {lang === "hi" ? "Hindi" : "English"}
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a
//                     className="dropdown-item text-center cursor-pointer"
//                     onClick={() => changeLang("hi")}
//                   >
//                     Hindi
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item text-center cursor-pointer"
//                     onClick={() => changeLang("en")}
//                   >
//                     English
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <div
//         id="options"
//         className="bg-white m-auto mt-4 p-2 text-sm w-2/3 rounded-md"
//       >
//         <ul className="w-full flex justify-around">
//           {["all", "trend", "books", "sports", "politics", "entertainment", "movies", "space"].map((category) => (
//             <button
//               key={category}
//               className="hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md"
//               onClick={() => setSearch(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </ul>
//       </div>

//       <Card news={news} />
//     </>
//   );
// }
