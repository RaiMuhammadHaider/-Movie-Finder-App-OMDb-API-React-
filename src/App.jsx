import { useEffect, useState } from 'react'

import './App.css'
// import SearchIcon from './search.svg'
// import searchIcon from './search.svg'
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
// import SearchIcon from "./search.svg";
// 10220d14
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=10220d14';
const movie1 = {
  "Title": "Spider-Man",
  "Year": "2002",
  "imdbID": "tt0145487",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
}
function App() {
  const [movies, setMovie] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    // console.log(response);
    const data = await response.json()
    console.log(data.Search || []);

    setMovie(data.Search)

  }
  useEffect(() => {
    searchMovie('spider man')
  }, [])
  return (
    <>
      <div className="app">
        <h1>React Js Move App</h1>
        <div className="search">
          <input
            placeholder='Search for movie'
            value={searchItem}
            onChange={(e) => { setSearchItem(e.target.value) }}
            type="search" />
          <img src={SearchIcon}
            // onChange={() => { searchMovie(searchItem) }}
             onClick={() => searchMovie(searchItem)}
            alt="Search" />

        </div>
        {
          movies?.length > 0
            ?
            (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            ) :
            (
              <div className="empty">
                <h2> No Movie found </h2>
              </div>
            )


        }
        {/* <div className="container">
          <MovieCard movie1={movies} />
        </div> */}
      </div>
    </>
  )
}

export default App
