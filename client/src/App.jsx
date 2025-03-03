
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import Navbar from './components/Navbar'
import fetchMovie from '../src/services/fetchMovie'
import HomePage from './pages/HomePage';
import FilmPage from './pages/FilmPage';
import FavoritesPage from './pages/FavoritesPage';
import MyReviewsPage from './pages/MyReviewsPage';
import Login from './Login';

 function App() {

  ///run the webfont loader to grab custom fonts.
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Source Sans Pro']
      }
    });
   }, []);
 

  //pulls fetches the movies and displays in browser
  const [movies, setMovies] = useState([])
useEffect(()=>{
  fetchMovie().then(data=>{
    setMovies(data)
  })
  console.log(movies)
},[movies])

  const userId = 'exampleUserId'; // Replace with actual user ID logic

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/film/:id' element={<FilmPage />} />
          <Route
            path='/favorites'
            element={<FavoritesPage userId={userId} />}
          />
          <Route
            path='/my-reviews'
            element={<MyReviewsPage userId={userId} />}
          />
          <Route path='/' element={<HomePage />} />
        </Routes>
    </Router>

    <div>
      <ul>{movies.map((movie, index) => (
            <li key={index}>{movie.title}
            </li> 
          ))}</ul>
      
      </div>
      </>
  )
}

export default App
