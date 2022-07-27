import * as React from 'react';

import {Button} from '@chakra-ui/button';
import {Divider, Flex, Stack, VStack, Spacer, Container} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import {Select} from '@chakra-ui/select';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Text, Link, Heading, Box, Tag} from '@chakra-ui/react';

//
// values for images and copy
//
const MAP = {
    default: {
        ios: 'https://iili.io/84Dmv9.png',
        android: 'https://iili.io/84DbY7.png',
        web: 'https://iili.io/84b7aI.png',
        copy: 'The dashboard shows all the customers accounts and is the home of the app.',
    },

    emptyState: {
        ios: 'https://iili.io/hcawFf.png',
        android: 'https://iili.io/8SC2ON.png',
        web: 'https://iili.io/S7SR87.png',
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },
};

//
// states and values
//
const App = ({}) => {
    const [pattern, setPattern] = React.useState('default');
    const [platform, setPlatform] = React.useState('ios');
    const [image, setImage] = React.useState('https://iili.io/84DbY7.png');
    const [link] = React.useState('https://www.youtube.com/watch?v=Zo_k6l6mwdo');

    React.useEffect(() => {
        const newImage = MAP[pattern][platform];
        setImage(newImage);
        console.log('updated from hook', pattern, platform);
    }, [pattern, platform]);

    const imageStyle = {
        height: '716px',
        width: 'auto',
        maxWidth: 'unset',
    };

    const onCreate = () => {
        console.log('updated from hook', pattern, platform);
    };

    //
    // ui elements
    //
    return (
        <Flex h="100%">
            {/* Left panel */}
            <Flex bg="#ffffff" h="100%" w="30vw" maxW={'30vw'} minW={'30vw'} p={4}>
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
                            <option value="default">Dashboard</option>
                            <option value="emptyState">Log in</option>
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

            {/* Right panel */}
            <Flex bg="#E8ECEE" h="100%" w="70vw" p={6} overflowX={'scroll'} alignItems={'center'}>
                <img style={imageStyle} src={image} />
            </Flex>
        </Flex>
    );
};

export default App;
