import React, { useEffect, useState } from 'react'

// Bootstrap
import { Form } from 'react-bootstrap'

// Mui
import { CircularProgress } from "@mui/material"

// Components
import SearchContainer from '../SearchContainer'

// Lib
import getSearch from '@/lib/getSearch'

// Framer motion
import { motion } from 'framer-motion'

export default function Search() {
    // const [searchValue, setSearchValue] = useState<string | null>(null)
    const [searchData, setSearchData] = useState<any | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const getSearchData = async(query: string) => {
        setLoading(true)
        const data = await getSearch({query: query})
        if(data){
            setSearchData(data)
            // console.log(data)
        }
        setLoading(false)
    }

    const handleChange = async(e: any) => {
        // setSearchValue(e.target.value)
        if(e.target.value){
            await getSearchData(e.target.value)
        }else{
            setSearchData(null)
        }
    }

    useEffect(() => {
        (async() => {
            await getSearchData("cake")
        })()
    }, [])

    return (
        <motion.section 
        id="search" 
        className='mt-5 px-0 py-5 d-flex flex-column justify-content-between algin-items-center gap-5'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1, delay: 1.3}}
        >
            <div className='px-3'>
                <h2 className='fw-bolder text-black'>Search For A Recipe</h2>
            </div>
            <div className='container px-1 d-flex flex-column justify-contnet-center algin-items-center gap-4'>
                <Form.Control
                    defaultValue="cake"
                    onChange={handleChange}
                    style={{maxWidth: 560}}
                    type="search"
                    placeholder='Search..'
                    className='shadow-none border-secondary border-opacity-50 m-auto shadow'
                />
                <div style={{minHeight: 260}} className='w-100 py-4 rounded '>
                    {
                        loading ?
                        <div className='my-5 mx-1'>
                            <CircularProgress />
                        </div> :

                        searchData ?
                        searchData?.error ?
                        <div className='my-5 mx-1'>
                            <h2 className='text-danger fw-bold'>{searchData.error}</h2>
                        </div> :

                        <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 justify-content-center algin-items-center row-cols-lg-4 gx-2 gy-3 gy-md-4 gx-md-3'>
                            {
                                searchData.map((item: any, index: number) => (
                                    <SearchContainer 
                                    key={item.idMeal || index} 
                                    id={item.idMeal} 
                                    name={item.strMeal} 
                                    image={item.strMealThumb}
                                    ingredients={[item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4]}
                                    />
                                ))
                            }
                        </div> : 
                        <></>
                    }
                    
                </div>
            </div>
        </motion.section>
    )
}
