import Image from 'next/image'
import React from 'react'

const LandingTestimonial = () => {
  return (
    <div>
        <div className="w-full bg-cover bg-[url('/Active-Wear-Banner-1-2.webp')] bg-center bg-no-repeat h-[480px] my-20">
            <div className='max-w-2xl items-center md:left-1/2 top-28 bg-white rounded-xl container shadow-lg relative p-10'>
                
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-violet-500/25 before:via-violet-500/5 before:via-25% before:to-violet-500/0 before:to-75% before:rounded-full before:-z-10">
                            <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                            </div>
                    </div>
                    <div className="mb-9">
                        <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out">
                            <div className="text-lg font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">The ability to just put on the gear without worrying about &apos;will it last?&apos; is a game-changer. If a client ever asks what product I recommend, I always say to check out Mtn Mover.</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -m-1.5">
                        <div className="z-10">
                                        <Image className="relative top-11 rounded-full" src="/testimonial-01.jpg" width={56} height={56} alt="Testimonial 01"/>
                                    </div>
                        <button className="inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 bg-violet-500 text-white shadow-violet-950/10 h-8">
                            <span>Jim J</span> <span className="text-violet-200">--</span> <span>Outdoor Travel LTD</span>
                        </button>
                        
                    </div>
                
            </div>
            
    
</div>
</div>
  )
}

export default LandingTestimonial