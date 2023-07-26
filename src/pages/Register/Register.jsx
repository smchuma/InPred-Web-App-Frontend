import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../Formik/TextField";
import { BASEURL } from "../../API_URL/api";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Footer, Navbar } from "../../components";

const Register = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const { email, password } = values;

    try {
      await axios.post(
        `${BASEURL}/register`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      navigate("/login");
      actions.resetForm();
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg(
          "No Server Response. Please check your internet connection and try again"
        );
      } else if (err.response?.status === 400) {
        setErrMsg(
          "Email already exists. Please use a different email or login"
        );
      } else if (err.response?.status === 409) {
        setErrMsg("Email already exists. Please use a different email");
      } else {
        setErrMsg(
          "Register Failed. Please check your credentials and try again"
        );
      }
      setLoading(false);
      console.log(loading);
    }
  };

  return (
    <>
      <Navbar />
      <Stack
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        justify="center"
        align="center"
        h="80vh"
        w="100%"
        mt="80px"
        bgGradient="linear(to-b, #0D0D0D, #010B40)"
      >
        <Stack
          align="center"
          w={{ base: "400px", md: "500px" }}
          p="80px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          bg="transparent"
          color="white"
          borderRadius="20px"
        >
          <Text fontSize="30px">Start your free trial today.</Text>
          <Text mb={5}>Easy set-up, no credit card required.</Text>
          <Box w="100%">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Please enter a valid email address")
                  .required("email required"),
                password: Yup.string()
                  .required("Password is required")
                  .matches(
                    passwordRegex,
                    "Please enter strong password, 8 characters"
                  ),
              })}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <VStack as="form" onSubmit={formik.handleSubmit} spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <TextField
                      name="email"
                      placeholder="enter email"
                      type="email"
                      w="100%"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="enter password"
                    />
                  </FormControl>

                  <Text color="red.500">{errMsg}</Text>
                  <Button
                    type="submit"
                    bg=" #6678d4"
                    color="white"
                    isLoading={loading}
                    loadingText="Loading"
                    w="100%"
                    _hover={{ transform: "scale(1.05)" }}
                  >
                    Create an account
                  </Button>
                  <Flex>
                    <Text>Already have an account? </Text>
                    <Link to="/login">
                      <Box ml={2} color="#6678d4">
                        Login
                      </Box>
                    </Link>
                  </Flex>
                </VStack>
              )}
            </Formik>
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Register;
