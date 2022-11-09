import { Box, Flex, Heading, Text, Spacer } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <Flex alignItems="center" padding="1em">
        <Heading fontStyle="italic">Progres</Heading>
        <Spacer />
        <Flex>
          <Link to="/login">
            <Text fontSize="1.5em" paddingInline="0.5em">
              Login
            </Text>
          </Link>
          <Link to="SignUp">
            <Text fontSize="1.5em" paddingInline="0.5em">
              SignUp
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Box padding="3em">
        <Text fontSize="7.5em">
          <Box as="span" fontWeight="bold" color="#C69CD0">
            Manage
          </Box>{" "}
          and{" "}
          <Box as="span" fontWeight="bold" color="#9CD0A5">
            Track
          </Box>{" "}
          <br></br>
          your{" "}
          <Box as="span" fontWeight="bold">
            tasks
          </Box>{" "}
          in a easy <br></br> and{" "}
          <Box as="span" color="#FA8484" fontWeight="bold">
            efficient
          </Box>{" "}
          way.
        </Text>
      </Box>
    </Box>
  );
};
