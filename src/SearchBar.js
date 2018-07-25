//React Init
import React from "react";




//Search Bar
class SearchBar extends React.Component {
    render() {
        return (
            <div className="customHeaderRight">

                <input className="searchBar" type="text" value={this.props.text} placeholder="Search" onChange={(event) => {this.props.handleChange(event.target.value)}}/>

            </div>
        );
    }
}


export default SearchBar;