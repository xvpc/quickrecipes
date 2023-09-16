import React from 'react'

// NextJs
import dynamic from 'next/dynamic'

// Mui
import { useMediaQuery } from '@mui/material';

// Video Player
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type VideoProps = {
    video: string
}

export default function Video({ video }: VideoProps) {
    const matchSm = useMediaQuery('(min-width:576px)');

    return (
        <section 
        className='container d-flex flex-column justify-content-center algin-items-center text-center'
        >
            {
                video ?
                <div style={{height: matchSm ? 350 : 240}} className={matchSm ? 'w-75 m-auto' : ''}>
                    <ReactPlayer 
                    // style={{width: "100%", border: "5px solid black"}} 
                    url={video}
                    width='100%'
                    height='100%'
                    />
                </div>
                :
                <div>..</div>
            }
            
        </section>
    )
}
