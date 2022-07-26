import * as React from 'react';

import {Button} from '@chakra-ui/button';
import {Divider, Flex, Stack, VStack, HStack, Spacer} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import {Select} from '@chakra-ui/select';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Image, Text, Center, Link, Heading, Box, Icon} from '@chakra-ui/react';

//
// values for images
//
const MAP = {
    default: {
        ios: 'https://iili.io/hcaNa4.png',
        android: 'https://iili.io/hcaO8l.png',
        web: 'https://iili.io/NDcyDx.png',
        copy: 'default copy',
    },

    emptyState: {
        ios: 'https://iili.io/hcawFf.png',
        android: 'https://iili.io/hcah6G.png',
        copy: 'emptyState copy',
    },
};

//
// states and values
//
const App = ({}) => {
    const [pattern, setPattern] = React.useState('default');
    const [platform, setPlatform] = React.useState('ios');
    const [image, setImage] = React.useState('https://iili.io/hcaNa4.png');
    const [link] = React.useState('https://www.youtube.com/watch?v=Zo_k6l6mwdo');

    React.useEffect(() => {
        const newImage = MAP[pattern][platform];
        setImage(newImage);
        console.log('updated from hook', pattern, platform);
    }, [pattern, platform]);

    //
    // here we will send a message to controller.ts
    //
    // const twoCalls = (e) => {
    //     setPattern(e.target.value);
    //     console.log('pattern changed', e.target.value);

    //     // const newImage = MAP[e.target.value][platform];
    //     // setImage(newImage);
    //     // console.log('image changed', newImage);
    // };

    const onCreate = () => {
        // const newImage = MAP[pattern][platform];
        // setImage(newImage);
        console.log('image changed');
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
                                <Radio value="web">Web (desktop & mobile)</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <Divider />

                    <FormControl>
                        <FormLabel>Pattern</FormLabel>
                        <Select size="sm" onChange={(e) => setPattern(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="emptyState">Empty state</option>
                        </Select>
                    </FormControl>

                    <Stack spacing={4}>
                        <Heading size="sm">Info</Heading>
                        <Text fontSize="md">{MAP[pattern].copy || 'no copy'}</Text>
                    </Stack>

                    <Divider />
                    <Box bg="#F9FBFC" borderRadius="lg" p={3} align="stretch">
                        <Stack spacing={2}>
                            <Link color="discord.500" href={link} isExternal>
                                Learn how the plugin works
                            </Link>
                        </Stack>
                    </Box>

                    <Spacer />

                    <Button onClick={onCreate}>Generate screens</Button>
                </VStack>
            </Flex>

            <Flex w="100%" h="100%" p={4} bg="#F9FBFC">
                <Center w="100%" h="100%">
                    <Image h="712px" w="null" src={image} />
                </Center>
            </Flex>
        </HStack>
    );
};

export default App;
