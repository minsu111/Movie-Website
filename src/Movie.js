import PropTypes from "prop-types";
function Movie({poster_path, title, release_date, overview}) {
    return (
        <div>
            <img src={getImageUrl(poster_path)} alt="movie poster"/>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{overview}</p>
        </div>
    );
}

Movie.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default Movie;
export const getImageUrl = (path, size = 200) => {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
  }; 