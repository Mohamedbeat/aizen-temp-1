import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Mescommandes() {
  return (
    <div className=''>
        <Header />
        <div className='w-[100%] mt-[50px] sm:mt-[76px] py-3 flex flex-col items-center  '>
            
            <div className='w-[100%] flex flex-col items-center p-3
            sm:flex sm:flex-col sm:items-center sm:w-[100%] sm:max-w-[1024px] sm:py-2 sm:text-black sm:font-semibold
            sm:gap-[50px] '>
                {/* where we are */}
                <div className='w-[90%] sm:border-b-2 flex items-center justify-start gap-4 
                sm:w-[100%] sm:flex sm:items-center sm:justify-start sm:gap-8 sm:pb-3 '>
                    <span>
                    <Link to={'/home'} >Acceuil</Link>
                    </span>
                    <span>
                     / 
                    </span>
                    <span>
                    Mes commandes
                    </span>
                </div>
                {/*  */}
                <div className='flex flex-col gap-6 items-center justify-center h-[60vh] '>
                    
                    <h1 className='
                    text-[20px] sm:font-bold '>Suivi ma commande</h1>

                    <p className='text-center'
                    >Inserer le numéro de traçage pour consulter la progression de la commande</p>
                    <div className='flex items-start gap-3 '>
                      <input className='w-[100%] px-2 py-1 bg-zinc-400 rounded-sm' type="text" />

                      <button className='flex items-center justify-center bg-zinc-950
                      text-white px-3 py-1 rounded-sm hover:bg-zinc-700 '>Voir</button>
                    </div>
                
                </div>
    
        
        
        
    </div>
    </div>
        <Footer />
    </div>
  )
}
