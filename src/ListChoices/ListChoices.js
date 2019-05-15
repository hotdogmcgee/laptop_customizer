import React from 'react'
import ListItem from '../ListItem/ListItem.js'

class ListChoices extends React.Component {
    //I need this because I want to access props in a class, correct?
    constructor(props) {
        super(props)
    }

    render() {
    const features = this.props.features
          .map(key => {
            this.props.features[key].map((item, index) => {
                <ListItem
                    item={item}
                    index={index} 
                    updateFeature={this.props.updateFeature}
                 />
            });

            return (
                <div className="feature" key={this.props.key}>
                <div className="feature__name">{this.props.key}</div>
                <ul className="feature__list">
                    { features }
                </ul>
                </div>
            )
          }); 
    }
}

export default ListChoices

//will need to map over features in App.js to create a series of divs with ULs. Or I could make a component to contain each UL.  

// 1. Container for all tech specs-
// 2. Container for each item (processor, OS, etc.)
// 3. li generator