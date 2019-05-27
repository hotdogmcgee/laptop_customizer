import React from 'react'

class ListItemOption extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {item, cost, featureName, currentItem} = this.props

        const selectedClass = item.name === currentItem.name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
            <li className="feature__item"
            onClick= {() => this.props.updateFeature(featureName, item)}
            >
            <div className={featureClass}
            >
                <div>{item.name}</div>
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(cost) })
            </div>
            </li>
        )
      
    }
}

export default ListItemOption