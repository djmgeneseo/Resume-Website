import React from 'react'

/**
 * Props:
 * @param {string} url - url of link
 * @param {} children - name of link
 */
const ExternalLink = (props) => {
  return (
    <a href={props.url} rel="noopener noreferrer" target="_blank">
        {props.children}
    </a>
  )
}

export default ExternalLink