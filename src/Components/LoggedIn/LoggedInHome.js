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
import { Welcome } from "./Welcome";
import { Tasks } from "./Tasks";
import { TaskDetails } from "./TaskDetails";
import { Progression } from "./Progression";
import { Link, Outlet } from "react-router-dom";

export const LoggedInHome = () => {
  return (
    <Box>
      <Flex>
        <Flex direction="column" borderRight="5px solid black" height="100vh">
          <Heading fontStyle="italic" padding="1em" cursor="default">
            Progres
          </Heading>
          <List padding="1em" spacing={5} fontWeight="bold" fontSize="2em">
            <Link to="/ln/home">
              {" "}
              <ListItem marginBottom="1em">Home </ListItem>
            </Link>
            <Link to="/ln/tasks">
              {" "}
              <ListItem marginBottom="1em">Tasks</ListItem>
            </Link>
            <Link to="/ln/progression">
              {" "}
              <ListItem marginBottom="1em">Progression</ListItem>
            </Link>
          </List>
          <Link to="/">
            <Heading padding="1em"> Log Out </Heading>
          </Link>
        </Flex>
        <Outlet />
      </Flex>
    </Box>
  );
};
