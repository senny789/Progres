import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  ListItem,
  List,
  Button,
  UnorderedList,
  Progress,
  Tooltip,
} from "@chakra-ui/react";

export const Progression = () => {
  return (
    <Box padding="1em">
      <Heading fontSize="86px">Progression</Heading>

      <Text width="600px" fontSize="1em">
        Here you can see your overall progression of the tasks that you have
        listed and managed.
      </Text>
      <List fontSize="1.5em" fontWeight="bold" spacing={5} padding="2em">
        <ListItem>
          Daily Tasks
          <Tooltip label="80%" hasArrow bg="green.300">
            <Progress value={80} colorScheme="green" />
          </Tooltip>
        </ListItem>
        <ListItem>
          Weekly Tasks
          <Tooltip label="80%" hasArrow bg="green.300">
            <Progress value={80} colorScheme="green" />
          </Tooltip>{" "}
        </ListItem>
        <ListItem>
          Monthly Tasks
          <Tooltip label="80%" hasArrow bg="green.300">
            <Progress value={80} colorScheme="green" />
          </Tooltip>{" "}
        </ListItem>
        <ListItem>
          Yearly Tasks
          <Tooltip label="80%" hasArrow bg="green.300">
            <Progress value={80} colorScheme="green" />
          </Tooltip>{" "}
        </ListItem>
      </List>
    </Box>
  );
};
