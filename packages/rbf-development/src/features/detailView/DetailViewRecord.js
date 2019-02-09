import React from 'react'
import { ListGroup } from 'react-bootstrap'

/**
 * Resolve object property with separator (".")
 * @param {object} Object
 * @param {string} Key with separator "."
 * @return {*} Object value
 */
function resolveObjectValue (obj, key) {
  return key.split('.').reduce((prev, curr) => prev && prev[curr], obj)
}

export default class DetailViewRecord {
  constructor (record) {
    this.record = record
    this.labelName = null
  }
  static getDefaultLabel = (name = '') => {
    return name
      .substr(0, 1).toUpperCase() + name.substr(1)
      .replace(/(\S)\.(\S)/i, '$1 $2') // Replace "ab.cd" to "ab cd" for nested keys
  }
  label (label) {
    this.labelName = label
    return this
  }
  text (name) {
    const label = this.labelName || this.constructor.getDefaultLabel(name)
    const value = resolveObjectValue(this.record, name)
    return (
      <ListGroup.Item>
        <strong>{ label }</strong>:<br />
        { value }
      </ListGroup.Item>
    )
  }
  boolean (name, { values = ['Yes', 'No'] } = {}) {
    const label = this.labelName || this.constructor.getDefaultLabel(name)
    const value = resolveObjectValue(this.record, name)
    return (
      <ListGroup.Item>
        <strong>{ label }</strong>:<br />
        <i className='text-primary'>{ value ? values[0] : values[1] }</i>
      </ListGroup.Item>
    )
  }
}
