import { Button, Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { CatCard } from '../components/CatCard'
import { Preloader } from '../components/common/Preloader'
import { UpButton } from '../components/common/UpButton'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
    fetchCats, increasePageIndex, selectCats,
    selectFavCats, selectInitialization, selectLoading
} from '../store/reducers/catSlice'

export const Home: FC<Props> = ({ handleLike }) => {
    const dispatch = useAppDispatch()
    const cats = useAppSelector(selectCats)
    const favCats = useAppSelector(selectFavCats)
    const isLoading = useAppSelector(selectLoading)
    const isInitialized = useAppSelector(selectInitialization)

    return (
        <>
            {isInitialized
                ? <Container
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
                    >
                        {isLoading ? 'Ищем котиков...' : 'Показать еще котиков'}
                    </Button>
                </Container>
                : <Preloader />
            }
            <UpButton />
        </>
    )
}


interface Props {
    handleLike: (catId: string) => void
}