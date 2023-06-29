import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useState } from "react";

const AnalyzeCard = () => {
  const { id } = useParams();
  const bg = useColorModeValue("white", "#181818");
  const [name, setName] = useState("");
  const [excludedKeywords, setExcludedKeywords] = useState([]);
  const [currentExcludedKeyword, setCurrentExcludedKeyword] = useState("");

  const featureDetails = {
    monitor: {
      title: "Monitor your brand",
      inputLabel: "Brand name",
    },
    "influencer-search": {
      title: "Influencer Search",
      inputLabel: "influencer name",
    },
    "competitive-analysis": {
      title: "Competitive Analysis",
      inputLabel: "brand name",
    },
    "topic-research": {
      title: "Topic Research",
      inputLabel: "Topic keywords",
    },
  };

  const feature = featureDetails[id];

  if (!feature) {
    // Handle invalid feature id
    return <div>Invalid feature</div>;
  }

  const handleExcludedKeywordAdd = () => {
    if (currentExcludedKeyword.trim() !== "") {
      setExcludedKeywords([...excludedKeywords, currentExcludedKeyword]);
      setCurrentExcludedKeyword("");
    }
  };

  const handleExcludedKeywordRemove = (index) => {
    const updatedExcludedKeywords = [...excludedKeywords];
    updatedExcludedKeywords.splice(index, 1);
    setExcludedKeywords(updatedExcludedKeywords);
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   console.log("Keywords:", name);
  //   console.log("Excluded Keywords:", excludedKeywords);
  // };

  return (
    <Stack bg={bg} justify="center" w="100%" h="100vh" align="center">
      <Stack
        align="center"
        boxShadow="rgba(0, 0, 0, 0.2) 0px 4px 12px"
        mt="20px"
        w="50%"
        gap="20px"
        pb="150px"
      >
        <Text fontSize="30px">{feature.title}</Text>
        <Box>
          <Text>{`Add ${feature.inputLabel}`}</Text>
          <Input
            variant="unstyled"
            border="1px solid gray"
            p="10px"
            mt="10px"
            w="500px"
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mt="20px">
          <FormLabel>Excluded keywords</FormLabel>
          <Text>Exclude words and phrases for more accurate results</Text>
          <Input
            variant="unstyled"
            border="1px solid gray"
            p="10px"
            mt="10px"
            w="500px"
            type="email"
            value={currentExcludedKeyword}
            onChange={(e) => setCurrentExcludedKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleExcludedKeywordAdd();
              }
            }}
          />
        </Box>
        <Flex flexWrap="wrap" mt="10px">
          {excludedKeywords.map((keyword, index) => (
            <Tag
              key={index}
              size="lg"
              variant="subtle"
              colorScheme="red"
              borderRadius="full"
              m="2px"
            >
              <TagLabel>{keyword}</TagLabel>
              <TagCloseButton
                onClick={() => handleExcludedKeywordRemove(index)}
              />
            </Tag>
          ))}
        </Flex>
        <Flex w="100%" align="center" justify="space-between">
          <Link to="/dashboard/analyze">
            <Button variant="outlined">Go Back</Button>
          </Link>
          <Button mt="20px" w="20%" colorScheme="teal">
            Search
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default AnalyzeCard;
