import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Image from 'gatsby-image'

import Layout from "../components/layout"
import { colors } from "../utils/presets"

const FeatureList = styled(`ul`)`
  margin-left: 0;
  list-style: none;
`

const FeatureListItem = styled.li({
  backgroundImage: `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${
      colors.gatsby
    }' d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' /%3E%3C/svg%3E")`,
  backgroundPosition: `0 .25em`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `1em`,
  paddingLeft: `1.5em`,
})

const Index = ({ data, location }) => (
  <Layout
    location={location}
  >
    <ul>
      {data.allUnsplashImagesYaml.nodes.map(image => (
        <li key={image.localFile.childImageSharp.fluid.src}>
          <Image fluid={image.localFile.childImageSharp.fluid} />
        </li>
      ))}
    </ul>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    allUnsplashImagesYaml {
      nodes {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
