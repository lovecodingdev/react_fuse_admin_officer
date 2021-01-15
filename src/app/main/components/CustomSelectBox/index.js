import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [age, setAge] = React.useState('');
    const { id, className, data, variant, value, handleChangeValue, onChange, label, validation, type, willvalidation, validate } = props;

	const handleChange = event => {
		// if (willvalidation) {
		// 	if (event.target.value) {
		// 		handleChangeValue({ [validation]: event.target.value, [`${validation}Validation`]: false });
		// 	} else {
		// 		handleChangeValue({ [validation]: event.target.value, [`${validation}Validation`]: true });
		// 	}
		// } else {
		// 	handleChangeValue({ [validation]: event.target.value });
		// }
		handleChangeValue(event);
	};
	return (
		<FormControl variant="outlined" className={classes.formControl} size="small" error={validate ? true : false}>
			<TextField
				id="account-selection"
				select
				label={label}
				value={value}
				onChange={onChange}
				placeholder="Select Account"
				margin="normal"
			>
				{data.map((item, index)=>(
					<MenuItem value={item.value} key={index}>{item.item}</MenuItem>
				))}
			</TextField>
		</FormControl>
	);
}
