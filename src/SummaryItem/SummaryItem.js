import React from 'react'

class ShoppingItem extends React.Component {
    render() {

        const { name, label, cost } = this.props
        return (
            <div className="summary__option" label={label}>
                <div className="summary__option__label">{label}  </div>
                <div className="summary__option__value">{name}</div>
                <div className="summary__option__cost">
                  { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(cost) }
            </div>
        </div>
        )
    }
}

export default ShoppingItem

