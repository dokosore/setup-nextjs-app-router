'use client';

import { Button, Text, VStack } from '@/app/common/components/chakra';

const Home = () => {
  return (
    <VStack w="100vw" h="100vh" justify="center" spacing="16px">
      <Text fontWeight="bold" fontSize="4xl">
        こんにちは
      </Text>
      <Button
        size="sm"
        colorScheme="green"
        onClick={() => {
          alert('こんにちは Hello World!');
        }}
      >
        こんにちはボタン
      </Button>
    </VStack>
  );
};

export default Home;
