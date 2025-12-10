import { useEffect, useRef } from "react";
import "../App.css";
import { Link } from 'react-router-dom'
import { BiSolidPurchaseTag } from "react-icons/bi";

export default function BookInfo({ children, ...props }) {

        const bookId = props.id;
        const ref = useRef();

useEffect(() => {
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (!ref.current) return;
      if (entry.isIntersecting) {
        ref.current.classList.add("visible");
      } else {
        ref.current.classList.remove("visible");
      }
    },
    { threshold: 0.2 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);

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
    <div ref={ref} className="book-info" {...props}>
        <img src={props.img} alt="" />
          <div className='details'>
          <p className='book-title'>{props.title}</p>
          <p className='author'>{props.author}</p>
          </div>
          <div className="tag">
            <p><span className='price' style={{display: 'flex', alignItems: 'center'}}>{props.price} <BiSolidPurchaseTag style={{padding: '0px 5px'}} /></span></p>
          </div>
    </div>
    </Link>
  );
}
