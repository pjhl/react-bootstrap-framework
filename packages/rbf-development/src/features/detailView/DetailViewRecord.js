import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default class DetailViewRecord {
  constructor (record) {
    this.record = record
    this.labelName = null
  }
  static getDefaultLabel = (name = '') => {
    return name.substr(0, 1).toUpperCase() + name.substr(1)
  }
  label (label) {
    this.labelName = label
    return this
  }
  text (name) {
    const label = this.labelName || this.constructor.getDefaultLabel(name)
    const value = this.record[name]
    return (
      <ListGroup.Item>
        <strong>{ label }</strong>:<br />
        { value }
      </ListGroup.Item>
    )
  }
}
