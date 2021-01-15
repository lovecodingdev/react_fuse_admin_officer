import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import SelectBox from '../../../components/CustomSelectBox';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setProduction, setPeriod } from '../store/productsSlice';

const periodLists = [
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
];
const productionLists = [
	{ item: 'Show Written Production', value: 'Show Written Production' },
	{ item: 'Show Issued Production', value: 'Show Issued Production' },	
];

function ProductLineHeader(props) {
	const dispatch = useDispatch();
	const production = useSelector(({ productionApp }) => productionApp.products.production);
	const period = useSelector(({ productionApp }) => productionApp.products.period);
	const mainTheme = useSelector(selectMainTheme);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">shopping_basket</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Producer Apps Report
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12 w-40">
				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<SelectBox
						id="outlined-basic"
						// className="flex flex-1 mx-8"
						type='production'
						label="Report Period"
						data={productionLists}
						variant="outlined"
						value={production}
						// validation="typeOfProduct"
						onChange={ev => dispatch(setProduction(ev))}
						willvalidation={true}
						// validate={state.typeOfProductValidation}
					/>
				</FuseAnimate>
			</div>
			<div className="flex flex-1 items-center justify-center px-12">
				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<SelectBox
						id="outlined-basic"
						// className="flex flex-1 mx-8"
						type='production'
						label="Select Production"
						data={periodLists}
						variant="outlined"
						value={period}
						// validation="typeOfProduct"
						onChange={ev => dispatch(setPeriod(ev))}
						willvalidation={true}
						// validate={state.typeOfProductValidation}
					/>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ProductLineHeader;
