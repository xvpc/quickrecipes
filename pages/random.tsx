import React, { useEffect } from 'react'

// NextJs
import { useRouter } from 'next/router'

// Lib
import getRandom from '@/lib/getRandom'

export default function Random(){
    const router = useRouter()

    useEffect(() => {
        (async() => {
            const data = await getRandom();
            if(data?.error){
                router.push(`/recipes/53022`)
            }else{
                router.push(`/recipes/${data}`)
            }
        })()
    }, [])
    
    return (
        <div></div>
    )
}
