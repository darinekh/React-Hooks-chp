import React from 'react'
import { Link } from 'react-router-dom'

function Info({ movie }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              className="w-full h-auto object-cover" 
              src={movie.poster} 
              alt={movie.title} 
            />
          </div>
          <div className="p-8 md:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800">{movie.title}</h2>
              <div className="bg-yellow-400 text-gray-900 font-bold rounded-xl py-1 px-3 text-lg">
                {movie.rating}
              </div>
            </div>
            
            <div className="mb-6">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {movie.year}
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ${movie.price}
              </span>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {movie.description}
            </p>
            
            <Link 
              to="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              Back to Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info