import * as React from 'react';

import { Button } from '@chakra-ui/button';
import { Divider, Flex, Stack, VStack, HStack, Spacer } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Select } from '@chakra-ui/select';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Image, Text } from '@chakra-ui/react';

// 
// values for images
// 
const MAP = {
    'default': {
        'ios': 'https://iili.io/hcaNa4.png',
        'android': 'https://iili.io/hcaO8l.png',
    },

    'emptyState': {
        'ios': 'https://iili.io/hcawFf.png',
        'android': 'https://iili.io/hcah6G.png',
    }
}

// 
// values for content
// 
// const CONTENT = {
//     'd-content': 'This is default',
//     'es-content': 'This is empty state'
// }


// 
// states and values
// 
const App = ({ }) => {
    const [pattern, setPattern] = React.useState('default');
    const [platform, setPlatform] = React.useState('ios');
    const [image, setImage] = React.useState('https://iili.io/hcaNa4.png');



    // 
    // here we will send a message to controller.ts
    // 
    const onCreate = () => {
        const newImage = MAP[pattern][platform];
        setImage(newImage)
        console.log('image changed')
    };





    // 
    // ui elements
    // 
    return (
        <HStack h="100%">
            <Flex h="100%" w="40%" p={4}>
                <VStack w="100%" spacing={6} align="stretch">
                    <FormControl>
                        <FormLabel>Platform</FormLabel>
                        <RadioGroup onChange={setPlatform} value={platform} size="md">

                            <Stack direction="row">
                                <Radio value="ios">iOS</Radio>
                                <Radio value="android">Android</Radio>
                                <Radio value="web">Web</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <Divider />

                    <FormControl>
                        <FormLabel>Pattern</FormLabel>
                        <Select size="sm" onChange={(e) => {
                            setPattern(e.target.value)
                            console.log('Updating pattern', e.target.value)
                        }}
                        >
                            <option value="default">Default</option>
                            <option value="emptyState">Empty state</option>

                        </Select>
                    </FormControl>

                    <Stack spacing={3}>
                        <Text fontSize='md'>blah</Text>
                    </Stack>

                    <Divider />

                    <Spacer />

                    <Button onClick={onCreate}>Generate</Button>
                </VStack>
            </Flex>

            <Flex w="100%" h="100%" p={4} bg='#F5F5F5' align="center">
                <VStack h="100%" w="100%" spacing={6}>
                    <Image
                        h='712px'
                        src={image}
                    />
                </VStack>
            </Flex>
        </HStack >
    );
};

export default App;
