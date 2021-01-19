import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import SelectBox from '../../../components/CustomSelectBox';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setProduction } from '../store/productsSlice';

const productionLists = [
	{ item: 'Show Written Production', value: 'Show Written Production' },
	{ item: 'Show Issued Production', value: 'Show Issued Production' },	
];

function ProductLineHeader(props) {
	const dispatch = useDispatch();
	const production = useSelector(({ productionApp }) => productionApp.products.production);
	const mainTheme = useSelector(selectMainTheme);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">shopping_basket</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Product Line
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<SelectBox
						id="outlined-basic"
						// className="flex flex-1 mx-8"
						type='production'
						label="Select Production"
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
		</div>
	);
}

export default ProductLineHeader;
