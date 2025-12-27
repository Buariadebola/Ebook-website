import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = (props) => {
  const bookId = props.id || props.key || '1' + Math.random().toString(36).substr(2, 9);
  return (
    <>
        <Link
      to={{
        pathname: `/description/${bookId}`,
      }}
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
        <div className="search-result">
          <img src={props.img} alt="" />
          <p>{props.title} - {props.author}</p>
        </div>
        </Link>
    </>
  )
}

export default SearchResult
