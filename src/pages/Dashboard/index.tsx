import { Box, Button, Text } from "@chakra-ui/react"
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext"

export const Dashboard = () => {

    const {signOut} = useAuth();

    return (
        <Box>
            <Header/>
        </Box>
        
    )
}