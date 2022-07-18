
import Slider from './components/Slider/Slider'
import { useFeaturedBanners } from 'utils/hooks'
import { Loader } from 'components'
import { Container } from './FeaturedBanners.styles'

const FeaturedBanners = () => {
  const { featuredBanners, isLoading } = useFeaturedBanners()

  return (
    <Container>
      {isLoading
        ? <Loader /> 
        : <Slider items={ featuredBanners }/>
      }
    </Container>
  )
}

export default FeaturedBanners 
