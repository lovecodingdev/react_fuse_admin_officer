import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const tableHead = [
	{ id: 1, value: 'Month', type: false, color: '' },
	{ id: 2, value: 'Auto Policies', type: true },
	{ id: 3, value: 'Auto Bonuses', type: false },
	{ id: 4, value: 'Fire Policies', type: true },
	{ id: 5, value: 'Fire Bonuses', type: false },
	{ id: 6, value: 'Life Policies', type: true },
	{ id: 7, value: 'Life Bonuses', type: false },
	{ id: 8, value: 'Health Policies', type: true },
	{ id: 9, value: 'Health Bonuses', type: false },
	{ id: 10, value: 'Bank Products', type: true },
	{ id: 11, value: 'Bank Bonuses', type: false },
	{ id: 12, value: 'Other Activities', type: true },
	{ id: 13, value: 'Other Activity Bonuses', type: false },
	{ id: 14, value: 'Individual Target Bonuses', type: false },
	{ id: 15, value: 'Team Target Bonuses', type: false },
	{ id: 16, value: 'Policy Growth Bonuses', type: false },
	{ id: 17, value: 'Lapse Rate % Bonus', type: false },
	{ id: 18, value: 'Special Promotion', type: false },
	{ id: 19, value: 'Total POLICIES', type: true },
	{ id: 20, value: 'Total Bonus', type: false },
	{ id: 21, value: 'Bonus Verified?', type: true }
];

function Widget11(props) {
	console.log(props.widget.table.tableContent);
	const tableData = props.widget.table.tableContent;
	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="table-responsive">
				<Table className="w-full min-w-full" size="small">
					<TableHead>
						<TableRow>
							{props.widget.table.columns.map(column => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell key={column.id} className="whitespace-nowrap p-8 px-16">
												{column.title}
											</TableCell>
										);
									}
									default: {
										return (
											<TableCell
												key={column.id}
												colSpan={column.colSpan}
												align="center"
												className="border-1 border-t-0"
											>
												{column.title}
											</TableCell>
										);
									}
								}
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow className="h-88">
							{tableHead.map(cell => {
								// switch (cell.id) {
								// 	case 'avatar': {
								// 		return (
								// 			<TableCell key={cell.id} component="th" scope="row" className="px-16">
								// 				<span className="transform rotate-90">{cell.value}</span>
								// 			</TableCell>
								// 		);
								// 	}
								// 	case 'name': {
								// 		return (
								// 			<TableCell
								// 				key={cell.id}
								// 				component="th"
								// 				scope="row"
								// 				className="truncate font-600"
								// 			>
								// 				{cell.value}
								// 			</TableCell>
								// 		);
								// 	}
								// 	default: {
								return (
									<TableCell
										key={cell.id}
										component="th"
										scope="row"
										align="center"
										className={`${cell.type && `transform -rotate-90`} p-2 text-xs border-1`}
									>
										{cell.value}
									</TableCell>
								);
								// 	}
								// }
							})}
						</TableRow>
						{Object.keys(tableData).map((item, index) => (
							<TableRow key={index}>
								<TableCell key={index} component="th" scope="row" align="center" className={`border-1 ${(item==='TotalForYear'||item==='ProjectedForYear')&&`border-t-4`}`}>
									{item === 'TotalForYear'
										? 'Total For Year'
										: item === 'ProjectedForYear'
										? 'Projected For Year'
										: item}
								</TableCell>
								{Object.keys(tableData[item]).map(cell => (
									<TableCell
										key={cell.id}
										component="th"
										scope="row"
										align="center"
										className={`text-xs p-0 border-1 ${(item==='TotalForYear'||item==='ProjectedForYear')&&`border-t-4`}`}
									>
										${tableData[item][cell]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

export default React.memo(Widget11);
