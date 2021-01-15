import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BonusPlanTable from './BonusPlanTable';
import { openEditContactDialog, removeContact, selectContacts } from './store/bonusPlanSlice';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { openNewContactDialog } from './store/bonusPlanSlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	addButton: {
		width: 10
	}
}));

function ContactsList(props) {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);
	console.log(contacts);

	const searchText = useSelector(({ bonusPlan }) => bonusPlan.autoBonus.searchText);
	const user = useSelector(({ bonusPlan }) => bonusPlan.user);
	const classes = useStyles(props);
	const [state, setState] = useState({
		autoBonus: [],
		fireBonus: [],
		lifeBonus: [],
		healthBonus:[],
		bankBonus:[]
	});

	const columns = React.useMemo(
		() => [
			{
				Header: 'PolicyTypes',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '%',
				accessor: 'percent',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '$',
				accessor: 'dollar',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				// width: 128,
				sortable: false,
				Header: ({}) => {
					return (
						<Fab
							color="secondary"
							aria-label="add"
							// className={classes.addButton}
							size="small"
							onClick={() => dispatch(openNewContactDialog('autoBonus'))}
						>
							<Icon>add</Icon>
						</Fab>
					);
				},
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	const fireColumns = React.useMemo(
		() => [
			{
				Header: 'PolicyTypes',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '%',
				accessor: 'percent',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '$',
				accessor: 'dollar',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				// width: 128,
				sortable: false,
				Header: ({ selectedFlatRows }) => {
					return (
						<Fab
							color="secondary"
							aria-label="add"
							// className={classes.addButton}
							size="small"
							onClick={() => dispatch(openNewContactDialog('fireBonus'))}
						>
							<Icon>add</Icon>
						</Fab>
					);
				},
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	const lifeColumns = React.useMemo(
		() => [
			{
				Header: 'PolicyTypes',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '%',
				accessor: 'percent',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '$',
				accessor: 'dollar',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				// width: 128,
				sortable: false,
				Header: ({ selectedFlatRows }) => {
					return (
						<Fab
							color="secondary"
							aria-label="add"
							// className={classes.addButton}
							size="small"
							onClick={() => dispatch(openNewContactDialog('lifeBonus'))}
						>
							<Icon>add</Icon>
						</Fab>
					);
				},
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	const healthColumns = React.useMemo(
		() => [
			{
				Header: 'PolicyTypes',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '%',
				accessor: 'percent',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '$',
				accessor: 'dollar',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				// width: 128,
				sortable: false,
				Header: ({ selectedFlatRows }) => {
					return (
						<Fab
							color="secondary"
							aria-label="add"
							// className={classes.addButton}
							size="small"
							onClick={() => dispatch(openNewContactDialog('healthBonus'))}
						>
							<Icon>add</Icon>
						</Fab>
					);
				},
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	const bankColumns = React.useMemo(
		() => [
			{
				Header: 'PolicyTypes',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '%',
				accessor: 'percent',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: '$',
				accessor: 'dollar',
				className: 'font-bold',
				sortable: true
			},
			{
				id: 'action',
				// width: 128,
				sortable: false,
				Header: ({ selectedFlatRows }) => {
					return (
						<Fab
							color="secondary"
							aria-label="add"
							// className={classes.addButton}
							size="small"
							onClick={() => dispatch(openNewContactDialog('bankBonus'))}
						>
							<Icon>add</Icon>
						</Fab>
					);
				},
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(removeContact(row.original));
							}}
						>
							<Icon>delete</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		let tempJSON = { autoBonus: [], fireBonus: [], lifeBonus: [], healthBonus:[], bankBonus:[] };
		if (contacts.length > 0) {
			Object.keys(contacts[0]).map((item, index) => {
				if (item.includes('autoBonus')) {
					const tempData = [];
					Object.keys(contacts[0].autoBonus).map(i => {
						tempData.push(contacts[0]['autoBonus'][i]);
					});
					tempJSON = { ...tempJSON, autoBonus: tempData };
				} else if (item.includes('fireBonus')) {
					const tempData = [];
					Object.keys(contacts[0].fireBonus).map(i => {
						tempData.push(contacts[0]['fireBonus'][i]);
					});
					tempJSON = { ...tempJSON, fireBonus: tempData };
				} else if (item.includes('lifeBonus')) {
					const tempData = [];
					Object.keys(contacts[0].lifeBonus).map(i => {
						tempData.push(contacts[0]['lifeBonus'][i]);
					});
					tempJSON = { ...tempJSON, lifeBonus: tempData };
				}else if (item.includes('healthBonus')) {
					const tempData = [];
					Object.keys(contacts[0].healthBonus).map(i => {
						tempData.push(contacts[0]['healthBonus'][i]);
					});
					tempJSON = { ...tempJSON, healthBonus: tempData };
				}else if (item.includes('bankBonus')) {
					const tempData = [];
					Object.keys(contacts[0].bankBonus).map(i => {
						tempData.push(contacts[0]['bankBonus'][i]);
					});
					tempJSON = { ...tempJSON, bankBonus: tempData };
				}
			});
			setState({ ...state, ...tempJSON });
		} else {
			setState({ ...state, ...tempJSON });
		}
	}, [contacts, searchText]);

	// if (contacts.length === 0) {
	// 	return (
	// 		<div className="flex flex-1 items-center justify-center h-full">
	// 			<Typography color="textSecondary" variant="h5">
	// 				There are no data!
	// 			</Typography>
	// 		</div>
	// 	);
	// }

	return (
		<FuseAnimateGroup animation="transition.slideUpIn" delay={300}>
			<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 py-16 border-b-1">
				<Typography className="text-16">PER PRODUCT BONUSES (Paid from First Policy)</Typography>
			
			</div>
			<div className="widget flex w-full ">
				<div className="widget flex w-1/5 p-12">
					<BonusPlanTable
						columns={columns}
						data={state.autoBonus}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditContactDialog(row.original));
							}
						}}
						title="Auto Bonus per Written Policy"
						id="autoBonus"
					/>
				</div>
				<div className="widget flex w-1/5 p-12">
					<BonusPlanTable
						columns={fireColumns}
						data={state.fireBonus}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditContactDialog(row.original));
							}
						}}
						title="Fire Bonus per Written Policy"
						id="fireBonus"
					/>
				</div>
				<div className="widget flex w-1/5 p-12">
					<BonusPlanTable
						columns={lifeColumns}
						data={state.lifeBonus}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditContactDialog(row.original));
							}
						}}
						title="Life Bonus per Written Policy"
						id="lifeBonus"
					/>
				</div>
				<div className="widget flex w-1/5 p-12">
					<BonusPlanTable
						columns={healthColumns}
						data={state.healthBonus}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditContactDialog(row.original));
							}
						}}
						title="Health Bonus per Written Policy"
						id="healthBonus"
					/>
				</div>
				<div className="widget flex w-1/5 p-12">
					<BonusPlanTable
						columns={bankColumns}
						data={state.bankBonus}
						onRowClick={(ev, row) => {
							if (row) {
								dispatch(openEditContactDialog(row.original));
							}
						}}
						title="Bank Bonus per Written Policy"
						id="bankBonus"
					/>
				</div>
			</div>
			</Paper>
		</FuseAnimateGroup>
	);
}

export default ContactsList;
