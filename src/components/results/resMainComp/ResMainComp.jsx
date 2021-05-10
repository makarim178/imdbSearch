import Nominations from '../../nominations/Nominations';
import PageSection from '../../pageSection/PageSection';
import MovieCard from '../movieCard/MovieCard';
import './resMainComp.scss';

const ResMainComp = ({searchText, movies, setNominate, nominations, totalPages, searchMovies}) => {

    const nominationBool =(data) => {
        if (data.length > 0) return true;
        return false;
    }
    return (
        <>
            <div className="resMainContent">
                <div className="movieContainer">
                <div className="searchTxt">
                    <p>{!(searchText.length > 2 || movies.length > 0) && "at least 3 characters are required for a search..."}</p>
                </div>
                    {
                        movies.map((movie, index) => (
                            <MovieCard  
                                setNominate={setNominate} 
                                movie={movie} 
                                nomination={nominationBool(nominations.filter(nom => nom.imdbID === movie.imdbID))} 
                                key={index}
                            />
                        ))
                    }
                </div>
                <div className="nominationContainer">
                    <div className="nomConTitle">
                        <strong>Nominations</strong>
                    </div>
                    {
                    nominations.length > 0 
                    ? nominations.map(nomination => (
                        <Nominations 
                            key={nomination.imdbID} 
                            nomination={nomination} 
                            setNominate={setNominate}
                        />
                    ))
                    : (<span>no movies are nominated yet!</span>)
                    }
                    
                </div>

                

            </div>

            <PageSection totalPages={totalPages} searchText={searchText} searchMovies={searchMovies} />
        </>
    )
}

export default ResMainComp
