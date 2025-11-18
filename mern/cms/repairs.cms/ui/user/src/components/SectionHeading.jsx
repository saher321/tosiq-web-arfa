import React, { Children } from 'react'

export const SectionHeading = ({ className, children }) => {
  return (
    <h3 className={className}>{children}</h3>
  )
}
