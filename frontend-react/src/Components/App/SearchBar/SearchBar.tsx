import React from 'react';
import {SearchBarProps} from "../../../Types";



function SearchBar(props: SearchBarProps) {
    return (
        <input
            type={"text"}
            placeholder={"Search"}
            />
    )
}

export default SearchBar