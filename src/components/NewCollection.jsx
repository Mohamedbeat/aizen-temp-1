import React from 'react'
import landing_img1 from './landing_img1.jpg'
import { Link } from 'react-router-dom'

export default function NewCollection() {
  return (
    <div className=' flex flex-col items-center overflow-hidden  sm:py-[50px]'>
        <div className='w-[100%]  text-black flex flex-col items-center gap-[20px]
        sm:flex sm:flex-col sm:items-center sm:w-[100%] sm:max-w-[1024px] sm:py-2 sm:text-black sm:font-bold
        sm:gap-[50px]'>


            <div className='w-[100vh] h-[100%] overflow-hidden relative sm:rounded-lg
            sm:w-[100%] sm:h-[100%] sm:overflow-hidden sm:relative   '>
                <img src={landing_img1} alt="" className='w-[100%] h-[100%] object-cover
                sm:w-[100%] sm:h-[100%] sm:object-cover ' />

                <div className=' bg-slate-500 bg-opacity-20 backdrop-blur-sm p-7 rounded-md
                absolute z-[3] top-[30%] left-[33%] flex flex-col gap-7 
                sm:left-[30%] '>
                    <h1 className=' text-white text-[30px] font-bold
                    sm:text-white sm:text-[50px]
                    '>Collection name</h1>
                    <button>
                        <Link className=' text-white bg-zinc-950 p-3 rounded-md font-semibold 
                        hover:bg-zinc-700 '>
                        Acheter maintenant
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
