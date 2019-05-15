import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListItem from './ListItem.js'


describe('ListItem component', () => {
  it('renders without crashing', () => {
    const testObj = {
        name: "hello",
        cost: 45
    }
    const div = document.createElement('div');
    ReactDOM.render(<ListItem item={testObj} updateFeature={() => {return 1}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const testObj = {
        name: "hello",
        cost: 45
    }
    const tree = renderer
      .create(<ListItem item={testObj} index={3} updateFeature={() => {return 1}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});