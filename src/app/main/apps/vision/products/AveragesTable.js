import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import TextInput from '../../../components/TextInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getAverages, selectAverages, setAverages, setAverage } from '../store/averagesSlice';
import TableHead from '@material-ui/core/TableHead';

export const header = [
	{ id: 1, value: 'Auto', type: false, color: '' },
	{ id: 2, value: 'Fire', type: true, color: '' },
	{ id: 3, value: 'Life', type: true, color: '' },
	{ id: 4, value: 'Health', type: true, color: '' },
	{ id: 5, value: 'Bank', type: true, color: '' },
];

function AveragesTable(props) {
	const dispatch = useDispatch();
	const averages = useSelector(selectAverages);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(averages);
	let _averages = [];
	data && data.map((d, i) => { 
		_averages[i] = {};
		_averages[i].id = d.id;
		_averages[i].data = [];
		d.data && d.data.map((val, j) => {
			_averages[i].data[j] = val;
		});
	});

	useEffect(() => {
		dispatch(getAverages()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {
		dispatch(setAverages({ val: averages }));			
		setData(averages);
	}, [averages]);
	
	function handleInputChange(row, col, val) { 
		const v = val === '' ? 0 : val;
		_averages[row].data[col] = parseInt(v);
		if(row === 1)
			dispatch(setAverage({row: -1, col: col, value: v}));
		dispatch(setAverages({ val: _averages }));			
		setData(_averages)			
	}

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
			<FuseScrollbars className="flex justify-center">
				<Table stickyHeader className="max-w-md mb-40 border-1" aria-labelledby="tableTitle">
					<TableHead>
						<TableRow className="h-32 cursor-pointer">
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
						<TableRow className="h-32 cursor-pointer">
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
							.map((n, row) => {
								return (
									<TableRow
										className="h-32 cursor-pointer"
										hover
										tabIndex={-1}
										key={n.id}
									>										
										{Object.keys(n.data).map((key, col) => {
											return (
												<TableCell 
													key={key}
													className="p-2 md:p-2 truncate border-l-1" 
													component="th" 
													scope="row" 
													align="center">
													<TextInput
														id='contact phone number'
														key={key}
														type='number'
														value={n.data[col]===0 ? '' : n.data[col]}
														onChange={ev => handleInputChange(row, col, ev.target.value)}
														size='small'
														readOnly={row>11 || col>4 && col<12 ? true : false}
														startAdornment={row===1 && <InputAdornment position="start">$</InputAdornment>}
														endAdornment={row===0 && <InputAdornment position="end">%</InputAdornment>}
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

export default withRouter(AveragesTable);
