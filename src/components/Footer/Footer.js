import React from 'react';
import styles from './Footer.module.css';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="all">All</Button>,
  <Button key="active">Active</Button>,
  <Button key="completed">Completed</Button>
];

const Footer = ({ count }) => (<footer className={styles.footer}>
  <div className={styles.count}> {count} items left</div>
  <div className={styles.filters}>
    <ButtonGroup size="small" aria-label="small button group">
      {buttons}
    </ButtonGroup>
  </div>
  <button className={styles.clear}>Clear Completed</button>  
</footer>);

Footer.propTypes = {
  count: PropTypes.number
}

export default Footer;