import React, { useEffect, useState } from 'react'

// NextJs
import { GetStaticPropsContext, GetServerSidePropsContext } from 'next'
import { useRouter, withRouter } from 'next/router'

// Components
import Layout from '@/components/Layout'
import Info from '@/components/pages/Info'

// Lib
import getInfo from '@/lib/getInfo'

function InfoPage({ router }: { router : any}) {
    // const router = useRouter();
    const [data, setData] = useState<any>(null)

    const id = router.query?.id || null;
    
    // TODO: Fix this shit
    useEffect(() => {
        if(id){
            (async() => {
                try{
                    const data = await getInfo({id: String(id)})

                    if(data?.error){
                        console.log(`Error message => ${data?.error}`)
            
                        // router.push('/404')
                    }else{
                        setData(data)
                    }
                }catch(err: any){
                    console.log(`Error from useEffect ${err.message}`)
            
                    router.push('/')
                }
            })()
        }
    }, [])
    
    return (
        <Layout title=''>
            <Info data={data} />
        </Layout>
    )
}

export default withRouter(InfoPage)

// export async function getStaticPaths(){
//     return{
//         paths: [],
//         fallback: "blocking"
//     }
// }

// export async function getServerSideProps(context: GetServerSidePropsContext){
//     const id = context.params?.id as string;

//     // 
//     try{
//         const data = await getInfo({id: id})
//         if(data?.error){
//             console.log(`Error message => ${data?.error}`)

//             return { 
//                 notFound: true
//             };
//         }else{
//             // console.log(data)

//             return { 
//                 props: {
//                     data: data // Returns first meal (Object)
//                 }
//             };
//         }
//     }catch(err: any){
//         console.log(`Error from getStaticProps ${err.message}`)

//         return { 
//             notFound: true
//         };
//     }
// }
