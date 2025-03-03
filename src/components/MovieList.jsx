import React, { useEffect, useState, useRef } from 'react'
import GenreMovieList from './GenreMovieList'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from '../components/MovieCard'
import HrMovieCard from './HrMovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";


const MovieList = ({genreId,index}) => {
    
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef(null);

    useEffect(()=>{
      getMovieByGenreId();
    },[genreId])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = () => {
      if (elementRef.current) {
          elementRef.current.scrollLeft += 500;
      }
    };

    const sliderLeft = () => {
      if (elementRef.current) {
          elementRef.current.scrollLeft -= 500;
      }
    };
  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={sliderLeft} 
        className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute
        ${index % 3 === 0?'mt-[80px]':'mt-[150px]'} `}/>
   
      <div ref={elementRef} className='flex overflow-x-auto gap-8
        scrollbar-none scroll-smooth pt-4 px-3 pb-4 [&::-webkit-scrollbar]:hidden'>
          {movieList.map((item)=>( 
            <React.Fragment key={item.id}>  
              {index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
            </React.Fragment> 
          ))}
      </div>
      <IoChevronForwardOutline onClick={sliderRight}
        className={`text-[50px] text-white hidden md:block
        p-2 cursor-pointer z-10 top-0
        absolute right-0 
        ${index%3===0?'mt-[80px]':'mt-[150px]'}`}/> 

    </div>
  )
}

export default MovieList





// import React, { useEffect, useState, useRef } from 'react'
// import GlobalApi from '../Services/GlobalApi'
// import MovieCard from '../components/MovieCard'
// import HrMovieCard from './HrMovieCard'
// import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// const MovieList = ({ genreId, index }) => {
    
//     const [movieList, setMovieList] = useState([]);
//     const elementRef = useRef(null);

//     useEffect(() => {
//         getMovieByGenreId();
//     }, [genreId]);

//     const getMovieByGenreId = () => {
//         GlobalApi.getMovieByGenreId(genreId).then(resp => {
//             setMovieList(resp.data.results);
//         });
//     };

//     const sliderRight = () => {
//         if (elementRef.current) {
//             elementRef.current.scrollLeft += 500;
//         }
//     };

//     const sliderLeft = () => {
//         if (elementRef.current) {
//             elementRef.current.scrollLeft -= 500;
//         }
//     };

//     return (
//         <div className='relative'>
//             <IoChevronBackOutline onClick={sliderLeft} 
//                 className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute 
//                 ${index % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} 
//             />
    
//             <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4 [&::-webkit-scrollbar]:hidden'>
//                 {movieList.map((item) => (
//                     <React.Fragment key={item.id}>  
//                         {index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
//                     </React.Fragment> 
//                 ))}
//             </div>

//             <IoChevronForwardOutline onClick={sliderRight}
//                 className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 
//                 ${index % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} 
//             /> 
//         </div>
//     );
// };

// export default MovieList;
