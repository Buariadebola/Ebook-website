import React, { useContext, useEffect} from 'react'
import BookInfo from './BookInfo';
import { GenreContext } from '../Context/GenreProvider';
import Loader from './Loader';

const GENRES = ["romance", "fiction", "horror", "fantasy", "literature"];

const PopularBooks = () => {

  const {genre, setGenre, filteredStaticBooks, results, error} = useContext(GenreContext);

    useEffect(() => {
    const idx = GENRES.indexOf(genre);
    const interval = setInterval(() => {
      const nextIdx = (idx + 1) % GENRES.length;
      setGenre(GENRES[nextIdx]);
    }, 7000);

    return () => clearInterval(interval);
  }, [genre, setGenre]);
  
  return (
    <>
      <section className="recent-books">
        <h1>Some Books we Recommend</h1>
        <div className="filter-btns">
          {GENRES.map(g => (
            <label key={g} className={`genre-input ${genre === g ? 'active-genre' : ''}`}>
              <input
                type="radio"
                name="genre"
                value={g}
                checked={genre === g }
                onChange={e => setGenre(e.target.value)}
              />{g.charAt(0).toUpperCase() + g.slice(1)}
            </label>
          ))}
        </div>
        <div className="books-wrapper">
          {results.length > 0 ? (
              results.map(book => (
              <BookInfo
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
              {filteredStaticBooks.length > 0 ? (
                  filteredStaticBooks.map((book, idx) => (
                    <BookInfo key={idx} {...book} />
                  ))
                 ) : (
                  <p>
					          <Loader/>
				          </p>
                )}
              </>
            )}
            {error && <p className='error-msg' style={{ color: 'red', margin: '0 auto' }}>{error}</p>}
        </div>
        <hr />
      </section>
    </>
  )
}

export default PopularBooks
