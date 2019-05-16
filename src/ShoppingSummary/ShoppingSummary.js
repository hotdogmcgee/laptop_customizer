import React from 'react'
import ShoppingItem from '../SummaryItem/SummaryItem';

// should total be passed as a prop in App?
class ShoppingSummary extends React.Component {
    render () {
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

const summary = Object.keys(this.state.selected)
          .map(key => <ShoppingItem />)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 