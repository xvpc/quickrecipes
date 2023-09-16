import React from 'react'

// NextJs
import Link from 'next/link'

// Lib
import ImageHolder from '@/lib/ImageHolder'
import TextWrap from '@/lib/TextWraper'

// Mui
import { Button, Tooltip } from '@mui/material'

// Framer motion
import { motion } from 'framer-motion'


type SearchContainerProps = {
    id: string | number,
    name?: string,
    image?: string,
    ingredients?: string[],
}


export default function SearchContainer({ id, name, image, ingredients }:SearchContainerProps) {

    return (
        <Link href={`${id ? "/recipes/" + id : "#"}`}>
            <motion.div 
            className='delaclos-bg h-100 pb-2 d-flex flex-column justify-content-between algin-items-center gap-4 rounded overflow-hidden shadow'
            initial={{y: "100px", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            >
                <div className='overflow-hidden'>
                    {
                        image ?
                        <ImageHolder img={image} title={name || "recipe image"} network /> :
                        <ImageHolder img='/images/placeholder2.png' title={name || "placeholder image"} />
                    }
                </div>
                <div className='d-flex flex-column justify-content-center algin-items-center gap-2'>
                    <Tooltip title={name || ""} arrow>
                        <h3 className='fw-bold text-dark text-capitalize text-wrap text-center'>
                            {TextWrap(name as string) || "unknown"}
                        </h3>
                    </Tooltip>
                    {
                        ingredients && ingredients.length > 0 &&
                        <ul className='p-0 m-0 ps-2 d-flex flex-column justify-content-start algin-items-center text-start bg-white bg-opacity-50 text-dark'>
                            {
                                ingredients.map((item: string, index: number) => {
                                    return(
                                        <li key={item || index} className={`${index <= ingredients.length-2 ?"border-bottom border-black border-opacity-10" : ""} fw-normal text-truncate`}>{item || ""}</li>
                                    )
                                })
                            }
                        </ul>
                    }

                    <div>
                        <Link href={`${id ? "/recipes/" + id : "#"}`}>
                            <Button className='text-capitalize py-1 px-2 mt-2' variant="contained" color="success">
                                View Recipe
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
