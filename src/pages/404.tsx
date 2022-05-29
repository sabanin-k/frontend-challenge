import { Container, Flex, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import catImage from '../assets/cat.png'

const Page404: FC = () => {
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
                <Image src={catImage} w={300} />
                <Text
                    mt={10}
                    fontSize={30}
                >Ой, тут нет такой страницы.</Text>
                <Link to='/'>
                    <Text
                        fontSize={20}
                        textDecoration='underline'
                    >Обратно к котикам!</Text>
                </Link>
            </Flex>
        </Container>
    )
}

export default Page404