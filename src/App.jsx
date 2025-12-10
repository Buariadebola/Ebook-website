import './App.css';
import './index.js'
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import Latest from './Pages/Latest.jsx'
import Library from './Pages/Library.jsx'
import Profile2 from './Pages/Profile2.jsx'
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import Homepage from './Pages/Homepage.jsx'
import { UserProvider } from './Context/UserProvider.jsx'
import { FavoritesProvider } from './Context/FavoriteContext.jsx';
import { SearchProvider } from './Context/SearchProvider.jsx';
import { GenreProvider } from './Context/GenreProvider.jsx';
import Description from './Pages/Description.jsx';
import { CartProvider } from './Context/CartProvider.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';


function App() {

  return (
    <>
    <UserProvider>
      <FavoritesProvider>
        <CartProvider>
          <SearchProvider>
            <GenreProvider>
         <Routes>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/description/:id' element={<Description/>} />
          <Route path='/latest' element={<Latest/>}/>
          <Route path='/profile' element={<Profile2/>} Component={Profile2}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        </GenreProvider>
        </SearchProvider>
        </CartProvider>
      </FavoritesProvider>
      </UserProvider>
  	</>
  );
}

export default App;
