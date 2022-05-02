import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([])
    const getMovie = async () => {
        const response = await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`));
        const json = await (response).json();
        setDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (<div>
            {loading ? <h1>Loading...</h1> : (
                <div>{
                    <MovieDetail key={detail.id}
                           id={detail.id}
                           coverImg={detail.medium_cover_image}
                           title={detail.title}
                           genres={detail.genres}/>
                }
                </div>)}
        </div>
    )
}

export default Detail