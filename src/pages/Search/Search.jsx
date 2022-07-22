
import { SearchList } from 'components'
import { Container, Title, PageHeader } from './Search.styles'

const Search = () => {
  return (
    <Container className='container'>
      <PageHeader>
        <Title className='section-title'>Search Results</Title>
      </PageHeader>
      <SearchList />
    </Container>
  )
}

export default Search
