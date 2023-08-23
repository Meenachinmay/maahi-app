"use client";
import React from "react";

import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";

const ContactUs: React.FC = () => {
  return (
    <Flex
      width={"full"}
      height={"200px"}
      bg={"purple.600"}
      alignItems={"center"}
      justifyContent={"center"}
      style={{ padding: "10px" }}
    >
      <Text cursor={'pointer'} fontSize={"4xl"} color={"white"} textDecoration={'underline'}>
        <Heading>Contact us</Heading>
      </Text>
    </Flex>
  );
};

export default ContactUs;
