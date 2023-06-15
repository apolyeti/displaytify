import { Text } from '@chakra-ui/react';
import React from 'react';
import { shell } from 'electron';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=c3a3607548814a2d9c7b863e13d2c6ed&response_type=code&redirect_uri=http://localhost:3000&scope=streaming"


export default function Login() {
    // need to figure out how to transfer login to a different electron page
    // so it shows a page that displays spotify music
    return (
    <Text 
        cursor={"pointer"}
        align={"center"} 
        fontSize={"3xl"}
        marginLeft={"20px"}
        onClick={() => {window.open(AUTH_URL)}}
        _hover={{ color: "#ccd9ed" }}
        css="-webkit-app-region: no-drag;"
    >
        login
    </Text>
    )
}