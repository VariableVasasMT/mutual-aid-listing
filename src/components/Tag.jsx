import PropTypes from "prop-types"
import React from "react"

export const Tag = (props) => {
  const {
    color,
    text,
  } = props

  return (
    <span className={`bg-gradient-to-r from-${color}-700 to-${color}-500 shadow-sm rounded-md text-white px-3 py-1 mr-2`}>
      {text}
    </span>
  )
}

Tag.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
