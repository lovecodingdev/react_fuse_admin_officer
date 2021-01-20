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
        maxWidth: 280
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const data = {
	period: {
		label: "Report Period",
		list: [
			{ item: 'January', value: 'January' },
			{ item: 'February', value: 'February' },	
			{ item: 'March', value: 'March' },
			{ item: '1st Quarter', value: '1st Quarter' },
			{ item: 'April', value: 'April' },
			{ item: 'May', value: 'May' },
			{ item: 'June', value: 'June' },
			{ item: '2nd Quarter', value: '' },
			{ item: 'July', value: 'July' },
			{ item: 'August', value: 'August' },
			{ item: 'September', value: 'September' },
			{ item: '3rd Quarter', value: '3rd Quarter' },
			{ item: 'October', value: 'October' },
			{ item: 'November', value: 'November' },
			{ item: 'December', value: 'December' },
			{ item: '4th Quarter', value: '4th Quarter' },
		],
	},
	production: {
		label: "Production",
		list: [
			{ item: 'Show Written Production', value: 'Show Written Production' },
			{ item: 'Show Issued Production', value: 'Show Issued Production' },	
		],
	},
	users: {
		label: "Users",
		list: [
			{ item: 'Name1', value: 'Name1' },
			{ item: 'Name2', value: 'Name2' },
			{ item: 'Name3', value: 'Name3' },
			{ item: 'Name4', value: 'Name4' },
			{ item: 'Name5', value: 'Name5' },
			{ item: 'Name6', value: 'Name6' },
			{ item: 'Name7', value: 'Name7' },
			{ item: 'Name8', value: 'Name8' },
			{ item: 'Name9', value: 'Name9' },
			{ item: 'Name10', value: 'Name10' },
			{ item: 'Name11', value: 'Name11' },
			{ item: 'Name12', value: 'Name12' },	
		],
	},
	product: {
		label: "Product",
		list: [
			{ item: 'Auto', value: 'Auto' },
			{ item: 'Fire', value: 'Fire' },
			{ item: 'Life', value: 'Life' },			
			{ item: 'Health', value: 'Health' },			
			{ item: 'Bank', value: 'Bank' },			
		],
	},
	report: {
		label: "Report Type",
		list: [
			{ item: 'Policies', value: 'Policies' },
			{ item: 'Premium', value: 'Premium' },
			{ item: 'Bonuses', value: 'Bonuses' },			
		],
	},
	bonus: {
		label: "Include Initial Bonus?",
		list: [
			{ item: 'Include Initial Bonus in Calculation', value: 'Include Initial Bonus in Calculation' },
			{ item: 'Do not Include Initial Bonus', value: 'Do not Include Initial Bonus' },
		],
	}
}


export default function SimpleSelect(props) {
	const classes = useStyles();
	const { value, onChange, type } = props;

	return (
		<FormControl variant={"outlined"} className={classes.formControl} size="small">
			<TextField
				value={value}
				select={true}
				label={data[type].label}				
				onChange={onChange}
				margin="normal"
			>
				{data[type].list.map((item, index)=>( 
					<MenuItem value={item.value} key={index}>{item.item}</MenuItem>
				))}
			</TextField>
		</FormControl>
	);
}
