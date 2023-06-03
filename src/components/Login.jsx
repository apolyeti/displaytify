import { Text } from '@chakra-ui/react';


export default function Login() {
    return (
    <Text 
        align={"center"} 
        fontSize={"3xl"}
        marginLeft={"20px"}
        onClick={() => {window.open('localhost:3000/test')}}
    >
        login
    </Text>
    )
}