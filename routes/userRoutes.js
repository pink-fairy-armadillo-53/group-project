// /routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// User routes
router.post('/register', userController.registerUser);  // User registration
router.post('/login', userController.loginUser);        // User login
router.get('/profile', authenticateToken, userController.getUserProfile); // User profile (protected)

router.post('/favorites', authenticateToken, userController.addFavoriteMovie); // Add favorite movie
router.get('/favorites', authenticateToken, userController.getFavoriteMovies); // Get favorite movies
router.delete('/favorites/:id', authenticateToken, userController.removeFavoriteMovie); // Remove favorite movie

module.exports = router;
