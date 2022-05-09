import { Spacer, useTheme,Link } from "@nextui-org/react"
import { Text } from '@nextui-org/react';
import Image from "next/image";
import NextLink from "next/link";


export const Navbar = () => {

  const {theme} = useTheme();


  return (
    <div  style={{  display: 'flex',width: '100%',flexDirection: 'row', alignItems: 'center', justifyContent: 'start', padding:'0x 20px', backgroundColor:theme?.colors.gray900.value  }}>


      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" width={100} height={100} alt="Icon App"/>
    <NextLink href="/" passHref>
   <Link>
   <Text color="white" h2>P</Text>
   <Text color="white" h2>oKemon</Text>
   </Link>
   </NextLink>
   
    <Spacer css={{flex : 1}} />

    <NextLink href="/favorites" passHref>
   <Link css={{marginRight:10}}>
   <Text color="white" h2>Favoritos</Text>
   </Link>
   </NextLink>
    

    </div>
  )
}
