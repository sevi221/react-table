import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <input
            type="text"
            placeholder="Question search..."
            value={search}
            onChange={e => handleInputChange(e.target.value)}
        />
    );
};

export default Search;