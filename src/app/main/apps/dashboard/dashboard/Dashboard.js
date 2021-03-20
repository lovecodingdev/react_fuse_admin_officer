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
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import reducer from '../store';
import Table from '../../../components/widgets/Table';
import Panel from '../../../components/widgets/Panel';
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

function Dashboard(props) {
	const dispatch = useDispatch();
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
			if(widgets.Dashboard_Panel) {
				let goals = 0;
				let actual = 0;
				let household = 0;
				let individual = 0;
				let auto = 0;
				let fire = 0;
				let life = 0;
				let health = 0;

				policies.map(policy => {
					if(policy.value !== 'Total') {
						users.map(user => {
							if(user.belongTo === UID) { 
								goals += main[production][period][user.data.displayName][policy.value]['Goals'];
								actual += main[production][period][user.data.displayName][policy.value]['Policies'];
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
				let policyData = widgets.Dashboard_Panel.data[0];
				let multilineData = widgets.Dashboard_Panel.data[1];
				let goalsAndActualData = widgets.Dashboard_Panel[2];

				policyData = {
					...policyData, data: 
						[
							{ Auto:  auto },
							{ Fire: fire },
							{ Life: life },
							{ Health: health },
						]
				};
				multilineData = {
					...multilineData, data: 
						[
							{ Percentage: dividing(household*100, household+individual) },							
						]
				};
				goalsAndActualData = {
					...policyData, data: 
						[
							{ Goals: goals },
							{ Actual: actual },							
						]
				};

				tempData.push(policyData);
				tempData.push(multilineData);
				tempData.push(goalsAndActualData);

				widgets = {
					...widgets, Dashboard_Panel: {
						...widgets.Dashboard_Panel, data: 
							[ ...tempData ]
					}
				}
			}
			if(widgets.Dashboard_Chart) {
				
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
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<Header title={title}></Header>
			}
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						{data.widgets.Dashboard_Panel.data.map(panel => (
							<div className="widget flex w-1/3 p-12">
								<Panel data={panel} />
							</div>
						))}
					</FuseAnimateGroup>					
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/5 p-12">
							<HorizontalBarChart data={data.widgets.Dashboard_Chart} />
						</div>
						<div className="widget flex w-3/5 p-12">
							<HorizontalBarChart data={data.widgets.Dashboard_Chart} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/5 p-12">
							<HorizontalBarChart data={data.widgets.Dashboard_Chart} />
						</div>
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

export default withReducer('dashboardApp', reducer)(Dashboard);
