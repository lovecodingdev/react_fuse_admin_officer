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
import { getVision, selectVision } from '../store/visionSlice';
import { monthsAndQuarters, policies, months, Options as options } from '../../../utils/Globals';
import { ceil, dividing } from '../../../utils/Function';
const belongTo = localStorage.getItem('@BELONGTO')
const UID = localStorage.getItem('@UID')

function GoalsAndActual(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const entries = useSelector(selectEntries);
	const vision = useSelector(selectVision);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState("January");
	const [production, setProduction] = useState("Show Written Production");
	const [title, setTitle] = useState('Goals & Actual');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getEntries());	
		dispatch(getVision());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
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
						temp[pro.value][month.value][user.data.displayName] = {};
						policies.map((policy) => {
							temp[pro.value][month.value][user.data.displayName][policy.value] = {
								"Bonuses": 0,
								"Premium": 0,
								"Policies": 0,
								"Averages": 0,
							};							

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
									temp[pro.value][month.value][user.data.displayName][policy.value]["Goals"] = 
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
								temp[pro.value][month][userName][entryNames[entryName]][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100)
								temp[pro.value][month][userName][entryNames[entryName]]["Bonuses"] += ceil(parseFloat(item.dollarBonus));
								temp[pro.value][month][userName][entryNames[entryName]]["Premium"] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
								temp[pro.value][month][userName][entryNames[entryName]]["Policies"] += parseFloat(item.percentOfSaleCredit / 100);	
								temp[pro.value][month][userName][entryNames[entryName]]["Average"] = dividing(
									temp[pro.value][month][userName][entryNames[entryName]]["Premium"],
									temp[pro.value][month][userName][entryNames[entryName]]["Policies"]		
								)
													
							});
						}
					});	
				});	
			}
		});		
		
		console.log('--------------------temp=', temp)
		setMain(temp)
	}, [entries, vision]);

	useEffect(() => {	
		// Producer_GoalsAndActual_AgencyGoals_Table
		if(widgets.Producer_GoalsAndActual_AgencyGoals_Table && Object.keys(main).length>0 && users.length>0) {
			let tableRows = [
				{
					id: 'total', 
					value: 'Total', 
					type: true, 
					color: '', 
					border: 'border-b-4' 
				}
			];
			let tableContent = {};			
			tableContent["Total"] = {};
			users.map((user) => {
				if(user.belongTo === UID) {
					tableRows.push({ 
						id: user.id, 
						value: user.data.displayName, 
						type: true, 
						color: '' 
					});
					
					let totalGoals = 0;
					let totalActual = 0;					
					tableContent[user.data.displayName] = {};
					options.product.data.map((policy) => { // except for Total
						tableContent[user.data.displayName][`${policy.value}@Goals`] = 
							ceil(
								main[production][period][user.data.displayName][policy.value]["Goals"]
							);						
						tableContent[user.data.displayName][`${policy.value}@Actual`] = 
							ceil(
								main[production][period][user.data.displayName][policy.value]["Policies"]
							);						
						totalGoals += tableContent[user.data.displayName][`${policy.value}@Goals`];
						totalActual += tableContent[user.data.displayName][`${policy.value}@Actual`];						
						
						if(!tableContent['Total'].hasOwnProperty(`${policy.value}@Goals`)) {
							tableContent['Total'][`${policy.value}@Goals`] = 0;
						}
						if(!tableContent['Total'].hasOwnProperty(`${policy.value}@Actual`)) {
							tableContent['Total'][`${policy.value}@Actual`] = 0;
						}
						tableContent['Total'][`${policy.value}@Goals`] += tableContent[user.data.displayName][`${policy.value}@Goals`]
						tableContent['Total'][`${policy.value}@Actual`] += tableContent[user.data.displayName][`${policy.value}@Actual`]
					});
					tableContent[user.data.displayName]['Total@Goals'] = totalGoals;
					tableContent[user.data.displayName]['Total@Actual'] = totalActual;										

					if(!tableContent['Total'].hasOwnProperty(`Total@Goals`)) {
						tableContent['Total'][`Total@Goals`] = 0;
					}
					if(!tableContent['Total'].hasOwnProperty(`Total@Actual`)) {
						tableContent['Total'][`Total@Actual`] = 0;
					}
					tableContent['Total'][`Total@Goals`] += totalGoals;
					tableContent['Total'][`Total@Actual`] += totalActual;
				}				
			});
			widgets = {
				...widgets, Producer_GoalsAndActual_AgencyGoals_Table: {
					...widgets.Producer_GoalsAndActual_AgencyGoals_Table, table: {
						...widgets.Producer_GoalsAndActual_AgencyGoals_Table.table, rows:
							tableRows
					}
				}
			};
			widgets = {
				...widgets, Producer_GoalsAndActual_AgencyGoals_Table: {
					...widgets.Producer_GoalsAndActual_AgencyGoals_Table, table: {
						...widgets.Producer_GoalsAndActual_AgencyGoals_Table.table, tableContent:
							tableContent
					}
				}
			};			
		}

		// Producer_GoalsAndActual_SalesGoals_Chart
		if(widgets.Producer_GoalsAndActual_SalesGoals_Chart && Object.keys(main).length>0 && users.length>0) {	
			let tempDatasets = [];
			Object.keys(widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart.TW.datasets).map((key, n) => {
				let temp = widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart.TW.datasets[key];
				let tempData = [];
				const tableContent = widgets.Producer_GoalsAndActual_AgencyGoals_Table.table.tableContent;
				if(n === 0)
					widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
						tempData.push(tableContent['Total'][`${policy}@Goals`]);
					})
				else if(n === 1)
					widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
						tempData.push(tableContent['Total'][`${policy}@Actual`]);
					})

				temp = {...temp, data: tempData}
				tempDatasets.push(temp);
			}); 
			widgets = {
				...widgets, Producer_GoalsAndActual_SalesGoals_Chart: 
					{...widgets.Producer_GoalsAndActual_SalesGoals_Chart, mainChart: {
						...widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart, TW: {
							...widgets.Producer_GoalsAndActual_SalesGoals_Chart.mainChart.TW, datasets: [
								...tempDatasets
							] 
						}
					}
				}
			};
		} 

		// Producer_GoalsAndActual_OtherActivities_Table
		if(widgets.Producer_GoalsAndActual_OtherActivities_Table && Object.keys(main).length>0 && users.length>0) {
			let tableRows = [
				{
					id: 'total', 
					value: 'Total', 
					type: true, 
					color: '', 
					border: 'border-b-4' 
				}
			];
			let tableContent = {};			
			tableContent["Total"] = {};
			users.map((user) => {
				if(user.belongTo === UID) {
					tableRows.push({ 
						id: user.id, 
						value: user.data.displayName, 
						type: true, 
						color: '' 
					});
					
					let totalGoals = 0;
					let totalActual = 0;					
					tableContent[user.data.displayName] = {};
					options.product.data.map((policy) => { // except for Total
						tableContent[user.data.displayName][`${policy.value}@Goals`] = 
							ceil(
								main[production][period][user.data.displayName][policy.value]["Goals"]
							);						
						tableContent[user.data.displayName][`${policy.value}@Actual`] = 
							ceil(
								main[production][period][user.data.displayName][policy.value]["Policies"]
							);						
						totalGoals += tableContent[user.data.displayName][`${policy.value}@Goals`];
						totalActual += tableContent[user.data.displayName][`${policy.value}@Actual`];						
						
						if(!tableContent['Total'].hasOwnProperty(`${policy.value}@Goals`)) {
							tableContent['Total'][`${policy.value}@Goals`] = 0;
						}
						if(!tableContent['Total'].hasOwnProperty(`${policy.value}@Actual`)) {
							tableContent['Total'][`${policy.value}@Actual`] = 0;
						}
						tableContent['Total'][`${policy.value}@Goals`] += tableContent[user.data.displayName][`${policy.value}@Goals`]
						tableContent['Total'][`${policy.value}@Actual`] += tableContent[user.data.displayName][`${policy.value}@Actual`]
					});
					tableContent[user.data.displayName]['Total@Goals'] = totalGoals;
					tableContent[user.data.displayName]['Total@Actual'] = totalActual;										

					if(!tableContent['Total'].hasOwnProperty(`Total@Goals`)) {
						tableContent['Total'][`Total@Goals`] = 0;
					}
					if(!tableContent['Total'].hasOwnProperty(`Total@Actual`)) {
						tableContent['Total'][`Total@Actual`] = 0;
					}
					tableContent['Total'][`Total@Goals`] += totalGoals;
					tableContent['Total'][`Total@Actual`] += totalActual;
				}				
			});
			widgets = {
				...widgets, Producer_GoalsAndActual_OtherActivities_Table: {
					...widgets.Producer_GoalsAndActual_OtherActivities_Table, table: {
						...widgets.Producer_GoalsAndActual_OtherActivities_Table.table, rows:
							tableRows
					}
				}
			};
			widgets = {
				...widgets, Producer_GoalsAndActual_OtherActivities_Table: {
					...widgets.Producer_GoalsAndActual_OtherActivities_Table, table: {
						...widgets.Producer_GoalsAndActual_OtherActivities_Table.table, tableContent:
							tableContent
					}
				}
			};			
		}

		// Producer_GoalsAndActual_ActivityGoals_Chart
		if(widgets.Producer_GoalsAndActual_ActivityGoals_Chart && Object.keys(main).length>0 && users.length>0) {	
			let tempDatasets = [];
			Object.keys(widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart.TW.datasets).map((key, n) => {
				let temp = widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart.TW.datasets[key];
				let tempData = [];
				const tableContent = widgets.Producer_GoalsAndActual_OtherActivities_Table.table.tableContent;
				if(n === 0)
					widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
						tempData.push(tableContent['Total'][`${policy}@Goals`]);
					})
				else if(n === 1)
					widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
						tempData.push(tableContent['Total'][`${policy}@Actual`]);
					})

				temp = {...temp, data: tempData}
				tempDatasets.push(temp);
			}); 
			widgets = {
				...widgets, Producer_GoalsAndActual_ActivityGoals_Chart: 
					{...widgets.Producer_GoalsAndActual_ActivityGoals_Chart, mainChart: {
						...widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart, TW: {
							...widgets.Producer_GoalsAndActual_ActivityGoals_Chart.mainChart.TW, datasets: [
								...tempDatasets
							] 
						}
					}
				}
			};
		} 

		console.log('-----widgets', widgets)
		setData({ widgets });
	}, [widgets, main, period, production]);

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
								value={period}
								onChange={ev => handleChangePeriod(ev)}
								label="Report Period"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>
				</Header>
			}
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/3 p-12">
							<Table widget={data.widgets.Producer_GoalsAndActual_AgencyGoals_Table} />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chart widget={data.widgets.Producer_GoalsAndActual_SalesGoals_Chart} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/3 p-12">
							<Table widget={data.widgets.Producer_GoalsAndActual_OtherActivities_Table} />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chart widget={data.widgets.Producer_GoalsAndActual_ActivityGoals_Chart} />
						</div>
					</FuseAnimateGroup>
				</div>				
			}
			innerScroll
		/>
	);
}

export default withReducer('producerApp', reducer)(GoalsAndActual);
