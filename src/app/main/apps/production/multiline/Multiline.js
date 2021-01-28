import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from '../store';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import Table from '../../../components/widgets/Table';
import Chat from '../../../components/widgets/BarChart';
import PieChat from '../../../components/widgets/PieChart';
import MultilineHeader from './MultilineHeader';


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

const header1 = [
	// {value:'GOALS', type:false, color:''},
	{value:'Sales Goal', type:false, color:''},
	{value:'Actual Sales', type:false, color:''},
	{value:'Total Premium / Dollars', type:true, color:''},
	{value:'Average Premium / Dollars', type:false, color:''},
];

const header2 = [
	// {value:'GOALS', type:false, color:''},
	// {value:'Sales Goal', type:false, color:''},
	{value:'Actual Sales', type:false, color:''},
	{value:'Total Premium / Dollars', type:true, color:''},
	{value:'Average Premium / Dollars', type:false, color:''},
];

const header3 = [
	// { id: 1, value: 'GOALS', type: true },
	{ id: 2, value: 'Center of Influence', type: true },
	{ id: 3, value: 'Client Request', type: true },
	{ id: 4, value: 'Direct Mail Letter', type: true },
	{ id: 5, value: 'Internet Read >>', type: true },
	{ id: 6, value: 'Multiline Review', type: true },
	{ id: 7, value: 'label', type: true },
	{ id: 8, value: 'label', type: true },
	{ id: 9, value: 'Park Bench', type: true },
	{ id: 10, value: 'Personal Visit', type: true },
	{ id: 11, value: 'Postcard', type: true },
	{ id: 12, value: 'Referral', type: true },
	{ id: 13, value: 'Salesperson Pilvot', type: true },
	{ id: 14, value: 'Sign', type: true },
	{ id: 15, value: 'Television', type: true },
	{ id: 16, value: 'Transfer', type: true },
	{ id: 17, value: 'Walk-In', type: true },
	{ id: 18, value: 'Website', type: true },
	{ id: 19, value: 'WebSearch', type: true },
	{ id: 20, value: 'Yellow Pages', type: true },
	{ id: 21, value: 'Other', type: true },
];

const header4 = [
	// {value:'GOALS', type:false, color:''},
	{value:'Intitial Item Bonuses', type:false, color:''},
	{value:'Individual Target Bonuses', type:false, color:''},
	{value:'Team Target Bonuses', type:true, color:''},
	{value:'Policy Growth Bonuses', type:false, color:''},
	{value:'Lapse Rate Bonuses', type:false, color:''},
	{value:'Special Promotion', type:false, color:''},
	{value:'TOTAL BONUSES', type:false, color:''},
]

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const production = useSelector(({ productionApp }) => productionApp.products.production);
	const period = useSelector(({ productionApp }) => productionApp.products.period);
	const widgets = useSelector(selectWidgets);
	const classes = useStyles(props);
	const pageLayout = useRef(null);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}		
			header={<MultilineHeader />}
			content={
				<div className="p-12">
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-1/4 p-12">
							<Table header={header1} widget={widgets.IndividualTable} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/4 p-12">
							<Chat widget={widgets.IndividualSalesGoalsChat} />
						</div>
						<div className="widget flex w-1/4 p-12">
							<Table header={header2} widget={widgets.AgencyTable} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/4 p-12">
							<Chat widget={widgets.TeamSalesGoalsChat} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-full p-12">
							<Table header={header3} widget={widgets.SourcesOfBonusesTable} entries fires lifes healthes />
						</div>					
					</FuseAnimateGroup>	
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-1/4 p-12">
							<PieChat widget={widgets.ProductPieChat} />
						</div>	
						<div className="widget flex w-2/4 p-12">
							<Table header={header4} widget={widgets.BonusesEarnedThisPeriodTable} entries fires lifes healthes />
						</div>	
						<div className="widget flex w-1/4 p-12">
							<PieChat widget={widgets.BonusPieChat} />
						</div>					
					</FuseAnimateGroup>					
				</div>
				
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('productionApp', reducer)(ProjectDashboardApp);
