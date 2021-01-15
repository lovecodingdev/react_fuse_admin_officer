import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Widget(props) {
	const tableData = props.widget.table.tableContent;
	return (
		// <Paper className="w-full rounded-8 shadow">
			<div className="table-responsive">
				<Table className="w-full min-w-full" size="small">
					<TableHead>
						<TableRow>
							{props.widget.table.columns.map(column => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell key={column.id} rowSpan={column.rowSpan} align={column.align} className="border-1 whitespace-nowrap p-8 px-16">
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
												className={`border-1 ${column.color}`}
											>
												{column.title}
											</TableCell>
										);
									}
								}
							})}
						</TableRow>
						<TableRow className="h-72">
							{props.header.map(cell => {
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
					<TableBody>						
						{Object.keys(tableData).map((item, index) => (
							<TableRow key={index}>
								<TableCell 
									key={index} 
									component="th" 
									scope="row" 
									align="center" 
									className={`border-1 ${(item==='Quarter_1_Totals'||item==='AnnualTotals'||item==='ProjectedForYear')&&`border-t-4`}`}>
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
										className={`text-xs p-0 border-1 ${(item==='Quarter_1_Totals'||item==='AnnualTotals'||item==='ProjectedForYear')&&`border-t-4`}`}
									>
										${tableData[item][cell]}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		// </Paper>
	);
}

export default React.memo(Widget);
