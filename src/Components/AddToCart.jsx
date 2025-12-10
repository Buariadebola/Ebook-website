import React, { useContext } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartProvider';


const AddToCart = () => {


  const {cartBooks, removeFromCart} = useContext(CartContext);


  return (
     <div className='cart'>
      {cartBooks.length === 0 ? (
        <h1>No Book in Cart<FaCartShopping style={{color: 'rgb(168, 255, 168)', marginLeft: '10px'}}/></h1>
      ) : (
        <div className="add-to-cart">
          {cartBooks.map((book) => (
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
                <button onClick={
                    (e) => {
                    e.preventDefault();
                    removeFromCart( book.bookId );
                    alert('Removed from cart!');
                }}
                >Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AddToCart

