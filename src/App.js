
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavourit';
import Removefavurite from './components/Removefavurite';


function App() {

const [movies, setMovies] = useState([]);
const [favorite, setFavorite] = useState([]);
const [serchValue, setSerchvalue]=useState("");

 const getMovieRequest= async (serchValue) => {

    const url= `http://www.omdbapi.com/?s=${serchValue}&apikey=de31de8a`;

    const reponse= await fetch(url);

    const responsejson= await reponse.json();

    // console.log(responsejson);
   if(responsejson.Search){
    setMovies(responsejson.Search)
   }
    

}

useEffect(()=>{
   getMovieRequest(serchValue); 
}, [serchValue]);

const addfavrotMovie =(movie)=>{

    const newfavList =[...favorite, movie];
    setFavorite(newfavList);

}

  return (
   <div className='container-fluid movie-app'>

    <div className='row d-flex align-items-center mt-4 mb-4'>

        <MovieListHeading heading="Movies"/>
        <SearchBox serchValue={serchValue}  setSerchvalue={setSerchvalue}  />
    </div>

    <div className='row'>
      
        <MovieList movies={movies} favitemeComponent={AddFavorite}  handleFavClick={addfavrotMovie}/>
      
      </div>


      <div className='row d-flex align-items-center mt-4 mb-4'>

        <MovieListHeading heading="Favourit"/>
       
    </div>

    <div className='row'>
      
        <MovieList movies={favorite} favitemeComponent={AddFavorite}  handleFavClick={addfavrotMovie} />
      
      </div>
    
   </div>
  );
}

export default App;
