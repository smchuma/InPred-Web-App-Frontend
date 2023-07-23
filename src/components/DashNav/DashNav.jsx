/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const DashNav = ({ width }) => {
  const { logout } = useAuth();
  const { user } = useUser();
  const userEmail = user?.email;

  function extractNameFromEmail(email) {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      const name = email.slice(0, atIndex);
      return name.charAt(0).toUpperCase() + name.slice(1);
    } else {
      // Return the whole email if the "@" symbol is not present (handle error case)
      return email;
    }
  }

  const userName = userEmail ? extractNameFromEmail(userEmail) : null;

  const signOut = () => {
    logout();
  };

  const links = [
    {
      id: 1,
      title: "Account Settings",
    },
    {
      id: 2,
      title: "Help Center",
    },
    {
      id: 3,
      title: "Contact Support",
    },
    {
      id: 4,
      title: "Logout",
      func: signOut,
    },
  ];

  return (
    <Stack
      direction="row"
      color="white"
      align="center"
      justify="space-between"
      px="20px"
      py={4}
      pos="fixed"
      bg="#0D0D0D"
      borderBottom="1px solid #454545"
      w={{ base: "100%", md: width }}
      zIndex="1"
      top="0"
    >
      <Link to="/projects">
        <Box>
          <Text fontSize="25px" fontWeight="bold">
            {userName}
          </Text>
        </Box>
      </Link>

      <Flex align="center" gap="20px">
        <Menu>
          <MenuButton>
            <Avatar name={user?.email} mr="30px" boxSize="50px" />
          </MenuButton>

          <MenuList borderWidth="0px" bg="#222222" align="center">
            <Flex p="20px" align="center" gap={5}>
              <Text>Trial</Text>
              <Button w="100%" variant="unstyled" bg="#6A6DA6" color="white">
                Upgrade
              </Button>
            </Flex>
            <MenuItem bg="transparent">
              <Flex align="center">
                <Avatar name={user?.email} boxSize="40px" />
                <Text fontSize="20px" ml="10px">
                  {userName}
                </Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            {links.map((link) => (
              <Box key={link.id}>
                <MenuItem
                  _hover={{ bg: "white", color: "black" }}
                  bg="transparent"
                  onClick={link.func}
                >
                  {link.title}
                </MenuItem>
              </Box>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Stack>
  );
};

export default DashNav;
