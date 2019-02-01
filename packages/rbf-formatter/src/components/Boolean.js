import Formatter from './Formatter'
import PropTypes from 'prop-types'

export default class Boolean extends Formatter {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    labelTrue: PropTypes.node,
    labelFalse: PropTypes.node
  }
  static defaultProps = {
    labelTrue: 'Yes',
    labelFalse: 'No'
  }
  render () {
    const { value, labelTrue, labelFalse } = this.props
    return (
      value ? labelTrue : labelFalse
    )
  }
}
