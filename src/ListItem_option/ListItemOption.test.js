import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListItemOption from './index.js'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


describe('ListItemOption component', () => {
  const testObj = 
    {name: "hello",
    cost: 45}


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItemOption item={testObj} cost={testObj.cost} updateFeature={() => {return 1}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const wrapper = shallow(<ListItemOption item={testObj} cost={testObj.cost} updateFeature={() => {return 1}}/>)
    expect(toJson(wrapper)).toMatchSnapshot();  
  });

  it('simulates clicking an li element', () => {
    const wrapper = shallow(<ListItemOption item={testObj} cost={testObj.cost} updateFeature={() => {return 1}}/>)
    wrapper.find('.feature__item').simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
  })

})