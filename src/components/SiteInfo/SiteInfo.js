import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './SiteInfo.module.scss'

const SiteInfo = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

SiteInfo.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default SiteInfo
