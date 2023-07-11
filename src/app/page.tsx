'use client';

import { Button, Text, VStack } from '@/app/common/components/chakra';
import { gql, useQuery } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Home = () => {
  const FetchComp = () => {
    const { data, loading, error, refetch } = useQuery(GET_LOCATIONS);
    if (loading) return <>loading</>;
    if (error) return <>error</>;
    if (!data) return <>no data</>;
    return (
      <VStack mt="40px" p="40px" rounded="md" bg="gray.100">
        {data.locations.map((location: any) => (
          <>
            <Text fontSize="sm">{location.name}</Text>
          </>
        ))}
        <Button colorScheme="green" size="xs" onClick={() => void refetch()}>
          更新
        </Button>
      </VStack>
    );
  };

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

      <FetchComp />
    </VStack>
  );
};

export default Home;
