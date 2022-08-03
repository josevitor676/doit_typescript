import { Button, Text } from "@chakra-ui/react"
import { useAuth } from "../../contexts/AuthContext"

export const Dashboard = () => {

    const {signOut} = useAuth();

    return (
        <>
        <Text>Dashboard</Text>
        <Button onClick={signOut}>Deslogar</Button>
        </>
        
    )
}