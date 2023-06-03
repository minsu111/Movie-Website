import { useEffect, useState } from "react";
import Movie from ".Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, sestMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=a960ad448a61fb42f64ef81e2c1055ad"
            )

        ).json();
        sestMovies(json.results);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>{movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        coverImage={getImageUrl(poster_path)} title={movie.title}
                        date={movie.release_date}
                        summary={movie.overview}
                    />
                ))}
                </div>
            )}
        </div>
    );
}
export default Home;