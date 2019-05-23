import React from 'react'
import ListItem from '../ListItem/ListItem.js'

class ListChoices extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { features, selected } = this.props

        const displayFeatures = Object.keys(features)
          .map((featuresItem, index) => {
            
              return <ListItem 
                featureName={featuresItem} 
                featuresItem={features[featuresItem]}
                updateFeature={this.props.updateFeature}
                key={index}
                selected={selected}
                />

            }); 
    

    return (
        <div className="List-choices-container">
                {displayFeatures}
        </div>
        )
    }
}

ListChoices.defaultProps = {
    features: {},
    selected: []
}

export default ListChoices
