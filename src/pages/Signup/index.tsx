import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { SignupForm } from "./SignupForm";
import { SignupInfo } from "./SignupInfo";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";
import { ModalError } from "../../components/Modal/ModalError";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email Obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas Diferentes"),
});

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
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSignup: SubmitHandler<SignUpData> = ({
    name,
    email,
    password,
  }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        setLoading(false);
        onModalErrorOpen();
      });
  };


  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const history = useHistory();

  return (
    <>
      <ModalError 
      error="Esse email já existe" 
      isOpen={isModalErrorOpen} 
      onClose={onModalErrorClose}
      secondaryText="Você já pode tentar novamente, <b>clicando</b> no botão acima ou aguarde alguns minutos..."
      />
      <ModalSuccess 
      buttonMessage="Ir para o login agora"
      message="Seu cadastro deu super certo, <b>vamos lá</b>" 
      onClick={() => history.push("/")}
      secondaryText="Você já pode começar criando <b>suas listas</b> de tarefas agora mesmo..."
      isOpen={isModalSuccessOpen} 
      onClose={onModalSuccessClose}
      />
      <Flex
        p={["5px 10px", "5px 10px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        h={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="90" left="25" />
              <SignupForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignup)}
                loading={loading}
                register={register}
              />
              <SignupInfo />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <SignupInfo />
              <SignupForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignup)}
                loading={loading}
                register={register}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
