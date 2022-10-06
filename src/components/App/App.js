import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from './App.module.css';

const App = () => {
  const initialState = {
    todoItems: [
      {
        value: 'Create new app',
        isDone: true,
        id: 1
      },
      {
        value: 'Finish that lesson',
        isDone: false,
        id: 2
      },
      {
        value: 'Listen webinar',
        isDone: false,
        id: 3
      }
  ],
  count: 3,
  error: false
  };  

const [todoItems, setTodoItems] = useState(initialState.todoItems);
const [count, setCount] = useState(initialState.count);
const [error, setError] = useState(initialState.error);

useEffect(() => {
  console.log('componentDidMount')
}, []);

useEffect(() => {
  console.log('componentDidUpdete')
}, []);

const onClickDone = (id) => {
    const newItemList = todoItems.map(item => {
        const newItem = { ...item};

        if (item.id === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    setTodoItems(newItemList);
};

const onClickDelete = (id) => {
    const newItemList = todoItems.filter(item =>
        item.id !==id)

    setTodoItems(newItemList);    
};

const onClickAdd = (value) => {
  if(value !== '') {
    let newItemList = [
      ...todoItems,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setTodoItems(newItemList)
    setCount(count + 1)
    setError(false)
  } else {
    setError(true)
  }
};

 
return (
  <div className={styles.wrap}>
    <Card>
      <CardContent>
        <h1 className={styles.title}>todos</h1>
        <InputItem 
          onClickAdd={onClickAdd}
          error={error}
        />
        <ItemList
          todoItems = {todoItems}
          onClickDone = {onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer />
      </CardContent>
    </Card>
  </div>);
  
};

export default App;