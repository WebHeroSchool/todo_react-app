import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
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
        count: 6
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item};

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({ items: newItemList });
    };

    onClickDelete = id => {
        const removeItemList = this.state.items.filter(item =>
            item.id !==id);
        this.setState({ items: removeItemList });
    }
  
    render() {
      return (
        <div className={styles.wrap}>
          <Card>
            <CardContent>
              <h1 className={styles.title}>todos</h1>
              <InputItem />
              <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
              <Footer count={this.state.count} />
            </CardContent>
          </Card>
        </div>);
      } 
};

export default App;