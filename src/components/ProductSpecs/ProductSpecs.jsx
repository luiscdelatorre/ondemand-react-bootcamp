import {
  Container,
 Description, Name, SpecsTable, SpecsTableRow, Subtitle 
} from './ProductSpecs.styles'
import PropTypes from 'prop-types'

const ProductSpecs = ({ specs }) => {
  return (
    <>
      <hr />
      <Container>
        <Subtitle>Specs</Subtitle>
        <hr />
        <SpecsTable>
          {specs.map(({ spec_name, spec_value }, index) => (
            <SpecsTableRow key={index}>
              <Name>{ spec_name }</Name>
              <Description>{ spec_value }</Description>
            </SpecsTableRow>
          ))}
        </SpecsTable>
      </Container>
    </>
  )
}

ProductSpecs.propTypes = {
  specs: PropTypes.array.isRequired
}

export default ProductSpecs
