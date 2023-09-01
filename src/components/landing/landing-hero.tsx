import Image from 'next/image'
import React from 'react'

const LandingHero = () => {
  return (
    <div className='w-full'>
        <Image
            alt="Hero Image"
            src="/hero-1.png"
            width={1920}
            height={800}
        />
    </div>
  )
}

export default LandingHero