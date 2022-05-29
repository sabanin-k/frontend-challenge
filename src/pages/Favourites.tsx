import { Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { Card } from '../components/Card'
import { useAppSelector } from '../store/hooks'
import { selectFavCats } from '../store/reducers/catSlice'

export const Favourites: FC = () => {
    const favCats = useAppSelector(selectFavCats)

    const handleLike = (catId: string) => {
        console.log(favCats);
    }

    return (
        <Container
            maxW={'7xl'}
            mt={30}
            mb={30}
            centerContent
            as='main'
        >
            <Flex
                direction='row'
                wrap='wrap'
                gap={29}
            >
                {favCats.map(cat => {
                    return (
                        <Card cat={cat} key={cat.id} handleLike={handleLike} />
                    )
                })}
            </Flex>
        </Container>
    )
}
