import { useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import './app.scss';
import ResMainComp from "./components/results/resMainComp/ResMainComp";
import api from './_config/config';
import axios from "axios";
import PageSection from "./components/pageSection/PageSection";

function App() {

  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState("1");

  const setNominate = (imdbID) =>  {
    const nominee = nominations.filter((m) => m.imdbID === imdbID);

    if(nominee.length === 0) {
      if(nominations.length > 4) {
        alert("You are restricted to nominate 5 movies only");
      } else {
        AddNomation(imdbID);
      }
    } else{
      removeNomination(imdbID);
    }
  }
  
  const AddNomation = (imdbID) => {
    movies.filter((movie) => movie.imdbID === imdbID).map(data => {
        setNominations([...nominations, data]);
    });
  }

  const removeNomination = (imdbID) => {
    const newNominations = nominations.filter((movie) => movie.imdbID !== imdbID);
    setNominations(newNominations);
  }

  const searchMovies =async (params, pageNo) => {
    
    if(params !== "" && params.length > 2) {
      setSearchText(params);
      
      let page = currentPage;
      if(pageNo !== "" || pageNo !== null || pageNo !== undefined) {
        page=pageNo;
        
        setCurrentPage(pageNo);
      }
      const url = `${api + params}&page=${page}`;

      await axios.get(url).then((response) => {
        setTotalPages(Math.floor(parseInt(response.data.totalResults)/10));
        
        if(response.data.Response === "True") {
          const movies = [];
          response.data.Search.forEach((movie) => movies.push(movie));
          setMovies(movies);
        }
      });

      
    } else setSearchText("");
  }
  

  return (
    <div className="App">
      <SearchBar searchMovies={searchMovies}/>
      <ResMainComp setNominate={setNominate} searchText={searchText} movies={movies} nominations={nominations} totalPages={totalPages} searchMovies={searchMovies}/>
    </div>
  );
}

export default App;
