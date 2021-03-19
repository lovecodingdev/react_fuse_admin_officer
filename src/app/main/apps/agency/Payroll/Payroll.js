import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import Table from '../../../components/widgets/Table';
import SpecialTable from '../../../components/widgets/SpecialTable';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { months, Options as options, policies } from '../../../utils/Globals';
import { dividing, getLevel, getMain } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');
const auth = JSON.parse(localStorage.getItem('persist:data')); 
const displayName = JSON.parse(auth.auth).user.data.displayName;

function Payroll(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [main, setMain] = useState({});
	const [production, setProduction] = useState("Show Written Production");
	const [bonus, setBonus] = useState('Include Initial Bonus in Calculation');
	const [user, setUser] = useState("");
	const [userList, setUserList] = useState("");
	const [period, setPeriod] = useState(moment().format('MMMM'));
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Payroll');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getEntries());
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);	

	useEffect(() => {				
		if(users.length>0 && bonusPlans.length>0 && entries.length>0) {	
			const temp = getMain(entries, bonusPlans, [], users, []);										
			setMain(temp);
		}
	}, [entries, bonusPlans, users]);

	useEffect(() => {	
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Agency_Payroll_Table) {
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					color: '',
					border: 'border-b-4',
				}];
				let tableContent = {
					Total: {}
				};
				const tableHeaders = widgets.Agency_Payroll_Table.table.headers;
				
				users.map((user, row) => {
					if(user.belongTo === UID) {
						tableRows.push({
							id: user.data.displayName,
							value: user.data.displayName,
							color: '',
							border: '',
						});
						
						let totalPolicies = 0;
						let totalBonuses = 0;	
						tableContent[user.data.displayName] = {};
						tableHeaders.map((header, col) => { 
							let value = 0;							
							if(header.value !== 'Producer') {
								if(!tableContent['Total'].hasOwnProperty(header.value)) {
									tableContent['Total'][header.value] = 0;
								}
								if(col < 9) {
									value = main[production][period][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]];
								} 
								
								// getting IndividualTargetBonuses & Team Target Bonuses
								else if(header.value==='Individual Target Bonuses' || header.value==='Team Target Bonuses') {
									if(bonusPlans.length > 0) {
										let indTargetBonuses = 0;
										let teamTargetBonus = 0;
										policies.map(policy => {
											if(policy.value !== 'Total') {
												const policyCount = main[production][period][user.data.displayName][policy.value]['Policies'];
												indTargetBonuses += parseFloat(
													(
														main[production][period][user.data.displayName]['Auto']['Premium'] / 2 +
														main[production][period][user.data.displayName]['Fire']['Premium']
													) * getLevel(policyCount, policy.value, bonusPlans).amount / 100	
												);
												teamTargetBonus += parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount);
											}
										});
										if(header.value === 'Individual Target Bonuses') {
											value = indTargetBonuses;
										} else if (header.value === 'Team Target Bonuses') {
											value = teamTargetBonus;
										}
									}
								}

								totalPolicies += row<12 && col<9 && col%2===1 && parseFloat(value);
								totalBonuses += row<12 && col>0 && col<9 && col%2===0 && parseFloat(value);
								totalBonuses += row<12 && col>11 && col<17 && parseFloat(value);

								tableContent[user.data.displayName][header.value] = value;
								tableContent['Total'][header.value] += tableContent[user.data.displayName][header.value];																			
							} 							
						});
						tableContent[user.data.displayName]['Total Policies'] = totalPolicies;
						tableContent[user.data.displayName]['Total Bonuses'] = totalBonuses;	
						tableContent['Total']['Total Policies'] = tableContent[user.data.displayName]['Total Policies'];
						tableContent['Total']['Total Bonuses'] = tableContent[user.data.displayName]['Total Bonuses'];
					}
				});
				widgets = {
					...widgets, Agency_Payroll_Table: {
						...widgets.Agency_Payroll_Table, table: {
							...widgets.Agency_Payroll_Table.table, rows: 
								tableRows							
						}
					}
				};
				widgets = {
					...widgets, Agency_Payroll_Table: {
						...widgets.Agency_Payroll_Table, table: {
							...widgets.Agency_Payroll_Table.table, tableContent: 
								tableContent							
						}
					}
				};
			}

			// Agency_Payroll_Yearly_Table
			if(widgets.Agency_Payroll_Yearly_Table) {
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					color: '',
					border: 'border-b-4',
				}];
				let tableContent = {
					Total: {}
				};
				const tableHeaders = widgets.Agency_Payroll_Table.table.headers;
				
				users.map((user, row) => {
					if(user.belongTo === UID) {
						tableRows.push({
							id: user.data.displayName,
							value: user.data.displayName,
							color: '',
							border: '',
						});
						
						let totalPolicies = 0;
						let totalBonuses = 0;	
						tableContent[user.data.displayName] = {};
						tableHeaders.map((header, col) => { 
							let value = 0;							
							if(header.value !== 'Producer') {
								if(!tableContent['Total'].hasOwnProperty(header.value)) {
									tableContent['Total'][header.value] = 0;
								}
								months.map(month => {
									if(col < 9) {
										value += parseFloat(main[production][month.value][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]]);										
									} 
									
									// getting IndividualTargetBonuses & Team Target Bonuses
									else if(header.value==='Individual Target Bonuses' || header.value==='Team Target Bonuses') {
										if(bonusPlans.length > 0) {
											let indTargetBonuses = 0;
											let teamTargetBonus = 0;
											policies.map(policy => {
												if(policy.value !== 'Total') {
													const policyCount = main[production][month.value][user.data.displayName][policy.value]['Policies'];
													indTargetBonuses += parseFloat(
														(
															main[production][month.value][user.data.displayName]['Auto']['Premium'] / 2 +
															main[production][month.value][user.data.displayName]['Fire']['Premium']
														) * getLevel(policyCount, policy.value, bonusPlans).amount / 100	
													);
													teamTargetBonus += parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount);
												}
											});
											if(header.value === 'Individual Target Bonuses') {
												value += indTargetBonuses;
											} else if (header.value === 'Team Target Bonuses') {
												value += teamTargetBonus;
											}
										}
									}									
								});
								totalPolicies += row<12 && col<9 && col%2===1 && parseFloat(value);
								totalBonuses += row<12 && col>0 && col<9 && col%2===0 && parseFloat(value);
								totalBonuses += row<12 && col>11 && col<17 && parseFloat(value);

								tableContent[user.data.displayName][header.value] = value;
								tableContent['Total'][header.value] += tableContent[user.data.displayName][header.value];																			
							} 							
						});
						tableContent[user.data.displayName]['Total Policies'] = totalPolicies;
						tableContent[user.data.displayName]['Total Bonuses'] = totalBonuses;	
						tableContent['Total']['Total Policies'] += tableContent[user.data.displayName]['Total Policies'];
						tableContent['Total']['Total Bonuses'] += tableContent[user.data.displayName]['Total Bonuses'];
					}
				});
				widgets = {
					...widgets, Agency_Payroll_Yearly_Table: {
						...widgets.Agency_Payroll_Yearly_Table, table: {
							...widgets.Agency_Payroll_Yearly_Table.table, rows: 
								tableRows							
						}
					}
				};
				widgets = {
					...widgets, Agency_Payroll_Yearly_Table: {
						...widgets.Agency_Payroll_Yearly_Table, table: {
							...widgets.Agency_Payroll_Yearly_Table.table, tableContent: 
								tableContent							
						}
					}
				};
			}

			// Agency_Payroll_Summary_Table
			if(widgets.Agency_Payroll_Summary_Table) {
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					color: '',
					border: 'border-b-4',
				}];
				let tableContent = {
					Total: {}
				};
				const tableHeaders = widgets.Agency_Payroll_Summary_Table.table.headers;
				
				months.map((month, row) => {
					// if(user.belongTo === UID) {
					tableRows.push({
						id: month.value,
						value: month.value,
						color: '',
						border: '',
					});
					
					let totalPolicies = 0;
					let totalBonuses = 0;	
					tableContent[month.value] = {};
					tableHeaders.map((header, col) => { 
						let value = 0;							
						if(header.value !== 'Producer') {
							if(!tableContent['Total'].hasOwnProperty(header.value)) {
								tableContent['Total'][header.value] = 0;
							}
							users.map(user => {
								if(user.belongTo === UID) {
									if(col < 9) {
										value += parseFloat(main[production][month.value][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]]);										
									} 
									
									// getting IndividualTargetBonuses & Team Target Bonuses
									else if(header.value==='Individual Target Bonuses' || header.value==='Team Target Bonuses') {
										if(bonusPlans.length > 0) {
											let indTargetBonuses = 0;
											let teamTargetBonus = 0;
											policies.map(policy => {
												if(policy.value !== 'Total') {
													const policyCount = main[production][month.value][user.data.displayName][policy.value]['Policies'];
													indTargetBonuses += parseFloat(
														(
															main[production][month.value][user.data.displayName]['Auto']['Premium'] / 2 +
															main[production][month.value][user.data.displayName]['Fire']['Premium']
														) * getLevel(policyCount, policy.value, bonusPlans).amount / 100	
													);
													teamTargetBonus += parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount);
												}
											});
											if(header.value === 'Individual Target Bonuses') {
												value += indTargetBonuses;
											} else if (header.value === 'Team Target Bonuses') {
												value += teamTargetBonus;
											}
										}
									}
								}									
							});
							totalPolicies += row<12 && col<9 && col%2===1 && parseFloat(value);
							totalBonuses += row<12 && col>0 && col<9 && col%2===0 && parseFloat(value);
							totalBonuses += row<12 && col>11 && col<17 && parseFloat(value);

							tableContent[month.value][header.value] = value;
							tableContent['Total'][header.value] += tableContent[month.value][header.value];																			
						} 							
					});
					tableContent[month.value]['Total Policies'] = totalPolicies;
					tableContent[month.value]['Total Bonuses'] = totalBonuses;	
					tableContent['Total']['Total Policies'] += tableContent[month.value]['Total Policies'];
					tableContent['Total']['Total Bonuses'] += tableContent[month.value]['Total Bonuses'];
					// }
				});
				widgets = {
					...widgets, Agency_Payroll_Summary_Table: {
						...widgets.Agency_Payroll_Summary_Table, table: {
							...widgets.Agency_Payroll_Summary_Table.table, rows: 
								tableRows							
						}
					}
				};
				widgets = {
					...widgets, Agency_Payroll_Summary_Table: {
						...widgets.Agency_Payroll_Summary_Table, table: {
							...widgets.Agency_Payroll_Summary_Table.table, tableContent: 
								tableContent							
						}
					}
				};
			}
		}

		console.log('---------widgets', widgets)
		setData({ widgets }); 
	}, [widgets, main, production, period]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
	}

	function handleChangeProduction(event) { 
		setProduction(event.target.value);
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
					{tabValue===0 &&
						<div className="flex flex-1 items-center justify-center px-12">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<SelectBox
									value={period}
									onChange={ev => handleChangePeriod(ev)}
									label="Report Period"
									data={options.period.data}
								/>
							</FuseAnimate>
						</div>
					}
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={production}
								onChange={ev => handleChangeProduction(ev)}
								label="Production"
								data={options.production.data}
							/>
						</FuseAnimate>
					</div>					
				</Header>
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="Month Report" />
					<Tab className="h-64 normal-case" label="Year Totals" />	
					<Tab className="h-64 normal-case" label="Summary Report" />													
				</Tabs>
			}
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						{tabValue===0 &&						
							<div className="p-12">
								<Table data={data.widgets.Agency_Payroll_Table} />
							</div>						
						}
						{tabValue===1 &&						
							<div className="p-12">
								<Table data={data.widgets.Agency_Payroll_Yearly_Table} />
							</div>						
						}
						{tabValue===2 &&						
							<div className="p-12">
								<Table data={data.widgets.Agency_Payroll_Summary_Table} />
							</div>						
						}
					</FuseAnimateGroup>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(Payroll);
