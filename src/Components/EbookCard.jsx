import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidPurchaseTag } from "react-icons/bi";

const EbookCard = (props) => {
  const bookId = props.id;
  return (
<Link
  to={`/description/${bookId}`}
  state={{
    book: props.book,
    img: props.img,
    title: props.title,
    author: props.author,
    price: props.price,
    bookId,
    bookshelves: props.bookshelves,
        downloads: props.downloads,
    // This will handle both string and object description
    description:
      typeof props.description === "string"
        ? props.description
        : props.description && props.description.value
          ? props.description.value
          : "",
    bookKey: props.bookKey || props.id || '1' + Math.random().toString(36).substr(2, 9),
    genre: props.genre || 'Unknown',
    contentUrl: props.contentUrl || null,
  }}>
      <div className="ebook-grid-items">
        <img src={props.img} alt="" />
        <div className='library-info'>
          <h2 className="title">{props.title}</h2>
          <hr />
          <p className="book-genre">{props.genre}</p>
          <hr />
          <p className="author">{props.author}</p>
          <hr />
          <p className='book-price' style={{display: 'flex', alignItems: 'center'}}>{props.price}<BiSolidPurchaseTag style={{padding: '10px'}} /></p>
        </div>
      </div>
    </Link>
  )
}

export default EbookCard