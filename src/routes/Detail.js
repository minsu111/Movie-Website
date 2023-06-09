import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a960ad448a61fb42f64ef81e2c1055ad`)).json()
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>
}

export default Detail;


// const [loading, setLoading] = useState(true);
