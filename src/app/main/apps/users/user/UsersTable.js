import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getUsers, selectUsers, saveProduct } from '../store/userSlice';
import ProductsTableHead from './UsersTableHead';
import TextInput from '../../../components/TextField';
import FormattedInput from '../../../components/PriceInput';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SelectBox from '../../../components/SelectBox';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
	openUserProfileDialog
} from '../store/userSlice'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	}
}));

const teamBonusList = [
	{ item: 'Yes', value: true },
	{ item: 'No', value: false }
];

function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function ProductsTable(props) {
	const dispatch = useDispatch();
	const products = useSelector(selectUsers);
	const searchText = useSelector(({ users }) => users.users.searchText);
	const isAdmin = localStorage.getItem('@ISADMIN');
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(products);
	console.log(products);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	const [state, setState] = React.useState({
		includeTeamBonus: ''
	});

	useEffect(() => {
		dispatch(getUsers()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(products, item => item.data.displayName.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);

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
		setState({ ...state, ...data });
	}

	function checkValidation() {
		if (!state.percentOfSaleCreditValidation && !state.typeOfProductValidation && !state.policyPremiumValidation) {
			return true;
		} else {
			setState({
				...state,
				percentOfSaleCreditValidation: state.percentOfSaleCredit ? false : true,
				typeOfProductValidation: state.typeOfProduct ? false : true,
				policyPremiumValidation: state.policyPremium ? false : true
			});
			return false;
		}
	}

	function makeid(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	 }

	function handleClick() {
		// props.history.push(`/apps/e-commerce/products/${item.id}/${item.handle}`);
	}

	function goBonusPlan(uid) {
		setLoading(true);
		props.history.push(`/apps/setup/bonus-plan/${uid}`);
	}

	console.log(makeid(150));

	function goReport() {
		props.history.push('/apps/production/sales-results');
	}

	if (loading) {
		return <FuseLoading />;
	}

	if (data.length === 0) {
		return (
			<div className="w-full flex flex-col">
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<FuseScrollbars className="flex-grow overflow-x-auto">
						<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
							<ProductsTableHead
								selectedProductIds={selected}
								order={order}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={data.length}
								onMenuItemClick={handleDeselect}
							/>
						</Table>
					</FuseScrollbars>
				</MuiPickersUtilsProvider>
			</div>
		);
	}

	return (
		<div className="w-full flex flex-col">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<FuseScrollbars className="flex-grow overflow-x-auto">
					<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle" size="small">
						<ProductsTableHead
							selectedProductIds={selected}
							order={order}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={data.length}
							onMenuItemClick={handleDeselect}
						/>

						<TableBody>
							{_.orderBy(data, [order.id], [order.direction])
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((n, index) => {
									console.log(n);
									const isSelected = selected.indexOf(n.id) !== -1;
									return (
										<TableRow
											className="h-48 cursor-pointer"
											hover
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											key={index}
											selected={isSelected}
										>
											<TableCell className="w-40 md:w-64 text-center" padding="none">
												<Checkbox
													checked={isSelected}
													onClick={event => event.stopPropagation()}
													onChange={event => handleCheck(event, n.id)}
												/>
											</TableCell>

											<TableCell 
												className="p-2 md:p-2" 
												component="th" 
												scope="row" 
												align="center" 
												onClick={() => dispatch(openUserProfileDialog(n.data))}
											>
												{n.data.displayName}
											</TableCell>

											<TableCell
												className="p-2 md:p-2 truncate"
												component="th"
												scope="row"
												align="center"
											>
												<SelectBox
													data={teamBonusList}
													willvalidation={false}
													validation="includeTeamBonus"
													handleChangeValue={handleChangeValue}
													// value={state.includeTeamBonus}
												/>
											</TableCell>

											<TableCell
												className="p-2 md:p-2"
												component="th"
												scope="row"
												align="center"
												onClick={() => goBonusPlan(n.uid)}
											>
												{/* <span>$</span> */}
												Bonus Setup
											</TableCell>

											<TableCell
												className="p-2 md:p-2"
												component="th"
												scope="row"
												align="center"
												onClick={() => goReport()}
											>
												Producer File
											</TableCell>
											<TableCell className="p-2 md:p-2" component="th" scope="row" align="center">
												{n.data.email}
											</TableCell>

											<TableCell className="p-2 md:p-2" component="th" scope="row" align="center">
												{n.active ? 'Active' : 'Revoked'}
											</TableCell>
											<TableCell className="p-2 md:p-2" component="th" scope="row" align="center">
												{n.active && (
													<Button
														className="whitespace-nowrap normal-case"
														variant="contained"
														color="secondary"
														onClick={handleClick}
													>
														<span className="hidden sm:flex">Revoke</span>
													</Button>
												)}
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</FuseScrollbars>

				<TablePagination
					className="flex-shrink-0 border-t-1"
					component="div"
					count={data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'Previous Page'
					}}
					nextIconButtonProps={{
						'aria-label': 'Next Page'
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default withRouter(ProductsTable);
