import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FavoritesContext } from "../Context/FavoriteContext";

export default function FavBook() {


  const { favorites } = useContext(FavoritesContext);

  const imgRefs = useRef([]);
  const pRefs = useRef([]);

useEffect(() => {
  const callback = (entries) => {
    entries.forEach(entry => {
      if (!entry.target) return;
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };
  const observer = new window.IntersectionObserver(callback, { threshold: 0.2 });

  imgRefs.current.forEach(ref => ref && observer.observe(ref));
  pRefs.current.forEach(ref => ref && observer.observe(ref));

  return () => observer.disconnect();
}, []);

  return (
    <>
    <section className="fav-book">
      <h1>Your Favourite Books</h1>
        {favorites.length === 0 ? (
        <h1 style={{color: 'lime', fontSize: '30px', marginTop: '150px',  marginBottom: '150px'}}>No favourite Books yet. </h1>
      ) : (
        <>
      <div className="fav-content">
        <div className="fav-book-images">
          {favorites.map((book, i) => (
            <img
              key={i}
              src={book.img}
              alt=""
              ref={el => imgRefs.current[i] = el}
            />
          ))}
        </div>
        <div className="fav-book-right">
            {favorites.map((book, i) => (
          <div className="fav-book-info"
              key={i}
              ref={el => pRefs.current[i] = el}
          >
            <h2 style={{color: 'white'}}><span>Title: </span>
              {book.title}
            </h2>
            <p style={{color: 'white'}}><span>Author: </span>
              {book.author}
            </p>
            <p style={{color: 'white'}}><span>Genre: </span>
              {book.genre}
            </p>
              <p style={{color: 'white'}}
            ><span>Price: </span>
              {book.price}
            </p>
          </div>
          ))}
        </div>
      </div>
      </>
      )}
      <Link to="/profile"><button className="fav-button">View All <FaArrowRight className="favbtn-arrow" style={{padding: '0 10px'}}/></button></Link>
    </section>
    <hr />
    </>
  );
}