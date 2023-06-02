import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a960ad448a61fb42f64ef81e2c1055ad"
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <div>{movies.map(movie => <div key={movie.id}>
    <img src={getImageUrl(movie.poster_path)} />
    <h2>{movie.title}</h2>
    <p>opening date: {movie.release_date} </p>
    <p>{movie.overview}</p>
  </div>
  )}
  </div>
  }
  </div>;
}

export default App;
export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

/*
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a960ad448a61fb42f64ef81e2c1055ad"
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : 
        <div>
          {movies.map(movie => (
            <div key={movies.id}>
              <img src={getImageUrl(poster_path)} />
              <h2>{movie.title}</h2>
              <p>opening date: {release_date} </p>
              <p>{overview}</p>
            </div>
          ))}}
        </div>
      )
    </div>
        
*/

