import React from 'react';
import { VStack, AbsoluteCenter, Text } from "@chakra-ui/react"

function App({ Component, pageProps}) {
  return (
    <>
      <VStack>
        <AbsoluteCenter
            marginTop={""}>
          <Text
            align={"center"}>
            Display Spotify information here
          </Text>
        </AbsoluteCenter>
      </VStack>
    </>
  );
}

export default App;
