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
        genre: props.genre,
        price: props.price,
        bookshelves: props.bookshelves,
        downloads: props.downloads,
        bookId,
        description:
      typeof props.description === "string"
        ? props.description
        : props.description && props.description.value
          ? props.description.value
          : "",
      }}>
        <div className="search-result">
          <p>{props.title} - {props.author}</p>
        </div>
        </Link>
    </>
  )
}

export default SearchResult
