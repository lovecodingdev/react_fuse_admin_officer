import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from '../store';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import Table from '../../../components/widgets/Table';
import Chat from '../../../components/widgets/Chart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { setProduction, setPeriod } from '../store/productsSlice';

const agencyGoalsHeader = [
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
];
const otherActivitiesHeader = [
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
	{value:'Goals', type:true},
	{value:'Actual', type:false},
];
const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function GoalsAndActual(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ producerApp }) => producerApp.products.production);
	const period = useSelector(({ producerApp }) => producerApp.products.period);
	const [title, setTitle] = useState('Goals & Actual');
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
			header={
				<Header title={title}>
					<div className="flex flex-1 items-center justify-center px-12 w-40">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={period}
								onChange={ev => dispatch(setPeriod(ev))}
								type="period"
							/>
						</FuseAnimate>
					</div>
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={production}
								onChange={ev => dispatch(setProduction(ev))}
								type="production"
							/>
						</FuseAnimate>
					</div>
				</Header>
			}
			content={
				<div className="p-12">
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-2/3 p-12">
							<Table header={agencyGoalsHeader} widget={widgets.Producer_GoalsAndActual_AgencyGoals_Table} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chat widget={widgets.Producer_GoalsAndActual_SalesGoals_Chart} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup
						className="flex flex-wrap"
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
					>
						<div className="widget flex w-2/3 p-12">
							<Table header={otherActivitiesHeader} widget={widgets.Producer_GoalsAndActual_OtherActivities_Table} entries fires lifes healthes />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chat widget={widgets.Producer_GoalsAndActual_ActivityGoals_Chart} />
						</div>
					</FuseAnimateGroup>
				</div>
				
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('producerApp', reducer)(GoalsAndActual);
