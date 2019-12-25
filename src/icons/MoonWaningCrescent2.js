import React from 'react'
import PropTypes from 'prop-types'

const MoonWaningCrescent2 = props => {
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
				d="M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51c-2.01-2.74-3.02-6.5-3.02-11.26
	c0-3.98,1.01-7.73,3.02-11.25c-2.04,0-3.93,0.5-5.65,1.51s-3.1,2.37-4.1,4.09S3.74,12.4,3.74,14.44z"
			/>
		</svg>
	)
}

MoonWaningCrescent2.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MoonWaningCrescent2.defaultProps = {
	color: '#000000',
	size: '30',
}

export default MoonWaningCrescent2
