import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'
import heartIcon from '../assets/vector.png'
import heartFilledIcon from '../assets/vectorFull.png'
import { ICat } from '../types'

export const CatCard: FC<Props> = ({ cat, handleLike, isLiked }) => {
    return (
        <Box
            position='relative'
            className='box'
            transition= 'transform 0.3s'
            _hover={{
                transform: 'scale(1.1)',
                boxShadow: '0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)',
                WebkitTransition: '0.3s'
            }}
        >
            <Image
                boxSize='225px'
                src={cat.url}
                alt='Картинка с котиком'
                objectFit='cover'
            />
            <Image
                onClick={() => handleLike(cat.id)}
                src={isLiked ? heartFilledIcon : heartIcon}
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
                transition='0.3s'
                _hover={{
                    transform:'scale(1.1)',
                    bg:`url(${heartFilledIcon})`
                }}
            />
            
        </Box>
    )
}


interface Props {
    cat: ICat
    isLiked: boolean
    handleLike: (catId: string) => void
}