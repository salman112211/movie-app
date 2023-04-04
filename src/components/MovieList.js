import React from 'react';

const MovieList =(props)=>{

    const FaviteComponent =props.favitemeComponent

    return(
        <>
        
        {props.movies.map((movie, index)=>(
 
        <div className='image-container d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt="movie"></img>
            <div onClick={()=>props.handleFavClick(movie)} className='overlay d-flex align-item-center justify-content-center'>

                <FaviteComponent/>
            </div>
        </div>
        
        ))}
        </>
    );
}


export default MovieList;