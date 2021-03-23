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
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import reducer from '../store';
import Table from '../../../components/widgets/Table';
import Panel from '../../../components/widgets/Panel';
import NumberPanel from '../../../components/widgets/NumberPanel';
import HorizontalBarChart from '../../../components/widgets/HorizontalBarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision } from '../store/visionSlice';
import { getLapseRate, selectLapseRate } from '../store/lapseRateSlice';
import { Options as options, policies } from '../../../utils/Globals';
import { dividing, getMain } from '../../../utils/Function';
import { Link, useParams } from 'react-router-dom';

const belongTo = localStorage.getItem('@BELONGTO');


const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

function Dashboard(props) {
	const routeParams = useParams();
	const UID = routeParams.id;
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	// const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const vision = useSelector(selectVision);
	const lapseRate = useSelector(selectLapseRate);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState(moment().format('MMMM'));
	const [production, setProduction] = useState("Show Written Production");
	const [report, setReport] = useState("Policies");
	const [userList, setUserList] = useState("");
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Dashboard');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		// dispatch(getMarketings());
		dispatch(getEntries());	
		dispatch(getVision());	
		dispatch(getLapseRate());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		if(users.length>0 && entries.length>0 && bonusPlans.length>0, lapseRate.length>0) {
			const temp = getMain(entries, bonusPlans, [], users, vision, lapseRate);										
			setMain(temp);
		}
	}, [entries, bonusPlans, users, vision, lapseRate]);

	useEffect(() => {	
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			let indTableContent = {};	
			let teamTableContent = {};	
			if(widgets.Dashboard_GoalsAndActual_Table) {
				let tableRows = [
					{
						id: 'total', 
						value: 'Total', 
						type: true, 
						color: '', 
						border: '' 
					}
				];						
				indTableContent["Total"] = {
					'Auto@Goal': 0,
					'Auto@Actual': 0,
					'Fire@Goal': 0,
					'Fire@Actual': 0,
					'Life@Goal': 0,
					'Life@Actual': 0,
					'Health@Goal': 0,
					'Health@Actual': 0,				
					'Total@Goal': 0,
					'Total@Actual': 0,
				};
				teamTableContent["Total"] = {
					'Auto@Goal': 0,
					'Auto@Actual': 0,
					'Fire@Goal': 0,
					'Fire@Actual': 0,
					'Life@Goal': 0,
					'Life@Actual': 0,
					'Health@Goal': 0,
					'Health@Actual': 0,				
					'Total@Goal': 0,
					'Total@Actual': 0,
				};
				users.map((user) => {
					if(user.id === UID) { 
						// tableRows.push({ 
						// 	id: user.id, 
						// 	value: user.data.displayName, 
						// 	type: true, 
						// 	color: '' 
						// });
						
						let totalGoals = 0;
						let totalActual = 0;					
						// indTableContent[user.data.displayName] = {};
						options.product.data.map((policy) => { // except for Total
							if(policy.value !== 'Bank') {
								// indTableContent[user.data.displayName][`${policy.value}@Goal`] = main[production][period][user.data.displayName][policy.value]["Goals"]
								// indTableContent[user.data.displayName][`${policy.value}@Actual`] = main[production][period][user.data.displayName][policy.value]["Policies"]
								totalGoals += main[production][period][user.data.displayName][policy.value]["Goals"];
								totalActual += main[production][period][user.data.displayName][policy.value]["Policies"];											
								indTableContent['Total'][`${policy.value}@Goal`] += main[production][period][user.data.displayName][policy.value]["Goals"];
								indTableContent['Total'][`${policy.value}@Actual`] += main[production][period][user.data.displayName][policy.value]["Policies"];
							}
						});
						// indTableContent[user.data.displayName]['Total@Goal'] = totalGoals;
						// indTableContent[user.data.displayName]['Total@Actual'] = totalActual;														
						indTableContent['Total'][`Total@Goal`] += totalGoals;
						indTableContent['Total'][`Total@Actual`] += totalActual;
					}	
					if(user.belongTo === belongTo) { 
						// tableRows.push({ 
						// 	id: user.id, 
						// 	value: user.data.displayName, 
						// 	type: true, 
						// 	color: '' 
						// });
						
						let totalGoals = 0;
						let totalActual = 0;					
						// teamTableContent[user.data.displayName] = {};
						options.product.data.map((policy) => { // except for Total
							if(policy.value !== 'Bank') {
								// teamTableContent[user.data.displayName][`${policy.value}@Goal`] = main[production][period][user.data.displayName][policy.value]["Goals"]
								// teamTableContent[user.data.displayName][`${policy.value}@Actual`] = main[production][period][user.data.displayName][policy.value]["Policies"]
								totalGoals += main[production][period][user.data.displayName][policy.value]["Goals"];
								totalActual += main[production][period][user.data.displayName][policy.value]["Policies"];											
								teamTableContent['Total'][`${policy.value}@Goal`] += main[production][period][user.data.displayName][policy.value]["Goals"];
								teamTableContent['Total'][`${policy.value}@Actual`] += main[production][period][user.data.displayName][policy.value]["Policies"];
							}
						});
						// teamTableContent[user.data.displayName]['Total@Goal'] = totalGoals;
						// teamTableContent[user.data.displayName]['Total@Actual'] = totalActual;														
						teamTableContent['Total'][`Total@Goal`] += totalGoals;
						teamTableContent['Total'][`Total@Actual`] += totalActual;
					}			
				});
			
				widgets = {
					...widgets, Dashboard_GoalsAndActual_Table: {
						...widgets.Dashboard_GoalsAndActual_Table, table: {
							...widgets.Dashboard_GoalsAndActual_Table.table, rows:
								tableRows
						}
					}
				};
				widgets = {
					...widgets, Dashboard_GoalsAndActual_Table: {
						...widgets.Dashboard_GoalsAndActual_Table, table: {
							...widgets.Dashboard_GoalsAndActual_Table.table, tableContent:
								indTableContent
						}
					}
				};	

				policies.map(policy => {
					if(policy.value !== 'Bank') {
						let tempCardData = [];
						let tempCard = {};
						tempCard = widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`].cardData[0];
						tempCard = { ...tempCard, count: indTableContent['Total'][`${policy.value}@Goal`] };
						tempCardData.push(tempCard);
						tempCard = widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`].cardData[1];
						tempCard = { ...tempCard, count: indTableContent['Total'][`${policy.value}@Actual`] };
						tempCardData.push(tempCard);

						widgets = {
							...widgets, [`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`]: {
								...widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`], cardData: [
									...tempCardData
								]
							}					
						}
					}					
				});
				policies.map(policy => {
					if(policy.value !== 'Bank') {
						let tempCardData = [];
						let tempCard = {};
						tempCard = widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`].cardData[0];
						tempCard = { ...tempCard, count: teamTableContent['Total'][`${policy.value}@Goal`] };
						tempCardData.push(tempCard);
						tempCard = widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`].cardData[1];
						tempCard = { ...tempCard, count: teamTableContent['Total'][`${policy.value}@Actual`] };
						tempCardData.push(tempCard);

						widgets = {
							...widgets, [`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`]: {
								...widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`], cardData: [
									...tempCardData
								]
							}					
						}
					}					
				});								
			}
			if(widgets.Dashboard_Multiline_Percentage_Panel && widgets.Dashboard_LapseRate_Panel) {			
				let household = 0;
				let individual = 0;
				let auto = 0;
				let fire = 0;
				let life = 0;
				let health = 0;

				policies.map(policy => {
					if(policy.value !== 'Total') {
						users.map(user => {
							if(user.id === UID) { 							
								household += main[production][period][user.data.displayName][policy.value]['household'];
								individual += main[production][period][user.data.displayName][policy.value]['individual'];

								if(lapseRate.length > 0) {
									auto = main[production][period][user.data.displayName]['Auto']['lapseRate'];
									fire = main[production][period][user.data.displayName]['Fire']['lapseRate'];
									life = main[production][period][user.data.displayName]['Life']['lapseRate'];
									health = main[production][period][user.data.displayName]['Health']['lapseRate'];
								}
							}
						});
					}
				});

				let tempData = [];
				let cardData = widgets.Dashboard_Multiline_Percentage_Panel.cardData[0];
				cardData = { ...cardData, count: dividing(household*100, household+individual) };
				tempData.push(cardData);
				widgets = {
					...widgets, Dashboard_Multiline_Percentage_Panel: {
						...widgets.Dashboard_Multiline_Percentage_Panel, cardData: 
							[ ...tempData ]
					}
				}

				tempData = [];
				cardData = widgets.Dashboard_LapseRate_Panel.cardData[0];
				cardData = { ...cardData, count: auto };
				tempData.push(cardData);
				cardData = widgets.Dashboard_LapseRate_Panel.cardData[1];
				cardData = { ...cardData, count: fire };
				tempData.push(cardData);
				cardData = widgets.Dashboard_LapseRate_Panel.cardData[2];
				cardData = { ...cardData, count: life };
				tempData.push(cardData);
				cardData = widgets.Dashboard_LapseRate_Panel.cardData[3];
				cardData = { ...cardData, count: health };
				tempData.push(cardData);			

				widgets = {
					...widgets, Dashboard_LapseRate_Panel: {
						...widgets.Dashboard_LapseRate_Panel, cardData: 
							[ ...tempData ]
					}
				}
			}
			if(widgets.Dashboard_Chart) {
				const tableContent = widgets.Dashboard_GoalsAndActual_Table.table.tableContent;
				let goal = widgets.Dashboard_Chart.mainChart.TW.datasets[0];
				let actual = widgets.Dashboard_Chart.mainChart.TW.datasets[1];
				
				let tempGoal = [];
				let tempActual = [];
				let tempDatasets = [];
				policies.map(policy => {
					if(policy.value !== 'Bank' && policy.value !== 'Total') {
						tempGoal.push(tableContent['Total'][`${policy.value}@Goal`]);
						tempActual.push(tableContent['Total'][`${policy.value}@Actual`]);						
					}					
				});
				goal = { ...goal, data: tempGoal };
				actual = { ...actual, data: tempActual };
				tempDatasets.push(goal);
				tempDatasets.push(actual);

				widgets = {
					...widgets, Dashboard_Chart: {
						...widgets.Dashboard_Chart, mainChart: {
							...widgets.Dashboard_Chart.mainChart, TW: {
								...widgets.Dashboard_Chart.mainChart.TW, datasets: [
									...tempDatasets
								]
							}
						}
					}
				}

				widgets = {
					...widgets, Dashboard_Chart: {
						...widgets.Dashboard_Chart, mainChart: {
							...widgets.Dashboard_Chart.mainChart, options: {
								...widgets.Dashboard_Chart.mainChart.options, scales: {
									...widgets.Dashboard_Chart.mainChart.options.scales, yAxes: [
										{
											stacked: false,
											display: true,
											gridLines: {
												display: true
											},
											labels: ['Auto', 'Fire', 'Life', 'Health'],
										}
									]
								}																	
							}
						}
					}
				}
			}
		}

		console.log('-----widgets', widgets)
		setData({ widgets });
	}, [widgets, main]);

	function handleChangeTab(event, value) {
		setTabValue(value);
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
		<FusePageSimple
			classes={{
				header: 'min-h-50 h-50',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex flex-col justify-between flex-1 px-24 pt-24">
					<div className="flex justify-between items-start">
					<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/setup/users"
								color="inherit"
							>
								<Icon className="text-20">
									{'arrow_back' }
								</Icon>
								<span className="mx-4">Users</span>
							</Typography>
						<Hidden lgUp>
							<IconButton
								onClick={ev => pageLayout.current.toggleRightSidebar()}
								aria-label="open left sidebar"
								color="inherit"
							>
								<Icon>menu</Icon>
							</IconButton>
						</Hidden>
					</div>					
				</div>
			}
			content={
				<div className="w-full p-12">
					{/* <FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/2 p-12">								
							<Table data={data.widgets.Dashboard_GoalsAndActual_Table} hideLeftHeader />
						</div>
					</FuseAnimateGroup>	 */}
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_GoalAndActual_Auto_Panel} type='Two Number' />						
						</div>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_GoalAndActual_Fire_Panel} type='Two Number' />		
						</div>	
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_GoalAndActual_Life_Panel} type='Two Number' />						
						</div>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_GoalAndActual_Health_Panel} type='Two Number' />		
						</div>	
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_GoalAndActual_Total_Panel} type='Two Number' />						
						</div>									
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Team_GoalAndActual_Auto_Panel} type='Two Number' />						
						</div>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Team_GoalAndActual_Fire_Panel} type='Two Number' />		
						</div>	
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Team_GoalAndActual_Life_Panel} type='Two Number' />						
						</div>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Team_GoalAndActual_Health_Panel} type='Two Number' />		
						</div>	
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Team_GoalAndActual_Total_Panel} type='Two Number' />						
						</div>									
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/3 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Percentage_Panel} type='One Number' />						
						</div>
						<div className="widget flex w-2/3 p-12">							
							<NumberPanel data={data.widgets.Dashboard_LapseRate_Panel} type='Four Number' />		
						</div>				
					</FuseAnimateGroup>										
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/2 p-12">	
							<HorizontalBarChart data={data.widgets.Dashboard_Chart} />						
						</div>	
					</FuseAnimateGroup>					
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('producrProfile', reducer)(Dashboard);
