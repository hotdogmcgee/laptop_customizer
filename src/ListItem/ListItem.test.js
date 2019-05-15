import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import ListItem from './ListItem.js'

describe('ListItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//   it('renders the UI as expected', () => {
//     const tree = renderer
//       .create(<ListItem item="item" index="index" updateFeature=""/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();  
//   });

});