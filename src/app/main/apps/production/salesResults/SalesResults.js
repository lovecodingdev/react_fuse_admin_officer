import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
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
import SalesResultsHeader from './SalesResultsHeader';
import Table from '../../../components/widgets/Table';
import Chat from '../../../components/widgets/Chart';

const writtenHeader = [
	{value:'WRITTEN', type:false, color:''},
	{value:'Auto Policies', type:true},
	{value:'Auto Premium', type:false},
	{value:'Fire Policies', type:true},
	{value:'Fire Premium', type:false},
	{value:'Life Policies', type:true},
	{value:'Life Premium', type:false},
	{value:'Health Policies', type:true},
	{value:'Health Premium', type:false},
	{value:'Bank Products', type:true},
	{value:'Bank Dollars', type:false},
	{value:'Total Products', type:true},
	{value:'Total Premium', type:false},
];
const issuedHeader = [
	{value:'ISSUED', type:false, color:''},
	{value:'Auto Policies', type:true},
	{value:'Auto Premium', type:false},
	{value:'Fire Policies', type:true},
	{value:'Fire Premium', type:false},
	{value:'Life Policies', type:true},
	{value:'Life Premium', type:false},
	{value:'Health Policies', type:true},
	{value:'Health Premium', type:false},
	{value:'Bank Products', type:true},
	{value:'Bank Dollars', type:false},
	{value:'Total Products', type:true},
	{value:'Total Premium', type:false},
];
const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
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
		<FusePageSimple
			classes={{
				header: 'min-h-80 h-80',
				rightSidebar: 'w-288',
				content: classes.content,
			}}
			header={<SalesResultsHeader />				}
			content={
				<div className="p-12">
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-2/3 p-12">
							<Table header={writtenHeader} widget={widgets.WrttenSalesResultsReportTable} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chat widget={widgets.WrttenSalesResultsReportChat} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-2/3 p-12">
							<Table header={issuedHeader} widget={widgets.IssuedSalesResultsReportTable} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chat widget={widgets.IssuedSalesResultsReportChat} />
						</div>
					</FuseAnimateGroup>
				</div>
				
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('productionApp', reducer)(ProjectDashboardApp);
