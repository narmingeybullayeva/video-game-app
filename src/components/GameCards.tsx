import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScrore from './CriticScrore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emojis'

interface Props {
    game: Game
}

const GameCards = ({game}: Props) => {
  return (
    <Card >
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScrore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCards