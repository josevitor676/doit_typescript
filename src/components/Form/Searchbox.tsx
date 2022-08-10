import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { ModalCreateTask } from "../Modal/ModalCreateTask"
import { Input } from "./Input"

export const SearchBox = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
        <ModalCreateTask isOpen={isOpen} onClose={onClose}/>
        <Flex mt="6" w="100%" paddingX={['4', '8']} paddingY="2" paddingBottom='6' borderWidth="1px" borderColor="gray.50">
            <Flex>
                <Input name="title" placeholder="Pesquisar por tarefa" w="35vw"/>
                <Center borderRadius="8px" as="button" ml="2" w="55px" h="46px" fontSize="2xl" bg="purple.500">
                    <FaSearch color={theme.colors.white}/>
                </Center>
            </Flex>
            <Button 
            bg="purple.500" 
            color="white" 
            paddingX="16px" 
            ml="4" 
            h="46px" 
            borderRadius="8px"
            _hover={{bg: "purple.600"}}
            onClick={onOpen}
            >
                Adicionar uma nova tarefa
            </Button>
        </Flex>
        </>
    )
}