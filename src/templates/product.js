import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Product from '../components/product'

export const query = graphql`
  query($slug: String!) {
    product(slug: {eq: $slug}) {
      slug
      name
      image
      sku
      price
      currency
      description
    }
  }
`
const ProductTemplate = ({data}) => {
  return(
    <Layout>
      <Product product={data.product} />
    </Layout>
  )
}

export default ProductTemplate
