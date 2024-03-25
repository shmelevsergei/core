'use client'

import Image from 'next/image'
import React from 'react'

const CustomImage = ({src, alt} : {src: string, alt: string}) => {
  return (
    <Image
    width={200}
    height={350}
    src={src}
    alt={alt}
/>
  )
}

export default CustomImage
