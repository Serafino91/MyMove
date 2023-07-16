import './App.css';
import {useState,useEffect} from "react";
import MovieList from "./components/MovieList";
import {Navbar} from "./components/Navbar";

const APIKEY = '1968c3b';
const APIURL = 'https://www.omdbapi.com';

async function fetchMovie(search = 'The godfather'){
 const response = await fetch(APIURL+'?apikey='+APIKEY+'&s='+search).then(res => res.json())
  const {Search: movies,totalResults: totalCount} = response;
 return {movies,totalCount}
}
function App() {
  const [movies, setMovies] = useState([]);
  const [totalcount, setTotalCount] = useState(0);


  useEffect(() => {
      const callApi = async () => {
        const data = await fetchMovie();
        setMovies(data.movies);
        setTotalCount(data.totalCount);
      }
      callApi();
      return() =>{

      }
  },[]);

  return (
   <>
    <Navbar/>
    <div className="App container-fluid">
      <header className="App-header">
        <h1>MY FEVORITE MOVIES</h1>
            <MovieList movies={movies}/>
      </header>
    </div>
   </>
  );
}

export default App;
