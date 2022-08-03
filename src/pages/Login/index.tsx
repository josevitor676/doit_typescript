import { Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import LogoSecondary from "../../assets/logo-secondary.svg"
import { Input } from "../../components/Form/Input"
import {FaEnvelope, FaLock} from "react-icons/fa"
import * as yup from "yup"
import  {yupResolver} from "@hookform/resolvers/yup"

const signInSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
})

interface SignInData {
    email: string;
    password: string;
}

export const Login = () => {

    const {
        formState: { errors }, 
        register,
        handleSubmit
    } = useForm<SignInData>({
        resolver: yupResolver(signInSchema)
    })

    const handleSignIn: SubmitHandler<SignInData> = (data: SignInData) => {
        console.log(data)
    }
 
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
                onSubmit={handleSubmit(handleSignIn)} 
                mt="4" 
                w="50%" 
                p="30px 15px" 
                border="3px solid" 
                borderColor="gray.100" bg="white" color="gray.900"
                >  
                    <Heading>Bem vindo de volta!</Heading>
                    <VStack mt="6" spacing="5">
                        <Input  
                        placeholder="Digite seu login" 
                        icon={FaEnvelope} 
                        label="Login"
                        type="email"
                        error={errors.email}
                        {...register("email")}
                        />
                        <Input 
                        placeholder="Digite sua senha" 
                        icon={FaLock}
                        label="Senha"
                        type="password"
                        error={errors.password} 
                        {...register("password")}
                        />
                    </VStack>
                    <Button type="submit">Entrar</Button>
                </Grid>
            </Flex>
        </Flex>
    )
}