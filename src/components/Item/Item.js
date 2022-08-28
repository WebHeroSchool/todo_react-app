import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import styles from './Item.module.css';


class Item extends React.Component {

  render() {
    const {value, isDone, onClickDone, id, onClickDelete} = this.props;
    return <span className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
    }>
  <span>
    <Checkbox
      checked={isDone}
      tabIndex={-1}
      onClick={() => onClickDone(id)}
    />
    {value}
  </span>
    <IconButton
      className={styles.delete}
      aria-label="delete"
      onClick={() => onClickDelete(id)}
    >
      <DeleteIcon />
    </IconButton>  
  </span>}
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
export default Item;
