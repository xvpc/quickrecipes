import React, { ReactNode } from 'react'

// NextJs
import Head from 'next/head'
import { Roboto } from 'next/font/google'

// Style
import styles from '@/styles/Home.module.css'

// Components
import Header from '@/components/Header'
import Footer from './Footer'

// Parallax
import { ParallaxProvider } from 'react-scroll-parallax'

// 
const inter = Roboto({weight: "400", subsets: ['latin'], style: "normal"})

type LayoutProps = {
    children: ReactNode,
    title?: string
}

export default function Layout({ children, title } : LayoutProps) {

    return (
        <div className=''>
            <Head>
                <title>{title || "Quick Recipes"}</title>
                    <meta name="title" content={title || "Quick Recipes"} />
                    <meta name="description" content={`Quick Recipes is a simple non-profit web application that helps with searching for Recipes/meals for personal needs or sharing them with others`} />
                    <meta name="keywords" content='food, recipe, recipes, quick recipe, quick recipes, arabic, arabic recipes, english, english recipes, american, american recipes, indian, indian recipes, canadian recipes, british, british recipes, pudding, cook, chef, youtube, video, meal, meat, suger, milk, insturctions, ingredients, turkey, chicken, oil, onion, garlic, tomato, share, cool, cool recipes, cool meals, learn, eggs, view, copy, how to make, butter, flour, pancakes, cake, banana, random, search, site, website, api, image, images, help, themealdb, themealdb.com, github, chocolate, rice, viper, dev, programmer, programming, developer, website, portfolio, fiverr, discord, github, project, anime, whatsapp, react, freelancer, front end, back end, full stack, software engineer, custom website, animation, html, css, javascript, nextjs, bootstrap, company, IT' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* ICONS */}
                    <link rel="shortcut icon" type="image/x-icon" href='./favicon/favicon.ico' />
                    <link rel="apple-touch-icon" sizes="180x180" href='./favicon/apple-touch-icon.png' />
                    <link rel="icon" type="image/png" sizes="32x32" href='./favicon/favicon-32x32.png'/>
                    <link rel="icon" type="image/png" sizes="16x16" href='./favicon/favicon-16x16.png'/>
            </Head>
            <div className='intercom-bg text-black d-flex flex-column justify-content-botween algin-items-center gap-5 min-vh-100 overflow-hidden'>
                <Header />

                <main className={`${inter.className} container-fluid px-1 mb-auto`}>
                    <ParallaxProvider>
                        {children}
                    </ParallaxProvider>
                </main>

                <Footer />
            </div>
        </div>
    )
}
