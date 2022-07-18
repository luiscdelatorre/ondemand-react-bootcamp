
import { FeaturedBanners, FeaturedProducts, FeaturedCategories } from 'components'
import { Container, Intro } from './Home.styles'

const Home = () => {
  return (
    <Container>
      <FeaturedBanners/>
      <FeaturedCategories />
      <Intro>
        <h2>Lorem Ipsum</h2>
        <p>Sed ex urna, ornare quis dictum sit amet, rhoncus eget purus. Nam vitae mauris ac metus rutrum venenatis. Aenean at dui aliquam, euismod magna eu, semper magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus egestas, massa vitae vehicula dignissim, libero arcu commodo turpis, a posuere elit tellus at dolor.</p>
      </Intro>
      <FeaturedProducts />
    </Container>
  )
}

export default Home 
