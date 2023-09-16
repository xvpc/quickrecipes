import React from 'react'

// NextJs
import Link from 'next/link'

// Lib
import ImageHolder from '@/lib/ImageHolder'

// Mui
import { Button } from '@mui/material'

export default function Header() {

    return (
        <header className='container-fluid px-0 bg-black'>
            <nav className='container py-2 d-flex flex-row flex-wrap justify-content-between align-items-center gap-4'>
                <div style={{maxWidth: 40, maxHeight: 40}} className='rounded overflow-hidden'>
                    <ImageHolder img="/images/placeholder2.png" title="Icon" />
                </div>
                <div className='d-flex flex-row justify-content-center algin-items-center gap-2'>
                    <Link href="/">
                        <Button className='py-1 px-2' variant="text" color="info">Home</Button>
                    </Link>
                    <Link href="/random">
                    <Button className='py-1 px-2' variant="text" color="secondary">Random</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
