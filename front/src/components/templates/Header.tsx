import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import Logo from '../atoms/Logo';
import TopMenu from "../molecules/TopMenu";

const Header = () => {
  return (
    <>
      <Box bg='blue.300' w='100%' p={2} color='white' opacity={0.5} >
        <Flex>
          <Box p={3}>
            <Logo />
          </Box>
          <Box marginRight='0' marginLeft='auto' display='block'>
            <TopMenu />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Header;