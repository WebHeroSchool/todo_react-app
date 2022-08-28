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
              isDone: true
            },
            {
              value: 'Finish that lesson',
              isDone: false
            },
            {
              value: 'Listen webinar',
              isDone: false
            }
        ]
    };
  
  render() {
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>todos</h1>
            <InputItem />
            <ItemList items={this.state.items} />
            <Footer count={3} />
          </CardContent>
        </Card>
      </div>);
    } 
};

export default App;