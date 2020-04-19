import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className='site-wrapper'>
      <header className='site-header'>
        <div className='site-title'>
          <Link to='/'>{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className='site-footer'>
        <p>
          &copy; 2020{' '}
          <span role='img' aria-label='love'>
            ❤️
          </span>{' '}
          Zuzana Senkyrka and{' '}
          <a href='https://kevinsisland.netlify.com/'>Clawz Laboratories</a>{' '}
          &bull; Delog starter
          crafted by <a href='https://w3layouts.com'>W3Layouts</a>
        </p>
      </footer>
    </div>
  )
}
