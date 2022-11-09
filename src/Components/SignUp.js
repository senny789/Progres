import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Image,
  Grid,
  Input,
  Button,
} from "@chakra-ui/react";
export const SignUp = () => {
  return (
    <Box>
      <Heading fontStyle="italic" padding="1em">
        Progres
      </Heading>
      <Flex padding="8em" alignItems="center" justify="center">
        <Flex direction="column" gap="1em">
          <Heading fontSize="64px">SignUp</Heading>

          <Box
            border="3px solid black"
            borderRadius="1.5em"
            padding="0.2em 10em 0.5em 0.5em"
          >
            <Text fontSize="12px">Username</Text>
            <Input
              padding="0"
              fontSize="12px"
              placeholder="Enter Username"
              focusBorderColor="transparent"
              border="none"
              w="100%"
              size="100"
            ></Input>
          </Box>
          <Box
            border="3px solid black"
            borderRadius="1.5em"
            padding="0.2em 2em 0.5em 0.5em"
          >
            <Text fontSize="12px">Password</Text>
            <Input
              padding="0"
              fontSize="12px"
              placeholder="Enter Password"
              border="none"
              focusBorderColor="transparent"
              type="password"
              size="50"
            ></Input>
          </Box>
          <Box
            border="3px solid black"
            borderRadius="1.5em"
            padding="0.2em 2em 0.5em 0.5em"
          >
            <Text fontSize="12px">Confirm Password</Text>
            <Input
              padding="0"
              fontSize="12px"
              placeholder="Confirm  Password"
              border="none"
              focusBorderColor="transparent"
              type="password"
              size="50"
            ></Input>
          </Box>
          <Button
            background="none"
            border="3px solid black"
            borderRadius="1.5em"
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
