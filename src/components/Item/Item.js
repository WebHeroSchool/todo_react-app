import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import styles from './Item.module.css';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


class Item extends React.Component {
  componentDidMount () {
    this.timerID = setInterval (() => console.log('interval'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const {value, isDone, onClickDone, id, onClickDelete} = this.props;
    
    return (
      <ListItem
          className={styles.item}>
        <ListItemIcon>
        <Checkbox
            inputProps={{ 'aria-label': 'primary checkbox'}}
            onClick= {() => onClickDone(id)}
          />
        </ListItemIcon>    
        <ListItemText primary={value} className = {
          classnames ({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
        </ListItemText>
        <IconButton aria-label="delete"
          onClick={() => onClickDelete(id)}>
        <DeleteIcon  />    
        </IconButton>
      </ListItem>);
  }  
}

Item.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
  isDone: PropTypes.bool,
  id: PropTypes.number,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func
}
export default Item;
