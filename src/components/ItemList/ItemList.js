import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Finish that lesson'} /></li>
  <li><Item todoItem={'Listen webinar'} /></li>
</ul>);

export default ItemList;