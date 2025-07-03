import { useEffect, useState } from 'react'

import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';
// 10220d14
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=10220d14';
function App() {
  const [movies, setMovies] = useState([])
  const [SearchItem, SetSearchItem] = useState('')
  const SerachMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    // console.log( data.Search || []);

    // console.log(data.Search);
  }

  useEffect(
    ()=>{SerachMovie('Spider man')}
    ,[]
  )

  return (
    <>
      <div className="app">
        <h1>Search any Movie on Internet</h1>
        <div className="search">
          <input type="search"
            placeholder='Search Movie...'
            value={SearchItem}
            // onChange={(e) => { setSearchItem(e.target.value )}}
                        onChange={(e) => { SetSearchItem(e.target.value) }}

          />
          <img src={SearchIcon} alt="Seach"
            onClick={() => { SerachMovie(SearchItem) }}
                        // onClick={() => searchMovie(searchItem)}

          />
        </div>
        {movies?.length > 0?
        // console.log(movies.length)
        
          (
            <div className="container">
              {movies.map((movie) => (<MovieCard key={movie.imdbID} movie={movie} />))}
            </div>
          ) :
        (
        <div className="empty">
          <h1>No movie Found</h1>
        </div>
        )


      }


    </div>

    </>

  )
}

export default App
/*
 const [movies, setMovie] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log( data.Search || []);

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
            onChange={(e) => { setSearchItem(e.target.value) }}
            value={searchItem}
            type="search" />
          <img src={SearchIcon}
            // onChange={() => { searchMovie(searchItem) }}
            onClick={() => searchMovie(searchItem)}
            alt="Search" />

        </div>
        {
          movies?.length > 0? // movies?.length > 0? menas movies ? is not undefine or null if true then its length

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
        </div> */
// </div>
// */
