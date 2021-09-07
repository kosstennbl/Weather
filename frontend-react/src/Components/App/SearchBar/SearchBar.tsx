import React from 'react';

type SearchBarProps = {

}

function SearchBar(props: SearchBarProps) {
    return (
        <input
            type={"text"}
            placeholder={"Search"}
            />
    )
}

export default SearchBar