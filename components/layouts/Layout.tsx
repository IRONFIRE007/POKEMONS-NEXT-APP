import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface  Props {
    title?: string;
}

export const Layout: FC<Props> =  ({children, title }) => {
  return (
    <>
     
      <Head>
          <title>{title || 'Pokemon App'}</title>
          <meta name="Author" content="Luis Agamez"/>
          <meta name="description" content="Information about Pokemon XXXX"/>
          <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
      </Head>

     
      <Navbar/>

       <main style={{padding:'0px 20px',}}>
           {children}
       </main>
    
    </>
  )
}
