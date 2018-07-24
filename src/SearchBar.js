//React Init
import React from "react";




//Search Bar
class SearchBar extends React.Component {
    render() {
        return (
            <div className="customHeaderRight">

                <input className="searchBar" type="text" placeholder="Search"/>

            </div>
        );
    }
}


export default SearchBar;