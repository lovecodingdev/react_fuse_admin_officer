import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const header = [
	// {
	// 	id: 'goals',
	// 	align: 'center',
	// 	disablePadding: false,
	// 	value: 'GOALS',
	// 	sort: true,
	// },
	{
		id: 'autoPolicies',
		align: 'center',
		disablePadding: false,
		value: 'Auto Policies',
		sort: true,
	},
	{
		id: 'firePolicies',
		align: 'center',
		disablePadding: false,
		value: 'Fire Policies',
		sort: true,
	},
	{
		id: 'lifePolicies',
		align: 'center',
		disablePadding: false,
		value: 'Life Policies',
		sort: true,
	},
	{
		id: 'healthPolicies',
		align: 'center',
		disablePadding: false,
		value: 'Health Policies',
		sort: true,
	},
	{
		id: 'bankPolicies',
		align: 'center',
		disablePadding: false,
		value: 'Bank Policies',
		sort: true,
	},
	{
		id: 'totalPolicies',
		align: 'center',
		disablePadding: false,
		value: 'Total Policies',
		sort: true,
	},
	{
		id: 'annualAutoPremium',
		align: 'center',
		disablePadding: false,
		value: 'Annual Auto Premium',
		sort: true,
	},
	{
		id: 'annualFirePremium',
		align: 'center',
		disablePadding: false,
		value: 'Annual Fire Premium',
		sort: true,
	},
	{
		id: 'annualLifePremium',
		align: 'center',
		disablePadding: false,
		value: 'Annual Life Premium',
		sort: true,		
	},
	{
		id: 'annualHelthPremium',
		align: 'center',
		disablePadding: false,
		value: 'Annual Helth Premium',
		sort: true,		
	},
	{
		id: 'agencyBankComm',
		align: 'center',
		disablePadding: false,
		value: 'Agency Bank Comm',
		sort: true,		
	},
	{
		id: 'totalAnnualPremium',
		align: 'center',
		disablePadding: false,
		value: 'Total Annual Premium',
		sort: true,		
		colSpan: 0
	},
	{
		id: '1',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '2',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '3',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '4',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '5',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '6',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '7',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,		
	},
	{
		id: '8',
		align: 'center',
		disablePadding: false,
		value: 'Label',
		sort: true,
	},
];

function ProductsTableHead(props) {
	return (
		<TableHead>
			<TableRow>
				{props.widget.table.columns.map(column => {
					switch (column.id) {
						case 'avatar': {
							return (
								<TableCell 
									key={column.id} 
									component="th"
									scope="row"
									align={column.align}
									rowSpan={column.rowSpan} 
									className="whitespace-nowrap p-8 px-16"
								>
									{column.title}
								</TableCell>
							);
						}
						default: {
							return (
								<TableCell
									key={column.id}
									component="th"
									scope="row"
									colSpan={column.colSpan}
									align="center"
									className={`border-1 border-t-0 ${column.color}`}
								>
									{column.title}
								</TableCell>
							);
						}
					}
				})}
			</TableRow>
			<TableRow>
				{header.map(cell => {
					return (
						<TableCell
							key={cell.id}
							component="th"
							scope="row"
							align="center"
							className={`p-2 text-xs border-1 ${cell.color}`}
						>
							{cell.value}
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
}

export default ProductsTableHead;
