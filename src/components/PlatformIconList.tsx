import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib/esm/iconBase'
import { Platform } from '../hooks/useGames'

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string ]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
        }

  return (
    <HStack marginY={'10px'}> 
    {/* // we can also use 1 it is 4 px in chakra */}
    {platforms.map((platform) => <Icon  as={iconMap[platform.slug]} color= 'gray.500'/>)}
    </HStack>
  )
}

export default PlatformIconList