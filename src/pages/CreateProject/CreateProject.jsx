import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import power from "../../assets/robot.png";
import { Link, useNavigate } from "react-router-dom";
import useProject from "../../hooks/useProject";
import { PREDICTION_URL } from "../../API_URL/api";
import axios from "axios";

const PREDICTION = PREDICTION_URL;

const CreateProject = () => {
  const [stage, setStage] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [fileData, setFileData] = useState("");
  const [loading, setLoading] = useState(false);
  const { createProject } = useProject();
  const navigate = useNavigate();

  const handleNextClick = async (e) => {
    e.preventDefault();

    if (stage === 0) {
      setStage(1);
    } else if (stage === 1) {
      setLoading(true);

      try {
        const predictionResponse = await axios.post(PREDICTION, { fileData });
        const predictionResults = predictionResponse?.data?.response;

        const projectData = {
          title: projectName,
          sentimentResults: predictionResults,
        };
        const createdProject = await createProject.mutateAsync(projectData);

        if (createdProject && createdProject._id) {
          navigate(`/projects/${createdProject._id}`);
        }
        setProjectName("");
        setFileData("");
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleBackClick = () => {
    setStage(0);
  };

  return (
    <Stack
      color="white"
      h="100vh"
      bgGradient="linear(to-b, #0D0D0D, #010B40)"
      w="100%"
      direction="row"
    >
      <Flex flex="1">
        <Stack
          p={8}
          py="150px"
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.2) 0px 4px 12px"
          w="80%"
        >
          <Link to="/projects">
            <Button mb={5} w="100px">
              Go Back
            </Button>
          </Link>
          <Box textAlign="center">
            <Text pb="2px" fontSize="2xl">
              Intelligent Customer Prediction <br /> Simplified with inPred.
            </Text>
            <Text mt={2} fontSize="sm" color="gray.100">
              Seamless Insights from Data to Decisions - Just Enter Your Model
              Name and Data url
            </Text>
          </Box>
          <Stack
            mt={5}
            mb={10}
            transition="
      opacity 0.3s ease-in-out,
    
    "
          >
            <AnimatePresence>
              {stage === 0 && (
                <motion.div
                  key="stage-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <FormControl>
                    <FormLabel>Model Name</FormLabel>
                    <Input
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    mt="20px"
                    onClick={handleNextClick}
                    disabled={!projectName}
                  >
                    Next
                  </Button>
                </motion.div>
              )}

              {stage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <FormControl>
                    <FormLabel>Give {projectName} your data</FormLabel>
                    <Input
                      value={fileData}
                      onChange={(e) => setFileData(e.target.value)}
                    />
                  </FormControl>
                  <Flex mt="20px" gap={5}>
                    <Button isLoading={loading} onClick={handleNextClick}>
                      Submit
                    </Button>
                    <Button
                      w="100px"
                      variant="unstyled"
                      borderWidth={2}
                      onClick={handleBackClick}
                    >
                      Back
                    </Button>
                  </Flex>
                </motion.div>
              )}
            </AnimatePresence>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex="1"
        display={{ base: "none", md: "flex" }}
        justify="center"
        align="center"
      >
        <Box w="80%">
          <Image src={power} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default CreateProject;
