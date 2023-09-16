import React from 'react'

// NextJs
import Image from 'next/image'


type ImageHolderProps = {
    img: string,
    title?: string
}

export default function ImageHolder({ img, title }: ImageHolderProps) {

    return (
        <Image className='img-fluid h-100 remove-selecting' src={img} alt={title || 'Image Placeholder'} height={720} width={1080} />
    )
}
