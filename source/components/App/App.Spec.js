import React from 'react'
import App from './App'
import expect from 'expect.js'
import TestUtils from 'react-addons-test-utils'

const { describe, it } = global

function renderApp (props = {}) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<App {...props} />)
  return renderer.getRenderOutput()
}

describe('Component: App', () => {
  it('renders a div with a className of container', () => {
    const { props, type } = renderApp()
    expect(props.className).to.contain('container')
    expect(type).to.equal('div')
  })
})
