import React from 'react'
import ListItem from '../ListItem/ListItem.js'

class ListChoices extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {
            features
        } = this.props

    const displayFeatures = Object.keys(features)
          .map((featuresItem) => {
            const ListItem_item = features[featuresItem].map((item, index) => 
                <ListItem
                    item={item}
                    updateFeature={this.props.updateFeature}
                    key={index}
                 />

            );


            return (
                <div className="feature" key={features[featuresItem].name}>
                <div className="feature__name">{features[featuresItem].name}</div>
                <ul className="feature__list">
                    { ListItem_item }
                </ul>
                </div>
            )

            }); 
    

    return displayFeatures

    }
}

ListChoices.defaultProps = {
    features: []
}

export default ListChoices

//will need to map over features in App.js to create a series of divs with ULs. Or I could make a component to contain each UL.  

// 1. Container for all tech specs-
// 2. Container for each item (processor, OS, etc.)
// 3. li generator