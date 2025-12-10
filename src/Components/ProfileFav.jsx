import React, { useContext, useEffect } from 'react'
import { FavoritesContext } from '../Context/FavoriteContext'
import axios from 'axios';

const ProfileFav = () => {

  const { removeFromFavorite, setFavorites, favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchFavorite = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3001/api/favorites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setFavorites(res.data.items);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFavorite();
  }, []);


  return (
    <div className='favorites'>
      {favorites.length === 0 ? (
        <h1>No favourite Books yet. </h1>
      ) : (
        <div className="profile-favorites">
          {favorites.map((book) => (
            <div className="Profile-book" key={book.bookId}>
              <img src={book.img}  alt={book.title} />
              <div className='library-info'>
                <h2 className="title" >{book.title}</h2>
                <hr />
                <p className="book-genre">{book.genre}</p>
                <hr />
                <p className="author">{book.author}</p>
                <hr />
                <p className="book-price">{book.price}</p>
              </div>
              <button className='remove-from-cart' 
                onClick={() => removeFromFavorite(book.bookId)}>Remove from Favorite</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfileFav