import React, { useState, useEffect, createContext} from 'react'
import PP from '../Images/p&p.jpeg'
import TKAM from '../Images/TKAM.jpeg'
import TLOTR from '../Images/TLOTR.jpeg'
import THG from '../Images/THG.jpeg'
import NTF from '../Images/1984.jpeg'
import TGG from '../Images/TGG.jpg'
import TDVC from '../Images/TDVC.jpg'
import WH from '../Images/WH.jpg'
import JE from '../Images/JE.jpg'
import MD from '../Images/MD.jpg'
import TLTWATW from '../Images/TLTWATW.jpg'
import TN from '../Images/TN.jpeg'
import TH from '../Images/The Hobbit.jpeg'
import TTTW from '../Images/TTTW.jpeg'
import TLC from '../Images/TLC.jpg'
import HLG from '../Images/HLG.jpeg'
import SYS from '../Images/SYS.jpeg'
import TLITF from '../Images/TLITF.jpeg'
import PJATO from '../Images/PJATO.jpeg'
import HPATSS from '../Images/HPATSS.jpeg'
import Dracula from '../Images/Dracula.jpeg'
import TE from '../Images/The Exorcist.jpeg'
import TBHH from '../Images/TBHH.jpeg'
import WFWG from '../Images/WFWG.jpeg'
import TWOT from '../Images/TWOT.jpeg'
import Misery from '../Images/Misery_(1987)_front_cover,_first_edition.jpg'

const staticBooks = [
  { img: PP, title: "Pride and Prejudice", genre: "Romance", author: "Jane Austen", price: "$12.00"},
  { img: TKAM, title: "To kill a Mockingbird", genre: "literature", author: "Harper Lee", price: "$12.99"},
  { img: TLOTR, title: "The Lord of the Rings", genre: "Fantasy", author: "J.R.R. Tolkien", price: "$15.99"},
  { img: THG, title: "The Hungary Games", genre: "Science-fiction", author: "Suzanne Collins", price: "$13.00" },
  { img: TGG, title: "The Great Gatsby", genre: "literature", author: "F. Scott Fitzgerald", price: "$12.99" },
  { img: NTF, title: "1984", genre: "literature", author: "George Orwell", price: "$14.99"},
  { img: TDVC, title: "The Da Vinci Code", genre: "fiction", author: "Dan Brown", price: "$14.00" },
  { img: WH, title: "Wuthering Heights", genre: "Romance", author: "Emily Bronte", price: "$15.00" },
  { img: JE, title: "Jane Eyre", genre: "Romance", author: "Charlotte Bronte", price: "$18.99"},
  { img: MD, title: "Moby Dick or The Whale", genre: "Adventure", author: "Herman Melville", price: "$14.73"},
  { img: TLTWATW, title: "The Lion, The witch and the Wardrobe", genre: "Fantasy", author: "C.S. Lewis", price: "$13.92"},
  { img: TN, title: "The Notebook", genre: "Romance", author: "Nicholas Sparks", price: "$15.99"},
  { img: TTTW, title: "The Time Traveler's Wife", genre: "Romance", author: "Audery Niffenegger", price: "$16.99"},
  { img: TLC, title: "The Lost Children", genre: "fiction", author: "Elle Grey", price: "$5.99"},
  { img: HLG, title: "Her Last Goodbye", genre: "fiction", author: "Melinda Leigh", price: "$4.99"},
  { img: SYS, title: "Say You're Sorry", genre: "fiction", author: "Melinda Leigh", price: "$4.99"},
  { img: TLITF, title: "The Lies in the Falls", genre: "fiction", author: "Elle Grey", price: "$5.99"},
  { img: TH, title: "The Hobbit", genre: "Fantasy", author: "J.R.R. Tolkien", price: "$6"},
  { img: PJATO, title: "Percy Jackson and the Olympians", genre: "Fantasy", author: "Rick Riordan", price: "$10.99"},
  { img: HPATSS, title: "Harry Potter and the Sorcerer's Stone", genre: "literature", author: "J.K. Rowling", price: "$18.99"},
  { img: Dracula, title: "Dracula", genre: "Horror", author: "Bram Stoker", price: "$17.99"},
  { img: TE, title: "The Exorcist", genre: "Horror", author: "Williams Peter Blatty", price: "$14.00"},
  { img: TBHH, title: "The Buffalo Hunter Hunter", genre: "Horror", author: "Graham Jones", price: "$25.99"},
  { img: WFWG, title: "Witchcraft for Wayward Girls", genre: "Horror", author: "Grady Hendrix", price: "$25.99"},
  { img: Misery, title: "Misery", genre: "Horror", author: "Stephen King", price: "$17.00"},
  { img: TWOT, title: "The Wheel of Time", genre: "Fantasy", author: "Robert Jordan", price: "$17.00"},
];

const GenreContext = createContext();

const GenreProvider = ({children}) => {

        const [search, setSearch] = useState('');
        const [results, setResults] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState('');
        const [genre, setGenre] = useState('romance');
    
    
       useEffect(() => {
           if (genre && !search.trim()) {
             (async () => {
               setLoading(true);
               setError('');
               setResults([]);
               try {
                 const res = await fetch(`https://gutendex.com/books?topic=${encodeURIComponent(genre)}`);
                 const data = await res.json();
                 setResults(data.results.slice(0, 7));
               } catch (err) {
                 setError('Failed to fetch books.');
               }
               setLoading(false);
             })();
           }
         }, [genre, search]);
    
           // Filter static books by genre if no search
     const filteredStaticBooks = genre
       ? staticBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase())
       : staticBooks;



  return (
    <GenreContext.Provider  value={{genre, setGenre, search, setSearch, results, loading, error, filteredStaticBooks }}>
        {children}
    </GenreContext.Provider>
  )
}

export {GenreProvider, GenreContext}
