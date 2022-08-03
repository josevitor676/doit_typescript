import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"

import { Input } from "../../components/Form/Input"
import * as yup from "yup"
import  {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { SignupForm } from "./SignupForm"
import { SignupInfo } from "./SignupInfo"

const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref("password")], "Senhas Diferentes"),
})

interface SignUpData {
    email: string;
    password: string;
    name: string;
}

export const Signup = () => {

    const [loading, setLoading] = useState(false);


    const {
        formState: { errors }, 
        register,
        handleSubmit
    } = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })

    const handleSignIn: SubmitHandler<SignUpData> = (data: SignUpData) => {
        console.log(data)
    }
 
    return (
        <Flex 
        p={["10px 15px", "10px 15px", "0px", "0px" ]}
        alignItems="center" 
        justifyContent="center"
        h={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
            "linear(to-b, purple.800 65%, white 35%)",
            "linear(to-b, purple.800 65%, white 35%)",
            "linear(to-r, purple.800 65%, white 35%)",
            "linear(to-r, purple.800 65%, white 35%)"
        ]}
        color="white"
        >
            <Flex 
            w={["100%", "100%", "90%", "65%"]} 
            justifyContent="center" 
            flexDirection={["column", "column" ,"row", "row"]} 
            alignItems="center"
            >
                <SignupForm
                errors={errors} 
                handleSignUp={handleSubmit(handleSignIn)} 
                loading={loading}
                register={register}
                />
                <SignupInfo/>
            </Flex>
        </Flex>
    )
}