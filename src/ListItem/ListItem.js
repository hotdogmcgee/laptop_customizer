import React from 'react'
import ListItemOption from '../ListItem_option'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { featuresItem = [], featureName, currentItem } = this.props

        const ListItem_item = featuresItem.map((item, index) => 
                {
                return <ListItemOption
                    item={item}
                    updateFeature={this.props.updateFeature}
                    key={index}
                    cost={item.cost}
                    featureName={featureName}
                    currentItem={currentItem}
                 />}

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

ListItem.defaultProps = {
    featuresItem: []
}


export default ListItem