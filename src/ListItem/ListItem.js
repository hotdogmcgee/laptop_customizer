import React from 'react'
import ListItemOption from '../ListItem_option/ListItemOption.js'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    
    //render a component that displays two options
    render() {

        const { featuresItem } = this.props
        const ListItem_item = Object.keys(featuresItem).map((item, index) => 
                <ListItemOption
                    item={item}
                    updateFeature={this.props.updateFeature}
                    key={index}
                 />

            );


            return (
                <div className="feature" key={featuresItem.name}>
                <div className="feature__name">{featuresItem.name}</div>
                <ul className="feature__list">
                    { ListItem_item }
                </ul>
                </div>
            )
    }
}


export default ListItem