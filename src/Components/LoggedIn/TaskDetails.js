import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Spacer,
  ListItem,
  List,
  Button,
  UnorderedList,
  Divider,
  OrderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
export const TaskDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newModal, setNewModal] = useState(false);
  return (
    <Box padding="1em" w="100%">
      <Box borderBottom="3px solid black">
        <Heading fontSize="86px">
          Daily <br></br>Tasks
        </Heading>
        <Button
          margin="1em"
          background="none"
          border="3px solid black"
          borderRadius="1.5em"
          onClick={onOpen}
        >
          Add Task+
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader>Add Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                border="3px solid black"
                borderRadius="1.5em"
                padding="0.5em 0 0.5em 0.5em"
                marginBlock="1em"
              >
                <Text fontSize="12px">Enter Task Title</Text>
                <Input
                  padding="0"
                  fontSize="12px"
                  placeholder="Enter Title"
                  focusBorderColor="transparent"
                  border="none"
                ></Input>
              </Box>
              <Box
                border="3px solid black"
                borderRadius="1.5em"
                padding="0.5em 0 0.5em 0.5em"
              >
                <Text fontSize="12px">Enter Deadline</Text>
                <Input
                  padding="0"
                  fontSize="12px"
                  type="date"
                  focusBorderColor="transparent"
                  border="none"
                ></Input>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                color="black"
                bgColor="white"
                border="3px solid black"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                variant="ghost"
                border="3px solid black"
                onClick={() => {
                  onClose();
                  setNewModal(true);
                }}
              >
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* next modal */}
        <Modal
          isOpen={newModal}
          onClose={() => setNewModal(false)}
          isCentered
          size="xl"
        >
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader>Add Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                border="3px solid black"
                borderRadius="1.5em"
                padding="0.5em 0 0.5em 0.5em"
                marginBlock="1em"
              >
                <Text fontSize="12px">Add List of items for the Task</Text>
                <Input
                  padding="0"
                  fontSize="12px"
                  placeholder="Enter Macro task"
                  focusBorderColor="transparent"
                  border="none"
                ></Input>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                color="black"
                bgColor="white"
                border="3px solid black"
                mr={3}
                onClick={() => {
                  setNewModal(false);
                  onOpen();
                }}
              >
                Back
              </Button>
              <Button variant="ghost" border="3px solid black">
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <OrderedList>
        <ListItem>
          Complete Dot net Project(completed 0%)
          <UnorderedList spacing={2} padding="2em">
            <ListItem>Daily Tasks</ListItem>
            <ListItem>Weekly Tasks</ListItem>
            <ListItem>Monthly Tasks</ListItem>
            <ListItem>Yearly Tasks</ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
