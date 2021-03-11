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
import HorizontalBarChart from '../../../components/widgets/HorizontalBarChart';
import Panel from '../widget/Panel';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';

const panelData = {
	id: 'panel',
	title: 'Panel',
	data: [
		{
			id: 1,
			title: 'Lapse Rate',
			label: 'label',
			color: 'text-blue',
			data:[
				{
					Auto: 52
				},
				{
					Fire: 32
				},
				{
					Health: 16
				},
				{
					Life:23
				}
			]
		},
		{
			id: 2,
			title: 'Multiline Percentage',	
			label: 'label',
			color: 'text-blue',
			data:[
				{
					Percentage: 52
				}
			]
		},
		{
			id: 3,
			title: 'Goals vs Actual',	
			label: 'label',
			color: 'text-blue',
			data:[
				{
					Goals: 52
				},
				{
					Actual: 32
				}
			]
		}
	]
}

const chartData = {
	id: 'id',
	title: "Title",
	// ranges: {
	// 	TW: 'As A Team',
	// 	IN: 'Individually',
	// 	IC: 'Include Initial Bonus',
	// 	DI: "Don't Include Initial Bonus"
	// },
	mainChart: {
		TW: {
			
			labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
			datasets: [
				{
					// type: 'bar', 
					barPercentage: 0.5,
					label: 'Goal1',
					data: [65, 59, 90, 81, 56, 55, 40],
					backgroundColor: '#42BFF7',
					hoverBackgroundColor: '#87CDF7',
					categoryPercentage: 1,
				},
				{
					// type: 'bar',
					barPercentage: 0.5,
					label: 'Goal2',
					data: [28, 48, 40, 19, 96, 27, 100],
					backgroundColor: '#C6ECFD',
					hoverBackgroundColor: '#D7EFFD',
					categoryPercentage: 1
				},										
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: true,
				position: 'bottom'
			},
			tooltips: {
				mode: 'label'
			},
			scales: {
				yAxes: [
					{
						stacked: true,
						display: true,
						gridLines: {
							display: true
						},
						labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
					}
				],
				xAxes: [
					{
						stacked: true,
						type: 'linear',
						display: true,
						position: 'left',
						gridLines: {
							display: true
						},
						labels: {
							show: true
						}
					}
				]
			}
		}
	},
}

function Dashboard(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Dashboard');
	
	useEffect(() => {
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {	
		setData({ widgets });
	}, [widgets]);

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
						{panelData.data.map(panel => (
							<div className="widget flex w-1/3 p-12">
								<Panel data={panel} />
							</div>
						))}
					</FuseAnimateGroup>					
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/5 p-12">
							<HorizontalBarChart widget={chartData} />
						</div>
						<div className="widget flex w-3/5 p-12">
							<HorizontalBarChart widget={chartData} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/5 p-12">
							<HorizontalBarChart widget={chartData} />
						</div>
						<div className="widget flex w-3/5 p-12">
							<HorizontalBarChart widget={chartData} />
						</div>
					</FuseAnimateGroup>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('dashboardApp', reducer)(Dashboard);
