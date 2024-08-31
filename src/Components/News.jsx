import { useEffect, useState } from 'react'
import Card from './Card'

export default function News() {
    const [news, setNews] = useState();
    const [search, setSearch] = useState("india");
    const [query, setQuery] = useState("india");
    const [lang, setLang] = useState("hi");

    const getData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&language=${lang}&apiKey=c66887260083453088f62057966b20eb`)
            const pureData = await response.json();
            // console.log(pureData.articles)
            if (pureData.articles) {
                setNews(pureData.articles)
            }
        } catch (error) {
            console.log("Error here Rohit : ", error)
        }
    }

    useEffect(() => {
        getData();
    }, [search, lang])

    const changeSearch = (e) => {
        setQuery(e.target.value)
    }

    const changeLang = () => {
        if (lang == "hi") setLang("en");
        if (lang == "en") setLang("hi");
    }

    const searchNow = (e) => {
        if (e.target.value) {
            setSearch(e.target.value)
        }
        else {
            setSearch(query)
        }
    }

    return (
        <>
            <div className='bg-blue-600  m-1 p-1 rounded-md '>
                <nav className='flex w-full justify-around'>
                    <div className='bg-white px-2 rounded-md font-bold'>
                        <p>Daily News Portal</p>
                    </div>
                    <div className='w-[420px] flex justify-between'>
                        <input className='w-[230px] rounded-md text-xs 
                        px-4 focus:outline-none' type='text' placeholder='Search News' onChange={changeSearch} />
                        <button className='bg-black text-white px-4 rounded-md text-sm hover:text-black hover:bg-white' onClick={searchNow}>Search</button>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle text-xs" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hi/En
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-center cursor-pointer" onClick={changeLang}>Hindi</a></li>
                                <li><a className="dropdown-item text-center cursor-pointer" onClick={changeLang}>English</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='bg-white m-auto  mt-4 p-2 text-sm w-2/3 rounded-md '>
                <ul className='w-full flex justify-around'>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="all">All</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="trend">Trend</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="books">Books</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="sports">Sports</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="politics">Politics</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="entertainement">Entertainment</button>
                    <button className='hover:bg-red-600 hover:text-white w-[100px] p-1 rounded-md'
                        onClick={searchNow} value="movies">Movies</button>
                </ul>
            </div>

            <Card news={news} />
        </>
    )
}
