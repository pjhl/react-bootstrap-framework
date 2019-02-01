/* global test, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Boolean from './Boolean'

test('should return "Yes" label', () => {
  const component = renderer.create(
    <Boolean value />
  )
  expect(component.toJSON()).toStrictEqual('Yes')
})
test('should return "No" label', () => {
  const component = renderer.create(
    <Boolean value={false} />
  )
  expect(component.toJSON()).toStrictEqual('No')
})
test('should return custom label', () => {
  const labelTrue = <span>True</span>
  const labelFalse = <span>False</span>
  const component = renderer.create(
    <Boolean value labelTrue={labelTrue} labelFalse={labelFalse} />
  )
  expect(component.toJSON()).toEqual({ type: 'span', props: {}, children: [ 'True' ] })

  const component2 = renderer.create(
    <Boolean value={false} labelTrue={labelTrue} labelFalse={labelFalse} />
  )
  expect(component2.toJSON()).toEqual({ type: 'span', props: {}, children: [ 'False' ] })
})
