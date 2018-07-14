import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ReactNumberTicker from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays 0', () => {
    render(<ReactNumberTicker value={[0, 0]}/>, node, () => {
      expect(node.innerHTML).toContain('0')
    })
  })
})
