import { Container } from "@chakra-ui/react";
import { FC, useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Favourites } from "../pages/Favourites";
import { Home } from "../pages/Home";
import { useAppDispatch } from "../store/hooks";
import { addCatToFavourites, fetchCats } from "../store/reducers/catSlice";

const App: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    const handleLike = useCallback((catId: string) => {
        dispatch(addCatToFavourites(catId))
    }, [dispatch])

    return (
        <>
            <Container maxW={'10xl'} centerContent overflowX='hidden' >
                <Header />
                <Routes>
                    <Route path='/' element={<Home handleLike={handleLike} />} />
                    <Route path='favourites' element={<Favourites handleLike={handleLike} />} />
                </Routes>
            </Container>
        </>
    )
}

export default App;
