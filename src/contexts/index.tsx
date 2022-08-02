import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { theme } from "../styles/theme"

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider = ({children}: AppProviderProps) => {
    return (
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    )
}