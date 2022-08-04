import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password?: string;
}

interface LoginFormProps {
  handleSignUp: () => void;
  errors: FieldErrorsImpl<DeepRequired<SignUpData>>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

export const SignupForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: LoginFormProps) => (
  <Grid
    as="form"
    onSubmit={handleSignUp}
    mt={["4", "4", "0"]}
    w={["100%", "100%", "50%", "50%"]}
    p="20px"
    border="3px solid"
    borderColor="gray.100"
    bg="white"
    color="gray.900"
  >
    <Heading size="lg">Crie sua conta</Heading>
    <VStack mt="6" spacing="5">
      <Box w="100%">
      <Input
          placeholder="Digite seu nome"
          icon={FaUser}
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
        <Input
          placeholder="Digite seu login"
          icon={FaEnvelope}
          label="Login"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        {!errors.email && (
          <Text ml="1" mt="1" color="gray.300">
            Exemplo: nome@email.com
          </Text>
        )}
        <Input
          placeholder="Digite sua senha"
          icon={FaLock}
          label="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />

        <Input
          placeholder="Confirme sua senha"
          icon={FaLock}
          label="Confirmação de senha"
          type="password"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />
      </Box>
    </VStack>
      <Button
        isLoading={loading}
        bg="purple.800"
        w="100%"
        color="white"
        h="45px"
        borderRadius="6px"
        _hover={{ background: "purple.900" }}
        type="submit"
        mt='6'
      >
        Finalizar cadastro
      </Button>
  </Grid>
);
