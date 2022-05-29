import { Container } from "@chakra-ui/react";
import { FC, lazy, Suspense, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Favourites } from "../pages/Favourites";
import { Home } from "../pages/Home";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addCatToFavourites, fetchCats, selectFetchingError } from "../store/reducers/catSlice";
import { Error } from "./common/Error";
import { Header } from "./Header";

const Page404 = lazy(() => import('../pages/404'))

const App: FC = () => {
    const dispatch = useAppDispatch()
    const fetchingError = useAppSelector(selectFetchingError)

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    const handleLike = useCallback((catId: string) => {
        dispatch(addCatToFavourites(catId))
    }, [dispatch])

    if (fetchingError) return <Error />

    return (
        <Container maxW={'10xl'} centerContent overflowX='hidden' >
            <Header />
            <Routes>
                <Route path='/' element={<Home handleLike={handleLike} />} />
                <Route path='favourites' element={<Favourites handleLike={handleLike} />} />
                <Route path='*' element={<Suspense><Page404 /></Suspense>} />
            </Routes>
        </Container>
    )
}


export default App;
