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
import Table from '../../../components/widgets/TempTable';
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
import { monthsAndQuarters, colors, bonusPlanDbNames, policies, months, Options as options } from '../../../utils/Globals';
import { ceil, dividing } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function PoliciesAndBank(props) {
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
	const [title, setTitle] = useState('Policies & Bank');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getMarketings());
		dispatch(getEntries());	
		dispatch(getWidgets()).then(setLoading(false));
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
								"Premium": 0,
								"Policies": 0,
								"Averages": 0,
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
								temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Bonuses`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Premium`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Policies`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`${item.name}@Averages`] = 0;
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
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Bonuses`] += ceil(parseFloat(item.dollarBonus));
									temp[pro.value][month][userName][entryNames[entryName]]["Premium"] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Premium`] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
									temp[pro.value][month][userName][entryNames[entryName]]["Policies"] += parseFloat(item.percentOfSaleCredit / 100);	
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Policies`] += parseFloat(item.percentOfSaleCredit / 100);	
									temp[pro.value][month][userName][entryNames[entryName]]["Averages"] = 
										dividing(
											temp[pro.value][month][userName][entryNames[entryName]]["Premium"],
											temp[pro.value][month][userName][entryNames[entryName]]["Policies"]		
										)	
									temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Averages`] = 
										dividing(
											temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Premium`],
											temp[pro.value][month][userName][entryNames[entryName]][`${item.typeOfProduct}@Policies`]		
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
		if(Object.keys(widgets).length>0 && Object.keys(main).length>0) {	
			if(widgets.Producer_PoliciesAndBank_AutoAndFire_Table) {
				let tableColumns = [{
						id: 'avatar',
						title: 'Producer',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
				}]
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					border: 'border-b-4'
				}];
				let tableHeaders = [];
				let tableContent = {
					Total: {}
				};

				const tempPolices = [
					{ policy: 'Auto', dbName: 'autoBonus' },
					{ policy: 'Fire', dbName: 'fireBonus' },
					{ policy: 'Life', dbName: 'lifeBonus' },
					{ policy: 'Health', dbName: 'healthBonus' },
				];
				tempPolices.map((tempPolicy) => {
					if(bonusPlans[0].hasOwnProperty(tempPolicy.dbName)) {
						let bonusPlanCount = 0;
						Object.keys(bonusPlans[0][tempPolicy.dbName]).map((key) => {		
							const item = bonusPlans[0][tempPolicy.dbName][key];
							tableHeaders.push({
								id: `${tempPolicy.policy}@${item.name}`,
								value: `${tempPolicy.policy}@${item.name}`,
							});
							bonusPlanCount ++;
						});	
						tableHeaders.push({
							id: `${tempPolicy.policy}@Total`,
							value: `${tempPolicy.policy}@Total`,
							border: 'border-l-4 border-r-4'
						});
						tableColumns.push({
							id: `${tempPolicy.policy} ${report}`,
							title: `${tempPolicy.policy} ${report}`,
							color: '',
							colSpan: bonusPlanCount + 1
						})
					}
				});

				users.map((user) => {
					if(user.belongTo === UID) {
						tableRows.push({
							id: user.data.displayName,
							value: user.data.displayName,
						})
						tableContent[user.data.displayName] = {};
						tableHeaders.map((header) => {
							if(header.value.substring(header.value.indexOf('@')+1) != 'Total') {
								tableContent[user.data.displayName][header.value] = 
									main[production][period][user.data.displayName][header.value.split('@')[0]][`${header.value.split('@')[1]}@${report}`];
									
								// Total per Policy	
								if(!tableContent[user.data.displayName].hasOwnProperty(`${header.value.split('@')[0]}@Total`))
									tableContent[user.data.displayName][`${header.value.split('@')[0]}@Total`] = 0;
								tableContent[user.data.displayName][`${header.value.split('@')[0]}@Total`] += tableContent[user.data.displayName][header.value];

								// Annual Total
								if(!tableContent['Total'].hasOwnProperty(header.value)) {
									tableContent['Total'][header.value] = 0;
								}
								tableContent['Total'][header.value] += tableContent[user.data.displayName][header.value];
						
								if(!tableContent['Total'].hasOwnProperty(`${header.value.split('@')[0]}@Total`)) {
									tableContent['Total'][`${header.value.split('@')[0]}@Total`] = 0;
								}
								tableContent['Total'][`${header.value.split('@')[0]}@Total`] += tableContent[user.data.displayName][header.value];								
							}															
						});
					}
				});
				widgets = {
					...widgets, Producer_PoliciesAndBank_AutoAndFire_Table: {
						...widgets.Producer_PoliciesAndBank_AutoAndFire_Table, table: {
							...widgets.Producer_PoliciesAndBank_AutoAndFire_Table.table, columns:
							tableColumns
						}
					}
				};
				widgets = {
					...widgets, Producer_PoliciesAndBank_AutoAndFire_Table: {
						...widgets.Producer_PoliciesAndBank_AutoAndFire_Table, table: {
							...widgets.Producer_PoliciesAndBank_AutoAndFire_Table.table, rows:
								tableRows
						}
					}
				};
				widgets = {
					...widgets, Producer_PoliciesAndBank_AutoAndFire_Table: {
						...widgets.Producer_PoliciesAndBank_AutoAndFire_Table, table: {
							...widgets.Producer_PoliciesAndBank_AutoAndFire_Table.table, headers:
								tableHeaders
						}
					}
				};
				widgets = {
					...widgets, Producer_PoliciesAndBank_AutoAndFire_Table: {
						...widgets.Producer_PoliciesAndBank_AutoAndFire_Table, table: {
							...widgets.Producer_PoliciesAndBank_AutoAndFire_Table.table, tableContent:
								tableContent
						}
					}
				};
			}

			// Producer_PolicesAndBank_Premium_Chart
			if(widgets.Producer_PolicesAndBank_Premium_Chart) {		
				let tempDatasets = [];			
				widgets.Producer_PolicesAndBank_Premium_Chart.mainChart.TW.datasets.map((dataset) => {
					let tempDataset = dataset;
					let tempData = [];
					const tableContent = widgets.Producer_PoliciesAndBank_AutoAndFire_Table.table.tableContent;
					users.map(user => {
						if(user.belongTo === UID) {
							tempData.push(tableContent[user.data.displayName][`${dataset.label.split(' ')[1]}@Total`]);
						}								
					})

					tempDataset = {...tempDataset, data: tempData}
					tempDatasets.push(tempDataset);
				});
				widgets = {
					...widgets, Producer_PolicesAndBank_Premium_Chart: 
						{...widgets.Producer_PolicesAndBank_Premium_Chart, mainChart: {
							...widgets.Producer_PolicesAndBank_Premium_Chart.mainChart, TW: {
								...widgets.Producer_PolicesAndBank_Premium_Chart.mainChart.TW, datasets: [
									...tempDatasets
								] 
							}
						}
					}
				};

				let tempXAxes = [];
				let tempLabels = [];
				let temp = widgets.Producer_PolicesAndBank_Premium_Chart.mainChart.options.scales.xAxes[0];
				users.map((user) => {
					if(user.belongTo === UID) 
						tempLabels.push(user.data.displayName);
				}); 
				temp = { ...temp, labels: tempLabels };
				tempXAxes.push(temp);			
				widgets = {
					...widgets, Producer_PolicesAndBank_Premium_Chart: {
						...widgets.Producer_PolicesAndBank_Premium_Chart, mainChart: {
							...widgets.Producer_PolicesAndBank_Premium_Chart.mainChart, options: {
								...widgets.Producer_PolicesAndBank_Premium_Chart.mainChart.options, scales: {
									...widgets.Producer_PolicesAndBank_Premium_Chart.mainChart.options.scales, xAxes: [
										...tempXAxes
									]
								} 
							}	
						}
					}
				};
			} 
		}

		console.log('--------------widgets', widgets);
		setData({ widgets });
	}, [widgets, main, production, period, report]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}
	
	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
	}

	function handleChangeProduction(event) {
		setProduction(event.target.value);
	}

	function handleChangeReport(event) {
		setReport(event.target.value);
	}

	if (loading) {
		return <FuseLoading />;
	}

	if (_.isEmpty(data)) {
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

	if (_.isEmpty(data.widgets)) {
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
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
							value={report}
							onChange={ev => handleChangeReport(ev)}
							label="Report"
							data={options.report.data}
						/>
						</FuseAnimate>
					</div>
				</Header>
			}			
			content={
				<div className="w-full p-12">					
					{/* {tabValue === 0 &&  */}
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full p-12">
							<Table widget={data.widgets.Producer_PoliciesAndBank_AutoAndFire_Table} />
						</div>							
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>							
						<div className="widget flex w-full p-12">
							<Chart widget={data.widgets.Producer_PolicesAndBank_Premium_Chart} />
						</div>							
					</FuseAnimateGroup>					
					{/* {tabValue === 3 && 
						<div>							
							<div className='p-12'>
								<Table header={bankHeader} widget={widgets.Producer_PoliciesAndBank_Bank_Table} />
							</div>
							<div className='p-12'>
								<Chart widget={widgets.Producer_PolicesAndBank_Bank_Chart} />
							</div>	
						</div>
					}						  */}
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('producerApp', reducer)(PoliciesAndBank);
