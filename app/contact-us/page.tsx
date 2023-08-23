"use client";
import { Flex, Heading, Center } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function ContactUs() {
  return (
    <>
      <Flex width={"100%"} height={"100vh"} bg={"purple.100"} padding={"10"}>
        <Flex
          width={"full"}
          borderRadius={"20px"}
          height={"500px"}
          bg={"white"}
          flexDirection={"column"}
        >
          <Center borderBottom={'2px solid'}  borderColor={'purple.100'} width={"full"} marginTop={"10px"} marginBottom={"10px"}>
            <Heading fontSize={{ base: "lg", sm: "2xl", md: "4xl"}}>Contact us</Heading>
          </Center>
          <Flex width={"full"} height={"inherit"} padding={"10"}>
            <Flex gap={5}>
              <EmailIcon color={"purple.500"} boxSize={'7'} />
              <Heading fontSize={{ base: "xl", sm: "xl", md: "2xl"}}>
                m.mahichoudhry@gmail.com
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
