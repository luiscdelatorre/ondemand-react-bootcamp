
import Slider from './components/Slider/Slider'
import featuredBanners from 'mocks/en-us/featured-banners.json'

const FeaturedBanners = () => {
  const { results } = featuredBanners
  return (
    <Slider items={results}/>
  )
}

export default FeaturedBanners 
