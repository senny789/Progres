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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Tasks = () => {
  return (
    <Box padding="1em">
      <Heading fontSize="86px">Tasks</Heading>

      <Text width="600px" fontSize="1em">
        Here you can see your tasks by going on to each links below where you
        will be provided to add and edit tasks.
      </Text>
      <UnorderedList
        fontSize="1.5em"
        fontWeight="bold"
        spacing={5}
        padding="2em"
      >
        <Link to="/ln/taskDetails">
          {" "}
          <ListItem>Daily Tasks</ListItem>
        </Link>
        <ListItem>Weekly Tasks</ListItem>
        <ListItem>Monthly Tasks</ListItem>
        <ListItem>Yearly Tasks</ListItem>
      </UnorderedList>
    </Box>
  );
};
