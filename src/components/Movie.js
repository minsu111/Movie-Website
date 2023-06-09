import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, poster_path, title, release_date, overview }) {
    return (
        <div className={styles.movie}>
            <img src={getImageUrl(poster_path)} alt="movie poster" className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.release_dates}>{release_date}</h3>
                <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Movie;
export const getImageUrl = (path, size = 200) => {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
}; 