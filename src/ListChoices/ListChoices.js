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
          .map((featuresItem, index) => {
            
              return <ListItem 
              //featuresItem is simply the name of the object, do I need to use each part of object's keys to pass as paramaters in props?
                name={featuresItem} 
                featuresItem={features}
                updateFeature={this.props.updateFeature}
                key={index}
              />

            }); 
    

    return (
        <div className="List-choices-container">
                {displayFeatures}
        </div>
        
    )
    }
}




export default ListChoices

//will need to map over features in App.js to create a series of divs with ULs. Or I could make a component to contain each UL.  

// 1. Container for all tech specs-
// 2. Container for each item (processor, OS, etc.)
// 3. li generator