import * as React from 'react';
import {Button} from '@chakra-ui/button';
import {Divider, Flex, Stack, VStack, HStack, Spacer} from '@chakra-ui/layout';
import {Radio, RadioGroup} from '@chakra-ui/radio';
import {Select} from '@chakra-ui/select';
import {FormControl, FormLabel} from '@chakra-ui/form-control';
import {Text, Link, Heading, Box, Icon} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {HiOutlinePencil, HiOutlinePuzzle, HiOutlineBeaker, HiOutlineChat} from 'react-icons/hi';
// import * as logo from './iOS_dashboard.jpg';

//
// values for images, keys and copy
//
const MAP = {
    default: {
        ios: {
            image: 'https://i.ibb.co/NsDWkj1/ios-default.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/hmH8yNx/android-default.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/19Wtrc0/web-default.png',
            key: '7942c0879b87578e74e44cce306af1f306e170ac',
        },
        copy: 'The dashboard shows all the customers accounts and is the home of the app.',
    },

    signIn: {
        ios: {
            image: 'https://i.ibb.co/G0kxWCL/ios-sign-In.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/FnFwqpV/android-sign-In.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/dBtfXrw/web-sign-In.png',
            key: '',
        },
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },

    dashboard: {
        ios: {
            image: 'https://i.ibb.co/Z2x6W7K/ios-dashboard.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/grFcSzt/android-dashboard.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/sRnYpjz/web-dashboard.png',
            key: '',
        },
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },

    accounts: {
        ios: {
            image: 'https://i.ibb.co/TkqG33R/ios-account.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/Zf9908Y/android-accounts.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/r3f4YWD/web-account.png',
            key: '',
        },
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },

    messaging: {
        ios: {
            image: 'https://i.ibb.co/GFbJ8vG/ios-messages.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/L1CgCVJ/android-messages.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/V3gKGSC/web-secure-Messaging.png',
            key: 'f23241aa1777da62abfb94d5ef3fb314f18b1105',
        },
        copy: 'Log in is the area where our customers enter in their username and password to access internet banking.',
    },

    notifications: {
        ios: {
            image: 'https://i.ibb.co/z8r8dBW/ios-notifications.png',
            key: '1ae99ff96abb3fde3ca3cd9585c804361c88df68',
        },
        android: {
            image: 'https://i.ibb.co/RhcQyqJ/android-notifications.png',
            key: '45e63e28d53c29c87addc3b7e6c1dc56e88f6bd0',
        },
        web: {
            image: 'https://i.ibb.co/yyKpTLK/web-notifications.png',
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
                            <option value="default">Default</option>
                            <option value="signIn">Sign in</option>
                            <option value="dashboard">Dashboard</option>
                            <option value="accounts">Accounts</option>
                            <option value="messaging">Secure messaging</option>
                            <option value="notifications">Notifications</option>
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
                justifyContent={'unset'}
            >
                <img style={imageStyle} src={image} />
            </Flex>
        </Flex>
    );
};

export default App;
