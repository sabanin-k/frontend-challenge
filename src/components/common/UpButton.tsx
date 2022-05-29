import { Box, Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

export const UpButton: FC = () => {
    const [buttonState, setButtonState] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    return <>
        {window.innerWidth > 768
            && <Box
                position='fixed'
                top='0'
                left='0'
            >
                {buttonState
                    && <Text
                        as='span'
                        onClick={handleClick}
                        width='100px'
                        height='100vh'
                        background-color='transparent'
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        paddingTop='20px'
                        fontWeight='100'
                        fontSize='20px'
                        color='rgb(10, 10, 10)'
                        _hover={{
                            backgroundColor:'blackAlpha.100'
                        }}
                    >
                        Наверх
                    </Text>}
            </Box>}
    </>
}