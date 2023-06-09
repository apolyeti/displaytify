import { VStack, HStack, SlideFade, Container } from '@chakra-ui/react';
import Login from "./Login"
const { shell } = require('electron');



export default function Display() {
    return (
        <VStack>
            <SlideFade
                offsetY={"-30px"}
                in={true}
                transition={{
                    enter: {
                        duration: 1.25,
                        delay: 0.5,
                    },
                }}
                >
                <Container align={"center"} fontSize={"3xl"}>
                    displaytify
                </Container>
            </SlideFade>
            <HStack 
            marginTop="30px">
                <SlideFade
                offsetY={"30px"}
                in={true}
                transition={{
                    enter: {
                        duration: 1,
                        delay: 1.5,
                    },
                }}
                >
                    <Login />
                </SlideFade>
                <SlideFade
                offsetY={"30px"}
                in={true}
                transition={{
                    enter: {
                        duration: 1,
                        delay: 1.5,
                    },
                }}
                >
                    {
                        // make container clickable, since window is draggable from anywhere
                        // make it so the color of the container darkens when hovered over
                    }
                <Container 
                    cursor={"pointer"}
                    align={"center"} fontSize={"3xl"}
                    css="-webkit-app-region: no-drag;"
                    onClick={()=> shell.openExternal("https://github.com/apolyeti/displaytify")}
                    _hover={{ color: "#ccd9ed" }}
                    >
                    github
                </Container>
                </SlideFade>
            </HStack>
        </VStack>
    );
}