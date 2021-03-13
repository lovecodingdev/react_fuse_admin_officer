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
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision } from '../store/visionSlice';
import { policiesAndPremium1, monthsAndQuarters, colors, bonusPlanDbNames, policies, months, Options as options } from '../../../utils/Globals';
import { ceil, dividing } from '../../../utils/Function';
import OtherLine from './OtherLine.js';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function ProductLine(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState("January");
	const [production, setProduction] = useState("Show Written Production");
	const [report, setReport] = useState("Policies");
	const [userList, setUserList] = useState("");
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Product Line');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getMarketings());
		dispatch(getEntries());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
		if(Object.keys(marketings).length>0 && users.length>0 && entries.length>0 && bonusPlans.length>0) {
			// user options
			var tempUserList = [];
			if (users.length > 0) {
				users.map(user => {
					if(user.belongTo === UID) {
						tempUserList.push({ 
							item: user.data.displayName, 
							value: user.data.displayName 
						});
					}
				});
				setUserList(tempUserList);
			}

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
								"Policy Premium": 0,
								"Number of Policies": 0,
								"Averages Premium": 0,
							};

							// adding marketing items
							Object.keys(marketings).map((key) => {
								const marketing = marketings[key];
								temp[pro.value][month.value][user.data.displayName][policy.value][marketing.marketingName] = 0;			
							}); 
							
							//adding bonusPlan items
							const bonusPlan = bonusPlans.length > 0 && 
								bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy.value].db) ? 
								bonusPlans[0][bonusPlanDbNames[policy.value].db] : 
								{};				
							Object.keys(bonusPlan).map((key) => {		
								const item = bonusPlan[key];
								temp[pro.value][month.value][user.data.displayName][policy.value][item.name] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Bonuses`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Policy Premium`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Number of Policies`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Average Premium`] = 0;
							});	
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
									temp[pro.value][month][userName][entryNames[entryName]]["Policy Premium"] += ceil(parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100);									
									temp[pro.value][month][userName][entryNames[entryName]]["Number of Policies"] += ceil(parseFloat(item.percentOfSaleCredit / 100));	
									temp[pro.value][month][userName][entryNames[entryName]]["Average Premium"] = ceil(
										dividing(
											temp[pro.value][month][userName][entryNames[entryName]]["Policy Premium"],
											temp[pro.value][month][userName][entryNames[entryName]]["Number of Policies"]		
										)	
									)
								});
							}
						});	
					});	
				}
			});		
			
			console.log('--------------------temp=', temp)
			setMain(temp)
		}
	}, [marketings, entries, bonusPlans, users]);

	useEffect(() => { 
		let policy = '';
		if(tabValue === 0)
			policy = 'Auto';
		if(tabValue === 1)
			policy = 'Fire';
		if(tabValue === 2)
			policy = 'Life';
		if(tabValue === 3)
			policy = 'Health';
		if(tabValue === 4)
			policy = 'Bank';	

		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			const bonusPlan = bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy].db) ? bonusPlans[0][bonusPlanDbNames[policy].db] : {};
			if(widgets.Agency_ProductLine_Table_1) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(bonusPlan).map((key) => {		
					const item = bonusPlan[key];
					headers.push({
						id: item.name,
						value: item.name,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item) => {	
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.value] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.value];									
								}	
								if (row>11 && row<16) {
									tableContent[month.value][item.value] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]);
								} 
								if(row === 16) {
									tableContent[month.value][item.value] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.value])
								} 
								if(row === 17) {
									tableContent[month.value][item.value] = '';
								} 
							}	
						});					 								
					});	
					Object.keys(bonusPlan).map((key) => {		
						const item = bonusPlan[key];
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.name] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.name];									
								}			
								if(row>11 && row<16) {
									tableContent[month.value][item.name] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]);
								} 
								if(row === 16) {
									tableContent[month.value][item.name] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.name]);
								} 
								if(row === 17) {
									tableContent[month.value][item.name] = '';
								} 	
							}
						})
					});	
				}); 
				widgets = {
					...widgets, Agency_ProductLine_Table_1: {
						...widgets.Agency_ProductLine_Table_1, table: {
							...widgets.Agency_ProductLine_Table_1.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Agency_ProductLine_Table_1: {
						...widgets.Agency_ProductLine_Table_1, table: {
							...widgets.Agency_ProductLine_Table_1.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Agency_ProductLine_Table_2) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(marketings).map((key) => {		
					const item = marketings[key];
					headers.push({
						id: item.marketingName,
						value: item.marketingName,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item) => {				
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.value] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.value];									
								}	
								if (row>11 && row<16) {
									tableContent[month.value][item.value] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]);
								} 
								if(row === 16) {
									tableContent[month.value][item.value] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.value])
								} 
								if(row === 17) {
									tableContent[month.value][item.value] = '';
								} 
							}	
						});									
					});	
					Object.keys(marketings).map((key) => {		
						const item = marketings[key];			
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.marketingName] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName];									
								}			
								if(row>11 && row<16) {
									tableContent[month.value][item.marketingName] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]);
								} 
								if(row === 16) {
									tableContent[month.value][item.marketingName] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.marketingName]);
								} 
								if(row === 17) {
									tableContent[month.value][item.marketingName] = '';
								} 	
							}
						})	
					});	
				}); 
				widgets = {
					...widgets, Agency_ProductLine_Table_2: {
						...widgets.Agency_ProductLine_Table_2, table: {
							...widgets.Agency_ProductLine_Table_2.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Agency_ProductLine_Table_2: {
						...widgets.Agency_ProductLine_Table_2, table: {
							...widgets.Agency_ProductLine_Table_2.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Agency_ProductLine_Table_3) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(bonusPlan).map((key) => {		
					const item = bonusPlan[key];
					headers.push({
						id: item.name,
						value: item.name,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item) => {	
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.value] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.value];									
								}	
								if (row>11 && row<16) {
									tableContent[month.value][item.value] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]);
								} 
								if(row === 16) {
									tableContent[month.value][item.value] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.value])
								} 
								if(row === 17) {
									tableContent[month.value][item.value] = '';
								} 
							}	
						});					 								
					});	
					Object.keys(bonusPlan).map((key) => {		
						const item = bonusPlan[key];
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.name] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.name];									
								}			
								if(row>11 && row<16) {
									tableContent[month.value][item.name] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.name]);
								} 
								if(row === 16) {
									tableContent[month.value][item.name] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.name]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.name]);
								} 
								if(row === 17) {
									tableContent[month.value][item.name] = '';
								} 	
							}
						})
					});	
				}); 
				widgets = {
					...widgets, Agency_ProductLine_Table_3: {
						...widgets.Agency_ProductLine_Table_3, table: {
							...widgets.Agency_ProductLine_Table_3.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Agency_ProductLine_Table_3: {
						...widgets.Agency_ProductLine_Table_3, table: {
							...widgets.Agency_ProductLine_Table_3.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Agency_ProductLine_Table_4) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(marketings).map((key) => {		
					const item = marketings[key];
					headers.push({
						id: item.marketingName,
						value: item.marketingName,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item) => {				
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.value] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.value];									
								}	
								if (row>11 && row<16) {
									tableContent[month.value][item.value] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.value]);
								} 
								if(row === 16) {
									tableContent[month.value][item.value] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.value]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.value])
								} 
								if(row === 17) {
									tableContent[month.value][item.value] = '';
								} 
							}	
						});									
					});	
					Object.keys(marketings).map((key) => {		
						const item = marketings[key];			
						users.map(user => {
							if(user.belongTo === UID) {
								if(row < 12) {
									tableContent[month.value][item.marketingName] = main[production][month.value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName];									
								}			
								if(row>11 && row<16) {
									tableContent[month.value][item.marketingName] =
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+0].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+1].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]) +
										parseFloat(main[production][monthsAndQuarters[(row-12)*3+2].value][user.data.displayName][bonusPlanDbNames[policy].name][item.marketingName]);
								} 
								if(row === 16) {
									tableContent[month.value][item.marketingName] =
										parseFloat(tableContent[monthsAndQuarters[12].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[13].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[14].value][item.marketingName]) +
										parseFloat(tableContent[monthsAndQuarters[15].value][item.marketingName]);
								} 
								if(row === 17) {
									tableContent[month.value][item.marketingName] = '';
								} 	
							}
						})	
					});	
				}); 
				widgets = {
					...widgets, Agency_ProductLine_Table_4: {
						...widgets.Agency_ProductLine_Table_4, table: {
							...widgets.Agency_ProductLine_Table_4.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Agency_ProductLine_Table_4: {
						...widgets.Agency_ProductLine_Table_4, table: {
							...widgets.Agency_ProductLine_Table_4.table, tableContent: 
								tableContent							
						}
					}
				}
			}
		}	
		
		console.log('--------------------------widgets:', widgets)
		setData({ widgets });
	}, [widgets, main, production, tabValue]);

	function handleChangeTab(event, value) { 		
		setTabValue(value);
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
					<Tab className="h-64 normal-case" label="Auto" />
					<Tab className="h-64 normal-case" label="Fire" />
					<Tab className="h-64 normal-case" label="Life" />
					<Tab className="h-64 normal-case" label="Health" />
					<Tab className="h-64 normal-case" label="Bank" />
					{/* <Tab className="h-64 normal-case" label="Other" /> */}
				</Tabs>
			}
			content={
				<div className="w-full p-12">					
					<div>
						<div className='p-12'>
							<Table widget={data.widgets.Agency_ProductLine_Table_1} />							
						</div>
						<div className='p-12'>
							<Table widget={data.widgets.Agency_ProductLine_Table_2} />
						</div>	
						<div className='p-12'>
							<Table widget={data.widgets.Agency_ProductLine_Table_3} />							
						</div>
						<div className='p-12'>
							<Table widget={data.widgets.Agency_ProductLine_Table_4} />
						</div>
					</div>					
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(ProductLine);
