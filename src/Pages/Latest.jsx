import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeNav from '../Components/HomeNav'
import LoadPost from '../Components/LoadPost';
import { FaArrowCircleLeft, FaArrowCircleRight, FaExclamationTriangle } from 'react-icons/fa';

const Latest = () => {

	  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=books&language=en&sortBy=publishedAt&pageSize=10&page=${page}&apiKey=fb74b71e4f974376a304f5f847332c06`
    )
      .then(res => res.json())
      .then(data => {
         const filtered = (data.articles || []).filter(article =>
        /book|novel|author|literature/i.test(
          (article.title || "") + " " + (article.description || "")
        )
      );
      setArticles(filtered);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  }, [page]);

    const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => prev + 1);

  return (
	<>
    <div className='latest-page'>
      <Navbar/>
	    <HomeNav/>
      	<header className="blog-header">
          <nav>
            <h1>Latest from the Blog</h1>
            <p>Stay up-to-date with the latest news, tips and trend in the world of ebooks.</p>
          </nav>
	      </header>
        <div className="main">
  {loading ? (
    <div className='loader2'>
    <LoadPost/>
    <LoadPost/>
    <LoadPost/>
    <LoadPost/>
    </div>
  ) : articles.length === 0 ? (
        <div className='error-content'>
    <div className='news-error'>
      <p> <FaExclamationTriangle/> Can't load news</p>
      <p>Reload page or check internet connection!</p>
    </div>
    </div>
        ) : (
        <div className="blog-posts">
          {articles.map((article, idx) => (
            <article key={idx}>
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </article>
          ))}
        </div>
  )}
    <div className="pagination" style={{margin: "20px 0", display: "flex", justifyContent: "center", gap: "10px"}}>
            <button className='back-btn' onClick={handlePrev} disabled={page === 1}><FaArrowCircleLeft className='arrow-left'/></button>
            <span>Page {page}</span>
            <button className='next-btn' onClick={handleNext}><FaArrowCircleRight className='arrow-right'/></button>
          </div>
        </div>
	<Footer/>
    </div>
	</>
  )
}

export default Latest
