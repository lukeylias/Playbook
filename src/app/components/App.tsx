import * as React from 'react';
import {Button} from '@chakra-ui/button';
import {Divider, Flex, Stack, VStack, HStack, Spacer} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import {Select} from '@chakra-ui/select';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Text, Link, Heading, Box, Icon} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {HiOutlinePencil, HiOutlinePuzzle, HiOutlineBeaker, HiOutlineChat} from 'react-icons/hi';
import * as logo from './iOS_dashboard.jpg';

//
// values for images, keys and copy
//
const MAP = {
    default: {
        ios: {
            image: './iOS_dashboard.jpg',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://iili.io/84DbY7.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://iili.io/84b7aI.png',
            key: '7942c0879b87578e74e44cce306af1f306e170ac',
        },
        copy: 'The dashboard shows all the customers accounts and is the home of the app.',
    },

    emptyState: {
        ios: {
            image: 'https://iili.io/hcawFf.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://iili.io/8SC2ON.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://iili.io/S7SR87.png',
            key: '',
        },
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },
};

//
// states and values
//
const App = ({}) => {
    const [pattern, setPattern] = useState('default');
    const [platform, setPlatform] = useState('ios');
    const [image, setImage] = useState('https://iili.io/84DbY7.png');
    // const [link, setLink] = useState('https://www.youtube.com/watch?v=Zo_k6l6mwdo');

    // Checks for changes to pattern and platform and changes image
    useEffect(() => {
        const newImage = MAP[pattern][platform].image;
        setImage(newImage);
        console.log('updated from hook', pattern, platform);
    }, [pattern, platform]);

    // Handles the image style
    const imageStyle = {
        height: '716px',
        width: 'auto',
        maxWidth: 'unset',
    };

    // Sends the selected component key to the backend via this msg
    const onCreate = () => {
        parent.postMessage({pluginMessage: {componentId: MAP[pattern][platform].key}}, '*');
        console.log('updated from hook', pattern, platform);
    };

    //
    // UI frontend
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
                        <Select size="md" onChange={(e) => setPattern(e.target.value)}>
                            <option value="default">Dashboard</option>
                            <option value="emptyState">Log in</option>
                        </Select>
                    </FormControl>

                    <Stack spacing={4}>
                        <Heading size="sm">Info</Heading>
                        <Text fontSize="md">{MAP[pattern].copy || 'no copy'}</Text>
                    </Stack>

                    <Divider />

                    <Heading size="sm">Resources</Heading>
                    <Box borderRadius="lg" p={1} align="stretch">
                        <Stack spacing={6}>
                            <HStack>
                                <Icon as={HiOutlinePuzzle} color="discord.500" boxSize={6} />
                                {/* <img src={logo} /> */}
                                <Link
                                    fontSize="lg"
                                    color="discord.500"
                                    href={
                                        'https://www.figma.com/files/963531083469998670/project/40740182/Components?fuid=946533349950777341'
                                    }
                                    isExternal
                                >
                                    Components
                                </Link>
                            </HStack>

                            <HStack>
                                <Icon as={HiOutlinePencil} color="discord.500" boxSize={6} />
                                <Link
                                    fontSize="lg"
                                    color="discord.500"
                                    href={'https://greater.atlassian.net/wiki/spaces/DIG/pages/83231196/Content'}
                                    isExternal
                                >
                                    Content guidelines
                                </Link>
                            </HStack>

                            <HStack>
                                <Icon as={HiOutlineBeaker} color="discord.500" boxSize={6} />
                                <Link
                                    fontSize="lg"
                                    color="discord.500"
                                    href={'https://greater.atlassian.net/wiki/spaces/DIG/pages/14188617/Research'}
                                    isExternal
                                >
                                    Research lab
                                </Link>
                            </HStack>

                            <HStack>
                                <Icon as={HiOutlineChat} color="discord.500" boxSize={6} />
                                <Link
                                    fontSize="lg"
                                    color="discord.500"
                                    href={'https://greaterbankworkspace.slack.com/archives/DNWA3398U'}
                                    isExternal
                                >
                                    Plugin help
                                </Link>
                            </HStack>
                        </Stack>
                    </Box>

                    <Divider />

                    <Spacer />

                    <Button onClick={onCreate}>Generate screens</Button>
                </VStack>
            </Flex>

            {/* Right panel */}
            <Flex
                bg="#E8ECEE"
                h="100%"
                w="70vw"
                p={6}
                overflowX={'scroll'}
                alignItems={'center'}
                // justifyContent={pattern === 'emptyState' ? 'unset' : 'center'}
            >
                <img style={imageStyle} src={image} />
            </Flex>
        </Flex>
    );
};

export default App;
