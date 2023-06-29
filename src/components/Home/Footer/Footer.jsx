/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
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
    {
      id: 5,
      name: "Book a Demo",
      path: "",
    },
  ];
  return (
    <>
      <Stack
        bgGradient="linear(to-b, #010B40, #0D0D0D )"
        color="white"
        p={12}
        w="100%"
        h="35vh"
      >
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Flex flex="1.2">
            <Box>
              <Link to="/">
                <Flex gap={2} fontWeight="bold" align="center">
                  <Image src={logo} boxSize="30px" objectFit="cover" />
                  <Text color="#0c1631" fontSize="30px">
                    SemaSenti
                  </Text>
                </Flex>
              </Link>
              <Text mt={2} fontSize="14px" textAlign="justify" lineHeight="1.1">
                At <span style={{ fontWeight: "bold" }}>InPred.</span> we
                dedicate to empower small businesses. Our goal is to provide
                accessible tools and insights that drive success in today's
                competitive landscape. With our user-friendly website tool, we
                simplify the power of data analytics, enabling small businesses
                to make informed decisions and achieve remarkable growth. Join
                us as we revolutionize the way small businesses harness the
                potential of data.
              </Text>
            </Box>
          </Flex>
          <Stack align="center" flex="2">
            <Text mt={2}>InPred.</Text>
            <Flex
              textAlign="center"
              flexDir={{ base: "column", md: "row" }}
              gap={5}
            >
              {links.map((link) => (
                <Link key={link.id} to={link.path}>
                  <Box mt={5}>{link.name}</Box>
                </Link>
              ))}
            </Flex>
          </Stack>
          <Flex flex="1">
            <Flex direction="column" align="center">
              <Text mt={2} mb={2}>
                Connect with us:
              </Text>
              <Flex mt={5} gap={5}>
                <Link href="#">
                  <Icon as={AiOutlineFacebook} boxSize={6} />
                </Link>
                <Link href="#" mr={2}>
                  <Icon as={AiOutlineLinkedin} boxSize={6} />
                </Link>
                <Link href="#" mr={2}>
                  <Icon as={RiInstagramLine} boxSize={6} />
                </Link>
                <Link href="#" mr={2}>
                  <Icon as={FiTwitter} boxSize={6} />
                </Link>
              </Flex>
              <Text mt={5} textAlign="center">
                © 2023 SemaSenti. All rights reserved.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
};

export default Footer;
