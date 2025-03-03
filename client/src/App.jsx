import { useState, useEffect } from 'react'
import WebFont from 'webfontloader';
import Navbar from '../src/components/Navbar'
import fetchMovie from '../src/services/fetchMovie'
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


  return (
    <>
      <div>
      <Navbar/>
      <ul>{movies.map((movie, index) => (
            <li key={index}>{movie.title}
            </li> 
          ))}</ul>
      
      </div>

    </>
  )
}

export default App
