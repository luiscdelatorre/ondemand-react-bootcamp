import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import {
  PageItem,
  PageLink,
  PaginationList,
  PaginationContainer
} from './Pagination.styles'

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationList>
        <PageItem><PageLink href="#"><IoChevronBack /></PageLink></PageItem>
        <PageItem><PageLink href="#">1</PageLink></PageItem>
        <PageItem><PageLink href="#">2</PageLink></PageItem>
        <PageItem><PageLink href="#">3</PageLink></PageItem>
        <PageItem><PageLink href="#"><IoChevronForward /></PageLink></PageItem>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Pagination
