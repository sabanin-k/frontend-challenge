import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header: FC = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isFav = location.pathname === '/favourites'

    return (
        <Box
            w='100vw'
            h={16}
            bg='blue.400'
            shadow='0px 4px 4px rgba(0, 0, 0, 0.24)'
        >
            <Container maxW={'7xl'} >
                <Flex as='nav' >
                    <Box>
                        <Link to='/' >
                            <Flex
                                h={16}
                                justify='center'
                                align='center'
                                bg={isHome ? 'blue.600' : 'blue.400'}
                            >
                                <Text
                                    ml={10}
                                    mr={10}
                                    color='white'
                                >
                                    Все котики
                                </Text>
                            </Flex>
                        </Link>
                    </Box>
                    <Box>
                        <Link to='/favourites' >
                            <Flex
                                h={16}
                                justify='center'
                                align='center'
                                bg={isFav ? 'blue.600' : 'blue.400'}
                            >
                                <Text
                                    ml={10}
                                    mr={10}
                                    color='white'
                                >
                                    Любимые котики
                                </Text>
                            </Flex>
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
