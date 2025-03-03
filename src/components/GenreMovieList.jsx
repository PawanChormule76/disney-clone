import React from 'react'
import GenresList from '../Constants/GenresList'
import MovieList from './MovieList'
const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genre.map((Items,index)=>(
          <div key={Items.id || index} className='p-8 px-8 md:px-16'>
              <h2 className='text-[20px] text-white font-bold'>{Items.name}</h2>
              <MovieList genreId={Items.id} index={index}/>
          </div>
        ))}
    </div>
  )
}

export default GenreMovieList
