import React from 'react'

// Framer motion
import { motion } from 'framer-motion'


type InstructionsProps = {
    instructions: string
}

export default function Instructions({ instructions }: InstructionsProps) {

    return (
        <section 
        className='mt-5 d-flex flex-column justify-content-center algin-items-center gap-3 text-center overflow-hidden'
        >
            {
                instructions ?
                <>
                    <h2 className='fw-bolder text-dark-emphasis'>How to make it?</h2>
                    <motion.p 
                    className='container p-3 text-wrap text-start text-sm-center fw-medium text-white bg-black bg-opacity-75 rounded-1 overflow-hidden'
                    initial={{y: "100px", opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                    >
                        {instructions}
                    </motion.p>
                </> :
                <div>..</div>
            }
            
        </section>
    )
}
