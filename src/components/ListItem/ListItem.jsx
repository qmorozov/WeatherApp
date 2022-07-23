import React from 'react';

const ListItem = ({ title, value, sign }) => {
    return (
        <li className="list__item">
            <p className="list__title">{title}</p>
            <span className="list__data">{value} {sign}</span>
        </li>
    );
};

export default ListItem;