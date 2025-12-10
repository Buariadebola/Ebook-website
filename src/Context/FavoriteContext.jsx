import axios from "axios";
import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {

  const [favorites, setFavorites] = useState([]);
  
  const token = localStorage.getItem("token");

  const addToFavorite = async (book) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/favorites/add",
        book,
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );
      setFavorites(res.data.items);
    } catch (err) {
      console.error(err);
    }
  }

  const removeFromFavorite = async (bookId) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/favorites/remove",
        { bookId },
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );
      setFavorites(res.data.items);
    } catch (err) {
      console.error(err);
    }
  }

   const isFavorite = (bookId) => {
  return favorites.some((b) => b.bookId === bookId);
};

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, addToFavorite, isFavorite, removeFromFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
} 

export { FavoritesProvider, FavoritesContext };