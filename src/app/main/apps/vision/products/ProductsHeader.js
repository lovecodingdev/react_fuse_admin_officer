import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setGoalsSearchText } from '../store/productsSlice';
import { saveGoals } from '../store/productsSlice';
import { saveAverages } from '../store/averagesSlice';

function ProductsHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ visionApp }) => visionApp.goals.searchText);
	const mainTheme = useSelector(selectMainTheme);
	const _goals = useSelector(({ visionApp }) => visionApp.goals._goals);
	const _averages = useSelector(({ visionApp }) => visionApp.averages._averages);

	function onSave() {
		dispatch(saveGoals(_goals));
		dispatch(saveAverages(_averages));
		// dispatch(getProducts()).then(() => setLoading(false));
	}

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">shopping_basket</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Income Goals
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8 shadow">
							<Icon color="action">search</Icon>

							<Input
								placeholder="Search"
								className="flex flex-1 mx-8"
								disableUnderline
								fullWidth
								value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={ev => dispatch(setGoalsSearchText(ev))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button
					component={Link}
					className="whitespace-nowrap normal-case"
					variant="contained"
					color="secondary"
					onClick={onSave}
				>
					<span className="hidden sm:flex">Save</span>
					<span className="flex sm:hidden">New</span>
				</Button>
			</FuseAnimate>
		</div>
	);
}

export default ProductsHeader;
