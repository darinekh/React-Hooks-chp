
import React from 'react'

function MovieCad({ movie }) {
  return (
    <div className="w-full sm:max-w-xl animate-fade-in">
  <div className="bg-gradient-to-br from-purple-200 via-pink-100 to-pink-300 backdrop-blur-md shadow-2xl border border-pink-200 rounded-3xl p-6 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 transition-transform duration-300 hover:scale-105 hover:shadow-pink-300">
        <div className="h-48 w-full sm:w-1/2 flex items-center justify-center">
          <img
            className="rounded-3xl shadow-lg h-full w-full object-cover border-4 border-blue-100 hover:border-blue-400 transition-all duration-200"
            src={movie.poster}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 space-y-3 justify-between">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-extrabold text-blue-900 drop-shadow-lg">{movie.title}</h2>
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 font-bold rounded-xl px-4 py-2 shadow-md text-white text-lg">{movie.rating}</div>
          </div>
          <div>
            <div className="text-lg text-blue-700 font-semibold">{movie.year}</div>
          </div>
          <p className="text-gray-500 max-h-32 overflow-y-auto text-sm leading-relaxed">{movie.description}</p>
          <div className="flex items-center justify-end text-2xl font-extrabold text-blue-700">
            <span className="bg-pink-100 px-3 py-1 rounded-xl shadow text-pink-700">${movie.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCad
