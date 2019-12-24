import React from 'react'
import PropTypes from 'prop-types'

const HurricaneWarning = props => {
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
        d="M7.8,24.6V7.45h1.13V24.6H7.8z M9.73,21.52v-6.6h8.55v6.6H9.73z M9.73,14.05v-6.6h8.55v6.6H9.73z M12.09,19.52h3.81v-2.51
	h-3.81V19.52z M12.09,12.05h3.81v-2.5h-3.81V12.05z"
      />
    </svg>
  )
}

HurricaneWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

HurricaneWarning.defaultProps = {
  color: '#000000',
  size: '30',
}

export default HurricaneWarning
