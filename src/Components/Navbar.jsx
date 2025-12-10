import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AutoSearchBar from './AutoSearchBar'
import SearchResult from './SearchResult'
import Loader from './Loader'
import logo from '../Images/ebook logo.png'

const Navbar = ({genre}) => {

	  const [search, setSearch] = useState('');
	  const [results, setResults] = useState([]);
	  const [loading, setLoading] = useState(false);
	  const [error, setError] = useState('');

  // Fetch books from Open Library by search
  const fetchBooks = async (e) => {
	e.preventDefault();
	if (!search.trim() && !genre) return;
	setLoading(true);
	setError('');
	setResults([]);
	try {
	  let url = 'https://gutendex.com/books?';

	  if (search.trim()) url += `search=${encodeURIComponent(search)}&`;
	  if (genre) url += `topic=${encodeURIComponent(genre)}&`;

	  const res = await fetch(url);
	  const data = await res.json();

	  setResults(data.results.slice(0, 100));
	} catch (err) {
	  setError('Failed to fetch books.');
	}

	setLoading(false);
  };

		useEffect(() => {
		  if (!search.trim()) {
			setResults([]);
		  }
		}, [search]);

  return (
    <>
      <div>
      <nav className="nav-wrapper">
			<div className="left-column">
				<img src={logo} alt="" />
			</div>
			<AutoSearchBar
			value={search}
    		onChange={e => setSearch(e.target.value)}
    		onSubmit={fetchBooks}
			/>
			<div>
				{ (results.length > 0 || loading || error) && (
					<div id="search-results">
					{results.length > 0 ? (
						results.map(book => (
						<SearchResult
							key={book.id}
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
						{loading && <Loader />}
						{error && <p className="error-msg" style={{ color: 'red' }}>{error}</p>}
						</>
					)}
					</div>
				)}
				</div>
			<div className="right-column">
				<ul className="nav-link">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/library">Library</Link></li>
					<li><Link to="/latest">Latest</Link></li>
					<li><Link to="/signin"><button id="log-button" className="sign-in">Sign in</button></Link></li>
				</ul>
			</div>
		</nav>
    </div>
    </>
  )
}

export default Navbar