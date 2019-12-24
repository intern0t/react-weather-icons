import React from 'react'
import PropTypes from 'prop-types'

const MoonWaxingCrescent6 = props => {
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
        d="M14.99,25.71c2.04,0,3.93-0.5,5.65-1.51s3.1-2.37,4.1-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09
	s-3.61-1.51-5.65-1.51c1.67,2.9,2.5,6.65,2.5,11.25c0,2.33-0.17,4.43-0.52,6.3S15.97,24.26,14.99,25.71z"
      />
    </svg>
  )
}

MoonWaxingCrescent6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaxingCrescent6.defaultProps = {
  color: '#000000',
  size: '30',
}

export default MoonWaxingCrescent6
