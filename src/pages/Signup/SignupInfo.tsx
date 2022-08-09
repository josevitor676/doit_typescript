import { Box, Center, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaForward } from "react-icons/fa";
import LogoSecondary from "../../assets/logo-secondary.svg"
import { theme } from "../../styles/theme";

export const SignupInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingLeft={["0", "0", "150px"]}>
      <Image
        src={LogoSecondary}
        alt="Doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <VStack spacing="14" mt={["10px", "0"]}>
        <Flex w="100%">
            <Center borderRadius="5px" bg="white" w="80px" h="50px">
                <FaForward color={theme.colors.purple["800"]} size={25}/>
            </Center>
            <Box ml="4">
                <Heading size="md">Agilidade</Heading>
                <Text>
                    Agilize seus projetos com rapidez e muita performance
                </Text>
            </Box>
        </Flex>

        <Flex w="100%">
            <Center borderRadius="5px" bg="white" w="80px" h="50px">
                <FaForward color={theme.colors.purple["800"]} size={25}/>
            </Center>
            <Box ml="4">
                <Heading size="md">Simplicidade</Heading>
                <Text>
                    Armazene seus projetos em uma interface alteamente usual
                </Text>
            </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
