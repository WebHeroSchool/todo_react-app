import React from 'react';
import List from '@mui/material/List';

import Item from '../Item/Item';

const ItemList = ({ todoItems, onClickDone, onClickDelete }) => (<List>
  {todoItems.map(item => <div key={item.value}>
    <Item 
      value={item.value} 
      isDone={item.isDone} 
      id={item.id}
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}
    />
  </div>)}
</List>);

export default ItemList;