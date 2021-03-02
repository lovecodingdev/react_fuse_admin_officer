import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import dataSlice from 'app/fuse-layouts/shared-components/quickPanel/store/dataSlice';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function SimpleSelect(props) {
	const classes = useStyles();
	const { value, onChange, label, data } = props;

	return (
		<FormControl variant={"outlined"} className={classes.formControl} size="small">
			<TextField
				value={value}
				select={true}
				label={label}				
				onChange={onChange}
				margin="normal"
			>
				{data.map((item, index)=>( 
					<MenuItem value={item.value} key={index}>{item.item}</MenuItem>
				))}
			</TextField>
		</FormControl>
	);
}
