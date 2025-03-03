import React from 'react'
import giogp from '../assets/images/get_it_on_google_play_logo.png';
import dotas from '../assets/images/download_on_the_app_store_logo.webp';
import facebook from '../assets/images/facebook_logo.jpg'
import x from '../assets/images/x_logo.png'
const Footer = () => {
  return (
    <div className='mt-10'>
        <div className='md:flex justify-evenly gap-60'>
            <div>
                <p className='text-gray-400 font-bold text-[17px]'>Company</p>
                <p className='text-gray-500 text-[15px] mt-5 font-semibold'>About us</p>
                <p className='text-gray-500 text-[15px] mt-2 font-semibold'>Careers</p>
            </div>
            <div>
                <p className='text-gray-400 font-bold text-[17px]'>View Website in</p>
                <div className='mt-5'>
                    <img className='text-gray-500 text-[15px]'/>
                    <p className='text-gray-500 text-[15px] font-semibold'>English</p>
                </div>
            </div>
            <div>
                <p className='text-gray-400 font-bold text-[17px]'>Need Help?</p>
                <p className='text-gray-500 text-[15px] mt-5 font-semibold'>Visit Help Center</p>
                <p className='text-gray-500 text-[15px] mt-2 font-semibold'>Share Feedback</p>
            </div>
            <div>
                <p className='text-gray-400 font-bold text-[17px]'>Connect with us</p>
                <div className='flex gap-2'>
                    <img className='w-[60px] h-[30px] mt-5 bg-gray-600 rounded-full' src={facebook} alt="" />
                    <img className='w-[60px] h-[35px] mt-5 bg-gray-600 rounded-full' src={x} alt="" />
                </div>
            </div>
        </div>
        <div className='md:flex justify-between mt-9'>
            <div className='ml-[70px]'>
                <p className='text-gray-500 text-[15px]'>&copy; 2025 STAR. All Rights Reserved.</p>
                <div className='flex mt-1'>
                    <p className='text-gray-500 text-[15px] mr-5 font-semibold'>Terms Of Use</p>
                    <p className='text-gray-500 text-[15px] mr-5 font-semibold'>Privacy Policy</p>
                    <p className='text-gray-500 text-[15px] font-semibold'>FAQ</p>
                </div>
            </div>
            <div className='flex gap-5 mr-[50px] mb-10'>
                <img className='w-[125px] h-[45px]' src={giogp} alt="" />
                <img className='w-[125px] h-[45px]' src={dotas} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer