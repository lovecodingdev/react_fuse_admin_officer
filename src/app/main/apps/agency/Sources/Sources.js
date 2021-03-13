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

function Sources(props) {
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
	const [product, setProduct] = useState("Auto");
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
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Agency_Sources_ViewYearTotalsByProduct_Table) {
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					color: '',
					border: 'border-b-4',
				}];
				let tableContent = {
					Total: { 'Products': 0, 'Percent of Total': 100 },
				};
				
				Object.keys(marketings).map(key => {
					const marketing = marketings[key];
					tableRows.push({
						id: marketing.marketingName,
						value: marketing.marketingName,
					});

					tableContent[marketing.marketingName] = { 'Products': 0, 'Percent of Total': 0 };
					months.map(month => {					
						users.map(user => {
							if(user.belongTo === UID) {
								tableContent[marketing.marketingName]['Products'] += main[production][month.value][user.data.displayName][product][marketing.marketingName];								
							}
						});
					});
					tableContent['Total']['Products'] += tableContent[marketing.marketingName]['Products'];
					tableContent[marketing.marketingName]['Percent of Total'] = ceil(
						dividing(
							tableContent[marketing.marketingName]['Products'] * 100 ,
							tableContent[marketing.marketingName]['Percent of Total']
						)						
					);
				});
				Object.keys(marketings).map(key => {
					const marketing = marketings[key];
					tableContent[marketing.marketingName]['Percent of Total'] = ceil(
						dividing(
							tableContent[marketing.marketingName]['Products'] * 100,
							tableContent['Total']['Products']
						)
					);
				});


				widgets = {
					...widgets, Agency_Sources_ViewYearTotalsByProduct_Table: {
						...widgets.Agency_Sources_ViewYearTotalsByProduct_Table, table: {
							...widgets.Agency_Sources_ViewYearTotalsByProduct_Table.table, rows: 
								tableRows							
						}
					}
				}
				widgets = {
					...widgets, Agency_Sources_ViewYearTotalsByProduct_Table: {
						...widgets.Agency_Sources_ViewYearTotalsByProduct_Table, table: {
							...widgets.Agency_Sources_ViewYearTotalsByProduct_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}
		

			if(widgets.Agency_Sources_ViewYearTotalsByProduct_Chart) {	
				let tempLabels = [];
				let tempData = [];
				const tableContent = widgets.Agency_Sources_ViewYearTotalsByProduct_Table.table.tableContent;
				Object.keys(marketings).map(key => {
					const marketing = marketings[key];
					tempLabels.push(marketing.marketingName);
					tempData.push(tableContent[marketing.marketingName]['Products']);
				});

				
				widgets = {
					...widgets, Agency_Sources_ViewYearTotalsByProduct_Chart: {
						...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart, mainChart: {
							...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart.mainChart, options: {
								...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart.mainChart.options, scales: {
									...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart.mainChart.options.scales, xAxes: [{
											stacked: true,
											display: true,
											gridLines: {
												display: true
											},
											labels: [ ...tempLabels ]
									}]
								}
							}
						}
					}
				};
				widgets = {
					...widgets, Agency_Sources_ViewYearTotalsByProduct_Chart: {
						...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart, mainChart: {
							...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart.mainChart, TW: {
								...widgets.Agency_Sources_ViewYearTotalsByProduct_Chart.mainChart.TW, datasets: [{
									type: 'bar',
									barPercentage: 0.5,
									label: '',
									data: [ ...tempData ],
									backgroundColor: '#42BFF7',
									hoverBackgroundColor: '#87CDF7',
									categoryPercentage: 1,
								}] 
							}
						}
					}
				};
			} 

			if(widgets.Agency_Sources_ViewMonthlyTotals_Table) {
				let tableRows = [{
					id: 'Total',
					value: 'Total',
					color: '',
					border: 'border-b-4',
				}];
				let tableContent = {
					Total: { 
						'Auto': 0, 
						'Fire': 0, 
						'Life': 0, 
						'Health': 0, 
						'Bank': 0, 
						'Total': 0, 
					},
				};
				
				Object.keys(marketings).map(key => {
					const marketing = marketings[key];
					tableRows.push({
						id: marketing.marketingName,
						value: marketing.marketingName,
					});

					tableContent[marketing.marketingName] = {
						'Auto': 0, 
						'Fire': 0, 
						'Life': 0, 
						'Health': 0, 
						'Bank': 0, 
						'Total': 0, 
					};
					policies.map(policy => {					
						users.map(user => {
							if(user.belongTo === UID) {
								tableContent[marketing.marketingName][policy.value] += main[production][period][user.data.displayName][policy.value][marketing.marketingName];								
								tableContent['Total'][policy.value] += main[production][period][user.data.displayName][policy.value][marketing.marketingName];
								tableContent[marketing.marketingName]['Total'] += main[production][period][user.data.displayName][policy.value][marketing.marketingName];									
							}
						});
					});	
					tableContent['Total']['Total'] += tableContent[marketing.marketingName]['Total'];							
				});
				widgets = {
					...widgets, Agency_Sources_ViewMonthlyTotals_Table: {
						...widgets.Agency_Sources_ViewMonthlyTotals_Table, table: {
							...widgets.Agency_Sources_ViewMonthlyTotals_Table.table, rows: 
								tableRows							
						}
					}
				}
				widgets = {
					...widgets, Agency_Sources_ViewMonthlyTotals_Table: {
						...widgets.Agency_Sources_ViewMonthlyTotals_Table, table: {
							...widgets.Agency_Sources_ViewMonthlyTotals_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Agency_Sources_ViewMonthlyTotals_Chart) {	
				let tempLabels = [];
				let tempData = [];
				const tableContent = widgets.Agency_Sources_ViewMonthlyTotals_Table.table.tableContent;
				Object.keys(marketings).map(key => {
					const marketing = marketings[key];
					tempLabels.push(marketing.marketingName);
					tempData.push(tableContent[marketing.marketingName]['Total']);
				});

				
				widgets = {
					...widgets, Agency_Sources_ViewMonthlyTotals_Chart: {
						...widgets.Agency_Sources_ViewMonthlyTotals_Chart, mainChart: {
							...widgets.Agency_Sources_ViewMonthlyTotals_Chart.mainChart, options: {
								...widgets.Agency_Sources_ViewMonthlyTotals_Chart.mainChart.options, scales: {
									...widgets.Agency_Sources_ViewMonthlyTotals_Chart.mainChart.options.scales, xAxes: [{
											stacked: true,
											display: true,
											gridLines: {
												display: true
											},
											labels: [ ...tempLabels ]
									}]
								}
							}
						}
					}
				};
				widgets = {
					...widgets, Agency_Sources_ViewMonthlyTotals_Chart: {
							...widgets.Agency_Sources_ViewMonthlyTotals_Chart, mainChart: {
								...widgets.Agency_Sources_ViewMonthlyTotals_Chart.mainChart, TW: {
									...widgets.Agency_Sources_ViewMonthlyTotals_Chart.mainChart.TW, datasets: [{
										type: 'bar',
										barPercentage: 0.5,
										label: '',
										data: [ ...tempData ],
										backgroundColor: '#42BFF7',
										hoverBackgroundColor: '#87CDF7',
										categoryPercentage: 1,
								}] 
							}
						}
					}
				};
			} 

			if(widgets.Agency_Sources_ViewMonthlyTotals_PieChart) {	
				let tempDatasets = [];
				let tempData = [];
				const tableContent = widgets.Agency_Sources_ViewMonthlyTotals_Table.table.tableContent;
				policies.map(policy => {
					if(policy.value !== 'Total') {
						tempData.push(tableContent['Total'][policy.value]);
					}				
				});

				let temp = widgets.Agency_Sources_ViewMonthlyTotals_PieChart.mainChart.datasets[0];
				temp = {...temp, data: tempData};
				tempDatasets.push(temp);
				widgets = {
					...widgets, Agency_Sources_ViewMonthlyTotals_PieChart: {
						...widgets.Agency_Sources_ViewMonthlyTotals_PieChart, mainChart: {
							...widgets.Agency_Sources_ViewMonthlyTotals_PieChart.mainChart, datasets: [
								...tempDatasets
							] 
						}
					}
				};
			} 
		}	
		
		console.log('------------------widgets', widgets);
		setData({ widgets });
	}, [widgets, main, production, product, period]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}
	
	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
	}

	function handleChangeProduction(event) {
		setProduction(event.target.value);
	}

	function handleChangeProduct(event) {
		setProduct(event.target.value);
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
					{tabValue === 1 &&
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
					{tabValue === 0 &&
						<div className="flex flex-1 items-center justify-center px-12">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<SelectBox
									value={product}
									onChange={ev => handleChangeProduct(ev)}
									label="Product"
									data={options.product.data}
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
					<Tab className="h-64 normal-case" label="View Year Total by Product" />
					<Tab className="h-64 normal-case" label="View Monthly Totals" />									
				</Tabs>
			}
			content={
				<div className="w-full p-12">
					{tabValue === 0 &&
						<div>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-2/3 p-12">
									<Chart widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_Chart} />
								</div>	
								<div className="widget flex w-1/3 p-12">
									<Table widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_Table} />
								</div>				
							</FuseAnimateGroup>								
						</div>
					}	
					{tabValue === 1 && 
						<div>							
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-2/3 p-12">
									<Chart widget={data.widgets.Agency_Sources_ViewMonthlyTotals_Chart} />
								</div>	
								<div className="widget flex w-1/3 p-12">
									<PieChart widget={data.widgets.Agency_Sources_ViewMonthlyTotals_PieChart} />
								</div>				
							</FuseAnimateGroup>	
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>	
								<div className='widget flex w-full p-12'>
									<Table widget={data.widgets.Agency_Sources_ViewMonthlyTotals_Table} />
								</div>	
							</FuseAnimateGroup>	
						</div>
					}				
				</div>
				
			}
			// innerScroll
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(Sources);
