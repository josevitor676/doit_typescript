import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { FaSearch } from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import { useTasks } from "../../contexts/TasksContext"
import { theme } from "../../styles/theme"
import { ModalCreateTask } from "../Modal/ModalCreateTask"
import { Input } from "./Input"

interface SearchData {
    title: string;
}
export const SearchBox = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const {searchTask} = useTasks();
    const {accessToken} = useAuth();

    const handleSearch = ({ title }: SearchData) => {
        searchTask(title, accessToken);
    }

    const {register, handleSubmit} = useForm<SearchData>();

    return (
        <>
        <ModalCreateTask isOpen={isOpen} onClose={onClose}/>
        <Flex 
        mt="6" 
        w="100%" 
        paddingX={['4', '8']} 
        paddingY="2" 
        paddingBottom='6' 
        borderWidth="1px" 
        borderColor="gray.50"
        flexDirection={["column", "column", "row", "row"]}
        >
            <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
                <Input 
                placeholder="Pesquisar por tarefa" 
                w={["100%", "100%", "35vw"]} 
                {...register("title")}
                />
                <Center borderRadius="8px" as="button" ml="2" w="55px" h="46px" fontSize="2xl" bg="purple.500">
                    <FaSearch color={theme.colors.white}/>
                </Center>
            </Flex>
            <Button 
            bg="purple.500" 
            color="white" 
            paddingX="16px" 
            ml={["0","0","4", "4" ]}
            h="46px" 
            borderRadius="8px"
            mt={["4", "4", "0"]}
            _hover={{bg: "purple.600"}}
            onClick={onOpen}
            >
                Adicionar uma nova tarefa
            </Button>
        </Flex>
        </>
    )
}