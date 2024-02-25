// components/counter/counter-feature.tsx

import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CounterFeature: React.FC = () => {
    return (
        <Box p={4} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Text fontSize="2xl" mb={4}>This is a dummy component</Text>
            <Button colorScheme="blue">Dummy Button</Button>
        </Box>
    );
};

export default CounterFeature;
