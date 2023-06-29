import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, state } = useAuth();

  const signOut = () => {
    logout();
  };

  const links = [
    {
      id: 1,
      name: "Features",
      path: "/features",
    },
    {
      id: 2,
      name: "Pricing",
      path: "/pricing",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
  ];

  return (
    <nav>
      <Stack
        direction="row"
        align="center"
        justify="space-between"
        px="80px"
        py={5}
        pos="fixed"
        bg="#0D0D0D"
        w="100%"
        zIndex="1"
        top="0"
        color="white"
      >
        <Flex align="center" gap="50px" cursor="pointer">
          <Link to="/">
            <Text fontWeight="bold">InPred.</Text>
          </Link>
        </Flex>
        <Flex>
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <Flex cursor="pointer" gap={7}>
              {links.map((link) => (
                <NavLink key={link.id} to={link.path}>
                  <Box
                    py="7px"
                    px="12px"
                    borderRadius="20px"
                    _hover={{ bg: "#162D59", color: "white" }}
                  >
                    {link.name}
                  </Box>
                </NavLink>
              ))}
            </Flex>
          </Box>
        </Flex>

        {state.accessToken ? (
          <Flex>
            <Link to="/login">
              <Button
                variant="unstyled"
                mr="20px"
                onClick={signOut}
                display={{ base: "none", md: "none", lg: "block" }}
              >
                Logout
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant="unstyled"
                w="150%"
                borderRadius="20px"
                background="#6A6DA6"
                color="white"
                border="1px solid"
              >
                Dashboard
              </Button>
            </Link>
          </Flex>
        ) : (
          <Flex>
            <Link to="/login">
              <Button
                variant="unstyled"
                mr="20px"
                display={{ base: "none", md: "none", lg: "block" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button borderRadius="20px" background="white" border="1px solid">
                Sign up now
              </Button>
            </Link>
          </Flex>
        )}
      </Stack>
    </nav>
  );
};

export default Navbar;
