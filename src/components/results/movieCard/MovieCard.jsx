import './movieCard.scss';
import noImage from '../../../assets/noImage.jpg';


const MovieCard = ({movie, setNominate, nomination}) => {    
    return (
        <div className="movieCard" key={movie.imdbID}>
            
            <div className="posterDiv">
                <img src={movie.Poster === "N/A" ? noImage : movie.Poster} alt={movie.Title}/>
            </div>

            <div className="titleDiv">
                <div className="movieDescDiv">
                    <h4>{movie.Title}</h4>
                </div>

                <div className="otherDiv">
                    <div className="yearDiv">
                        <h4>Year: {movie.Year}</h4>
                    </div>

                    <div className={nomination? "btnDiv activenominate": "btnDiv"} onClick={() => setNominate(movie.imdbID)}>
                        Nominate
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default MovieCard
