import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import Icon from '@material-ui/core/Icon';
import { Link, useParams } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getEntries, selectEntries, saveProduct } from '../store/entrySlice';
import { getUsers, selectUsers } from '../store/userSlice';
import { getProductType, selectProductType } from '../store/productTypeSlice';
import ProductsTableHead from './ProductsTableHead';
import TextInput from '../../../components/TextField';
import FormattedInput from '../../../components/PriceInput';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SelectBox from '../../../components/SelectBox';
import MultiSelectBox from '../../../components/MultiSelectBox';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	datePicker: {
		width: 250
	}
}));

const productLists = [
	{ item: 'Personally Produced', value: 'Personally Produced' },
	{ item: 'Raw New', value: 'Raw New' },
	{ item: 'Add On', value: 'Add On' },
	{ item: 'Transfer In', value: 'Transfer In' }
];

const policyholderTypeLists = [
	{ item: 'Household', value: 'household' },
	{ item: 'Individual', value: 'individual' }
];

const typeList = [
	{ item: 'Auto', value: 'Entries' },
	{ item: 'Fire', value: 'FireEntries' },
	{ item: 'Life', value: 'LifeEntries' },
	{ item: 'Health', value: 'HealthEntries' }
];

const sourceLists = [
	{ item: 'Center of Influence', value: 'Center of Influence' },
	{ item: 'Client Request', value: 'Client Request' },
	{ item: 'Direct Mail Letter', value: 'Direct Mail Letter' },
	{ item: 'Internet Lead >>', value: 'Internet Lead >>' },
	{ item: 'Multiline Review', value: 'Multiline Review' },
	{ item: 'Networking Meeting', value: 'Networking Meeting' },
	{ item: 'News Ad', value: 'News Ad' },
	{ item: 'Park Bench', value: 'Park Bench' },
	{ item: 'Personal Visit', value: 'Personal Visit' },
	{ item: 'Postcard', value: 'Postcard' },
	{ item: 'Referral', value: 'Referral ' },
	{ item: 'Salesperson Pivot', value: 'Salesperson Pivot' },
	{ item: 'Sign', value: 'Sign' },
	{ item: 'Television', value: 'Television' },
	{ item: 'Transfer', value: 'Transfer' },
	{ item: 'Walk-In', value: 'Walk-In' },
	{ item: 'Website', value: 'Website' },
	{ item: 'Web Search', value: 'Web Search' },
	{ item: 'Yellow Pages', value: 'Yellow Pages' },
	{ item: 'Other', value: 'Other' }
];

function Products() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const products = useSelector(selectEntries);
	const users = useSelector(selectUsers);
	const productType = useSelector(selectProductType);
	const routeParams = useParams();
	const history = useHistory()
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);
	const editData = useSelector(({ eCommerceApp }) => eCommerceApp.products.editData);
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(products);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	const [usersList, setUserList] = useState([]);
	const [state, setState] = React.useState({
		policyHolderName: '',
		policyHolderType: '',
		policyInformation: '',
		datePolicyIsWritten: new Date(),
		datePolicyIsIssued: null,
		percentOfSaleCredit: '',
		typeOfProduct: '',
		user: '',
		type: ["Entries"],
		policyPremium: '',
		sourceOfBusiness: '',
		adjustments: '',
		dollarBonus: '',
		typeValidation: false,
		policyHolderTypeValidation: false,
		percentOfSaleCreditValidation: false,
		typeOfProductValidation: false,
		policyPremiumValidation: false,
		userValidation: false
	});

	useEffect(() => {
		dispatch(getEntries()).then(() => setLoading(false));
		dispatch(getProductType());
		dispatch(getUsers());
		
	}, [dispatch]);

	useEffect(()=>{
		if(routeParams.id==='edit' && editData){
			setState({...state, ...editData})
		}
	},[editData])

	useEffect(() => {
		if (searchText.length !== 0) {
			console.log(searchText);
			setData(_.filter(products, item => item.policyHolderName.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);

	useEffect(() => {
		var temp = [];
		if (users.length > 0) {
			users.map(item => {
				temp.push({ item: item.data.displayName, value: item.id });
			});
			temp.push({ item: 'Office Count', value: 'OfficeCount' });
			setUserList(temp);
		}
	}, [users]);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id
		});
	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(data.map(n => n.id));
			return;
		}
		setSelected([]);
	}

	function handleDeselect() {
		setSelected([]);
	}

	function handleCheck(event, id) {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	}

	function handleChangePage(event, value) {
		setPage(value);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}

	function handleDateChange(date, id) {
		setState({ ...state, [id]: date });
		console.log({ [id]: date });
	}

	function handleChangeValue(data) {
		console.log(data);
		if (Object.keys(data)[0] === 'type') {
			if (typeof data['type'] === 'object') {
				setState({ ...state, ...data });
			} else {
				setState({ ...state, type: [data['type']], typeValidation: data['typeValidation'] });
			}
		} else {
			setState({ ...state, ...data });
		}
	}

	function checkValidation() {
		if (
			!state.percentOfSaleCreditValidation &&
			!state.typeOfProductValidation &&
			!state.policyPremiumValidation &&
			!state.policyHolderTypeValidation &&
			state.percentOfSaleCredit &&
			state.typeOfProduct &&
			state.policyHolderType &&
			state.type.length > 0
		) {
			return true;
		} else {
			setState({
				...state,
				percentOfSaleCreditValidation: state.percentOfSaleCredit ? false : true,
				typeOfProductValidation: state.typeOfProduct ? false : true,
				policyPremiumValidation: state.policyPremium ? false : true,
				policyHolderTypeValidation: state.policyHolderType ? false : true,
				typeValidation: state.type.length > 0 ? false : true
			});
			return false;
		}
	}

	function onSave() {
		
		if (checkValidation()) {
			let form = {
				id: state.id ? state.id : Date.now(),
				policyHolderName: state.policyHolderName,
				policyInformation: state.policyInformation,
				policyHolderType: state.policyHolderType,
				type: state.type,
				user: state.user,
				datePolicyIsWritten: state.datePolicyIsWritten ? state.datePolicyIsWritten : '',
				datePolicyIsIssued: state.datePolicyIsIssued ? state.datePolicyIsIssued : '',
				percentOfSaleCredit: parseFloat(state.percentOfSaleCredit),
				typeOfProduct: state.typeOfProduct,
				policyPremium: parseFloat(state.policyPremium),
				sourceOfBusiness: state.sourceOfBusiness,
				adjustments: state.adjustments,
				dollarBonus: state.dollarBonus
			};
			console.log(form);

			if (state.datePolicyIsIssued) {
				if (state.typeOfProduct === 'Personally Produced') {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremium) * parseInt(state.percentOfSaleCredit)) / 100) *
									0.03 *
									100
							) / 100
					};
				} else if (state.typeOfProduct === 'Raw New') {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremium) * parseInt(state.percentOfSaleCredit)) / 100) *
									0.02 *
									100
							) / 100
					};
				} else {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremium) * parseInt(state.percentOfSaleCredit)) / 100) *
									0.01 *
									100
							) / 100
					};
				}
			}

			dispatch(saveProduct(form));
			history.goBack()
			setState({
				id: '',
				policyHolderName: '',
				policyHolderType: '',
				policyInformation: '',
				datePolicyIsWritten: new Date(),
				datePolicyIsIssued: null,
				percentOfSaleCredit: '',
				typeOfProduct: '',
				policyPremium: '',
				sourceOfBusiness: '',
				adjustments: '',
				dollarBonus: '',
				user: '',
				type: ["Entries"],
				percentOfSaleCreditValidation: false,
				typeOfProductValidation: false,
				policyPremiumValidation: false
			});
		}
	}

	function handleClick(item) {
		setState({
			id: item.id,
			policyHolderName: item.policyHolderName,
			policyInformation: item.policyInformation,
			datePolicyIsWritten: item.datePolicyIsWritten,
			datePolicyIsIssued: item.datePolicyIsIssued,
			percentOfSaleCredit: item.percentOfSaleCredit,
			typeOfProduct: item.typeOfProduct,
			policyPremium: item.policyPremium,
			sourceOfBusiness: item.sourceOfBusiness,
			adjustments: item.adjustments,
			dollarBonus: item.dollarBonus,
			policyHolderType: item.policyHolderType,
			type: item.type
		});
		// props.history.push(`/apps/e-commerce/products/${item.id}/${item.handle}`);
	}
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<div className="flex flex-1 w-full items-center justify-between">
					<div className="flex flex-col items-start max-w-full">
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/enter-sales/auto-entry"
								color="inherit"
							>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
								</Icon>
								<span className="mx-4">Sales</span>
							</Typography>
						</FuseAnimate>

						<div className="flex items-center max-w-full">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								<img
									className="w-32 sm:w-48 rounded"
									src="assets/images/ecommerce/product-image-placeholder.png"
								/>
							</FuseAnimate>
							<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">{'New Sales'}</Typography>
								</FuseAnimate>
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">Sales Detail</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
					<FuseAnimate animation="transition.slideRightIn" delay={300}>
						<Button
							className="whitespace-nowrap normal-case"
							variant="contained"
							color="secondary"
							// disabled={!canBeSubmitted()}
							onClick={()=>onSave()}
						>
							Save
						</Button>
					</FuseAnimate>
				</div>
			}
			content={
				<div className="w-full flex flex-col">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<FuseScrollbars className="flex-grow overflow-x-auto">
							<div className="min-w-xl p-96 h-1/2 flex flex-col justify-around">
								<div className="flex w-full justify-between items-center flex-wrap py-12">
								<SelectBox
										id="outlined-basic"
										label="User Lists"
										data={usersList}
										variant="outlined"
										value={state.user}
										validation="user"
										handleChangeValue={handleChangeValue}
										willvalidation={false}
										validate={state.userValidation}
									/>
									<TextInput
										id="outlined-basic"
										label="Policy Holder Name"
										variant="outlined"
										value={state.policyHolderName}
										validation="policyHolderName"
										onChange={handleChangeValue}
										willvalidation={false}
										validate={false}
										size={250}
									/>
									<TextInput
										id="outlined-basic"
										label="Policy Information"
										variant="outlined"
										value={state.policyInformation}
										validation="policyInformation"
										onChange={handleChangeValue}
										willvalidation={false}
										validate={false}
										size={250}
									/>

									<KeyboardDatePicker
										margin="normal"
										id="date-picker-dialog"
										format="MM/dd/yyyy"
										className={classes.datePicker}
										label="Date Policy Is Written"
										value={state.datePolicyIsWritten}
										onChange={date => handleDateChange(date, 'datePolicyIsWritten')}
										KeyboardButtonProps={{
											'aria-label': 'change date'
										}}
									/>
									
								</div>

								<div className="flex w-full justify-between items-center flex-wrap py-12">
								<KeyboardDatePicker
										margin="normal"
										id="date-picker-dialog"
										format="MM/dd/yyyy"
										className={classes.datePicker}
										label="Date Policy Is Issued"
										value={state.datePolicyIsIssued}
										onChange={date => handleDateChange(date, 'datePolicyIsIssued')}
										KeyboardButtonProps={{
											'aria-label': 'change date'
										}}
									/>
									<TextInput
										id="outlined-basic"
										label="Percent of Sale Credit"
										variant="outlined"
										value={state.percentOfSaleCredit}
										validation="percentOfSaleCredit"
										type="percent"
										onChange={handleChangeValue}
										willvalidation={true}
										validate={state.percentOfSaleCreditValidation}
										size={250}
									/>
									<SelectBox
										id="outlined-basic"
										label="Type of Product"
										data={productLists}
										variant="outlined"
										value={state.typeOfProduct}
										validation="typeOfProduct"
										handleChangeValue={handleChangeValue}
										willvalidation={true}
										validate={state.typeOfProductValidation}
										size={250}
									/>
									<SelectBox
										id="outlined-basic"
										label="Type of Placeholder"
										data={policyholderTypeLists}
										variant="outlined"
										value={state.policyHolderType}
										validation="policyHolderType"
										handleChangeValue={handleChangeValue}
										willvalidation={true}
										validate={state.policyHolderTypeValidation}
									/>
									
								</div>
								<div className="flex w-full justify-between items-center flex-wrap py-12">
								{(state.policyHolderType === 'individual' || state.policyHolderType === '') && (
										<SelectBox
											id="outlined-basic"
											label="Policy Type"
											data={typeList}
											variant="outlined"
											value={state.type[0]}
											validation="type"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeValidation}
										/>
										// </TableCell>
									)}
									{state.policyHolderType === 'household' && (
										<MultiSelectBox
											id="outlined-basic"
											label="Policy Type"
											data={typeList}
											variant="outlined"
											value={state.type}
											validation="type"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeValidation}
										/>
									)}
									<FormattedInput
										id="outlined-basic"
										label="Policy Premium"
										variant="outlined"
										value={state.policyPremium}
										validation="policyPremium"
										type="percent"
										willvalidation={true}
										validate={state.policyPremiumValidation}
										handleChangeValue={handleChangeValue}
										size={250}
									/>
									<SelectBox
										id="outlined-basic"
										label="Source of Business"
										data={sourceLists}
										variant="outlined"
										value={state.sourceOfBusiness}
										validation="sourceOfBusiness"
										handleChangeValue={handleChangeValue}
										willvalidation={false}
									/>
									
								</div>
							</div>
						</FuseScrollbars>

						
					</MuiPickersUtilsProvider>
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Products);
