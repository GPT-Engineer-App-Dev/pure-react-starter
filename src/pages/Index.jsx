import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My React App</Heading>
      </Flex>
      <Box mt={8}>
        <VStack spacing={4}>
          <Heading as="h2" size="md">Welcome to the React App</Heading>
          <Text>This is a basic structure of a React application with a responsive layout.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;