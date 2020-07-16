import React from 'react'
import { shallow } from 'enzyme'
// Import Components
import { DarkToggler } from './index'
const clickFn: any = jest.fn()

describe('first', () => {
  test('Should render true ', () => {
    const component = shallow(<DarkToggler isDark={false} onClick={clickFn} />)
    component.find('input#checkbox').simulate('click')
    expect(component).toMatchSnapshot()
  })

  test('Should render twice true ', () => {
    const component = shallow(<DarkToggler isDark={false} onClick={clickFn} />)
    component.find('input#checkbox').simulate('click')
    expect(component).toMatchSnapshot()
  })
})
