import React from 'react'

class ListItem extends React.Component {
    render() {
            const selectedClass = this.props.item.name === this.state.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <li key={this.props.index} className="feature__item">
                <div 
                    className={featureClass}
                    onClick={e => this.props.updateFeature(key, item)}
                >
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                </div>
                </li>
            )
          
    }
}

export default ListItem