import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      w={"auto"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("purple.50", "purple.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Courses</Heading>
          <Text>
            We have been teaching online japanese to professionals for a long
            time.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>JLPT N5 to N2</TestimonialHeading>
              <TestimonialText>
                Master the JLPT from N5 to N2 with comprehensive courses
                covering Reading, Writing, Listening, Kanji, and Vocabulary.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C4D03AQHu1H9x_Di9Yw/profile-displayphoto-shrink_200_200/0/1662979412114?e=1698278400&v=beta&t=wYzuE8anvL0aZFv9we0fk0N3CHUF-dvOUsKkceQ2wug"
              }
              name={"Mahima Chaudhary"}
              title={"Founder and Instructor"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Business Japanese Course</TestimonialHeading>
              <TestimonialText>
                Equip yourself for a thriving career with essential Business
                Japanese skills, crucial for success, especially in Japan.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                  ''
              }
              name={"Akiko san"}
              title={"Instructor"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Communication Practice</TestimonialHeading>
              <TestimonialText>
                Fluency-focused course bridging language learning and practical
                communication, addressing the gap often found even after passing
                certification exams.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={''
              }
              name={"Akiko San"}
              title={"Instructor"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
