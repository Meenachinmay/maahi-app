"use client";

import CourseDetailsHero from "@/components/CourseDetailHero";
import { Flex } from "@chakra-ui/react";

export default function CourseDetails() {
  return (
    <>
      <Flex flexDir={'column'} gap={10} width={'100%'} height={'100vh'} p={10}>
        <CourseDetailsHero /> 
      </Flex>
    </>
  );
}
