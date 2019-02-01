/* global test, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Text from './Text'

test('should return "Yes" label', () => {
  const component = renderer.create(
    <Text value='testStr' />
  )
  expect(component.toJSON()).toStrictEqual('testStr')
})
