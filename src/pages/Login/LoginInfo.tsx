import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg"

export const LoginInfo = () => (
  <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
    <Image
      src={LogoSecondary}
      alt="Doit"
      boxSize={["120px", "120px", "150px", "150px"]}
    />
    <Heading mt="4" as="h1">
      O jeito fácil, grátis
    </Heading>
    <Text w={["150px", "200px", "315px", "340px"]}>
      Flexível e atrativo de gerenciar
      <b> seus projetos em uma única plataforma</b>
    </Text>
  </Grid>
);
