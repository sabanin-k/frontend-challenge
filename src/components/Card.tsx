import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { ICat } from '../types'
import heartIcon from '../assets/vector.png'
import heartFilledIcon from '../assets/vectorFull.png'

export const Card: FC<Props> = ({ cat, handleLike }) => {
    return (
        <Box
            position='relative'
            className='box'
        >
            <Image
                boxSize='225px'
                src={cat.url}
                alt='Картинка с котиком'
                objectFit='cover'
            />
            <Image
                onClick={() => handleLike(cat.id)}
                src={true ? heartIcon : heartFilledIcon}
                position='absolute'
                bottom={4}
                right={3}
                zIndex='10'
                cursor='pointer'
                display='none'
                sx={{
                    '.box:hover &': {
                        display: 'block'
                    }
                }}
            />
            
        </Box>
    )
}


interface Props {
    cat: ICat
    handleLike: (catId: string) => void
}