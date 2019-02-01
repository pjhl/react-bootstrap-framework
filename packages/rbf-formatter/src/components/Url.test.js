/* global test, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Url from './Url'

test('Url', () => {
  const component = renderer.create(
    <Url value='http://example.com' htmlOptions={{
      className: 'class',
      id: 'id'
    }}>Link text</Url>
  )
  expect(component.toJSON()).toEqual({
    type: 'a',
    props: {
      href: 'http://example.com',
      className: 'class',
      id: 'id'
    },
    children: ['Link text']
  })
})
