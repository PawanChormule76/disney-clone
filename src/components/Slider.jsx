import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

function Slider(){
    const [movieList,setMovieList] = useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovie();
    },[])
    const getTrendingMovie = () => {
        GlobalApi.getTrendingMovie().then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = () => {
        if (elementRef.current) {
            const imageWidth = elementRef.current.children[0]?.clientWidth || 300; 
            elementRef.current.scrollLeft += imageWidth + 20; 
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            const imageWidth = elementRef.current.children[0]?.clientWidth || 300;
            elementRef.current.scrollLeft -= imageWidth + 20; 
        }
    };
  return (
    <div>
        <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer'/>
        <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0'/>
        <div ref={elementRef} className='flex overflow-x-auto w-full h-auto px-16 py-4 [&::-webkit-scrollbar]:hidden scroll-smooth'>
            {movieList.map((Items)=>(
                // console.log(Items.data.results)
                <img src={IMAGE_BASE_URL+Items.backdrop_path}
                className='min-w-full md:h-[310px] object-cover object-left-top -ml-0.4 mr-5 rounded-md hover:border-[2px] border-gray-400 transition-all ease-in'
                // className="min-w-screen h-auto object-cover object-center"
                />
            ))}
        </div>
    </div>
  )
}

export default Slider
