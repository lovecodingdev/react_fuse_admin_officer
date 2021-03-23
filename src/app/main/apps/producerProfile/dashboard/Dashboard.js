import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function Dashboard(props) {
	const dispatch = useDispatch();
	const routeParams = useParams();
	const UID = routeParams.id;
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
	const [title, setTitle] = useState('Dashboard');
	
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
			let IndGoalsAndActual = {};	
			let teamGoalsAndActual = {};
			let household = 0;
			let individual = 0;	
			if(widgets.Dashboard_Multiline_GoalAndActual_Auto_Panel) {	
				policies.map(policy => {					
					if(policy.value !== 'Bank') {
						IndGoalsAndActual[`${policy.value}@Goal`] = 0;
						IndGoalsAndActual[`${policy.value}@Actual`] = 0;
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
								IndGoalsAndActual[`Total@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								IndGoalsAndActual[`Total@Actual`] += main[production][period][user.id][policy.value]["Policies"];											
								IndGoalsAndActual[`${policy.value}@Goal`] += main[production][period][user.id][policy.value]["Goals"];
								IndGoalsAndActual[`${policy.value}@Actual`] += main[production][period][user.id][policy.value]["Policies"];
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
							tempCard = { ...tempCard, count: IndGoalsAndActual[`${policy.value}@${card.label}`] };
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

			if(widgets.Dashboard_Chart) {
				let goal = widgets.Dashboard_Chart.mainChart.TW.datasets[0];
				let actual = widgets.Dashboard_Chart.mainChart.TW.datasets[1];
				
				let tempGoal = [];
				let tempActual = [];
				let tempDatasets = [];
				policies.map(policy => {
					if(policy.value !== 'Bank' && policy.value !== 'Total') {
						tempGoal.push(IndGoalsAndActual[`${policy.value}@Goal`]);
						tempActual.push(IndGoalsAndActual[`${policy.value}@Actual`]);						
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
				header: 'min-h-160 h-160',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex flex-col justify-between flex-1 px-24 pt-24">
					<div className="flex justify-between items-start">
						<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h4">
							Welcome!
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
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
					{
						policies.map(policy => {
							if(policy.value !== 'Bank') {
								return(
									<div className="widget flex w-1/5 p-12">							
										<NumberPanel data={data.widgets[`Dashboard_Multiline_GoalAndActual_${policy.value}_Panel`]} type='Two Number' />						
									</div>
								)
							}
							
						})
					}															
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
					{
						policies.map(policy => {
							if(policy.value !== 'Bank') {
								return(
									<div className="widget flex w-1/5 p-12">							
										<NumberPanel data={data.widgets[`Dashboard_Multiline_Team_GoalAndActual_${policy.value}_Panel`]} type='Two Number' />						
									</div>
								)
							}
							
						})
					}								
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/5 p-12">							
							<NumberPanel data={data.widgets.Dashboard_Multiline_Percentage_Panel} type='One Number' />						
						</div>
						{
							policies.map(policy => {
								if(policy.value!=='Bank' && policy.value!=='Total') {
									return(
										<div className="widget flex w-1/5 p-12">							
											<NumberPanel data={data.widgets[`Dashboard_LapseRate_${policy.value}_Panel`]} type='One Number' />						
										</div>
									)
								}
								
							})
						}									
					</FuseAnimateGroup>										
					<FuseAnimateGroup className="flex flex-wrap items-center justify-center" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-3/5 p-12">	
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
