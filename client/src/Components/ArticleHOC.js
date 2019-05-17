import React from 'react'

const ArticleHOC = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ArticleHOC
