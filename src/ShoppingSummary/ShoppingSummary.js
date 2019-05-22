import React from 'react'
import ShoppingItem from '../SummaryItem/SummaryItem';

class ShoppingSummary extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        const { selected } = this.props

        const summary = Object.keys(selected)
          .map((key, index) => <ShoppingItem 
          item={key} 
          key={index}
          name={selected[key].name}
          cost={selected[key].cost}
          />)

        const total = Object.keys(selected)
          .reduce((acc, curr) => acc + selected[curr].cost, 0); 
        return (
            <div>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(total) }
                    </div>
                </div>
            </div>
        )
    }
}


export default ShoppingSummary
