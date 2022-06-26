
import { FeaturedBanners, FeaturedProducts, FeaturedCategories } from 'components'
import { Container, Intro } from './Home.styles'

const Home = ({ navigate }) => {
  return (
    <Container>
      <FeaturedBanners/>
      <FeaturedCategories />
      <Intro>
        <h2>Lorem Ipsum</h2>
        <p>Sed ex urna, ornare quis dictum sit amet, rhoncus eget purus. Nam vitae mauris ac metus rutrum venenatis. Aenean at dui aliquam, euismod magna eu, semper magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus egestas, massa vitae vehicula dignissim, libero arcu commodo turpis, a posuere elit tellus at dolor.</p>
      </Intro>
      <FeaturedProducts navigate={(page) => navigate(page)} />
      {/* <h1>HOME PAGE</h1>
      <h2>HOME PAGE</h2>
      <h3>HOME PAGE</h3>
      <h4>HOME PAGE</h4>
      <h5>HOME PAGE</h5>
      <h6>HOME PAGE</h6>
      <p>Lorem <b>Ipsum</b> <span>dolor</span> <small>sit</small> amet.</p>
      <a href='/'>This is a link</a>
      <button>My button</button> */}
    </Container>
  )
}

export default Home 
