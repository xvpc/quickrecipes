import React from 'react'

// Components
import Introduction from '../sections/Introduction'
import Search from '../sections/Search'


export default function Home() {

    return (
        <div className='d-flex flex-column justify-content-between text-center algin-items-center gap-5'>
            <Introduction home />
            <Search />
        </div>
    )
}
