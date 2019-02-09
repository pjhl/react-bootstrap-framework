import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default class DetailViewRecord {
  constructor (record) {
    this.record = record
    this.labelName = null
  }
  label (label) {
    this.labelName = label
    return this
  }
  text (name) {
    const { labelName } = this
    const value = this.record[name]
    return (
      <ListGroup.Item>
        <strong>{ labelName }</strong>:<br />
        { value }
      </ListGroup.Item>
    )
  }
}
