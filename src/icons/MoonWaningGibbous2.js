import React from 'react'
import PropTypes from 'prop-types'

const MoonWaningGibbous2 = props => {
  const { color, size, ...mProps } = props
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill={color}
      stroke="auto"
      strokeWidth="auto"
      {...mProps}
      space="preserve"
    >
      <path
        d="M3.74,14.49c0,1.22,0.19,2.4,0.56,3.54s0.91,2.17,1.6,3.09s1.5,1.72,2.42,2.42s1.95,1.23,3.09,1.6s2.32,0.56,3.54,0.56
	c4.33-1.73,6.49-5.47,6.49-11.22c0-1.39-0.18-2.7-0.54-3.93s-0.85-2.31-1.47-3.23s-1.31-1.71-2.06-2.39s-1.56-1.23-2.42-1.66
	c-2.03,0-3.91,0.5-5.63,1.5S6.25,7.14,5.24,8.86S3.74,12.46,3.74,14.49z"
      />
    </svg>
  )
}

MoonWaningGibbous2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaningGibbous2.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaningGibbous2