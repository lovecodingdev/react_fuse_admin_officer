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
import usersSlice, { getUsers, selectUsers } from '../store/usersSlice';
import { Producer_StaffMultiline_Ratios_Table, Producer_StaffMultiline_Summary_Table } from '../Headers';
import { monthsAndQuarters, policiesAndPremium1, policies, months, bonusPlanDbNames, Options as options } from '../../../utils/Globals';
import { ceil } from '../../../utils/Function';

function StaffMultiline(props) {
	const dispatch = useDispatch();	
	const widgets = useSelector(selectWidgets);
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
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Staff Multiline');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getMarketings());
		dispatch(getEntries());		
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
		let temp = {};
		options.production.data.map((pro) => {
			temp[pro.value] = {};
			monthsAndQuarters.map((month) => {				
				temp[pro.value][month.value] = {};
					users.map((user) => {
						temp[pro.value][month.value][user.data.displayName] = {};
						policies.map((policy) => {
							temp[pro.value][month.value][user.data.displayName][policy.value] = {
								"Bonus": 0,
								"Premium": 0,
								"Policies": 0,
								"Average Premium": 0,
							};
	
							// adding marketing items
							Object.keys(marketings).map((key) => {
								const marketing = marketings[key];
								temp[pro.value][month.value][user.data.displayName][policy.value][marketing.marketingName] = 0;			
							}); 					
						});
	
						// //adding bonusPlan items
						// const bonusPlan = bonusPlans.length > 0 && 
						// bonusPlans[0].hasOwnProperty(bonusPlanDbNames[tabValue].db) ? 
						// bonusPlans[0][bonusPlanDbNames[tabValue].db] : {};				
						// Object.keys(bonusPlan).map((key) => {		
						// 	const item = bonusPlan[key];
						// 	temp[pro.value][month.value][bonusPlanDbNames[tabValue].name][item.name] = 0;
						// });	
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
								temp[pro.value][month][userName][entryNames[entryName]]["Bonus"] += ceil(parseFloat(item.dollarBonus));
								temp[pro.value][month][userName][entryNames[entryName]]["Premium"] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100;
								temp[pro.value][month][userName][entryNames[entryName]]["Policies"] += parseFloat(item.percentOfSaleCredit / 100);	
								temp[pro.value][month][userName][entryNames[entryName]]["Average Premium"] = temp[pro.value][month][userName][entryNames[entryName]]["Policies"] > 0 ?
									ceil((temp[pro.value][month][userName][entryNames[entryName]]["Premium"] / temp[pro.value][month][userName][entryNames[entryName]]["Policies"])) : "";							
							});
						}
					});	
				});	
			}
		});		
		
		console.log('--------------------temp=', temp)
		setMain(temp)
	}, [bonusPlans, marketings, entries]);

	useEffect(() => {	
		setData({ widgets });
	}, [widgets]);

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
					{tabValue === 0 &&
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
					}
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
					<Tab className="h-64 normal-case" label="RATIOS" />
					<Tab className="h-64 normal-case" label="SUMMARY" />									
				</Tabs>
			}
			content={
				<div className="w-full p-12">					
					{tabValue === 0 && 
						<div>
							<div className='p-12'>
								<Table header={Producer_StaffMultiline_Ratios_Table} widget={widgets.Producer_StaffMultiline_Ratios_Table} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Chart widget={widgets.StaffMultiline_Ratios_Policies_Chart} />
							</div>
							<div className='p-12'>
								<Chart widget={widgets.StaffMultiline_Ratios_Producer_Chart} />
							</div>							
						</div>
					}				
					{tabValue === 1 &&  
						<div>
							<div className='p-12'>
								<Chart widget={widgets.Producer_StaffMultiline_Summary_Chart_1} />
							</div>
							<div className='p-12'>
								<Chart widget={widgets.Producer_StaffMultiline_Summary_Chart_2} />
							</div>	
							<div className='p-12'>
								<Table header={Producer_StaffMultiline_Summary_Table} widget={widgets.Producer_StaffMultiline_Summary_Table} entries fires lifes healthes />
							</div>	
						</div>
					}													
				</div> 
			}
			innerScroll
		/>
	);
}

export default withReducer('producerApp', reducer)(StaffMultiline);
