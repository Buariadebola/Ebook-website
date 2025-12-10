import React, { useRef, useState, useEffect, useContext } from 'react'
import menuicon from '../Images/menu-icon-24.png'
import Menubar from '../Components/Menubar'
import EbookCard from '../Components/EbookCard'
import Loader from '../Components/Loader'
import SearchBar from '../Components/SearchBar'
import { SearchContext } from '../Context/SearchProvider'

const Library = () => {

  const {genre, setGenre, search, setSearch, results, loading, error, fetchBooks, filteredStaticBooks} = useContext(SearchContext);

	  const [openDropdown, setOpenDropdown] = useState(null);

  const fictionRef = useRef();
  const nonFictionRef = useRef();
  const othersRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        fictionRef.current && !fictionRef.current.contains(event.target) &&
        nonFictionRef.current && !nonFictionRef.current.contains(event.target) &&
        othersRef.current && !othersRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [slide, setSlide] = useState(false);

  const handleSlide = () => {
    setSlide(! slide)
  }

  return (
	<>
	<Menubar/>
    <div className="genre-body">
      	<div className="genre-page">
          <button onClick={handleSlide} className="menu-btn">
            <img className="menu-icon" src={menuicon} alt="" />
          </button>
		<div className={`library-sidebar ${slide ? 'show' : ''}`}>
			<div ref={fictionRef} style={{ display: "inline-block" }}>
			<button className="fiction-button" onClick={() => setOpenDropdown(openDropdown === "fiction" ? null : "fiction")}>Fiction</button>
				<div className="fiction-dropdown" style={{ display: openDropdown === "fiction" ? "block" : "none" }}>
					<div className="filter-options">
						<label>
							<input type="radio" name="genre" value="romance" checked={genre === "romance"} onChange={e => setGenre(e.target.value)}/>Romance
						</label>
						<label>
							<input type="radio" name="genre" value="fiction" checked={genre === "fiction"} onChange={e => setGenre(e.target.value)}/>Fiction
						</label>
						<label>
							<input type="radio" name="genre" value="science" checked={genre === "Science"} onChange={e => setGenre(e.target.value)}/>Sci-Fi
						</label>
						<label>
							<input type="radio" name="genre" value="adventure" checked={genre === "adventure"} onChange={e => setGenre(e.target.value)}/>Adventure
						</label>
						<label>
							<input type="radio" name="genre" value="horror" checked={genre === "horror"} onChange={e => setGenre(e.target.value)}/>Horror
						</label>
						<label>
							<input type="radio" name="genre" value="fantasy" checked={genre === "fantasy"} onChange={e => setGenre(e.target.value)}/>Fantasy
						</label>
						<label>
							<input type="radio" name="genre" value="literature" checked={genre === "literature"} onChange={e => setGenre(e.target.value)}/>Literature
						</label>
					</div>
				</div>
				</div>
				<br />
				<br />
				<div ref={nonFictionRef} style={{ display: "inline-block" }}>
			<button className="non-fiction-button" onClick={() => setOpenDropdown(openDropdown === "nonfiction" ? null : "nonfiction")}>Non-fiction</button>
			<div className="non-fiction-dropdown" style={{ display: openDropdown === "nonfiction" ? "block" : "none" }}>
				<div className="filter-options">
					<label>
						<input type="radio" name="genre" value="history" checked={genre === "history"} onChange={e => setGenre(e.target.value)}/>History
					</label>
					<label>
						<input type="radio" name="genre" value="science" checked={genre === "science"} onChange={e => setGenre(e.target.value)}/>Science
					</label>
					<label>
						<input type="radio" name="genre" value="economics" checked={genre === "economics"} onChange={e => setGenre(e.target.value)}/>Economics
					</label>
				</div>
			</div>
			</div>
			<br />
			<br />
			<div ref={othersRef} style={{ display: "inline-block" }}>
			<button className="others-button" onClick={() => setOpenDropdown(openDropdown === "others" ? null : "others")}>others</button>
			<div className="others-dropdown" style={{ display: openDropdown === "others" ? "block" : "none" }}>
				<div className="filter-options">
					<label>
						<input type="radio" name="genre" value="poetry" checked={genre === "poetry"} onChange={e => setGenre(e.target.value)}/>poetry
					</label>
					<label>
						<input type="radio" name="genre" value="drama" checked={genre === "drama"} onChange={e => setGenre(e.target.value)}/>drama
					</label>
				</div>
			</div>
			</div>
		</div>
		          <div className='search-box'>
					<SearchBar 
					value={search}
    				onChange={e => setSearch(e.target.value)}
    				onSubmit={fetchBooks}
					/>
            {loading && 
			<>   
				<Loader/>
			</>
			}
            {error && <p className='error-msg' style={{ color: 'red' }}>{error}</p>}
          </div>
		<div className="ebook-grid">
			{results.length > 0 ? (
              results.map(book => (
                <EbookCard
                 key={book.id}
				 bookKey={book.id} 
  				id={book.id}
				book={book}    
				img={book.formats["image/jpeg"]}
				title={book.title}
				author={book.authors?.[0]?.name || "Unknown"}
				genre={book.subjects?.[0] || "Unknown"}
				price={`$${(Math.random() * 20 + 5).toFixed(2)}`}
				bookshelves={book.bookshelves?.join(", ") || "None"}
				downloads={book.download_count}
				downloadformat={book.formats}
				contentUrl={
					book.formats["text/plain; charset=utf-8"] ||
					book.formats["text/plain"] ||
					book.formats["text/plain; charset=us-ascii"] ||
					null
					}
                />
              ))
            ) : (
              <>
                  <p>
					<Loader/>
				  </p>
              </>
            )}
		</div>
	</div>
  </div>
  </>
  )
}

export default Library
