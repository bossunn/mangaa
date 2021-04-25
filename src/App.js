import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Mangas } from "./Components/Mangas";
import { Pagination } from "./Components/Pagination";
import productApi from './api/productApi';

function App() {
  const [mangas, setMangas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mangaPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');


  // const url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
  // fetch(url)
  // .then(res => res.json())
  // .then(data => setMangas(data.top));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const result = await axios(url);

  //     setMangas(result.data.top);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() =>{
    const fetchProduct = async () => {
      try{
        setLoading(true);
      const result = await productApi.getAll();
      console.log(result);
      setMangas(result.top);
      //do xét bên apiClient là respone.data
      setLoading(false);
      }
      catch(err){
console.error(err)
      }
    }
    fetchProduct();
  },[])

  console.log(mangas);

  const changeValue = (event) => {
    setQuery(event.target.value);
  }

  //Get curren post
  const indexOfLastManga = currentPage * mangaPerPage;
  const indexOfFirstManga = indexOfLastManga - mangaPerPage;
  const currentManga = mangas.slice(indexOfFirstManga, indexOfLastManga);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const filter = (manga) => {
    if(query !== "" && manga.title.indexOf(query) === -1) {
      return null;
    }
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="top-bar">
          <div className="top-bar-left">
            <div className="logo">
              <img
                src="http://truyenhaymoingay.com/wp-content/uploads/2017/10/manga-logo.png"
                alt=""
                class="logo-img"
              />
            </div>
            <div className="search">
              <input
                type="text"
                class="header-search-input"
                placeholder="Nhập anime của bạn"
                value={query}
                onChange={changeValue}
              />
              {/* <i class="header-search-icon fas fa-search"></i> */}
              <FaSearch className="search-icon"></FaSearch>
            </div>
          </div>
          <div className="top-bar-right">
            <ul className="top-bar-right_user">
              <li>
                Lịch sử 
              </li>
              <li>
                Theo dõi 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid">
          <div className="grid-row">
            <Mangas mangas={currentManga} loading={loading} filter={filter}></Mangas>
            <div className="grid-column-2"></div>
            <div className="grid-column-10">
            <Pagination mangaPerPage={mangaPerPage} totalMangas={mangas.length} paginate={paginate}></Pagination>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
