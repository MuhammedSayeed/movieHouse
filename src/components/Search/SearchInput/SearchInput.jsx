import React from 'react'
import './SearchInput.scss'
import { BsSearch } from 'react-icons/bs'
import { IoIosClose } from 'react-icons/io'
function SearchInput({inputSearch,searching,handleOpenSearchBar}) {
    return <div className="search-input-container">
        <div className="search-input">
            <div className="start-search">
                <BsSearch />
                <input
                    ref={inputSearch}
                    type="text"
                    placeholder='Search here'
                    onChange={(e) => { searching(e.target.value) }}
                />
            </div>
            <div onClick={handleOpenSearchBar} className="close-search">
                <IoIosClose />
            </div>
        </div>
    </div>
}

export default SearchInput