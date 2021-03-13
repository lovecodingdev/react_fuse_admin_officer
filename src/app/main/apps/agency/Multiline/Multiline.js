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

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function Multiline(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	const vision = useSelector(selectVision);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState("January");
	const [production, setProduction] = useState("Show Written Production");
	const [product, setProduct] = useState("Auto");
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Product Line');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getMarketings());
		dispatch(getEntries());	
		dispatch(getVision());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
		if(users.length>0 && Object.keys(marketings).length>0 && entries.length>0) {
			let temp = {};	
			const visionNames = {
				"Auto": "autoPolicies",
				"Fire": "firePolicies",
				"Life": "lifePolicies",
				"Health": "healthPolicies",
				"Bank": "bankProducts",
				"Totals": "totalProducts",
			};	
			options.production.data.map((pro) => {
				temp[pro.value] = {};
				monthsAndQuarters.map((month) => {				
					temp[pro.value][month.value] = {};
					users.map((user) => {
						// let userOptions = { id: 'Users', data: [] };
						// userOptions.data.push({ 
						// 	item: user.data.displayName, 
						// 	value: user.data.displayName 
						// });

						temp[pro.value][month.value][user.data.displayName] = {};
						policies.map((policy) => {
							temp[pro.value][month.value][user.data.displayName][policy.value] = {
								"Bonuses": 0,
								"Policy Premium": 0,
								"Number of Policies": 0,
								"Average Premium": 0,
								"Goal": 0,
							};

							// adding marketing items
							Object.keys(marketings).map((key) => {
								const marketing = marketings[key];
								temp[pro.value][month.value][user.data.displayName][policy.value][marketing.marketingName] = 0;			
							}); 
							
							// //adding bonusPlan items
							// const bonusPlan = bonusPlans.length > 0 && 
							// 	bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy.value].db) ? 
							// 	bonusPlans[0][bonusPlanDbNames[policy.value].db] : 
							// 	{};				
							// Object.keys(bonusPlan).map((key) => {		
							// 	const item = bonusPlan[key];
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][item.name] = 0;
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][`Bonuses`] = 0;
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][`Policy Premium`] = 0;
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][`Number of Policies`] = 0;
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][`Average Premium`] = 0;
							// });	

							// adding vision items
							if(vision.length > 0) {	
								let trimedMonth = month.value;
								switch(month.value) {
									case "Quarter 1 Totals":
										trimedMonth = "Quarter1";
									case "Quarter 2 Totals":
										trimedMonth = "Quarter2";
									case "Quarter 3 Totals":
										trimedMonth = "Quarter3";
									case "Quarter 4 Totals":
										trimedMonth = "Quarter4";	
									case "Annual Totals":
										trimedMonth = "Total";
									case "Projected for Year":
										trimedMonth = "Total";									
			
								}		
								if(vision[0].hasOwnProperty(user.id)) {
									temp[pro.value][month.value][user.data.displayName][policy.value]["Goal"] = 
										vision[0][user.id]['Goals'][trimedMonth][visionNames[policy.value]];
								}
								
							}
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
	}, [marketings, entries, bonusPlans, users, vision]);

	useEffect(() => {	
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Agency_Multiline_AgencyGoalsAndProduction_Table) {	
				let tableContent = { 
					'Total': { 'Sales Goal': 0, 'Actual Sales': 0, 'Total Premium / Dollars': 0, 'Average Premium / Dollars': 0 }, 
				};	
				policies.map(policy => {
					if(policy.value !== 'Total') {
						tableContent[policy.value] = { 'Sales Goal': 0, 'Actual Sales': 0, 'Total Premium / Dollars': 0, 'Average Premium / Dollars': 0 };
						users.map(user => {
							if(user.belongTo === UID) {
								tableContent[policy.value]['Sales Goal'] += main[production][period][user.data.displayName][policy.value]['Goal'];	
								tableContent[policy.value]['Actual Sales'] += main[production][period][user.data.displayName][policy.value]['Number of Policies'];										
								tableContent[policy.value]['Total Premium / Dollars'] += main[production][period][user.data.displayName][policy.value]['Policy Premium'];										
								tableContent[policy.value]['Average Premium / Dollars'] += main[production][period][user.data.displayName][policy.value]['Average Premium'];	
								console.log(period, user.data.displayName, policy.value, main[production][period][user.data.displayName][policy.value]['Average Premium'])
								tableContent['Total']['Sales Goal'] += main[production][period][user.data.displayName][policy.value]['Goal'];	
								tableContent['Total']['Actual Sales'] += main[production][period][user.data.displayName][policy.value]['Number of Policies'];										
								tableContent['Total']['Total Premium / Dollars'] += main[production][period][user.data.displayName][policy.value]['Policy Premium'];										
								tableContent['Total']['Average Premium / Dollars'] += main[production][period][user.data.displayName][policy.value]['Average Premium'];	
							}			
						});
					}
				});																
				widgets = {
					...widgets, Agency_Multiline_AgencyGoalsAndProduction_Table: {
						...widgets.Agency_Multiline_AgencyGoalsAndProduction_Table, table: {
							...widgets.Agency_Multiline_AgencyGoalsAndProduction_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Agency_Multiline_Chart) {	
				let tempDatasets = [];
				let tempData1 = [];
				let tempData2 = [];
				let temp1 = widgets.Agency_Multiline_Chart.mainChart.TW.datasets[0];	
				let temp2 = widgets.Agency_Multiline_Chart.mainChart.TW.datasets[1];
				const tableContent = widgets.Agency_Multiline_AgencyGoalsAndProduction_Table.table.tableContent;
				const labels = widgets.Agency_Multiline_Chart.mainChart.options.scales.xAxes[0].labels;					
				labels.map(label => {				
					tempData1.push(tableContent[label]['Sales Goal']);
					tempData2.push(tableContent[label]['Actual Sales']);
				});
				temp1 = { ...temp1, data: tempData1 };
				temp2 = { ...temp2, data: tempData2 };
				tempDatasets.push(temp1);				
				tempDatasets.push(temp2);

				widgets = {
					...widgets, Agency_Multiline_Chart: {
						...widgets.Agency_Multiline_Chart, mainChart: {
							...widgets.Agency_Multiline_Chart.mainChart, TW: {
								...widgets.Agency_Multiline_Chart.mainChart.TW, datasets: [
									...tempDatasets
								] 
							}
						}
					}
				};
			}	

			if(widgets.Agency_Multiline_PieChart) {	
				let tempDatasets = [];
				let tempData = [];
				const tableContent = widgets.Agency_Multiline_AgencyGoalsAndProduction_Table.table.tableContent;
				const labels = widgets.Agency_Multiline_PieChart.mainChart.labels;					
				labels.map(label => {				
					tempData.push(tableContent[label]['Total Premium / Dollars']);
				});
				let temp = widgets.Agency_Multiline_PieChart.mainChart.datasets[0];
				temp = { ...temp, data: tempData };
				tempDatasets.push(temp);				

				widgets = {
					...widgets, Agency_Multiline_PieChart: {
						...widgets.Agency_Multiline_PieChart, mainChart: {
							...widgets.Agency_Multiline_PieChart.mainChart, datasets: [
								...tempDatasets
							]
						}
					}
				};
			}
			
			if(widgets.Agency_Multiline_Production_Table) {	
				let tableContent = { 
					'Total': {}
				};
				let tableHeaders = [];	
				Object.keys(marketings).map(key => {					
					const marketing = marketings[key];
					tableContent.Total[marketing.marketingName] = 0;
					tableHeaders.push({
						id: marketing.marketingName,
						value: marketing.marketingName
					});
				})
				policies.map(policy => {
					if(policy.value !== 'Total') {	
						tableContent[policy.value] = {};	
						Object.keys(marketings).map(key => {							
							const marketing = marketings[key];
							tableContent[policy.value][marketing.marketingName] = 0;
							users.map(user => {
								if(user.belongTo === UID) {
									tableContent[policy.value][marketing.marketingName] += main[production][period][user.data.displayName][policy.value][marketing.marketingName];										
									tableContent['Total'][marketing.marketingName] += main[production][period][user.data.displayName][policy.value][marketing.marketingName];										
								}			
							});
						});						
					}
				});		
				widgets = {
					...widgets, Agency_Multiline_Production_Table: {
						...widgets.Agency_Multiline_Production_Table, table: {
							...widgets.Agency_Multiline_Production_Table.table, headers: 
								tableHeaders							
						}
					}
				};														
				widgets = {
					...widgets, Agency_Multiline_Production_Table: {
						...widgets.Agency_Multiline_Production_Table, table: {
							...widgets.Agency_Multiline_Production_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}
		} 

		console.log('------------widgets', widgets)
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
			// contentToolbar={
			// 	<Tabs
			// 		value={tabValue}
			// 		onChange={handleChangeTab}
			// 		indicatorColor="primary"
			// 		textColor="primary"
			// 		variant="scrollable"
			// 		scrollButtons="auto"
			// 		classes={{ root: 'w-full h-64' }}
			// 	>
			// 		<Tab className="h-64 normal-case" label="View Written Report" />
			// 		<Tab className="h-64 normal-case" label="View Issued Report" />									
			// 	</Tabs>
			// }
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/3 p-12">
							<Table widget={data.widgets.Agency_Multiline_AgencyGoalsAndProduction_Table} />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chart widget={data.widgets.Agency_Multiline_Chart} />
						</div>
						<div className="widget flex w-1/3 p-12">
						<PieChart widget={data.widgets.Agency_Multiline_PieChart} />
						</div>						
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full p-12">
							<Table widget={data.widgets.Agency_Multiline_Production_Table} />
						</div>					
					</FuseAnimateGroup>						
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(Multiline);
