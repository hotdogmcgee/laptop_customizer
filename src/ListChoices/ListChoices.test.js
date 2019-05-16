import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListChoices from './ListChoices.js'


describe('ListChoices component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListChoices />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const FEATURES = {
        Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
          }
        ],
        "Operating System": [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          {
            name: 'Bodhi Linux',
            cost: 300
          }
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      };
    const tree = renderer
      .create(<ListChoices features={FEATURES} updateFeature={() => {return 1}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});