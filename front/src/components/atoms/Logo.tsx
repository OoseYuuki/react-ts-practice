import React from "react";
import { Image } from '@chakra-ui/react'
import logoImage from '../../assets/logo.jpg'

const Logo = () => {
  return (
    <>
      <Image
        boxSize='50px'
        objectFit='cover'
        src={logoImage}
        alt='logo image'
      />
    </>
  )
}

export default Logo;