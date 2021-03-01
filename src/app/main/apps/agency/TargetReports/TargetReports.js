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
import Widget10 from '../../../components/widgets/SpecialTable';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { setProduction, setPeriod, setUser, setReport } from '../store/productsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { Agency_TargetReports_Table } from '../Headers';
import { Options as options } from '../../../utils/Globals';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function TargetReports(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const users = useSelector(selectUsers);
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ agencyApp }) => agencyApp.products.production);
	const period = useSelector(({ agencyApp }) => agencyApp.products.period);	
	const report = useSelector(({ agencyApp }) => agencyApp.products.report);
	const user = useSelector(({ agencyApp }) => agencyApp.products.user);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [userList, setUserList] = useState([]);
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Target Reports');
	
	useEffect(() => {
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {	
		setData({ widgets });
	}, [widgets]);

	useEffect(() => {
		var temp = [];
		if (users.length > 0) {
			users.map(item => {
				temp.push({ item: item.data.displayName, value: item.id });
			});
			setUserList(temp);
		}
	}, [users]);

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
				<Header title={title}>
					<div className="flex flex-1 items-center justify-center px-12 w-40">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => dispatch(setUser(ev))}
								label="Users"
								data={userList}
							/>
						</FuseAnimate>
					</div>					
				</Header>
			}
			content={
				<div className="w-full p-12">	
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.Agency_TargetReports_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.Agency_TargetReports_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.Agency_TargetReports_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.Agency_TargetReports_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.Agency_TargetReports_Table} />						
						</FuseAnimateGroup>	
					</div>	
				</div>			
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(TargetReports);
