import './App.css'
import { useState } from 'react'
import MovieList from './MovieList'
import AddMovieForm from './AddMovieForm'
import { Route, Routes, Link } from "react-router-dom";
import MovieInfoWrapper from './MovieInfoWrapper'
function App() {
  const [movies, setMovies] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Inception',
      year: '2010',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmllLjvhuljznKC8Gm39l8QNOwpt47nZBP6HT3xAI5x9grW7iGXBih87dRntu-HA_H8ReSKdCLq5_MDg_V9upPm9Ihp9su2oGkzMrnFhw_jw',
      price: 12.99,
      rating: 8.8
    },
    {
      id: crypto.randomUUID(),
      title: 'The Dark Knight',
      year: '2008',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mMXYR87tYrzMq41JGrlEJ2yBC99-dGQEu7kFKavaG5tOYwpnd7_G27jhdBGG_ss8DZkrTxgaSOBrjSsUgg6CJL4MI85UOJyLypQuFIJh',
      price: 14.99,
      rating: 9.0
    },
    {
      id: crypto.randomUUID(),
      title: 'Interstellar',
      year: '2014',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5tZFk7UXP9dW-iPRV-lsogqE_5nDqlrSRETOuLy2Sl4NOXqBx9h9wH-80gaELKrBfHH_MZxrm3SRk44hcJB2vwndqRsvO6WrDeBuUlbN9rg',
      price: 15.99,
      rating: 8.6
    },
    {
      id: crypto.randomUUID(),
      title: 'Parasite',
      year: '2019',
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      price: 13.99,
      rating: 8.5
    },
    {
      id: crypto.randomUUID(),
      title: 'Pulp Fiction',
      year: '1994',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      price: 9.99,
      rating: 8.9
    },
    {
      id: crypto.randomUUID(),
      title: 'The Shawshank Redemption',
      year: '1994',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      price: 8.99,
      rating: 9.3
    },
    {
      id: crypto.randomUUID(),
      title: 'Everything Everywhere All at Once',
      year: '2022',
      description: 'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.',
      poster: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg',
      price: 16.99,
      rating: 7.9
    },
    {
      id: crypto.randomUUID(),
      title: 'The Godfather',
      year: '1972',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      price: 11.99,
      rating: 9.2
    }
  ])

function AddMovie(){
    return(
      <>
      <div className="bg-gray-50 min-h-screen pb-12">
      
  <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Movie Collection</h1>
        </div>

      </header>
       <div id='center' className="container mx-auto px-4">
  <button id='filters' onClick={() => setShow(!show)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md shadow hover:from-pink-600 hover:to-purple-700 transition-all">Add Movie</button>
        {show?<AddMovieForm onAdd={handelAdd} /> : null}
 <button  onClick={() => setShowFilter(!showFilter)} className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md shadow hover:from-purple-500 hover:to-pink-600 transition-all">Filter Movie</button>
        {showFilter? <div id='filter' className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filter Movies</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="title-filter" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input 
                id="title-filter"
                type="text" 
                placeholder="Filter by title..." 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                className="w-full px-4 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-pink-700 placeholder:text-pink-300"
              />
            </div>
            <div className="sm:w-1/3">
              <label htmlFor="rating-filter" className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
              <input 
                id="rating-filter"
                type="number" 
                min="0" 
                max="10" 
                step="0.1"
                placeholder="Minimum rating..." 
                value={rating} 
                onChange={e => setRating(Number(e.target.value))} 
                className="w-full px-4 py-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-purple-700 placeholder:text-purple-300"
              />
            </div>
          </div>
        </div>:null}
        </div>
        </div>
        <MovieList movies={filteredMovies} />
        </>
    )
  }
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [show, setShow] = useState(false)
  const [showFilter, setShowFilter] = useState(false)

  function handelAdd(movie){
    setMovies([...movies, {id:crypto.randomUUID(), ...movie}])
  }

  const filteredMovies = movies.filter(m => {
    return (
      m.title.toLowerCase().includes(title.toLowerCase()) &&
      m.rating >= rating
    )
  })

  return (
    <>
    


          <Routes>
            <Route path='/' element={<AddMovie/>} />
            <Route path="/movie/:id" element={<MovieInfoWrapper movies={filteredMovies} />} />
          </Routes>
          </>
  )
  }
  

export default App
