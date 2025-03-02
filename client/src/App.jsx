import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilmPage from './pages/FilmPage';
import FavoritesPage from './pages/FavoritesPage';
import MyReviewsPage from './pages/MyReviewsPage';
import Login from './Login';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  const userId = 'exampleUserId'; // Replace with actual user ID logic

  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
