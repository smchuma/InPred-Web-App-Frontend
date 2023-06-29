import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { BsMoon, BsSun } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const DashNav = () => {
  const { logout } = useAuth();
  const { user } = useUser();
  const { colorMode, toggleColorMode } = useColorMode();
  const sideHover = useColorModeValue("#dee0fe", "#2c2e45");
  const colorHover = useColorModeValue("#162D59", "white");
  const bg = useColorModeValue("#f2f2f2", "#181818");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1) 0px 2px 4px",
    "rgba(255, 255, 255, 0.1) 0px 2px 4px"
  );

  const signOut = () => {
    logout();
  };

  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
      px="20px"
      py={4}
      pos="fixed"
      boxShadow={boxShadowColor}
      w="calc(100% - 220px)"
      zIndex="1"
      top="0"
      bg={bg}
      ml="220px"
    >
      <Flex align="center" cursor="pointer">
        <Text fontSize="18px">Dashboard</Text>
      </Flex>

      <Flex align="center" gap="20px">
        <Icon as={IoMdNotificationsOutline} boxSize={6} />
        <Button w="125px" variant="unstyled" bg="#6A6DA6" color="white">
          Upgrade Now
        </Button>

        <Button variant="unstyled" onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Icon mt="8px" as={BsMoon} boxSize={5} color="black" />
          ) : (
            <Icon mt="8px" as={BsSun} boxSize={5} color="white" />
          )}
        </Button>

        <Menu>
          <MenuButton>
            <Avatar name={user.email} mr="30px" boxSize="50px" />
          </MenuButton>

          <MenuList align="center" bg={bg}>
            <MenuItem bg={bg}>
              <Flex align="center">
                <Avatar name={user.email} boxSize="50px" />
                <Text ml="10px">{user.email}</Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem _hover={{ bg: sideHover, color: colorHover }} bg={bg}>
              Account setting
            </MenuItem>
            <MenuItem _hover={{ bg: sideHover, color: colorHover }} bg={bg}>
              Help center
            </MenuItem>
            <MenuItem _hover={{ bg: sideHover, color: colorHover }} bg={bg}>
              Contact support
            </MenuItem>
            <MenuItem
              _hover={{ bg: sideHover, color: colorHover }}
              bg={bg}
              onClick={signOut}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Stack>
  );
};

export default DashNav;
