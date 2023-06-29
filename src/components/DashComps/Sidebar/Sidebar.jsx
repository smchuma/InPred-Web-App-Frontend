import {
  Box,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { TbAnalyze } from "react-icons/tb";
import { MdOutlineAutoGraph } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/HI";
import logo2 from "../../../assets/logo2.png";
import logo from "../../../assets/logo.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      icon: <Icon as={AiOutlineHome} boxSize={6} />,
      title: "Home",
      path: "/dashboard",
    },
    {
      id: 2,
      icon: <Icon as={TbAnalyze} boxSize={6} />,
      title: "Analyze",
      path: "/dashboard/analyze",
    },

    {
      id: 4,
      icon: <Icon as={MdOutlineAutoGraph} boxSize={6} />,
      title: "Visualize",
      path: "/dashboard/visualize",
    },
    {
      id: 5,
      icon: <Icon as={HiOutlineDocumentReport} boxSize={6} />,
      title: "Report",
      path: "/dashboard/reports",
    },
  ];

  const sideHover = useColorModeValue("#dee0fe", "#2c2e45");
  const colorHover = useColorModeValue("#162D59", "white");
  const bg = useColorModeValue("#f2f2f2", "#282728");
  const { colorMode } = useColorMode();

  return (
    <Box
      pos="fixed"
      h="100vh"
      pt="80px"
      align="center"
      boxShadow="lg"
      bg={bg}
      w="220px"
    >
      <Box pb="40px">
        <Link to="/dashboard">
          {colorMode == "light" ? (
            <Image src={logo} boxSize="40px" objectFit="cover" />
          ) : (
            <Image src={logo2} boxSize="40px" objectFit="cover" />
          )}
        </Link>
      </Box>
      <Stack pt="20px" gap="50px">
        {links.map((link) => (
          <Link key={link.id} to={link.path}>
            <Flex
              w="100%"
              py={2}
              px={10}
              gap="20px"
              _hover={{ bg: sideHover, color: colorHover }}
              cursor="pointer"
            >
              {link.icon}
              <Text>{link.title}</Text>
            </Flex>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
