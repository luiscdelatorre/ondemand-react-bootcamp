import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import {
  PageItem,
  PageLink,
  PaginationList,
  PaginationContainer
} from './Pagination.styles'
import PropTypes from 'prop-types'

const Pagination = ({ pagination, changePage }) => {
  const {
    totalPages,
    currentPage,
    prevPage,
    nextPage
  } = pagination
  const pagesArray = Array.from({
    length: totalPages
  }, (_, i) => i + 1)


  const handlePrevPage = () => {
    if (prevPage) {
      changePage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (nextPage) {
      changePage(currentPage + 1)
    }
  }

  return (
    <PaginationContainer>
      <PaginationList>
        <PageItem disabled={!prevPage}>
          <PageLink type='button' onClick={handlePrevPage}>
            <IoChevronBack />
          </PageLink>
        </PageItem>
        {pagesArray.map((page, index) => {
            const isActive = currentPage === page
            return (
              <PageItem key={index}>
                <PageLink 
                  type='button'
                  active={isActive}
                  onClick={() => changePage(page)}
                >
                  { page }
                </PageLink>
              </PageItem>
            )
          })
        }
        <PageItem disabled={!nextPage}>
          <PageLink type='button' onClick={handleNextPage}>
            <IoChevronForward />
          </PageLink>
        </PageItem>
      </PaginationList>
    </PaginationContainer>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired
}

export default Pagination
