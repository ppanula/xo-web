import { Component } from 'react'

import propTypes from '../prop-types'

// ===================================================================

@propTypes({
  disabled: propTypes.bool,
  label: propTypes.any.isRequired,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  required: propTypes.bool,
  schema: propTypes.object.isRequired,
  uiSchema: propTypes.object,
  defaultValue: propTypes.any
})
export default class AbstractInput extends Component {
  set value (value) {
    this.refs.input.value = value === undefined ? '' : String(value)
  }

  get value () {
    const { value } = this.refs.input
    return !value ? undefined : value
  }
}
