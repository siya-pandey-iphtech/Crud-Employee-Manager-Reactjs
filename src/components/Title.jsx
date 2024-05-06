import React from 'react'

const Title = ({className, children}) => {
  return (
    <h1 className={`font-bold text-2xl  ${className}`}>{children}</h1>
  )
}

export default Title
