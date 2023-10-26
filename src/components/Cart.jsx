import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({cartState}) {
  return (
    <>
    {cartState===true && <div id='cart' className='absolute text-black bg-white top-[100%] left-[12%] p-3 w-[300px] 
            rounded-lg flex flex-col items-start gap-5 text-[14px]
            shadow-lg
            sm:absolute sm:text-black sm:bg-white sm:top-[200%] sm:left-[12%] sm:p-3 sm:w-[300px] 
            sm:rounded-lg sm:flex sm:flex-col sm:items-start sm:gap-5 sm:text-[14px] '>
                <div className='w-[100%] flex flex-row items-center justify-between
                border-[2px] rounded-lg border-zinc-700 p-2

                sm:w-[100%] sm:flex sm:flex-row sm:items-center sm:justify-between
                sm:border-[2px] sm:rounded-lg sm:border-zinc-700 sm:p-2'>
                    <div>
                        <img src="" alt="" />
                        image here
                    </div>
                    <div>
                        <p>Item name</p>
                        <p>999999 DZD</p>
                    </div>
                    <svg className=' 
                    sm:cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" 
                    style={{fill:"black"}}  >
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                            ></path>
                    </svg>
                </div>
                <div className=' w-[100%] flex items-center justify-center
                sm:w-[100%] sm:flex sm:items-center sm:justify-center '>
                    <p >Tarif total (DZD): 99999 </p>
                </div>
                <div className=' w-[100%] flex items-center justify-center
                sm:w-[100%] sm:flex sm:items-center sm:justify-center '>
                    <Link className=' bg-zinc-950 text-white text-center py-2 w-[100%]
                    rounded-md hover:bg-zinc-700

                    sm:bg-zinc-950 sm:text-white sm:text-center sm:py-2 sm:w-[100%]
                    sm:rounded-md sm:hover:bg-zinc-700 '>
                        Commandez
                    </Link>                    
                </div>
                <div className=' w-[100%] flex items-center justify-center
                sm:w-[100%] sm:flex sm:items-center sm:justify-center '>
                    <Link className='text-center py-2 w-[100%]
                    hover:underline
                    sm:text-center sm:py-2 sm:w-[100%]
                    sm:hover:underline '>
                    Voir Le panier
                    </Link>
                </div>
            </div>}
                         </>
  )
}
