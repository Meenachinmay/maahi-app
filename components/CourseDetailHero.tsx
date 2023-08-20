import { Flex, Center, HStack, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

const CourseDetailsHero = () => {
  return (
    <>
      <Flex flexDir={"column"} width={"100%"} height={"100vh"}>
        <Flex
          borderRadius={"10px"}
          width={"100%"}
          p={"5"}
          bg={"white"}
          height={"500px"}
          maxHeight={"500px"}
          overflow={'scroll'}
          gap={5}
          flexDir={{ base: "column", sm: "column", md: 'row'}}
          alignItems={{ base: "center", sm: "center", md: "center"}}
          justifyContent={'center'}
        >
          <Center w={{ base: 'full', sm: 'full', md: '40%'}} h={"100%"}>
            <Image
              src={
                "https://studyjapan.fairness-world.com/wp-content/uploads/2019/05/jlpt-1.jpg"
              }
              width={{ base: '100%', sm: '100%', md: '500px'}}
              height={"350px"}
              fit={"cover"}
              borderRadius={"10px"}
              alt="Picture of JLPT course."
              boxShadow={"md"}
            />
          </Center>
          <HStack w={"full"} h={"full"} alignItems={'center'}>
            <VStack alignItems={"center"} justifyContent={"start"}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                What is JLPT Exam?
              </Text>
              <Text
                fontSize={"15px"}
                color={"gray.500"}
                fontWeight={"semibold"}
                noOfLines={{ base: 3, sm: 10, md: 13}}
                textAlign={{ base: 'center', sm: 'center', md: 'start'}}
              >
                The Japanese Language Proficiency Test (JLPT) is a standardized
                examination designed to assess and certify the proficiency of
                non-native speakers in the Japanese language. It serves as a
                comprehensive measure of an individual ability to understand
                and use Japanese for various purposes, ranging from daily
                communication to more complex tasks. The JLPT is divided into
                multiple levels, from N5 (beginner) to N1 (advanced), each
                representing a different degree of language proficiency.
                Successfully passing the JLPT indicates that a learner possesses
                the language skills necessary to navigate real-world scenarios,
                including reading and comprehending written texts, listening and
                understanding spoken language, and expressing oneself accurately
                in both written and spoken forms. This certification not only
                validates one Japanese language capabilities but also opens
                doors to educational, professional, and cultural opportunities,
                particularly in Japan and across the global Japanese-speaking
                community. By offering tailored courses and guidance to excel in
                the JLPT, our platform ensures that learners not only achieve
                certification but also develop practical fluency, enabling them
                to confidently engage in meaningful conversations and pursuits
                within the realm of the Japanese language.
              </Text>
            </VStack>
          </HStack>
        </Flex>

        {/* details about above card goes here */}
      </Flex>
    </>
  );
};

export default CourseDetailsHero;
