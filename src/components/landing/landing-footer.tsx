import Image from 'next/image'
import React from 'react'

const LandingFooter = () => {
  return (
    <div className='w-full relative'>
        <Image
            alt="Hero Image"
            src="/Active-Wear-Banner-3.webp"
            width={1920}
            height={800}
        />
    </div>
  )
}

export default LandingFooter