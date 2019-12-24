import React from 'react'
import PropTypes from 'prop-types'

const MoonWaningGibbous5 = props => {
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
        d="M3.74,14.47c0,2.03,0.5,3.91,1.51,5.63s2.37,3.09,4.09,4.09s3.6,1.51,5.63,1.51c2.17-2.75,3.25-6.5,3.25-11.24
	c0-3.96-1.08-7.71-3.25-11.24c-2.03,0-3.91,0.5-5.63,1.5S6.26,7.1,5.25,8.83S3.74,12.44,3.74,14.47z"
      />
    </svg>
  )
}

MoonWaningGibbous5.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaningGibbous5.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaningGibbous5
