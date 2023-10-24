import React from 'react'

const LandingHero = () => {
  return (
    <div className='w-full h-[calc(100vh-5rem)]'>
           <div className="bg-cover bg-[url('/Active-Wear-Banner-4.webp')] bg-center bg-no-repeat h-full w-full" >
               <div className="container mx-auto flex flex-col my-auto align-middle h-full " >
                   <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5 md:pl-40'>
                       <h1 className="text-7xl mb-4 font-bold text-gray-300"><span className='text-violet-500 font-bold'>Gear</span> that lasts!</h1>
                       <p className="text-2xl mb-8 text-gray-300">Our gear is tested in the harshest conditions so you can do what you do best!</p>
                       <div className='flex items-center'>
                           <button className='rounded px-10 py-3 text-gray-100 font-semibold bg-violet-500 hover:bg-violet-600'>Explore</button>
                           
                       </div>


                   </div>
               </div >
           </div >
       </div>
  )
}

export default LandingHero