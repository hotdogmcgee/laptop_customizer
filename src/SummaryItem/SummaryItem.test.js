import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SummaryItem from './SummaryItem.js'


describe('SummaryItem component', () => {
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<SummaryItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<SummaryItem label={"type of thing"} name={"test item"} cost={430}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});