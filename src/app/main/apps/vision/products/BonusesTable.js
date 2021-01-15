import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextInput from '../../../components/TextInput';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import TableHead from '@material-ui/core/TableHead';

function BonusesTable(props) {
	const _goals = useSelector(({ visionApp }) => visionApp.goals._goals);
	const _averages = useSelector(({ visionApp }) => visionApp.averages._averages);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const header = [
		// { id: 1, value: 'BONUSES', type: false, color: '' },
		{ id: 2, value: 'Auto Policy Bonuses', type: false, color: '' }, 
		{ id: 3, value: 'Fire Policy Bonuses', type: false, color: '' },
		{ id: 4, value: 'Life Policy Bonuses', type: false, color: '' },
		{ id: 5, value: 'Health Policy Bonuses', type: false, color: '' },
		{ id: 6, value: 'Bank Policy Bonuses', type: false, color: '' },
		{ id: 7, value: 'Individual Auto Target Bonuses', type: false, color: '' },
		{ id: 8, value: 'Individual Fire Target Bonuses', type: false, color: '' },
		{ id: 9, value: 'Individual Life Target Bonuses', type: false, color: '' },
		{ id: 10, value: 'Individual Health Target Bonuses', type: false, color: '' },
		{ id: 11, value: 'Individual Bank Target Bonuses', type: false, color: '' },
		{ id: 12, value: 'label', type: false, color: '' },
		{ id: 13, value: 'label', type: false, color: '' },
		{ id: 14, value: 'label', type: false, color: '' },
		{ id: 15, value: 'label', type: false, color: '' },
		{ id: 16, value: 'label', type: false, color: '' },
		{ id: 17, value: 'label', type: false, color: '' },
		{ id: 18, value: 'label', type: false, color: '' },
		{ id: 19, value: 'label', type: false, color: '' },
		{ id: 20, value: 'label', type: false, color: '' },
	];	
	const leftHeader = [
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July',
		'August',
		'September',
		'October',
		'November',
		'December', 
		'Annual Total'
	];

	useEffect(() => { 
		let temp = [];
		const sliceHeader = header.slice(1, header.length);
		_goals && _goals.length>0 && _averages && _averages.length>0 &&
		leftHeader.map((l, row) => {
			if(row<12 || row>15) {
				temp[row] = {};
				temp[row].id = row;
				temp[row].label = l;
				temp[row].data = []				
				sliceHeader.map((h, col) => {
					temp[row].data[col] = _goals[row].data[col+6] * _averages[0].data[col] / 100;				
				});
			}
		});
		setLoading(false);
		setData(temp);
	}, [_goals, _averages]);

	if (loading) {
		return <FuseLoading />;
	}

	if (data.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no data!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
					<TableHead>
						<TableRow>
							{props.widget.table.columns.map(column => {
								switch (column.id) {
									case 'avatar': {
										return (
											<TableCell key={column.id} rowSpan={column.rowSpan} className="whitespace-nowrap p-8 px-16">
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
					<TableBody>						
						{_.orderBy(
								data
							)
							.map((l, row) => {
								return (
									<TableRow
										className="h-64 cursor-pointer"
										hover
										tabIndex={-1}
										key={row}
									>	
										<TableCell key={l.id} className="p-2 md:p-2 text-center" component="th" scope="row">
											{l.label}
										</TableCell>									
										{l.data.map((m, col) => {
											return (
												<TableCell 
													key={col}
													className="p-2 md:p-2 truncate border-l-1" 
													component="th" 
													scope="row" 
													align="center">													
													<TextInput
														id='contact phone number'
														key={col}
														type='number'
														value={m===0 ? '' : m}
														size='small'
														readOnly={true}
														startAdornment={m===0 || m==='' ? '' : <InputAdornment position="start">$</InputAdornment>}
														inputProps={{ 'aria-label': 'naked' }}
													/>
												</TableCell>		
											)
										})}									
									</TableRow>
								);
							})
						}						
					</TableBody>
				</Table>	
			</FuseScrollbars>
		</div>
	);
}

export default withRouter(BonusesTable);
