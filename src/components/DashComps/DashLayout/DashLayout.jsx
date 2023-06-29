import { Outlet } from "react-router-dom";
import DashNav from "../DashNav/DashNav";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

const DashLayout = () => {
  return (
    <>
      <DashNav />
      <Flex>
        <Sidebar />
        <Box mt="80px" w="100%" ml="220px">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default DashLayout;
