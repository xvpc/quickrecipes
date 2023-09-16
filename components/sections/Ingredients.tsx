import React from 'react'

// Framer motion
import { motion } from 'framer-motion'


type IngredientsProps = {
    ingredients: string[]
}

export default function Ingredients({ingredients}: IngredientsProps) {

    return (
        <motion.section 
        className='my-5 d-flex flex-column justify-content-center algin-items-center gap-3 text-center'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.8, delay: 0.7}}
        >
            <h2 className='fw-bold text-dark-emphasis'>Ingredients</h2>
            {ingredients?.length ?
            <ul className='container bg-white bg-opacity-50 rounded-1 overflow-hidden row row-cols-1 row-cols-sm-2 justify-content-start algin-items-center m-auto g-2 text-start p-2'>
                {
                    ingredients.map((item: string, index: number) => {
                        if(item){
                            return(
                                <li key={item || index} className='text-black'><span className='text-secondary'>{index+1}. </span>{item || ""}</li>
                            )
                        }
                    })
                }
            </ul> :
            <span className='fw-bold text-secondary fs-5'>No Ingredients..</span>
            }
        </motion.section>
    )
}
