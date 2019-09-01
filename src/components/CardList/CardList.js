import React from 'react';

import './CardList.css';

const CartList = (props) => {
    return (<div className="card-list">
        {props.monsters.map(monster =>
            <h1 key={monster.id}>{monster.name}</h1>)}
    </div>);
}

export default CartList;