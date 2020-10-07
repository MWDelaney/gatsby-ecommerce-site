import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

function Product({ product }) {
  const { addItem } = useShoppingCart()
  return (
    <Box>
      <Grid sx={{ color: 'primary', fontWeight: 'heading' }} columns={[1, 2]}>
        <Box>
          <Image alt={`${product.name}`} src={product.image} />
        </Box>
        <Box
          as="section"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box as="p">{product.description}</Box>
          <Box as="">{formatCurrencyString({value: product.price, currency: product.currency})}</Box>
          <Button aria-label={`Add ${product.name} to cart`} sx={{backgroundColor: 'primary'}} onClick={() => addItem(product)}>Add To Cart</Button>

        </Box>
      </Grid>
    </Box>
  )
}

export default Product
