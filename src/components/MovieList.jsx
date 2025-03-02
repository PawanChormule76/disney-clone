import React, { useEffect, useState, useRef } from 'react'
import GenreMovieList from './GenreMovieList'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from '../components/MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const MovieList = ({genreId,index}) => {
    
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenraId();
    },[])

    const getMovieByGenraId = () => {
        GlobalApi.getMovieByGenraId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=500;
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
            <>
          {index%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
            </>  
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList