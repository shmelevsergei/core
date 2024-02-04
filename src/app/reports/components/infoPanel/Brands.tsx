import React from 'react'
import Image from 'next/image'

import brands from '/public/brands-montes.jpg'

const Brands = () => {
    return <Image src={brands} alt={'Брэнды'} />
}

export default Brands
