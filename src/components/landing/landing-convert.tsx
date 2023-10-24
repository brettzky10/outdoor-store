import React from 'react'
import iceland from "@/iceland.png"
import italy from "@/italy.png"
import dubai from "@/dubai.png"
import patagonia from "@/patagonia.png"
import Image from 'next/image'

const LandingConvert = () => {
  return (
    <section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto">
                <h2 className='text-lg font-bold text-violet-500 flex justify-center'>GLOBALLY REKNOWNED</h2>
                <h1 className='flex justify-center text-4xl	text-gray-900 font-normal mb-12'>Tested in environments around the world</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 sm:w-5/6 mx-auto lg:mx-0 p-4 flex flex-col">
                        <Image className="h-auto rounded w-full object-cover object-center mb-6" src="/iceland.png" alt="content" height={300} width={200}/>
                        <h3 className="flex justify-center text-2xl">Iceland</h3>
                        <h2 className="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 flex flex-col">
                        <Image className="h-auto rounded w-full object-cover object-center mb-6" src="/italy.png" alt="content" height={300} width={200}/>
                        <h3 className="flex justify-center text-2xl">Italy</h3>
                        <h2 className="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 flex flex-col">
                        <Image className="h-auto rounded w-full object-cover object-center mb-6" src="/dubai.png" alt="content" height={300} width={200}/>
                        <h3 className="flex justify-center text-2xl">Dubai</h3>
                        <h2 className="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4 sm:w-5/6 mx-auto lg:mx-0 flex flex-col">
                        <Image className="h-auto rounded w-full object-cover object-center mb-6" src="/patagonia.png" alt="content" height={300} width={200}/>
                        <h3 className="flex justify-center text-2xl">Patagonia</h3>
                        <h2 className="flex justify-center text-base text-violet-500 mb-4">Discover</h2>
                    </div>
                </div>
            </div>
        </section >
  )
}

export default LandingConvert