import React from 'react';
import { VStack, Center } from "@chakra-ui/react"
import Display from "./components/Display"

function App({ Component, pageProps}) {
  return (
    <>
      <VStack>
        <Center
          marginTop="20px">
              <Display />
        </Center>
      </VStack>
    </>
  );
}

export default App;
