import React from 'react'
import Loading from './Loading'
import expect from 'expect.js'
import TestUtils from 'react-addons-test-utils'

const { describe, it } = global

function renderLoading (props = {}) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Loading {...props} />)
  return renderer.getRenderOutput()
}

describe('Component: Loading', () => {
  it('renders a div with a className of Loading', () => {
    const { props, type } = renderLoading()
    expect(props.className).to.contain('Loading')
    expect(type).to.equal('div')
  })
  it('can be hidden with isHidden prop', () => {
    const { props } = renderLoading({ isHidden: true })
    expect(props.className).to.contain('hidden')
  })
})
