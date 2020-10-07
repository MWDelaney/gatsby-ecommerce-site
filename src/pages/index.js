import React from "react"
import { Link } from "gatsby"
import { Container, Heading, Text, Grid, Card, Box, Image, Button, useColorMode } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
    <SEO title="Home" />
    <Button onClick={(e) => {
      setColorMode(colorMode === 'default' ? 'dark' : 'default')
    }}>
      Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
    </Button>
    <Container>
      <Heading as="h1">Very Good Fruit Store</Heading>
      <Grid columns={[1, 2, 3]} gap={20}>
        <Card>
          <Heading>Fresh</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam et metus ultrices rutrum. Fusce imperdiet diam ac odio euismod, nec tristique lectus faucibus. Vestibulum a tellus sapien.</Text>
        </Card>
        <Card>
          <Heading>Tasty</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam et metus ultrices rutrum. Fusce imperdiet diam ac odio euismod, nec tristique lectus faucibus. Vestibulum a tellus sapien.</Text>
        </Card>
        <Card>
          <Heading>Organic</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam et metus ultrices rutrum. Fusce imperdiet diam ac odio euismod, nec tristique lectus faucibus. Vestibulum a tellus sapien.</Text>
        </Card>
      </Grid>
      <Grid columns={[1, 2]}>
        <Box>
          <Image src={'https://www.fillmurray.com/400/300'} style={{backgroundSize: 'contain'}} />
        </Box>
        <Box>
          <Heading>This Store is Great</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam et metus ultrices rutrum. Fusce imperdiet diam ac odio euismod, nec tristique lectus faucibus. Vestibulum a tellus sapien.</Text>
        </Box>
      </Grid>
      <Grid columns={[1, 2]}>
        <Box>
          <Heading>This Store is Great</Heading>
          <Text variant={'text.caps'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor diam et metus ultrices rutrum. Fusce imperdiet diam ac odio euismod, nec tristique lectus faucibus. Vestibulum a tellus sapien.</Text>
        </Box>
        <Box>
          <Image src={'https://www.fillmurray.com/400/300'} style={{backgroundSize: 'contain'}} />
        </Box>
      </Grid>
    </Container>
  </Layout>
  )
}

export default IndexPage
