import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Favourites } from "../pages/Favourites";
import { Home } from "../pages/Home";

const App: FC = () => {
    return (
        <>
            <Container maxW={'10xl'} centerContent overflowX='hidden' >
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='favourites' element={<Favourites />} />
                </Routes>
            </Container>
        </>
    )
}

export default App;
