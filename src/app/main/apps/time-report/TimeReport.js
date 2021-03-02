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
import reducer from './store';
import Table from './Table';
import Chart from '../../components/widgets/BarChart';
import PieChart from '../../components/widgets/PieChart';
import SelectBox from '../../components/CustomSelectBox';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import { setProduction, setPeriod, setUser, setReport } from './store/productsSlice';
import { getUsers, selectUsers } from './store/usersSlice';
import Header from './Headers';
import { Options as options } from '../../utils/Globals';

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

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function TimeReport(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const users = useSelector(selectUsers);
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ timeReport }) => timeReport.products.production);
	const period = useSelector(({ timeReport }) => timeReport.products.period);	
	const report = useSelector(({ timeReport }) => timeReport.products.report);
	const user = useSelector(({ timeReport }) => timeReport.products.user);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Time Report');
	
	useEffect(() => {
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {	
		setData({  widgets });
	}, [ widgets]);

	
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
								value={period}
								onChange={ev => dispatch(setPeriod(ev))}
								type="period"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>	
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => dispatch(setUser(ev))}
								type="users"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>					
				</Header>
			}
			content={
				<div className="w-full p-12">
					<div className="p-12">
						<Table header={agencyGoalsHeader} leftHeader={data.users} widget={widgets.Agency_Payroll_Table} entries fires lifes healthes />
					</div>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('timeReport', reducer)(TimeReport);