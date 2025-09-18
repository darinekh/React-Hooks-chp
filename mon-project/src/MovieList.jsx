import React from 'react'
import MovieCad from './MovieCad'
import { Link } from 'react-router-dom'
   // Composant qui reçoit en props un tableau de films
function MovieList({movies}) {
    if(movies.length === 0){
        return <div className="text-center p-8 text-gray-500 text-lg">
            <p>No movies found</p>
        </div>
    }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
        {movies.map(m =>(
            <Link key={m.id} to={`/movie/${m.id}`}>
                <MovieCad movie={m}/>
            </Link>
        ))}
    </div>
  )
}

export default MovieList
