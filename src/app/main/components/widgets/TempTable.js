import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import TextInput from '../TextInput';
import { setCell } from '../../apps/time-report/store/trackSlice';

function Widget(props) {
	const dispatch = useDispatch();
	const tableData = props.widget.table.tableContent; 
	const headers = props.widget.table.headers;

	function handleInputChange(tableName, row, col, rowKey, colKey,  val) {
		dispatch(setCell({tableName: tableName, row: row, col: col, rowKey: rowKey, colKey: colKey, value: val}));
	}

	return (
		// <Paper className="w-full rounded-8 shadow">
		<div className="flex flex-col min-h-full sm:border-1 sm:rounded-8 overflow-hidden w-full">
			{props.widget.title!=="" &&
				<div className="flex items-center justify-between px-16 py-16 border-b-1">
					<Typography className="text-16">{props.widget.title}</Typography>				
				</div>
			}			
			<FuseScrollbars className="flex-growNum overflow-x-auto">
				<Table stickyHeader className="min-w-full" size="small" aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							{props.widget.table.columns.map((column, col) => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell key={column.id} rowSpan={column.rowSpan} align={column.align} className={clsx('whitespace-wrap p-0 text-xs p-12 border-r-1')}>
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
												className={clsx(`whitespace-wrap p-0 text-xs p-12 ${col === (props.widget.table.columns.length-1) ? `border-r-0` : `border-r-1`} ${column.color}`)}
											>
												{column.title}
											</TableCell>
										);
									}
								}
							})}
						</TableRow>
						<TableRow>
							{props.widget.table.headers.map((cell, col) => {
								return (
									<TableCell
										key={cell.id}
										component="th"
										scope="rowNum"
										align="center"
										className={clsx(`w-md p-0 text-xs p-4 ${col === (props.widget.table.headers.length-1) ? `border-r-0` : `border-r-1`} ${cell.color}`)}
									>
										{cell.value}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>				
					<TableBody>						
						{Object.keys(tableData).map((rowKey, rowNum) => (
							<TableRow className="h-32" key={rowNum}>
								{!props.hideLeftHeader &&
									<TableCell 
										key={rowNum} 
										component="th" 
										scope="rowNum" 
										align="center" //p-5
										className={clsx(`
											p-0 text-xs truncate border-r-1 
											${props.widget.table.rows.length>0 && props.widget.table.rows[rowNum].border}
										`)}
									>
										{/* {props.widget.table.rows[rowNum].value} */}
										{rowKey}
									</TableCell>
								}
								{Object.keys(tableData[rowKey]).map((colKey, colNum) => (									
									colKey!=="id" && colKey!=="type" && colKey!=="month" &&
									<TableCell
										key={`colKey_${rowNum}_${colNum}`}
										component="th"
										scope="rowNum"
										align="center" //p-5
										className={clsx(`
											p-0 text-xs truncate 
											${colNum === (Object.keys(tableData[rowKey]).length-1) ? `border-r-0` : `border-r-1`} 
											${props.widget.table.rows.length>0 && props.widget.table.rows[rowNum].border}
										`)}
									>												
										{!props.editable && props.widget.table.columns.length===0 && headers.length>0 && tableData[rowKey][headers[colNum+1].value]!==0 && 
											tableData[rowKey][headers[colNum+1].value]
										}

										{!props.editable && props.widget.table.columns.length!==0 && headers.length>0 && tableData[rowKey][headers[colNum].value]!==0 && 
											tableData[rowKey][headers[colNum].value]
										}

										{/* {!props.editable && tableData[rowKey][colKey]!==0 && 
											tableData[rowKey][colKey]
										} */}
									
										{props.editable &&
											<TextInput
												id='contact phone number'
												key={`input_${rowNum}_${colNum}`}
												type='number'
												value={tableData[rowKey][colKey]===0 ? '' : tableData[rowKey][colKey]}
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
					</TableBody>
				</Table>
			</FuseScrollbars>
		</div>	
		// </Paper>
	);
}

export default React.memo(Widget);