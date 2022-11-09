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
} from "@chakra-ui/react";
export const Welcome = () => {
  return (
    <Box padding="1em">
      <Heading fontSize="86px">
        Welcome to <br></br>
        <Box as="span" fontStyle="italic">
          Progres.
        </Box>
      </Heading>
      <Text fontSize="54px" fontStyle="italic">
        {" "}
        A place where you complete<br></br> what you start.
      </Text>
      <Text width="600px">
        Progress is a platform that allows you to list out your tasks at hand
        and gives you the ability to assign time and progression details to your
        tasks. Its a platform where you are able to plan out your tasks in a
        efficent and easy manner
      </Text>
      <Button
        margin="1em"
        background="none"
        border="3px solid black"
        borderRadius="1.5em"
      >
        Get Started
      </Button>
    </Box>
  );
};
