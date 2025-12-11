import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaBookmark, FaBookOpen, FaFileDownload} from "react-icons/fa";
import { FavoritesContext } from '../Context/FavoriteContext';
import { CartContext } from '../Context/CartProvider';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';

const Description = () => {

  const navigate = useNavigate()
    const { addToFavorite, removeFromFavorite, isFavorite } = useContext(FavoritesContext);
    const { addToCart} = useContext(CartContext);

  const location = useLocation();
  const { img, title, author, genre, price, bookId, downloads, bookshelves, book } = location.state || {};


const handleAddToCart = (e) => {
  e.preventDefault();
  addToCart({ bookId, img, title, author, price, genre });
  alert('Added to cart!');
};

const handleDownload = (formats) => {
    const preferredFormats = [
      "application/epub+zip",
      "text/plain; charset=utf-8",
      "text/html"
    ];

    for (let format of preferredFormats) {
      if (formats[format]) {
        const link = document.createElement("a");
        link.href = formats[format];
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }
    }
    
    alert("No downloadable format availabe")
  };


  return (
    <div className='description-page'>
      <button className='back-button' onClick={() => navigate(-1)}><FaArrowAltCircleLeft className='back-icon'/></button>
      <div className='left-description'>
        <img src={img} alt="" />
        <div className="icons">
          {/*
          <FaShoppingCart className='cart-icon' onClick={handleAddToCart}/>
          <FaHeart className={`heart ${isFavorite(bookId) ? 'isfavorite' : ''}`} onClick={() =>
            isFavorite(bookId)
              ? removeFromFavorite(bookId)
              : addToFavorite({ bookId, img, title, author, price, genre })
          }/>
          <FaBookmark className='bookmark-icon'/> 
          */}
          <FaBookOpen onClick={() => window.open(location.state.contentUrl)} className='open-book'/>
          <FaFileDownload onClick={() => handleDownload(book?.formats)} className='download-book'/>
        </div>  
      </div>
      <div className="right-description">
        <h1><span>Title:</span> {title}</h1>
        <h2><span>Author:</span> {author}</h2>
        <h2><span>Subjects:</span> {genre}</h2>
        <h2><span>Price:</span> {price}</h2>
        <h2><span>Downloads:</span> {downloads}</h2>
        <h2><span>Bookshelves:</span> {bookshelves}</h2>
        <button style={{ display: 'flex', gap: '10px'}}>Contact Seller<BiPhone style={{scale: '1.3'}}/></button>
      </div>
    </div>
  )
}

export default Description