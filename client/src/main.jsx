import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/assets/styling/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
