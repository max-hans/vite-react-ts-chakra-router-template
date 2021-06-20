import React from "react";

import { HStack, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  const bg = useColorModeValue("main.5", "main.1");

  return (
    <HStack px={8} py={2} bg={bg} gridArea="header" spacing={12}>
      <>
        {children}
        <Spacer />
        <ColorModeSwitcher />
      </>
    </HStack>
  );
};

export default Nav;
