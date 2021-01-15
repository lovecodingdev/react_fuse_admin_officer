import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import TextInput from '../../../components/TextInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getGoals, selectGoals, setGoals } from '../store/productsSlice';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import ProductsTableHead from './ProductsTableHead';
import AveragesTable from './AveragesTable'
import BonusesTable from './BonusesTable'

function ProductsTable(props) {
	const dispatch = useDispatch();
	const goals = useSelector(selectGoals);
	const widgets = useSelector(selectWidgets);
	const searchText = useSelector(({ visionApp }) => visionApp.goals.searchText);	
	const _averages = useSelector(({ visionApp }) => visionApp.averages._averages);
	const _average = useSelector(({ visionApp }) => visionApp.averages._average);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(goals);

	let _goals = [];
	data && data.map((d, i) => { 
		_goals[i] = {};
		_goals[i].id = d.id
		_goals[i].name = d.name
		_goals[i].data = [];
		d.data && d.data.map((val, j) => {
			_goals[i].data[j] = val;
		});
	});

	useEffect(() => {
		dispatch(getGoals()).then(() => setLoading(false));
		dispatch(getWidgets());
	}, [dispatch]);

	useEffect(() => {		
		dispatch(setGoals({ val: goals }));	
		if (searchText.length !== 0) {
			setData(_.filter(goals, item => item.name.toLowerCase().includes(searchText.toLowerCase())));
		} else {
			setData(goals);
		}
	}, [goals, searchText]);

	useEffect(() => {	
		_average && handleInputChange(_average.row, _average.col, _average.value)
	}, [_average]);
	
	function handleInputChange(row, col, val) {
		const maxRow = 16;
		const skipCol = 5;
		let r = row;
		if(row < 0) {
			r = 0;
		}
		const v = val === '' ? 0 : val;
		const value = parseInt(v);	 
		let value1 = 0;		
		for(let i = r; i < 12; i ++) {
			const t = (i-i%3)/3 + 12;
			const temp = _goals[i].data[col];	
			const temp1 = _goals[i].data[col+skipCol+1];			
			if(row < 0) 
				value1 = parseInt(_goals[i].data[col] * value);
			else 						
				value1 = parseInt(value * _averages[1].data[col]);
				// value1 = parseInt(value * 100);
				
			if(row > -1) {
				// Policies
				_goals[i].data[col] = value;
				// Total Policies
				_goals[i].data[skipCol] = _goals[i].data[skipCol] + value - temp;
				// Quarter Policies
				_goals[t].data[col] = _goals[t].data[col] + value - temp;
				// Total Policies
				_goals[t].data[skipCol] = _goals[t].data[skipCol] + value - temp;
				// Annual Total Policies
				_goals[maxRow].data[col] = _goals[maxRow].data[col] + value - temp;
				// Total
				_goals[maxRow].data[skipCol] = _goals[maxRow].data[skipCol] + value - temp;
			}	
			if(col < 12) {
				// Premium
				_goals[i].data[col+skipCol+1] = value1; 
				// Total Premium
				_goals[i].data[2*skipCol+1] = _goals[i].data[2*skipCol+1] + value1 - temp1;
				// Quarter Premium
				_goals[t].data[col+skipCol+1] = _goals[t].data[col+skipCol+1] + value1 - temp1;						
				// Total Premium
				_goals[t].data[2*skipCol+1] = _goals[t].data[2*skipCol+1] + value1 - temp1;
				// Annual Total Premium
				_goals[maxRow].data[col+skipCol+1] = _goals[maxRow].data[col+skipCol+1] + value1 - temp1;
				// Total
				_goals[maxRow].data[2*skipCol+1] = _goals[maxRow].data[2*skipCol+1] + value1 - temp1;	
			}
		}	
		setData(_goals)
		dispatch(setGoals({val: _goals}));
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
			<FuseScrollbars className="flex-grow overflow-x-auto">	
				<AveragesTable widget={widgets.AveragesTable} />
				<Table stickyHeader className="min-w-xl mb-40" aria-labelledby="tableTitle">
					<ProductsTableHead widget={widgets.GoalsTable} rowCount={data.length} />
					<TableBody>
						{_.orderBy(
							data
							,[
								
							]
						)
						.map((n, row) => {
							return (
								<TableRow
									className="cursor-pointer"
									hover
									tabIndex={-1}
									key={n.id}
								>										
									<TableCell key={n.id} className="p-2 md:p-2 text-center" component="th" scope="row">
										{n.name}
									</TableCell>
									{Object.keys(n.data).map((key, col) => {
										return (
											<TableCell 
												key={key}
												className="p-2 md:p-2 truncate border-l-1" 
												component="th" 
												scope="row" 
												align="center"
											>																						
												<TextInput
													id='contact phone number'
													key={key}
													type='number'
													value={n.data[col]===0 ? '' : n.data[col]}
													onChange={ev => handleInputChange(row, col, ev.target.value)}
													size='small'
													readOnly={row>11 || col>4 && col<12 ? true : false}
													startAdornment={col>5 && col<12 && n.data[col]!==0 && n.data[col]!=='' && <InputAdornment position="start">$</InputAdornment>}
													inputProps={{ 
														'aria-label': 'naked',														
													}}
												/>
											</TableCell>	
										)
									})}									
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<BonusesTable widget={widgets.BonusesTable} />
			</FuseScrollbars>
		</div>
	);
}

export default withRouter(ProductsTable);
