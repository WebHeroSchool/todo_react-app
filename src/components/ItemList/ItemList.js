import React from 'react';
import List from '@mui/material/List';

import Item from '../Item/Item';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<List>
  {items.map(item => <li key={item.value}>
    <Item 
      value={item.value} 
      isDone={item.isDone} 
      id={item.id}
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}
    />
  </li>)}
</List>);

export default ItemList;