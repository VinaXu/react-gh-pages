import '../Styles/Search.css';

const Search = () =>{
    return (
        <div className="container body">
            <div className="box">
                <input type="checkbox" id="check" />
                <div className="search-box">
                    <input type="text" />
                    <label for="check" className="icon">
                        <i className="fas fa-search"></i>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Search;