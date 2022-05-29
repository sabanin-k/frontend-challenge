import { Container, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { CatCard } from '../components/CatCard'
import { useAppSelector } from '../store/hooks'
import { selectCats, selectFavCats } from '../store/reducers/catSlice'

export const Favourites: FC<Props> = ({ handleLike }) => {
    const favCats = useAppSelector(selectFavCats)
    const cats = useAppSelector(selectCats)

    return (
        <Container
            maxW={'7xl'}
            mt={30}
            mb={30}
            centerContent
            as='main'
        >
            {favCats.length !== 0
                ? <Flex
                    direction='row'
                    wrap='wrap'
                    gap={29}
                >
                    {favCats.map(id => {
                        const cat = cats.find(cat => cat.id === id)
                        const isLiked = true
                        return (
                            cat && <CatCard
                                cat={cat}
                                key={cat.id}
                                isLiked={isLiked}
                                handleLike={handleLike} />
                        )
                    })}
                </Flex>
                : <Flex
                    h='50vh'
                    justify='center'
                    align='center'
                >
                    <Text
                        as='h2'
                        fontSize={20}
                    >
                        {'Поставь '}
                        <Link to='/' >
                            <Text as='span' textDecoration='underline' >
                                котикам
                            </Text>
                        </Link>
                        {' лайк😻'}
                    </Text>
                </Flex>
            }
        </Container>
    )
}


interface Props {
    handleLike: (catId: string) => void
}