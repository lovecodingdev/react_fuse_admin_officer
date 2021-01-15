import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProducts } from '../store/productsSlice';

const rows = [
	{
		id: 'idd',
		align: 'center',
		disablePadding: false,
		label: 'No',
		sort: false
	},
	{
		id: 'clientName',
		align: 'center',
		disablePadding: false,
		label: 'Client Name',
		sort: true
	},
	{
		id: 'description',
		align: 'center',
		disablePadding: false,
		label: 'Policy(Tracking) Number or Description',
		sort: true
	},
	{
		id: 'writtenDate',
		align: 'center',
		disablePadding: false,
		label: 'Date Product is Written',
		sort: true
	},
	{
		id: 'issuedDate',
		align: 'center',
		disablePadding: false,
		label: 'Date Product is Issued',
		sort: true
	},
	{
		id: 'productLine',
		align: 'center',
		disablePadding: false,
		label: 'Product Line',
		sort: true
	},
	{
		id: 'productType',
		align: 'center',
		disablePadding: false,
		label: 'Product Type',
		sort: true
	},
	{
		id: 'sourceOfBusiness',
		align: 'center',
		disablePadding: false,
		label: 'Source of Business',
		sort: true
	},
	{
		id: 'productDollars',
		align: 'right',
		disablePadding: false,
		label: 'Product Dollars',
		sort: true
	},
	{
		id: 'bonus',
		align: 'right',
		disablePadding: false,
		label: 'Bonus',
		sort: true
	},
	{
		id: 'monthWritten',
		align: 'center',
		disablePadding: false,
		label: 'Month Written',
		sort: true
	},
	{
		id: 'monthIssued',
		align: 'center',
		disablePadding: false,
		label: 'Month Issued',
		sort: true
	}
];

const useStyles = makeStyles(theme => ({
	actionsButtonWrapper: {
		background: theme.palette.background.paper
	}
}));

function ProductsTableHead(props) {
	const classes = useStyles(props);
	const { selectedProductIds } = props;
	const numSelected = selectedProductIds.length;
	
	const createSortHandler = property => event => {
		props.onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow className="h-64">
				{rows.map(row => {
					return (
						<TableCell
							className="p-4 md:p-16"
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'default'}
							sortDirection={props.order.id === row.id ? props.order.direction : false}
						>
							{row.sort && (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={props.order.id === row.id}
										direction={props.order.direction}
										onClick={createSortHandler(row.id)}
									>
										{row.label}
									</TableSortLabel>
								</Tooltip>
							)}
						</TableCell>
					);
				}, this)}
			</TableRow>
		</TableHead>
	);
}

export default ProductsTableHead;
