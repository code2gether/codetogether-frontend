import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Typography.module.scss'

const defaultHeadlineMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
}

const Typography = props => {
  const {
    children,
    className: classNameProp,
    variant,
    component: componentProp,
    paragraph,
    headlineMapping,
    ...other
  } = props

  const className = classnames(styles[variant], classNameProp)

  const Component =
    componentProp ||
    (paragraph
      ? 'p'
      : headlineMapping[variant] || defaultHeadlineMapping[variant]) ||
    'span'

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  )
}

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headlineMapping: PropTypes.object,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  paragraph: PropTypes.bool,
  variant: PropTypes.oneOf([
    'display1',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'body3',
  ]),
}
Typography.defaultProps = {
  headlineMapping: defaultHeadlineMapping,
  paragraph: false,
  variant: 'display1',
}

export default Typography
