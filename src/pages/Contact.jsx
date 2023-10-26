import React, { useContext } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { InfosContext } from '../comtext/context'

export default function Contact() {
    const {Infos}=useContext(InfosContext)
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
                    Contact
                    </span>
                </div>
                {/*  */}
                <div className='flex flex-col gap-6 items-center justify-between w-[100%] my-[20px]
                sm:flex sm:flex-row sm:gap-6 sm:items-center sm:justify-between sm:w-[100%] sm:my-0 '>
                    {/* infos here */}
                    {Infos!==null &&<div className='flex-1 flex flex-col items-center sm:items-start gap-[10px] sm:gap-[20px]  '>
                        <h1 className='text-[25px] sm:text-[30px] '> Contactez-nous</h1>
                        <p className='text-center sm:text-left'>
                        Nous aimons vous entendre! Si vous avez des questions ou des requêtes,
                         remplissez simplement ce formulaire ou envoyez-nous un e-mail.
                        </p>
                        <p>{Infos.info.address}</p>
                        <p className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}>
                            <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                        </svg>
                        {Infos.info.phone}
                        </p>
                        <p className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}>
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                        </svg>
                        {Infos.info.email}
                        </p>

                    </div>}

                    {/* inputs here */}
                    <div className='flex-1'>
                        <form className='flex-1 flex flex-col items-center sm:items-start gap-[10px] sm:gap-[20px]' >
                        <input className='w-[100%] px-2 py-1 bg-zinc-200 rounded-sm' required placeholder='Nom complete' type="text" />
                        <input className='w-[100%] px-2 py-1 bg-zinc-200 rounded-sm' required placeholder='Email' type="email" />
                        <input className='w-[100%] px-2 py-1 bg-zinc-200 rounded-sm' minLength={10} maxLength={10} required placeholder='Telephone' type="text" pattern='\d*' />
                        <textarea required className='w-[100%] px-2 py-1 bg-zinc-200 rounded-sm' placeholder='Message'
                        name="" id="" cols="30" rows="10"></textarea>
                        <input className=' bg-zinc-950 text-white w-[100%] py-2 rounded-md
                        cursor-pointer hover:bg-zinc-700 '  type="submit" value="Envoyer" />

                        </form>
                    </div>
                    
                
                </div>
                <div className='flex flex-col gap-6 items-center justify-between w-[100%] my-[20px]
                sm:flex sm:flex-row sm:gap-6 sm:items-center sm:justify-between sm:w-[100%] sm:my-0 '>

                {Infos !==null && <iframe src={`https://maps.google.com/maps?q=${Infos.info.lating},${Infos.info.lnging}&hl=es;&output=embed`}
                style={{border:0}} allowFullScreen="" className='w-[100%] h-[60vh] '
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                </div>
        
        
        
    </div>
    </div>
        <Footer />
    </div>
  )
}
