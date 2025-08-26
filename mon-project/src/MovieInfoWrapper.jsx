import React from 'react';
import { useParams } from 'react-router-dom';
import Info from './Info';

function MovieInfoWrapper({ movies }) {
  // Use the useParams hook to get the id from the URL
  const { id } = useParams();
  
  // Find the movie with the matching id
  const movie = movies.find(m => m.id === id);
  
  // If no movie is found, display a message
  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Movie not found</h2>
        <p className="mt-4">The movie you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  // If movie is found, render the Info component with the movie data
  return <Info movie={movie} />;
}

export default MovieInfoWrapper;

