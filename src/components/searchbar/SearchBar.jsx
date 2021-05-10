import './searchbar.scss';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({searchMovies}) => {
    return (
        <div className="searchContainer">
            <div className="searchCard">
                <div className="searchbar">
                    {/* <div className="labelDiv">
                        <label htmlFor="searchBar">Movie Title: </label>
                    </div> */}
                    <div className="searchIconDiv">
                        <SearchIcon className="magIcon"/>
                    </div>
                    <div className="inputDiv">
                        <input type="text" name="searchbar" id="searchbar" placeholder="Please enter movie " className="searchBarInp" onChange={(event) => searchMovies(event.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
