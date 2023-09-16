import React from 'react'

// NextJs
import { GetStaticPropsContext } from 'next'

// Components
import Layout from '@/components/Layout'
import Info from '@/components/pages/Info'

// Lib
import getInfo from '@/lib/getInfo'

export default function InfoPage(props: { data: any }) {
    
    return (
        <Layout title=''>
            <Info data={props.data} />
        </Layout>
    )
}

export async function getStaticPaths(){
    return{
        paths: [],
        fallback: "blocking"
    }
}

export async function getStaticProps(context: GetStaticPropsContext){
    const id = context.params?.id as string;

    // 
    try{
        const data = await getInfo({id: id})
        if(data?.error){
            console.log(`Error message => ${data?.error}`)

            return { 
                notFound: true
            };
        }else{
            // console.log(data)

            return { 
                props: {
                    data: data // Returns first meal (Object)
                }
            };
        }
    }catch(err: any){
        console.log(`Error from getStaticProps ${err.message}`)

        return { 
            notFound: true
        };
    }
}
