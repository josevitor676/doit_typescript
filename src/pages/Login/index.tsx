import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import LogoSecondary from "../../assets/logo-secondary.svg"
import { Input } from "../../components/Form/Input"
import {FaEnvelope, FaLock} from "react-icons/fa"

export const Login = () => {

    const {
        formState: {errors}, 
        register,
        handleSubmit
    } = useForm()
    return (
        <Flex 
        p="10px 15px" 
        alignItems="center" 
        h="100vh"
        bgGradient="linear(to-r, purple.800 65%, white 35%)"
        color="white"
        >
            <Flex w="100%" justifyContent="center" flexDirection="row" alignItems="center">
                <Grid w="100%" paddingRight="100px">
                    <Image src={LogoSecondary}/>
                    <Heading as="h1">
                        O jeito fácil, grátis
                    </Heading>
                    <Text>
                        Flexível e atrativo de gerenciar
                        <b>seus projetos em uma única plataforma</b>
                    </Text>
                </Grid>
                <Grid 
                as="form" 
                mt="4" 
                w="100%" 
                p="30px 15px" 
                border="3px solid" 
                borderColor="gray.100" bg="white" color="gray.900"
                >  
                    <Heading>Bem vindo de volta!</Heading>
                    <VStack mt="6" spacing="5">
                        <Input  icon={FaEnvelope} placeholder="Digite seu login" {...register("email")}/>
                        <Input icon={FaLock} placeholder="Digite sua senha" {...register("password")}/>
                    </VStack>
                </Grid>
            </Flex>
        </Flex>
    )
}