import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import DashNav from "../DashNav/DashNav";

const DashLayout = () => {
  return (
    <>
      <Box
        w="100%"
        display={{ base: "flex", md: "none" }}
        ml={{ base: "0", md: "220px" }}
      >
        <DashNav width="calc(100% - 220px)" />
      </Box>
      <Flex>
        <Box
          bgGradient="linear(to-b, #0D0D0D, #010B40)"
          color="white"
          pos="fixed"
          left="0"
          h="100vh"
          w="220px"
          borderRight="1px solid #191919"
          display={{ base: "none", md: "flex" }}
        >
          <Sidebar />
        </Box>
        <Box
          w="100%"
          mt={{ base: "80px", md: "0px" }}
          ml={{ base: "0", md: "220px" }}
        >
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default DashLayout;
