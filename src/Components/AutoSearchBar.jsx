import React from 'react'
import searchicon from '../Images/magnifying-glass.png'
import SearchResult from './SearchResult'

const AutoSearchBar = ({value, onChange, onSubmit }) => {
  return (
        <>
        <div className="search-bar">
          <form onSubmit={onSubmit}>
			<div className="search-icon">
                <img src={searchicon} alt="" />
            </div>
    		<input type="text" id="search-input" placeholder="Search..." value={value}
                onChange={onChange} />
                <button type="submit">search</button>
        </form>
        <SearchResult/>
        </div>
    </>
  )
}

export default AutoSearchBar
