import React from 'react';
import './searchBox.css';

const SearchBox = (props)=> {
    return(
        <div>
            <input type="search"
                   placeholder={props.placeholder}
                   onChange={props.onSearchHandler}
                   className="search" />
        </div>
    );
};

export default SearchBox;