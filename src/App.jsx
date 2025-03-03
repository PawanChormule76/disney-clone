import './App.css'
import Navbar from './components/Navbar'
import ProductionHouse from './components/ProductionHouse'
import Slider from './components/Slider'
import GenreMovieList from './components/GenreMovieList'
import Footer from './components/Footer'

function App() {
  return (  
    <div className=''>
        <Navbar/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
        <Footer/>
    </div>
  )
}

export default App
