import React, { ReactNode } from 'react'

// NextJs
import Head from 'next/head'
import { Roboto } from 'next/font/google'

// Style
import styles from '@/styles/Home.module.css'

// Components
import Header from '@/components/Header'


// 
const inter = Roboto({weight: "400", subsets: ['latin'], style: "normal"})

type LayoutProps = {
    children: ReactNode,
    title?: string
}

export default function Layout({children, title} : LayoutProps) {

    return (
        <div className=''>
            <Head>
                <title>{title || "Quick Recipes"}</title>
                <meta name="description" content={`Quick Recipes ${title || ""}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='intercom-bg text-black d-flex flex-column justify-content-botween algin-items-center gap-5 min-vh-100 overflow-hidden'>
                <Header />

                <main className={`${inter.className} container-fluid px-1 mb-auto`}>
                    {children}
                </main>

                <footer className='bg-black container-fluid '>
                <div className='container d-flex flex-row flex-wrap justify-content-center algin-items-center gap-4'>
                    <p className='p-0 m-0'>Hello world</p>
                </div>
                </footer>
            </div>
        </div>
    )
}
