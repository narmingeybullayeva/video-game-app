import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card width='300px' borderRadius={10} overflow='hidden'>
        <Skeleton height={40}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton