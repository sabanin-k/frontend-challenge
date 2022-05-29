import { Container, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectFetchingError } from '../../store/reducers/catSlice'

export const Error: FC = () => {
    const fetchingError = useAppSelector(selectFetchingError)

    return (
        <Container
            maxW={'7xl'}
            centerContent
            as='main'>
            <Flex
                h='70vh'
                direction='column'
                justify='center'
                align='center'
            >
                <Text
                    fontSize={20}
                >
                    Ой, что-то не так:
                    <Text
                        color={'red.300'}
                    >{fetchingError}</Text>
                    Придется обновить страницу.
                </Text>
            </Flex>
        </Container>
    )
}
