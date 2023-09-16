import React from 'react'

// NextJs
import Link from 'next/link'

// Lib
import ImageHolder from '@/lib/ImageHolder'

// Mui
import { Button, IconButton } from '@mui/material'

// Icons
import { BsSearch } from "react-icons/bs";

// Assets
import { iconImage } from '@/utils/assets';

export default function Header() {

    return (
        <header className='container-fluid px-0 bg-dark'>
            <nav className='container px-0 py-2 d-flex flex-row flex-wrap justify-content-center justify-content-sm-between align-items-center gap-5'>
                <Link href="/" style={{maxWidth: 40, maxHeight: 40}} className='bg-white rounded overflow-hidden'>
                    <ImageHolder img={iconImage} title="Site icon" network />
                </Link>
                <div className='d-flex flex-row justify-content-center algin-items-center gap-2'>
                    <Link href="/">
                        <Button className='fw-bold' variant="text" color="info">Home</Button>
                    </Link>
                    <Link href="/random">
                        <Button className='fw-bold' variant="text" color="secondary">Random</Button>
                    </Link>
                    {<IconButton href="/#search" title='Go to Search'>
                        <BsSearch color='white' size={20} />
                    </IconButton>}
                </div>
            </nav>
        </header>
    )
}
