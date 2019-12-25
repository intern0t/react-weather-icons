import React from 'react'
import PropTypes from 'prop-types'

const MoonWaningCrescent4 = props => {
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
				d="M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51c-2.07-1.01-3.59-2.45-4.56-4.33
	S9,17.19,9,14.44c0-2.53,0.56-4.78,1.69-6.75s2.57-3.47,4.31-4.5c-2.04,0-3.93,0.5-5.65,1.51s-3.1,2.37-4.1,4.09
	S3.74,12.4,3.74,14.44z"
			/>
		</svg>
	)
}

MoonWaningCrescent4.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaningCrescent4.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaningCrescent4
