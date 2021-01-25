import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import EventsGrid from '../components/EventsGrid'

export const EventsPageTemplate = ({
  title,
  image,
  heading,
  shows
}) => (
  <div>
    <div>
      Background image here
      <h2>{title}</h2>
      <h3>{heading}</h3>
      <div>
        <EventsGrid gridItems={shows}/>
      </div>
    </div>
  </div>
)

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  shows: PropTypes.array
}


const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return(
    <Layout>
      <EventsPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        shows={frontmatter.shows}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPageTemplate{
    markdownRemark(frontmatter: { templateKey: { eq: "events" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }    
        }
        heading
        shows {
          venue
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }  
          }
          tickets
          date  
        }
      }
    }
  }
`