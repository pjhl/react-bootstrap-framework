import Formatter from './Formatter'
import PropTypes from 'prop-types'

export default class Text extends Formatter {
  static propTypes = {
    value: PropTypes.string
  }
  static defaultProps = {
    value: ''
  }
  render () {
    const { value } = this.props
    return (
      value
    )
  }
}
