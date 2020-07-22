import React from 'react'
import { shallow } from 'enzyme'
import { DarkModeToggler } from '.'

const clickFn = jest.fn()
describe('ExampleComponent', () => {
  it('general', () => {
    const wrapper = shallow(
      <DarkModeToggler isDark='light' size='small' onClick={clickFn} />
    )
    wrapper.find('div[className="toggle small"]').simulate('click')
    // wrapper.find('div[className="toogle"]').get(1).simulate('click')
    expect(wrapper).toMatchSnapshot()
  })

  test('should return border and small', () => {
    const wrapper = shallow(
      <DarkModeToggler size='small' onClick={jest.fn()} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('should return border value ', () => {
    const wrapper = shallow(
      <DarkModeToggler border='#ffff' onClick={jest.fn()} />
    )
    wrapper.find('div[className="toggle"]').simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
