import React from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  spin: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    }
  }  
}));

function TextInput(props) {
	const classes = useStyles();
	const { id, key, type, value, onChange, size, readOnly, startAdornment, endAdornment, inputProps } = props;
	
	return (
		<InputBase
			id={id}
			key={key}
			className={classes.margin, classes.spin}
			value={value}
			onChange={onChange}
			type={type}
			size={size}
      readOnly={readOnly}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
			inputProps={inputProps}
    />
	);
}

export default TextInput;
