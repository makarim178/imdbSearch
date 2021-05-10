import './nominations.scss';
import CancelIcon from '@material-ui/icons/Cancel';

const Nominations = ({nomination, setNominate}) => {
    return (
        <div className="nominationCard">
            <div className="desc">
                <div className="nomCardImg">
                    <img src={nomination.Poster} alt={nomination.imdbID} />
                </div>
                <div className="nomTitle">
                    <strong className="nomination">{nomination.Title}</strong>
                    <p>Year: {nomination.Year}</p>
                </div>
            </div>
            <div className="actionNom" >
                <CancelIcon onClick={() => setNominate(nomination.imdbID)}/>
            </div>
        </div>
    )
}

export default Nominations
