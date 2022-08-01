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
            key: 'a025de2b23fb66f31948ff346fd0c6c66fffc747',
        },
        android: {
            image: 'https://i.ibb.co/hmH8yNx/android-default.png',
            key: '98e08f44175c465a4d91f98702f1ac7976878979',
        },
        web: {
            image: 'https://i.ibb.co/19Wtrc0/web-default.png',
            key: 'bc30f1232ae986a17a066457dc3f5d75aeea3587',
        },
        copy: 'A screen with a handful of components ready for you to kick off your designs.',
    },

    signIn: {
        ios: {
            image: 'https://i.ibb.co/G0kxWCL/ios-sign-In.png',
            key: 'cf94bcadba4b238cfb74d5e6c3f2cd0a9b912aa5',
        },
        android: {
            image: 'https://i.ibb.co/FnFwqpV/android-sign-In.png',
            key: 'd1052f8105bdce4cf5fafd944476cb38ca856be7',
        },
        web: {
            image: 'https://i.ibb.co/dBtfXrw/web-sign-In.png',
            key: 'd35b9d9f95b1842c68302089a4b9021d52c6dba1',
        },
        copy: 'Sign in is the area where our customers enter in their username and password or biometrics to access internet banking.',
    },

    dashboard: {
        ios: {
            image: 'https://i.ibb.co/Z2x6W7K/ios-dashboard.png',
            key: 'cbf179359fbcc8f5f78565072f3052b88c57d5d8',
        },
        android: {
            image: 'https://i.ibb.co/grFcSzt/android-dashboard.png',
            key: '7b06921ec016e38e6a5645543f760acb72b5845b',
        },
        web: {
            image: 'https://i.ibb.co/sRnYpjz/web-dashboard.png',
            key: '4f1d73de56e72b452078041add8a51f0a5c64f61',
        },
        copy: 'The home of our app which displays customer accounts and various other actions',
    },

    accounts: {
        ios: {
            image: 'https://i.ibb.co/TkqG33R/ios-account.png',
            key: '9e6838ee74cae390ef04f8b3ee87bce54ae83f53',
        },
        android: {
            image: 'https://i.ibb.co/Zf9908Y/android-accounts.png',
            key: '02169dc6b2e03c540a6ecbaef5308f588a7855ea',
        },
        web: {
            image: 'https://i.ibb.co/r3f4YWD/web-account.png',
            key: '83cc87a757ad213f5df941d9d08801627714892b',
        },
        copy: 'Ultimate access account added for testing to see the UI which is standard across our accounts (except loans which is slightly different).',
    },

    messaging: {
        ios: {
            image: 'https://i.ibb.co/GFbJ8vG/ios-messages.png',
            key: 'de73e1db9a63fb7db0ae49e2e42147cc13a80d8a',
        },
        android: {
            image: 'https://i.ibb.co/L1CgCVJ/android-messages.png',
            key: '0ed3778b78ae08544e098d7477b8dca757d60897',
        },
        web: {
            image: 'https://i.ibb.co/V3gKGSC/web-secure-Messaging.png',
            key: 'f23241aa1777da62abfb94d5ef3fb314f18b1105',
        },
        copy: 'Secure messaging is the message service where customers can send a message in regards to anything to GB and we can respond in that channel. Indications of new replies are handle solely with this feature.',
    },

    notifications: {
        ios: {
            image: 'https://i.ibb.co/z8r8dBW/ios-notifications.png',
            key: '798a09fe169e3d62a2a4465e168ba7e5b5fe1b79',
        },
        android: {
            image: 'https://i.ibb.co/RhcQyqJ/android-notifications.png',
            key: 'd953251c9c01ccf6be64028b3602dd5d9f8f9fc9',
        },
        web: {
            image: 'https://i.ibb.co/yyKpTLK/web-notifications.png',
            key: 'ae3ab8df22f6972b4bd42dc57a4ba0d0eb9ca9ca',
        },
        copy: 'Notifications is where we can notify the customer about different things happening on their account. Things such as, (They have a card to activate, Theres been a failed payment, Upcoming scheduled maintenance.)',
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
