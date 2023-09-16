import React from 'react'

// NextJs
import Image from 'next/image'


type ImageHolderProps = {
    img: string,
    title?: string,
    network?: boolean
}

export default function ImageHolder({ img, title, network }: ImageHolderProps) {

    if(!network && process.env.NODE_ENV == 'production'){
        return (
            <Image className='img-fluid h-100 remove-selecting' src={`.${img}`} alt={title || 'Image placeholder'} height={720} width={1080} />
        )
    }else{
        return (
            <Image className='img-fluid h-100 remove-selecting' src={img} alt={title || 'Image placeholder'} height={720} width={1080} />
        )
    }
}
