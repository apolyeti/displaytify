import { Text } from '@chakra-ui/react';


export default function Login() {
    // need to figure out how to transfer login to a different electron page
    // so it shows a page that displays spotify music
    return (
    <Text 
        cursor={"pointer"}
        align={"center"} 
        fontSize={"3xl"}
        marginLeft={"20px"}
        onClick={() => {window.open('localhost:3000/test')}}
        _hover={{ color: "#ccd9ed" }}
        css="-webkit-app-region: no-drag;"
    >
        login
    </Text>
    )
}