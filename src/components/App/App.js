import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () => 
  (<Router>
      <div className={styles.wrap}>
        <Card className={styles.sidebar}>
            <MenuList>
                <Link to='/' className={styles.link}><MenuItem>обо мне</MenuItem></Link>
                <Link to='/todo' className={styles.link}><MenuItem>дела</MenuItem></Link>
                <Link to='/contacts' className={styles.link}><MenuItem>контакты</MenuItem></Link>
            </MenuList>
        </Card>

        <Card  className={styles.content}>
            <Routes><Route path='/' exact component={About} /></Routes>
            <Routes><Route path='/todo' component={Todo} /></Routes> <Todo />
            <Routes><Route path='/contcts' component={Contacts} /></Routes>
            
        </Card>

      </div>
  </Router>);

export default App;