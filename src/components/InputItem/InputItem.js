import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styles from './InputItem.module.css'

class InputItem extends React.Component {
    state = {
      inputValue: ''
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    render () {
      const isError = this.props.error;
      let textField;
      if(isError) { 
        textField=<TextField
        error
        id="standart-dense"
        label="Add task"
        margin="dence"   
        fullWidth
        defaultValue=""
        helperText="Field can not be empty"
        value={this.state.inputValue}
        onChange={event => this.setState({inputValue: event.target.value})}
        
      />
      } else { 
        textField=<TextField
        id="standart-dense"
        label="Add task"
        margin="dence"   
        fullWidth
        value={this.state.inputValue}
        onChange={event => this.setState({inputValue: event.target.value})}
        />
      }

      return (<Grid>
        <div className={styles.input}>
          {textField}
        <Button 
          variant="text"
          onClick={this.onButtonClick}
          color='primary'
        >
          ADD Task
        </Button>
        </div>
      </Grid>)
    };
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func,
  error: PropTypes.bool
}

export default InputItem;