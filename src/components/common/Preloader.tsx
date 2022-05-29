import { Flex, Image } from '@chakra-ui/react'
import { FC } from 'react'
import spinner from '../../assets/spinner.svg'

export const Preloader: FC = () => {
    return (
        <Flex
            h='50vh'
            align='center'
        >
            <Image src={spinner} />
        </Flex>
    )
}
