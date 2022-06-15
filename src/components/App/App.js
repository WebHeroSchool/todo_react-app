import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
    const items = [
      {
          value: 'Create new app'
      },
      {
          value: 'Finish that lesson'
      },
      {
          value: 'Listen webinar'
      }
    ];

    return (
    <div>
      <h1>todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}
export default App;