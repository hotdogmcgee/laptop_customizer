import React from 'react'

class ListItem_option extends React.Component {
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
            <li className="feature__item">
            <div 
                // className={featureClass}
                onClick={this.props.updateFeature()}
            >
                { name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(cost) })
            </div>
            </li>
        )
      
    }
}

export default ListItem_option