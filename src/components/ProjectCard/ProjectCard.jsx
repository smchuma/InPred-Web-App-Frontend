import { Box, Button, Stack } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import useProject from "../../hooks/useProject";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { deleteProject } = useProject();

  const handleDelete = async () => {
    try {
      await deleteProject.mutate(project._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      borderBottom="1px solid  #333333"
      direction="row"
      justify="space-between"
      pb={2}
    >
      <Link to={`/projects/${project._id}`}>
        <Box>{project.title}</Box>
      </Link>
      <Button
        _hover={{ color: "red" }}
        onClick={handleDelete}
        variant="unstyled"
      >
        <AiFillDelete size={20} />
      </Button>
    </Stack>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
