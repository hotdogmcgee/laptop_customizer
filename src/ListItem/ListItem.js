import React from 'react'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    //destructure inside render
    render() {

            const {
                item: {
                      name,
                      cost,
                }
           } = this.props
           

            // const selectedClass = name === this.state.selected[key].name ? 'feature__selected' : '';
            // const featureClass = 'feature__option ' + selectedClass;
            return (
                <li key={this.props.index} className="feature__item">
                <div 
                    // className={featureClass}
                    // onClick={e => this.props.updateFeature(key, item)}
                >
                    { name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(cost) })
                </div>
                </li>
            )
          
    }
}

export default ListItem