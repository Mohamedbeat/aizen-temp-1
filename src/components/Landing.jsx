import React, { useContext } from 'react'
import landing_img1 from './landing_img1.jpg'
import { InfosContext } from '../comtext/context'

export default function Landing() {
  const {Infos} =useContext(InfosContext)

  return (
    <div className='overflow-hidden relative bg-zinc-200  sm:mb-[50px] '>
      <div className='w-[100vw] h-[100vh] overflow-hidden'>
        <img src={landing_img1} className='w-[100%] h-[100%] object-cover ' alt="" />
      </div>
        {Infos!==null && <h1 className='text-white z-[4] absolute top-[30%] left-[10%] text-[25px] 
        font-bold
        
        sm:text-white sm:z-[4] sm:absolute sm:top-[30%] sm:left-[27%] sm:text-[50px] 
        sm:font-bold
        ' >{Infos.slider.slider_title_b_1}</h1>}
        <button className='text-white z-[4] absolute top-[40%] left-[32%] text-[22px] 
        font-semibold rounded-lg bg-zinc-950 px-5 py-3 hover:bg-zinc-800
        
        sm:text-white sm:z-[4] sm:absolute sm:top-[50%] sm:left-[42%] sm:text-[30px] 
        sm:font-semibold sm:rounded-lg sm:bg-zinc-950 sm:px-8 sm:py-3 sm:hover:bg-zinc-700
        ' >Shop now</button>
    </div>
  )
}
