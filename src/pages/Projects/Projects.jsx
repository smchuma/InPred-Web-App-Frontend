import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { IoMdAddCircle } from "react-icons/io";
import { SkeletonLoader, ProjectCard } from "../../components";
import useUser from "../../hooks/useUser";
import useProject from "../../hooks/useProject";

const Projects = () => {
  const { state } = useProject();
  const { user } = useUser();

  const projects = state?.projects;
  if (!projects) return <SkeletonLoader />;

  const filteredProjects = projects.filter(
    (project) => project.userId === user?._id
  );

  return (
    <Stack
      color="white"
      h="100vh"
      bgGradient="linear(to-b, #0D0D0D, #010B40)"
      w="100%"
    >
      <Stack borderRadius="20px" h="100vh" mx="15px" my="10px" p="20px">
        <Flex
          align="center"
          borderBottom="1px solid  #333333"
          justify="space-between"
          pb={5}
        >
          <Text fontSize="20px" fontWeight="bold">
            Models
          </Text>
          <Link
            to="/projects/create"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Icon mr={1} as={IoMdAddCircle} boxSize={7} />
              create
            </Button>
          </Link>
        </Flex>
        <Stack cursor="pointer" gap={5}>
          {filteredProjects.length === 0 && (
            <Flex justify="center" p={10} w="100%" align="center">
              <Text color="gray" fontSize="20px" fontWeight="bold">
                Looks a bit empty here, click create to get started
              </Text>
            </Flex>
          )}
          {filteredProjects.map((project) => (
            <Box key={project._id}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Projects;
