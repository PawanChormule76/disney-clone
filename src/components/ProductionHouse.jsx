import React from 'react'
import disney from '../assets/images/disney.png'
import starwar from '../assets/images/starwar.png'
import marvel from '../assets/images/marvel.png'
import nat_geo from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'

import starwarV from '../assets/videos/star-wars.mp4'
import disneyV from '../assets/videos/disney.mp4'
import nat_geoV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import marvelV from '../assets/videos/marvel.mp4'

const ProductionHouse = () => {
    const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:starwar,
            video:starwarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:nat_geo,
            video:nat_geoV
        },
        {
            id:5,
            image:pixar,
            video:pixarV
        }
    ]
  return (
    <div className='flex gap-5 p-2 px-5 md:px-16 '>
        {ProductionHouseList.map((Items) => (
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800'>
                 <video src={Items.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-80'/> 
                <img src={Items.image} className='w-[270px] h-[140px] rounded-lg z-[1] opacity-100'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse