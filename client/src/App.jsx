
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import Navbar from './components/Navbar'
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
        families: ['Caesar Dressing', 'Source Sans Pro']
      }
    });
   }, []);
 

  const userId = 'exampleUserId'; // Replace with actual user ID logic

  return (
    <>
    {/* Navbar Component */}
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
{/* End Navbar Component */}


      </>
  )
}

export default App
