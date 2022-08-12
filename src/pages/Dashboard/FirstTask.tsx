import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import { Header } from "../../components/Header";
import { ModalCreateTask } from "../../components/Modal/ModalCreateTask";

export const FirstTask = () => {

  const {
    isOpen: isCreateTaskOpen,
    onClose: onCreateTaskClose,
    onOpen: onCreateTaskOpen,
  } = useDisclosure();


  return (
    <>
      <ModalCreateTask isOpen={isCreateTaskOpen} onClose={onCreateTaskClose} />
      <Header />
      <Box
        mt="4"
        w="90vw"
        paddingY="16"
        paddingX={["4", "4", "0"]}
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading fontSize="4xl" as="h1" mt="4">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text mt="6" color="gray.400">
          Insira sua meta e mostre a você mesmo sua <br />
          capacidade em cumprir <b>suas atividades</b>
        </Text>

        <Button
          p="6"
          mt="6"
          bgColor="purple.800"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={onCreateTaskOpen}
        >
          Criar sua primeira tarefa
        </Button>
      </Box>
    </>
  );
};
