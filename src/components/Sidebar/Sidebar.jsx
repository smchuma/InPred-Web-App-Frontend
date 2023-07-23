import { Avatar, Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
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
      name: "Models",
      path: "/projects",
      icon: <Icon as={FaBrain} boxSize={7} />,
      id: 1,
    },
    {
      name: "Settings",
      path: "/projects",
      icon: <Icon as={AiOutlineSetting} boxSize={7} />,
      id: 2,
    },
    {
      name: "Logout",
      path: "",
      icon: <Icon as={AiOutlineLogout} boxSize={7} />,
      id: 3,
      func: signOut,
    },
  ];

  return (
    <Box w="100%">
      <Flex>
        <Link to="/projects">
          <Text mx="15px" my="10px" p="20px" fontSize="2xl" fontWeight="bold">
            inPred.
          </Text>
        </Link>
      </Flex>
      <Flex
        borderBottom="1px solid  #333333"
        pb={5}
        justify="center"
        align="center"
        mt={5}
      >
        <Avatar name={user?.email} boxSize="40px" />
        <Text fontSize="20px" ml="10px">
          {userName}
        </Text>
      </Flex>
      <Stack mt={5} gap="10px">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Flex
              align="center"
              borderRadius="10px"
              cursor="pointer"
              justify="center"
              gap={3}
              onClick={link.func}
              p="10px"
              _hover={{
                background: "blue.600",
              }}
            >
              {link.icon}
              <Text fontSize="lg" fontWeight="bold">
                {link.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
