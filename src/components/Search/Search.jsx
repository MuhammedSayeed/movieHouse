import React, { useRef, useState } from 'react'
import './Search.scss'
import SearchInput from './SearchInput/SearchInput.jsx'
import SearchResults from './SearchResults/SearchResults.jsx';
import SearchFooter from './SearchFooter/SearchFooter.jsx';
import axios from 'axios';
import { search } from '../../services/api/api.js';

function Search({handleOpenSearchBar}) {

    const inputSearch = useRef();
    const [data, setData] = useState([]);
    const [type, setType] = useState('movie');
    const [activeType, setActiveType] = useState(1);

    const selectMediaType = (typeId, type) => {
        setActiveType(typeId);
        setType(type);
        inputSearch.current.value = '';
        setData([]);
    }
    const searching = async (searchKey) => {
        const { data } = await axios.get(search(type, searchKey));
        if (data) {
            setData(data.results);
        }
    }

    return <div  className="search-container">
        <div onClick={handleOpenSearchBar} className="search-overaly">

        </div>
        <div className="search-modal">
            <SearchInput handleOpenSearchBar = {handleOpenSearchBar} searching ={searching} inputSearch={inputSearch} />
            <SearchResults data={data} />
            <SearchFooter activeType={activeType} selectMediaType={selectMediaType} />
        </div>
    </div>
}

export default Search