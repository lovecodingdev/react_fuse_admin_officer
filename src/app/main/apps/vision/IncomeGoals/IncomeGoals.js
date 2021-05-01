import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import reducer from '../store';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../../../components/widgets/Table';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision, saveVision } from '../store/visionSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { months1, policies, incomeAvgsRows, incomeGoalsRows, incomeGoalsHeaders, incomeBonusesHeaders, toUntrimed } from '../../../utils/Globals';
import { swap, getLevel, getOtherActivityBonus } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

let avgsTableContent = {};
let goalsTableContent = {};
let bonusesTableContent = {};

function IncomeGoals(props) {
	const dispatch = useDispatch();
	const role = useSelector(({ auth }) => auth.user.role[0]); 
	const users = useSelector(selectUsers);
	const vision = useSelector(selectVision);
	let widgets = useSelector(selectWidgets);
	const bonusPlans = useSelector(selectBonusPlans);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [cell, setCell] = useState({});
	const [main, setMain] = useState({});
	const [date, setDate] = useState(moment());
	const [user, setUser] = useState(UID);
	const [userList, setUserList] = useState([]);
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Income Goals');	

	function onSave() {	
		const toTrimed = swap(toUntrimed);
		let tempAvgs = {};
		let tempGoals = {}; 
		let tempBonuses = {};
		tempAvgs = { ...tempAvgs, id: 'averages' }
		tempGoals = { ...tempGoals, id: 'goals' }
		tempBonuses = { ...tempBonuses, id: 'bonuses' }
		
		Object.keys(avgsTableContent).map((row) => {
			Object.keys(avgsTableContent[row]).map((col) => {
				tempAvgs = { 
					...tempAvgs, [toTrimed[row]]: { 
						...tempAvgs[toTrimed[row]], [col]: 
							avgsTableContent[row][col] 
					} 
				} 
			});
		});
		Object.keys(goalsTableContent).map((row) => {
			Object.keys(goalsTableContent[row]).map((col) => {
				tempGoals = { 
					...tempGoals, [row]: { 
						...tempGoals[row], [toTrimed[col]]: 
							goalsTableContent[row][col] 
					} 
				} 
			});
		});
		Object.keys(bonusesTableContent).map((row) => {
			Object.keys(bonusesTableContent[row]).map((col) => {
				tempBonuses = { 
					...tempBonuses, [row]: { 
						...tempBonuses[row], [toTrimed[col]]: 
							bonusesTableContent[row][col] 
					} 
				} 
			});
		}); console.log('--------------------------------',tempGoals);
		dispatch(saveVision({ Averages: tempAvgs, Goals: tempGoals, Bonuses: tempBonuses, year: moment(date).format('yyyy'), userId: user }));
	}

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getVision(moment(date).format('yyyy')));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch, date]);

	useEffect(() => {
		var temp = [];
		if (users.length > 0) {
			users.map(user => {
				if(user.belongTo === belongTo) {
					if(role === 'admin') {
						if(user.id === belongTo)
							temp.push({ item: 'Team Goals', value: user.id });
						else 
							temp.push({ item: user.data.displayName, value: user.id });	
					} else if(role === 'agency') {
						if(user.id===UID || user.role[0]==='producer') {
							temp.push({ item: user.data.displayName, value: user.id });	
						}
					}
				}									
			});
			setUserList(temp);
		}
	}, [users]);

	useEffect(() => { 	
		incomeAvgsRows.map((row) => {
			avgsTableContent[row.value] = {};
			policies.map((policy) => {
				avgsTableContent[row.value][policy.value] = 0;
			});
			delete avgsTableContent[row.value]["Total"];
		});
		incomeGoalsRows.map((rowKey) => {
			goalsTableContent[rowKey] = {};
			incomeGoalsHeaders.map((header) => {
				goalsTableContent[rowKey][header.value] = 0;
			});
		});
		incomeGoalsRows.map((rowKey) => {
			bonusesTableContent[rowKey] = {};
			incomeBonusesHeaders.map((header) => {
				bonusesTableContent[rowKey][header.value] = 0;
			});
		});
		if(vision.length>0 && user!='') {				
			if(vision[0].hasOwnProperty(user)) {
				const visionData = vision[0][user];

				// goals			
				Object.keys(visionData['Goals']).map((key) => {
					if(key!=="id") 
						Object.keys(visionData['Goals'][key]).map((valKey) => {						
							goalsTableContent[key][toUntrimed[valKey]] = parseFloat(visionData['Goals'][key][valKey]);
						});				
				});

				// averages
				Object.keys(visionData['Averages']).map((key) => {
					if(key!=="id") 
						Object.keys(visionData['Averages'][key]).map((valKey) => {										
								avgsTableContent[toUntrimed[key]][valKey] = parseFloat(visionData['Averages'][key][valKey])	 ;
						});
				}); 					

				// bonuses
				Object.keys(visionData['Bonuses']).map((key) => {
					if(key!=="id") 
						Object.keys(visionData['Bonuses'][key]).map((valKey) => {						
							bonusesTableContent[key][toUntrimed[valKey]] = parseFloat(visionData['Bonuses'][key][valKey]);
						});				
				});
			}
		} 

		console.log('---------temp',avgsTableContent, goalsTableContent, bonusesTableContent)
		setMain({ avgsTableContent, goalsTableContent, bonusesTableContent });
	}, [vision, user]);
	
	useEffect(() => { 
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Vision_IncomeGoals_Averages_Table) {
				widgets = { 
					...widgets, Vision_IncomeGoals_Averages_Table: { 
						...widgets.Vision_IncomeGoals_Averages_Table, table: {
							...widgets.Vision_IncomeGoals_Averages_Table.table, tableContent: 
								main.avgsTableContent					
						}
					}	
				};
				widgets = { 
					...widgets, Vision_IncomeGoals_Goals_Table: { 
						...widgets.Vision_IncomeGoals_Goals_Table, table: {
							...widgets.Vision_IncomeGoals_Goals_Table.table, tableContent: 
								main.goalsTableContent
						}						
					}
				};
				widgets = { 
					...widgets, Vision_IncomeGoals_Bonuses_Table: { 
						...widgets.Vision_IncomeGoals_Bonuses_Table, table: {
							...widgets.Vision_IncomeGoals_Bonuses_Table.table, tableContent: 
								main.bonusesTableContent
						}						
					}
				}		
			}
		}		
		
		console.log('----widgets=', widgets)
		
		setData({ widgets });
	}, [widgets, main]);

	useEffect(() => { 	
		const tableName = cell.tableName;
		let row = cell.row;
		const col = cell.col;
		let rowKey = cell.rowKey;
		const colKey = cell.colKey;
		let value = parseFloat(cell.value === '' ? 0 : cell.value);
		let value1 = 0;	
		let r = row;
		let rr = 12;	
		const maxRow = 16;
		const skipCol = 5;

		if(tableName==='GOALS' && col>=5 && col<=11) {
			return;
		}
		if(tableName==='GOALS' &&  row >= 12 && row<16) {
			row = (row % 12) * 3;
			rowKey = months1[row];
			value = parseFloat(cell.value === '' ? 0 : cell.value / 3);
			r = row
		}

		if(tableName === "AVERAGES") {
			avgsTableContent = { 				
				...avgsTableContent, [rowKey]: { 
					...avgsTableContent[rowKey], [colKey]: value 
				} 					
			};
			r = 0;	
		}		
			
		const avgCols = Object.keys(avgsTableContent["Average Annual Premium"]);
		const goalCols = Object.keys(goalsTableContent["January"]);
		const bonusCols = Object.keys(bonusesTableContent["January"]);
		
		for (let i = r; i < rr; i ++) {			
			const startQuarterIndex = (r - r % 3) / 3;
			const quarterIndex = (i - i % 3) / 3;
			if(quarterIndex>startQuarterIndex) 
				break;

			const t = quarterIndex + 12; 
			if(tableName==="AVERAGES")
				value1 = parseFloat(goalsTableContent[months1[i]][goalCols[col]] * value);
			else 						
				value1 = parseFloat(value * avgsTableContent["Average Annual Premium"][avgCols[col]]);

			if(tableName === "GOALS") {	
				// Policies				
				goalsTableContent[months1[i]][colKey] = value
				// Total Policies				
				goalsTableContent[months1[i]][goalCols[skipCol]] = 
					goalsTableContent[months1[i]][goalCols[0]]+
					goalsTableContent[months1[i]][goalCols[1]]+ 
					goalsTableContent[months1[i]][goalCols[2]]+
					goalsTableContent[months1[i]][goalCols[3]]+
					goalsTableContent[months1[i]][goalCols[4]]; 
				// Quarter Policies				
				goalsTableContent[months1[t]][goalCols[col]] = 	
					goalsTableContent[months1[(t-12)*3]][goalCols[col]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[col]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[col]]; 		
				// Total Policies				
				goalsTableContent[months1[t]][goalCols[skipCol]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[skipCol]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[skipCol]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[skipCol]];
				// Annual Total Policies				
				goalsTableContent[months1[maxRow]][goalCols[col]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[col]]+
					goalsTableContent[months1[maxRow-3]][goalCols[col]]+
					goalsTableContent[months1[maxRow-2]][goalCols[col]]+
					goalsTableContent[months1[maxRow-1]][goalCols[col]];
				// Total				
				goalsTableContent[months1[maxRow]][goalCols[skipCol]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-3]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-2]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-1]][goalCols[skipCol]];
			}	

			if((tableName==='GOALS' &&  col<6) || tableName==='AVERAGES' && row===1) {
				// Premium				
				goalsTableContent[months1[i]][goalCols[col+skipCol+1]] = value1;
				if(col === 0) {
					bonusesTableContent[months1[i]][bonusCols[col]] = value1 * avgsTableContent["Average Bonus"][avgCols[col]] / (2 * 100);						
				}					
				else {
					bonusesTableContent[months1[i]][bonusCols[col]] = value1 * avgsTableContent["Average Bonus"][avgCols[col]] / 100;					
				}	
				const level = getLevel(goalsTableContent[months1[i]][goalCols[col]], policies[col].value, bonusPlans);
				bonusesTableContent[months1[i]][bonusCols[col+skipCol]] = Math.round(
					(
						goalsTableContent[months1[i]]['Annual Auto Premium'] / 2 +
						goalsTableContent[months1[i]]['Annual Fire Premium']
					) * level.amount / 100
				);
																			
				// Total Premium				
				goalsTableContent[months1[i]][goalCols[2*skipCol+1]] = 
					goalsTableContent[months1[i]][goalCols[skipCol+1]]+
					goalsTableContent[months1[i]][goalCols[skipCol+2]]+
					goalsTableContent[months1[i]][goalCols[skipCol+3]]+
					goalsTableContent[months1[i]][goalCols[skipCol+4]];				
				// Quarter Premium				
				goalsTableContent[months1[t]][goalCols[col+skipCol+1]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[col+skipCol+1]];
				bonusesTableContent[months1[t]][bonusCols[col]] = 	
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col]]; 	
				bonusesTableContent[months1[t]][bonusCols[col+skipCol]] = 	
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col+skipCol]]; 	
				// Total Premium				
				goalsTableContent[months1[t]][goalCols[2*skipCol+1]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[2*skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[2*skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[2*skipCol+1]];			
				bonusesTableContent[months1[t]][bonusCols[col+skipCol]] = 
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col+skipCol]];
				// Annual Total Premium				
				goalsTableContent[months1[maxRow]][goalCols[col+skipCol+1]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-3]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-2]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-1]][goalCols[col+skipCol+1]];
				bonusesTableContent[months1[maxRow]][bonusCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-3]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-2]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-1]][bonusCols[col]];	
				bonusesTableContent[months1[maxRow]][bonusCols[col+skipCol]] = 
					bonusesTableContent[months1[maxRow-4]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-2]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-1]][bonusCols[col+skipCol]];	
				// Total
				goalsTableContent = { 				
					...goalsTableContent, [months1[maxRow]]: { 
						...goalsTableContent[months1[maxRow]], [goalCols[2*skipCol+1]]: 
							goalsTableContent[months1[maxRow-4]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-3]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-2]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-1]][goalCols[2*skipCol+1]] 
					} 						
				};					
			}
			if(tableName==='GOALS' &&  col>11) { 
				bonusesTableContent[months1[i]][goalCols[col]] =  value * getOtherActivityBonus(goalCols[col], bonusPlans);	
				bonusesTableContent[months1[t]][goalCols[col]] = 
					bonusesTableContent[months1[(t-12)*3]][goalCols[col]]+
					bonusesTableContent[months1[(t-12)*3+1]][goalCols[col]]+
					bonusesTableContent[months1[(t-12)*3+2]][goalCols[col]];
				bonusesTableContent[months1[maxRow]][goalCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-3]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-2]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-1]][goalCols[col]];	
				bonusesTableContent[months1[maxRow]][goalCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-3]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-2]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-1]][goalCols[col]];										
			}
		} 
		
		console.log('---main', main)
		setMain({ avgsTableContent, goalsTableContent, bonusesTableContent });
	}, [cell]);

	function handleInputChange(property) {
		setCell(property);
	}

	function handleChangeYear(date) {  
		setDate(date);
	}

	function handleChangeUser(event) {
		setUser(event.target.value);
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
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<Header title={title}>
					<div className="flex flex-1 items-center justify-center px-12 w-40">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => handleChangeUser(ev)}
								label="Users"
								data={userList}
							/>
						</FuseAnimate>
					</div>	
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									format="yyyy"
									margin="normal"
									id="date-picker-inline"
									label="Year"
									value={date}
									onChange={handleChangeYear}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
									views={['year']}
								/>	
							</MuiPickersUtilsProvider>	
						</FuseAnimate>
					</div>
					<FuseAnimate animation="transition.slideRightIn" delay={300}>
						<Button
							component={Link}
							className="whitespace-nowrap normal-case"
							variant="contained"
							color="secondary"
							onClick={onSave}
						>
							<span className="hidden sm:flex">Save</span>
							<span className="flex sm:hidden">New</span>
						</Button>
					</FuseAnimate>
				</Header>
			}
			content={
				<div className="w-full flex flex-col p-12">
					<div className='flex items-center justify-center p-12'>
						<FuseAnimateGroup className="flex flex-wrap w-1/3" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="AVERAGES" data={data.widgets.Vision_IncomeGoals_Averages_Table} onInputChange={handleInputChange} editable endAdornment="" />
						</FuseAnimateGroup>
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="GOALS" data={data.widgets.Vision_IncomeGoals_Goals_Table} onInputChange={handleInputChange} editable startAdornment="" />
						</FuseAnimateGroup>
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="BONUSES" data={data.widgets.Vision_IncomeGoals_Bonuses_Table} startAdornment="" />
						</FuseAnimateGroup>
					</div>
				</div>				
			}
			innerScroll
		/>		
	);
}

export default withReducer('visionApp', reducer)(IncomeGoals);