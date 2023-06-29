import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Distribution = () => {
  const labelColor = useColorModeValue("black", "white");
  const positiveColor = useColorModeValue("#4299E1", "#5FB7F2");
  const negativeColor = useColorModeValue("#d53f3f", "#f68787");
  const neutralColor = useColorModeValue("#ECC94B", "#F6E05E");
  const bg = useColorModeValue("#f2f2f2", "#282728");

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment Distribution",
        data: [1675, 678, 214],
        backgroundColor: [positiveColor, negativeColor, neutralColor],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: labelColor,
        },
      },
    },
    elements: {
      arc: {
        borderColor: useColorModeValue("white", "gray.200"),
      },
      point: {
        borderWidth: 0,
      },
    },
    scales: {
      r: {
        grid: {
          color: useColorModeValue(
            "rgba(0, 0, 0, 0.1)",
            "rgba(255, 255, 255, 0.1)"
          ),
        },
        pointLabels: {
          font: {
            weight: "normal",
          },
          color: labelColor,
          backdropColor: "transparent", // Set the backdrop color of the labels to transparent
        },
      },
    },
  };

  return (
    <Box bg={bg} w="100%" p={5} borderRadius="20px">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Sentiment Distribution
      </Text>
      <Center>
        <PolarArea
          data={data}
          options={chartOptions}
          width={300}
          height={300}
        />
      </Center>
    </Box>
  );
};

export default Distribution;
