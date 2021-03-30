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
import Paper from '@material-ui/core/Paper';
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
import DashboardPanel from '../../../components/widgets/DashboardPanel';
import Card from '../../../components/widgets/Panel';
import BarChart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import SimpleHeader from '../../../components/widgets/SimpleHeader';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision } from '../store/visionSlice';
import { getLapseRate, selectLapseRate } from '../store/lapseRateSlice';
import { Options as options, policies } from '../../../utils/Globals';
import { dividing, getMain } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%',
		}
	},
}));

function Dashboard(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
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
	const [title, setTitle] = useState('Welcome');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getEntries());	
		dispatch(getVision());	
		dispatch(getLapseRate());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		if(users.length>0 && entries.length>0 && bonusPlans.length>0 && lapseRate.length>0) { 
			const temp = getMain(entries, bonusPlans, [], users, vision, lapseRate);										
			setMain(temp);
		}
	}, [entries, bonusPlans, users, vision, lapseRate]);

	useEffect(() => {	
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			let indGoalsAndActual = {};	
			let teamGoalsAndActual = {};
			let household = 0;
			let individual = 0;	
			if(widgets.Dashboard_Multiline_GoalAndActual_Auto_Panel) {	
				policies.map(policy => {					
					if(policy.value !== 'Bank') {
						indGoalsAndActual[`${policy.value}@Goal`] = 0;
						indGoalsAndActual[`${policy.value}@Actual`] = 0;
						teamGoalsAndActual[`${policy.value}@Goal`] = 0;
						teamGoalsAndActual[`${policy.value}@Actual`] = 0;						
					}	
					household += main[production][period][UID][policy.value]['household'];
					individual += main[production][period][UID][policy.value]['individual'];			
				});
				users.map((user) => {
					if(user.id === UID) { 					
						options.product.data.map((policy) => { 
							if(policy.value !== 'Bank') {
								indGoalsAndActual[`Total@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								indGoalsAndActual[`Total@Actual`] += main[production][period][user.id][policy.value]["Policies"];											
								indGoalsAndActual[`${policy.value}@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								indGoalsAndActual[`${policy.value}@Actual`] += main[production][period][user.id][policy.value]["Policies"];
							}
						});						
					}	
					if(user.belongTo === belongTo) { 						
						options.product.data.map((policy) => { 
							if(policy.value !== 'Bank') {
								teamGoalsAndActual[`Total@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								teamGoalsAndActual[`Total@Actual`] += main[production][period][user.id][policy.value]["Policies"];											
								teamGoalsAndActual[`${policy.value}@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								teamGoalsAndActual[`${policy.value}@Actual`] += main[production][period][user.id][policy.value]["Policies"];
							}							
						});
					}			
				});		
						
				// Personal Goal vs Actual
				policies.map(policy => {
					if(policy.value !== 'Bank') {
						let tempCardData = [];
						let tempCard = {};
						const cardData = widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`].cardData;
						cardData.map(card => {
							tempCard = card;
							tempCard = { ...tempCard, count: indGoalsAndActual[`${policy.value}@${card.label}`] };
							tempCardData.push(tempCard);
						});						
						widgets = {
							...widgets, [`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`]: {
								...widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`], cardData: [
									...tempCardData
								]
							}					
						}
					}					
				});

				// Team Goal vs Actual
				policies.map(policy => {
					if(policy.value !== 'Bank') {
						let tempCardData = [];
						let tempCard = {};
						const cardData = widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`].cardData;
						cardData.map(card => {
							tempCard = card;
							tempCard = { ...tempCard, count: teamGoalsAndActual[`${policy.value}@${card.label}`] };
							tempCardData.push(tempCard);
						});						
						widgets = {
							...widgets, [`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`]: {
								...widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`], cardData: [
									...tempCardData
								]
							}					
						}
					}					
				});	

				// Lapse Rate
				policies.map(policy => {
					if(policy.value !== 'Bank' && policy.value !== 'Total') {
						let tempCardData = [];
						let tempCard = {};
						const cardData = widgets[`Dashboard_LapseRate_${policy.value}_Panel`].cardData;
						tempCard = cardData[0];
						tempCard = { ...tempCard, count: main[production][period][UID][policy.value]['lapseRate'] };
						tempCardData.push(tempCard);
						widgets = {
							...widgets, [`Dashboard_LapseRate_${policy.value}_Panel`]: {
								...widgets[`Dashboard_LapseRate_${policy.value}_Panel`], cardData: [
									...tempCardData
								]
							}					
						}
					}					
				});	
				
				// Multiline Percentage
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
			}

			if(widgets.Dashboard_Personal_GoalVsActual_Chart) { 
				let goal = widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart.TW.datasets[0];
				let actual = widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart.TW.datasets[1];
				
				let tempGoal = [];
				let tempActual = [];
				let tempDatasets = [];
				policies.map(policy => {
					if(policy.value !== 'Bank' && policy.value !== 'Total') {
						tempGoal.push(indGoalsAndActual[`${policy.value}@Goal`]);
						tempActual.push(indGoalsAndActual[`${policy.value}@Actual`]);						
					}					
				});
				goal = { ...goal, data: tempGoal };
				actual = { ...actual, data: tempActual };
				tempDatasets.push(goal);
				tempDatasets.push(actual);

				widgets = {
					...widgets, Dashboard_Personal_GoalVsActual_Chart: {
						...widgets.Dashboard_Personal_GoalVsActual_Chart, mainChart: {
							...widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart, TW: {
								...widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart.TW, datasets: [
									...tempDatasets
								]
							}
						}
					}
				}

				widgets = {
					...widgets, Dashboard_Personal_GoalVsActual_Chart: {
						...widgets.Dashboard_Personal_GoalVsActual_Chart, mainChart: {
							...widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart, options: {
								...widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart.options, scales: {
									...widgets.Dashboard_Personal_GoalVsActual_Chart.mainChart.options.scales, xAxes: [
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
				widgets = {
					...widgets, Dashboard_Personal_GoalVsActual_Chart: {
						...widgets.Dashboard_Personal_GoalVsActual_Chart, data: {
							Auto: widgets.Dashboard_Multiline_GoalAndActual_Auto_Panel,
							Fire: widgets.Dashboard_Multiline_GoalAndActual_Fire_Panel,
							Life: widgets.Dashboard_Multiline_GoalAndActual_Life_Panel,
							Health: widgets.Dashboard_Multiline_GoalAndActual_Health_Panel,
							Total: widgets.Dashboard_Multiline_GoalAndActual_Total_Panel,
						}
					}
				}
			}

			if(widgets.Dashboard_Team_GoalVsActual_Chart) { 
				let goal = widgets.Dashboard_Team_GoalVsActual_Chart.mainChart.TW.datasets[0];
				let actual = widgets.Dashboard_Team_GoalVsActual_Chart.mainChart.TW.datasets[1];
				
				let tempGoal = [];
				let tempActual = [];
				let tempDatasets = [];
				policies.map(policy => {
					if(policy.value !== 'Bank' && policy.value !== 'Total') {
						tempGoal.push(teamGoalsAndActual[`${policy.value}@Goal`]);
						tempActual.push(teamGoalsAndActual[`${policy.value}@Actual`]);						
					}					
				});
				goal = { ...goal, data: tempGoal };
				actual = { ...actual, data: tempActual };
				tempDatasets.push(goal);
				tempDatasets.push(actual);

				widgets = {
					...widgets, Dashboard_Team_GoalVsActual_Chart: {
						...widgets.Dashboard_Team_GoalVsActual_Chart, mainChart: {
							...widgets.Dashboard_Team_GoalVsActual_Chart.mainChart, TW: {
								...widgets.Dashboard_Team_GoalVsActual_Chart.mainChart.TW, datasets: [
									...tempDatasets
								]
							}
						}
					}
				}

				widgets = {
					...widgets, Dashboard_Team_GoalVsActual_Chart: {
						...widgets.Dashboard_Team_GoalVsActual_Chart, mainChart: {
							...widgets.Dashboard_Team_GoalVsActual_Chart.mainChart, options: {
								...widgets.Dashboard_Team_GoalVsActual_Chart.mainChart.options, scales: {
									...widgets.Dashboard_Team_GoalVsActual_Chart.mainChart.options.scales, xAxes: [
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
				widgets = {
					...widgets, Dashboard_Team_GoalVsActual_Chart: {
						...widgets.Dashboard_Team_GoalVsActual_Chart, data: {
							Auto: widgets.Dashboard_Multiline_Team_GoalAndActual_Auto_Panel,
							Fire: widgets.Dashboard_Multiline_Team_GoalAndActual_Fire_Panel,
							Life: widgets.Dashboard_Multiline_Team_GoalAndActual_Life_Panel,
							Health: widgets.Dashboard_Multiline_Team_GoalAndActual_Health_Panel,
							Total: widgets.Dashboard_Multiline_Team_GoalAndActual_Total_Panel,
						}
					}
				}
			}
		}

		console.log('-----widgets', widgets)
		setData({ widgets });
	}, [widgets, main, period]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}
	
	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
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
				header: 'min-h-160 h-160',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<SimpleHeader title={title}>
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
				</SimpleHeader>			
			}
			content={
				<div className="w-full p-12">					
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full p-12">
							<DashboardPanel widget={data.widgets.Dashboard_Personal_GoalVsActual_Chart} />
						</div>
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full p-12">
							<DashboardPanel widget={data.widgets.Dashboard_Team_GoalVsActual_Chart} />
						</div>
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/5 p-12">							
							<Card data={data.widgets.Dashboard_Multiline_Percentage_Panel} type='One Number' />						
						</div>
						<fieldset className='"widget flex w-4/5 rounded-8 border-1'>
    						<legend>Lapse Rate</legend>
						{
							policies.map(policy => {
								if(policy.value!=='Bank' && policy.value!=='Total') {
									return(
										<div className="widget flex w-1/4 p-12">							
											<Card data={data.widgets[`Dashboard_LapseRate_${policy.value}_Panel`]} type='One Number' />						
										</div>
									)
								}
								
							})
						}
						</fieldset>									
					</FuseAnimateGroup>																		
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('dashboardApp', reducer)(Dashboard);
