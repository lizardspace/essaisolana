// components/counter/counter-feature.tsx
import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CounterFeature: React.FC = () => {
    use client;
  
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return (
      <Box p={4} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Text fontSize="2xl" mb={4}>Counter: {count}</Text>
        <Box display="flex" gap={2}>
          <Button colorScheme="blue" onClick={decrement}>-</Button>
          <Button colorScheme="blue" onClick={increment}>+</Button>
        </Box>
      </Box>
    );
  };

export default CounterFeature;
  