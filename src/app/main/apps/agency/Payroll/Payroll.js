import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { monthsAndQuarters, policies, months, Options as options } from '../../../utils/Globals';
import { ceil, dividing } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function Payroll(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState("January");
	const [production, setProduction] = useState("Show Written Production");
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Payroll');
	
	useEffect(() => {
		dispatch(getUsers());		
		dispatch(getEntries());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);	

	useEffect(() => {		
		// creating temp
		if(users.length>0 && entries.length>0) {			
			let temp = {};		
			options.production.data.map((pro) => {
				temp[pro.value] = {};
				monthsAndQuarters.map((month) => {				
					temp[pro.value][month.value] = {};
					users.map((user) => {
						let userOptions = { id: 'Users', data: [] };
						userOptions.data.push({ 
							item: user.data.displayName, 
							value: user.data.displayName 
						});

						temp[pro.value][month.value][user.data.displayName] = {};
						policies.map((policy) => {
							temp[pro.value][month.value][user.data.displayName][policy.value] = {
								"Bonuses": 0,
								"Premium": 0,
								"Policies": 0,
								"Averages": 0,
							};	
						});	
					});						
				});

				if(entries.length > 0) {
					const entryNames = {
						"Entries": "Auto", 
						"FireEntries": "Fire", 
						"LifeEntries": "Life", 
						"HealthEntries": "Health", 
						"BankEntries": "Bank", 
						"OtherEntries": "Other"
					};
					let dbName = '';

					users.map((user) => {
						const userName = user.data.displayName;
						Object.keys(entries[0]).map((entryName) => {
							if(entries[0][entryName].hasOwnProperty(user.id)) {
								Object.keys(entries[0][entryName][user.id]).map((key) => {
									const item = entries[0][entryName][user.id][key];
									const issuedMonth = (new Date(item.datePolicyIsIssued)).getMonth();
									const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth(); 
									const month = pro.value==="Show Written Production" ? months[writtenMonth].value : months[issuedMonth].value; 
									temp[pro.value][month][userName][entryNames[entryName]][item.typeOfProduct] += parseFloat(item.percentOfSaleCredit / 100);
									temp[pro.value][month][userName][entryNames[entryName]][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100);
									temp[pro.value][month][userName][entryNames[entryName]]["Bonuses"] += ceil(parseFloat(item.dollarBonus));
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Bonuses`] += ceil(parseFloat(item.dollarBonus));
									temp[pro.value][month][userName][entryNames[entryName]]["Premium"] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Premium`] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
									temp[pro.value][month][userName][entryNames[entryName]]["Policies"] += parseFloat(item.percentOfSaleCredit / 100);	
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Policies`] += parseFloat(item.percentOfSaleCredit / 100);																														
								});
							}
						});	
					});	
				}
			});		
			
			console.log('--------------------temp=', temp)
			setMain(temp)
		}
	}, [entries, users]);

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
				
				users.map((user) => {
					if(user.belongTo === UID) {
						tableRows.push({
							id: user.data.displayName,
							value: user.data.displayName,
							color: '',
							border: '',
						});

						tableContent[user.data.displayName] = {};
						tableHeaders.map((header, colNum) => { 
							if(header.value !== 'Producer') {
								if(colNum < 11) {
									if(header.value !== 'Bank Products') {
										tableContent[user.data.displayName][header.value] = 
											ceil(main[production][period][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]]);
									}									
									else {
										tableContent[user.data.displayName][header.value] = '';
									}										
								} else if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
									tableContent[user.data.displayName][header.value] = '';
								} 	
								if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
									// total policies
									if(!tableContent[user.data.displayName].hasOwnProperty('Total Policies')) {
										tableContent[user.data.displayName]['Total Policies'] = 0;
									}	
									if(header.value.includes('Policies')) {
										tableContent[user.data.displayName]['Total Policies'] += ceil(tableContent[user.data.displayName][header.value]);
									}	

									// total bonuses
									if(!tableContent[user.data.displayName].hasOwnProperty('Total Bonuses')) {
										tableContent[user.data.displayName]['Total Bonuses'] = 0;
									}	
									if(header.value.includes('Bonuses')) {
										tableContent[user.data.displayName]['Total Bonuses'] += ceil(tableContent[user.data.displayName][header.value]);
									}	
								}																
								if(!tableContent['Total'].hasOwnProperty(header.value)) {
									tableContent['Total'][header.value] = 0;
								}							
								tableContent['Total'][header.value] += ceil(tableContent[user.data.displayName][header.value]);
							} 							
						});
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
				const tableHeaders = widgets.Agency_Payroll_Yearly_Table.table.headers;
				
				
				users.map((user) => {
					if(user.belongTo === UID) {
						months.map((month) => {

						})

						tableRows.push({
							id: user.data.displayName,
							value: user.data.displayName,
							color: '',
							border: '',
						});

						tableContent[user.data.displayName] = {};
						tableHeaders.map((header, colNum) => { 							
							if(header.value !== 'Producer') {								
								if(colNum < 11) {
									if(header.value !== 'Bank Products') {		
										if(!tableContent[user.data.displayName].hasOwnProperty(header.value)) {
											tableContent[user.data.displayName][header.value] = 0;
										}																		
										months.map((month) => {										
											tableContent[user.data.displayName][header.value] += 
												ceil(main[production][month.value][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]]);
										})
									}									
									else {
										tableContent[user.data.displayName][header.value] = 0;
									}										
								} else if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
									tableContent[user.data.displayName][header.value] = 0;
								} 	
								
								if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
									// total policies
									if(!tableContent[user.data.displayName].hasOwnProperty('Total Policies')) {
										tableContent[user.data.displayName]['Total Policies'] = 0;
									}	
									if(header.value.includes('Policies')) {
										tableContent[user.data.displayName]['Total Policies'] += ceil(tableContent[user.data.displayName][header.value]);
									}	

									// total bonuses
									if(!tableContent[user.data.displayName].hasOwnProperty('Total Bonuses')) {
										tableContent[user.data.displayName]['Total Bonuses'] = 0;
									}	
									if(header.value.includes('Bonuses')) {
										tableContent[user.data.displayName]['Total Bonuses'] += ceil(tableContent[user.data.displayName][header.value]);
									}	
								}																
								if(!tableContent['Total'].hasOwnProperty(header.value)) {
									tableContent['Total'][header.value] = 0;
								}							
								tableContent['Total'][header.value] += ceil(tableContent[user.data.displayName][header.value]);
							} 							
						});
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
				
				months.map((month) => {
					// if(user.belongTo === UID) {
					tableRows.push({
						id: month.value,
						value: month.value,
						color: '',
						border: '',
					});

					tableContent[month.value] = {};
					tableHeaders.map((header, colNum) => { 
						if(header.value !== 'Producer') {
							if(colNum < 11) {
								if(header.value !== 'Bank Products') {		
									if(!tableContent[month.value].hasOwnProperty(header.value)) {
										tableContent[month.value][header.value] = 0;
									}																		
									users.map((user) => {	
										if(user.belongTo === UID) {
											tableContent[month.value][header.value] += 
												ceil(main[production][month.value][user.data.displayName][header.value.split(' ')[0]][header.value.split(' ')[1]]);
										}																			
									})
								}									
								else {
									tableContent[month.value][header.value] = 0;
								}											
							} else if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
								tableContent[month.value][header.value] = '';
							} 	
							if(header.value!=='Total Policies' && header.value!=='Total Bonuses') {
								// total policies
								if(!tableContent[month.value].hasOwnProperty('Total Policies')) {
									tableContent[month.value]['Total Policies'] = 0;
								}	
								if(header.value.includes('Policies')) {
									tableContent[month.value]['Total Policies'] += ceil(tableContent[month.value][header.value]);
								}	

								// total bonuses
								if(!tableContent[month.value].hasOwnProperty('Total Bonuses')) {
									tableContent[month.value]['Total Bonuses'] = 0;
								}	
								if(header.value.includes('Bonuses')) {
									tableContent[month.value]['Total Bonuses'] += ceil(tableContent[month.value][header.value]);
								}	
							}																
							if(!tableContent['Total'].hasOwnProperty(header.value)) {
								tableContent['Total'][header.value] = 0;
							}							
							tableContent['Total'][header.value] += ceil(tableContent[month.value][header.value]);
						} 							
					});
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
								<Table widget={data.widgets.Agency_Payroll_Table} />
							</div>						
						}
						{tabValue===1 &&						
							<div className="p-12">
								<Table widget={data.widgets.Agency_Payroll_Yearly_Table} />
							</div>						
						}
						{tabValue===2 &&						
							<div className="p-12">
								<Table widget={data.widgets.Agency_Payroll_Summary_Table} />
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
