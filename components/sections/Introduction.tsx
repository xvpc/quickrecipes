import React from 'react'

// Lib
import ImageHolder from '@/lib/ImageHolder'

// Mui
import { useMediaQuery } from '@mui/material';

// Framer motion
import { motion } from 'framer-motion'

// Assets
import { iconImage } from '@/utils/assets';
import { useParallax } from 'react-scroll-parallax';

type IntroductionProps = {
    title?: string, 
    country?: string,
    image?: string,
    home?: boolean
}

export default function Introduction({ title, country, image, home }: IntroductionProps) {
    const matchSm = useMediaQuery('(min-width:576px)');

    const parallax = useParallax({
        speed: 10,
        // translateX: ['0px', '0px'],
        scale: [1, 0.9],
    });

    return (
        <section 
        id="introduction" 
        className='mb-5 container mx-auto py-5 d-flex flex-row flex-wrap justify-content-center algin-items-center gap-4 overflow-hidden'
        ref={parallax.ref}
        >
            <motion.div 
            className={`order-1 rounded overflow-hidden ${home ? "shadow-lg" : "shadow"} ${matchSm ? "w-25" : ""} m-auto`}
            initial={{y: "100vh", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.7, delay: 1}}
            >
                {
                    home ?
                    <ImageHolder img={iconImage} title={'recipe1.jpg'} network /> :
                    image ?
                    <ImageHolder img={image} title={title || 'Recipe image'} network /> :
                    <ImageHolder img={'/images/placeholder2.png'} title={title || 'image placeholder'} />

                }
            </motion.div>
            <div className={`d-flex flex-column justify-content-center text-center text-sm-start algin-items-center gap-3 overflow-hidden px-2 px-sm-0 ${matchSm ? "w-50" : ""}`}>
                <motion.h1 
                className='fw-bold text-primary-emphasis'
                initial={{y: "100vh", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                >
                    {title || "Quick Recipes"}
                </motion.h1>
                <motion.p 
                className='ps-0 ps-sm-2 fw-normal text-secondary text-truncate text-wrap fs-5 w-100'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.8}}
                >
                    {country || `Search for Recipes and Learn A lot of Cool Meals,
                    and Share them with others.`}
                </motion.p>
            </div>
        </section>
    )
}
