import React from "react";

import { Button, Center, HStack, Text } from "@chakra-ui/react";

import useStore from "../../store";
const About: React.FC = () => {
  const [counter, setCounter] = useStore((state) => [
    state.counter,
    state.setCounter,
  ]);

  const increment = (direction: "up" | "down") => {
    switch (direction) {
      case "up": {
        setCounter(counter + 1);
        break;
      }
      case "down": {
        setCounter(counter - 1);
        break;
      }
    }
  };

  return (
    <Center w="100%" h="100%" gridArea="content">
      <HStack>
        <Button onClick={() => increment("up")}>+1</Button>
        <Button onClick={() => increment("down")}>-1</Button>
        <Text>{counter}</Text>
      </HStack>
    </Center>
  );
};

export default About;
