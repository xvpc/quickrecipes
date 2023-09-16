import React, { useEffect } from 'react'

// NextJs
import { useRouter } from 'next/router'

// Lib
import getRandom from '@/lib/getRandom'


// Components
import Layout from '@/components/Layout'

export default function Random(){
    const router = useRouter()

    useEffect(() => {
        (async() => {
            const data = await getRandom();
            if(data?.error){
                router.replace(`/`)
            }else{
                router.replace(`/recipes/${data}`)
            }
        })()
    }, [])
    
    return (
        <Layout>
            <h1 className='fw-bold text-center'>Loading Recipe..</h1>
        </Layout>
    )
}
