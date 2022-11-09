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
import login from "../Images/Login.svg";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Link to="/">
        <Heading fontStyle="italic" padding="1em">
          Progres
        </Heading>
      </Link>
      <Flex padding="6em 0 0 6em">
        <Image src={login}></Image>
        <Flex direction="column" gap="1em" w="100%">
          <Heading>Login</Heading>

          <Box
            border="3px solid black"
            borderRadius="1.5em"
            w="75%"
            padding="0.2em 2em 0.5em 0.5em"
          >
            <Text fontSize="12px">Username</Text>
            <Input
              padding="0"
              fontSize="12px"
              placeholder="Enter Username"
              focusBorderColor="transparent"
              border="none"
            ></Input>
          </Box>
          <Box
            border="3px solid black"
            borderRadius="1.5em"
            w="75%"
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
            ></Input>
          </Box>
          <Button
            background="none"
            border="3px solid black"
            w="75%"
            borderRadius="1.5em"
            onClick={() => {
              navigate("/ln/home");
            }}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
