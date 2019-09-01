import React from 'react';

import './CardList.css';

const CartList = (props) => {
    return (<div className="card-list">
        {props.children}
    </div>);
}

export default CartList;