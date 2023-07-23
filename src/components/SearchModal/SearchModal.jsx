import { Box, Button, Flex, Icon, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useProject from "../../hooks/useProject";

const SENTIMENT = "";

const SearchModal = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { createProject } = useProject();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const sentimentResponse = await axios.post(SENTIMENT, { text: title });
      const sentimentResults = sentimentResponse?.data?.response;

      const projectData = {
        title: title,
        sentimentResults: sentimentResults,
      };
      const createdProject = await createProject.mutateAsync(projectData);

      if (createdProject && createdProject._id) {
        navigate(`/projects/${createdProject._id}`);
      }
      setTitle("");
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Stack>
      <Box>
        <Input
          variant="unstyled"
          border="1px solid gray"
          p="10px"
          mt="10px"
          type="text"
          value={title}
          placeholder="Enter your brand"
          _placeholder={{
            color: "#9d9d9d",
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Flex mt="0px" w="100%" align="center" justify="space-between">
        <Button
          _hover={{
            transform: "scale(1.02)",
          }}
          w="100%"
          mt="20px"
          onClick={handleSubmit}
          isLoading={loading}
        >
          <Icon mr={1} as={IoMdAddCircle} boxSize={7} />
          create
        </Button>
      </Flex>
    </Stack>
  );
};

export default SearchModal;
