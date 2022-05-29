import { Button, Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CatCard } from '../components/CatCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchCats, increasePageIndex, selectCats, selectFavCats } from '../store/reducers/catSlice'

export const Home: FC<Props> = ({ handleLike }) => {
    const dispatch = useAppDispatch()
    const cats = useAppSelector(selectCats)
    const favCats = useAppSelector(selectFavCats)

    return (
        <>
            <Container
                maxW={'7xl'}
                mt={30}
                mb={30}
                centerContent
                as='main'
            >
                <Flex
                    justify='center'
                    direction='row'
                    wrap='wrap'
                    gap={29}
                >
                    {cats.map((cat) => {
                        const isLiked = favCats.includes(cat.id)
                        return (
                            <CatCard
                                cat={cat}
                                key={cat.id}
                                isLiked={isLiked}
                                handleLike={handleLike}
                            />
                        )
                    })}
                </Flex>
                <Button
                    onClick={() => {
                        dispatch(increasePageIndex)
                        dispatch(fetchCats())
                    }}
                    mt={30}
                >Показать еще котиков</Button>
            </Container>
        </>
    )
}


interface Props{
    handleLike:(catId: string) => void
}