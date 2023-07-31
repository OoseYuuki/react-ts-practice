import React from "react";
import TextLink from "../atoms/TextLink";
import { Box } from "@chakra-ui/react";

const TopMenu = () => {
  return (
    <>
      <Box display='block'>
        <TextLink to={"/"} lineHeight='60px'>トップページへ</TextLink>
        <TextLink to={"/tasks"}>タスク一覧へ</TextLink>
      </Box>
    </>
  )
}

export default TopMenu;