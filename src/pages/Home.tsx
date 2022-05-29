import { Button, Container, Flex } from '@chakra-ui/react'
import { FC, useCallback, useEffect } from 'react'
import { Card } from '../components/Card'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addCatToFavourites, fetchCats, increasePageIndex, selectCats } from '../store/reducers/catSlice'

export const Home: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    const cats = useAppSelector(selectCats)

    const handleLike = useCallback((catId: string) => {
        const likedCat = cats.filter(cat => cat.id === catId)
        dispatch(addCatToFavourites(likedCat[0]))
    }, [cats, dispatch])

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
                    direction='row'
                    wrap='wrap'
                    gap={29}
                >
                    {cats.map((cat) => {
                        return (
                            <Card
                                cat={cat}
                                key={cat.id}
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
