import PropTypes from "prop-types";

function MovieDetail({id, coverImg, title, genres}) {
    return (
        <div>
            <h1>Detail {title}</h1>
            <img alt={title} src={coverImg}/>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

MovieDetail.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;