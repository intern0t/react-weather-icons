import React from 'react'
import PropTypes from 'prop-types'

const MoonWaningGibbous6 = props => {
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
        d="M3.74,14.46c0,2.04,0.5,3.92,1.51,5.65s2.37,3.09,4.09,4.09s3.61,1.51,5.65,1.51c1.44-3.08,2.15-6.83,2.15-11.25
	c0-3.46-0.72-7.2-2.15-11.24c-1.52,0-2.98,0.3-4.37,0.89S8.03,5.5,7.03,6.5s-1.8,2.2-2.4,3.59S3.74,12.93,3.74,14.46z"
      />
    </svg>
  )
}

MoonWaningGibbous6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaningGibbous6.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaningGibbous6
