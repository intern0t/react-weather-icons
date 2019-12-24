import React from 'react'
import PropTypes from 'prop-types'

const MoonAltWaningGibbous5 = props => {
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
        d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8c0.26,0,0.46,0,0.59-0.01
	c0.77-1.33,1.3-2.83,1.57-4.5s0.42-3.52,0.42-5.55c0-4.01-0.68-7.36-2.04-10.03c-0.11-0.01-0.29-0.01-0.54-0.01
	c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z"
      />
    </svg>
  )
}

MoonAltWaningGibbous5.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonAltWaningGibbous5.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonAltWaningGibbous5