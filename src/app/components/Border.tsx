import React from 'react'
import Image from 'next/image'

const Border = () => {
  return (
    <div>
      <Image 
        src="/Border.png"
        alt="Border"
        width={1920}
        height={1080}
        className="w-full h-auto z-50"
      />
    </div>
  )
}

export default Border
