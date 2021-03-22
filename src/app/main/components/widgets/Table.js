import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import clsx from 'clsx';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import TablePagination from '@material-ui/core/TablePagination';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import TextInput from '../TextInput';
import { formattedString } from '../../utils/Function'

function Widget(props) {
	const dispatch = useDispatch(); 
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});

	const tableContent = props.data.table.tableContent; 
	const headers = props.data.table.headers;
	const rows = props.data.table.rows;
	const columns = props.data.table.columns;
	const sortableTableContent = [];

	if(props.sortable) {
		rows.map((row, rowNum) => {
			sortableTableContent.push({ ...tableContent[row.value] });
		}); 
	}

	function handleInputChange(tableName, row, col, rowKey, colKey,  value) {
		props.onInputChange({tableName, row, col, rowKey, colKey,  value});
	}

	function handleChangePage(event, value) {
		setPage(value);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}

	const handleRequestSort = property => event => {  
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id
		});
	};

	return (
		// <Paper className="w-full rounded-8 shadow">
		<div className="flex flex-col min-h-full sm:border-1 sm:rounded-8 overflow-hidden w-full">
			{props.data.title!=="" &&
				<div className="flex items-center justify-between px-16 py-16 border-b-1">
					<Typography className="text-16">{props.data.title}</Typography>				
				</div>
			}			
			<FuseScrollbars className="flex-growNum overflow-x-auto">
				<Table stickyHeader className="min-w-full" size="small" aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							{columns.map((column, col) => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell 
												key={column.id} 
												rowSpan={column.rowSpan} 
												align={column.align} 
												className={clsx('whitespace-wrap p-0 text-xs p-12 border-r-1')}
											>
												{column.title}
											</TableCell>
										);
									}
									default: {
										return (
											<TableCell
												key={column.id}
												colSpan={column.colSpan}
												rowSpan={column.rowSpan}
												align="center"
												className={clsx(`
													whitespace-wrap p-0 text-xs p-12 
													${col === (columns.length-1) ? `border-r-0` : `border-r-1`} 
													${column.color}
													${column.border}
												`)}
											>
												{column.title}
											</TableCell>
										);
									}
								}
							})}
						</TableRow>
						<TableRow>
							{headers.map((cell, col) => {
								return (
									<TableCell
										key={cell.id}
										component="th"
										scope="rowNum"
										align={'center'}
										// padding={cell.disablePadding ? 'none' : 'default'}
										sortDirection={order.id === cell.id ? order.direction : false}
										className={clsx(`
											w-md p-0 text-xs p-4 
											${col === (headers.length-1) ? `border-r-0` : `border-r-1`} 
											${cell.color}
											${headers.length>0 && headers[col].border}
										`)}
									>
										{props.sortable &&  
											<Tooltip
												title="Sort"
												placement={cell.align === 'right' ? 'bottom-end' : 'bottom-start'}
												enterDelay={300}
											>
												<TableSortLabel
													active={order.id === cell.id}
													direction={order.direction}
													onClick={handleRequestSort(cell.id)}
												>
													{cell.value.substring(cell.value.indexOf("@")+1)}
												</TableSortLabel>
											</Tooltip>
										}
										{!props.sortable && 
											cell.value.substring(cell.value.indexOf("@")+1)
										}
										
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>				
					<TableBody>						
						{!props.sortable && !_.isEmpty(tableContent) && Object.keys(tableContent).map((rowKey, rowNum) => (
							<TableRow className="h-32" key={rowNum}>								
								{!props.hideLeftHeader &&
									<TableCell 
										key={rowNum} 
										component="th" 
										scope="rowNum" 
										align="center" //p-5
										className={clsx(`
											p-0 text-xs truncate border-r-1 
											${rows.length>0 && rows[rowNum].color}
											${rows.length>0 && rows[rowNum].border}
										`)}
									>
										{rowKey}
									</TableCell>
								}
								{Object.keys(tableContent[rowKey]).map((colKey, colNum) => (									
									colKey!=="id" && colKey!=="type" && colKey!=="month" &&
									<TableCell
										key={`colKey_${rowNum}_${colNum}`}
										component="th"
										scope="rowNum"
										align="center" //p-5
										className={clsx(`
											p-0 text-xs truncate 
											${colNum === (Object.keys(tableContent[rowKey]).length-1) ? `border-r-0` : `border-r-1`} 
											${rows.length>0 && rows[rowNum].border}
											${headers.length>0 && columns.length===0 && headers[colNum+1].border}
											${headers.length>0 && columns.length!==0 && headers[colNum].border}
										`)}
									>												
										{
											!props.editable && 
											columns.length===0 && 
											headers.length>0 && 
												formattedString(tableContent[rowKey][headers[colNum+1].value])
										}

										{
											!props.editable && 
											columns.length!==0 && 
											headers.length>0 && 
												formattedString(tableContent[rowKey][headers[colNum].value])
										}
									
										{props.editable &&
											<TextInput
												id='contact phone number'
												key={`input_${rowNum}_${colNum}`}
												type='number'
												value={tableContent[rowKey][colKey]===0 ? '' : tableContent[rowKey][colKey]}
												onChange={ev => handleInputChange(props.tableName, rowNum, colNum, rowKey, colKey, ev.target.value)}
												size='small'
												readOnly={false}
												startAdornment={<InputAdornment position="start">{props.startAdornment}</InputAdornment>}
												endAdornment={<InputAdornment position="start">{props.endAdornment}</InputAdornment>}
												inputProps={{ 
													'aria-label': 'naked',														
												}}
											/>
										}																							
									</TableCell>
								))}
							</TableRow>
						))}

				
						{props.sortable && 
						_.orderBy(
							sortableTableContent,
							[
								o => {
									switch (order.id) {
										case 'categories': {
											return o.categories[0];
										}
										default: {
											return o[order.id];
										}
									}
								}, 
							],
							[order.direction]
						).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row, rowNum) => (
							<TableRow className="h-32" key={rowNum}>								
								<TableCell 
									key={rowNum} 
									component="th" 
									scope="rowNum" 
									align="center" //p-5
									className={clsx(`
										p-0 text-xs truncate border-r-1 
										${rows.length>0 && rows[rowNum].color}
										${rows.length>0 && rows[rowNum].border}
									`)}
								>
									{rowNum+1}
								</TableCell>
								{Object.keys(row).map((colKey, colNum) => (									
									colKey!=="id" && colKey!=="type" && colKey!=="month" &&
									<TableCell
										key={`colKey_${rowNum}_${colNum}`}
										component="th"
										scope="rowNum"
										align="center" //p-5
										className={clsx(`
											p-0 text-xs truncate 
											${colNum === (Object.keys(row).length-1) ? `border-r-0` : `border-r-1`} 
											${rows.length>0 && row.border}
											${headers.length>0 && columns.length===0 && headers[colNum+1].border}
											${headers.length>0 && columns.length!==0 && headers[colNum].border}
										`)}
									>												
										{
											columns.length===0 && 
											headers.length>0 && 
												formattedString(row[colKey])
										}																																							
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</FuseScrollbars>
			{props.sortable &&
				<TablePagination
					className="flex-shrink-0 border-t-1"
					component="div"
					count={sortableTableContent.length}
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
			}			
		</div>	
		// </Paper>
	);
}

export default React.memo(Widget);
