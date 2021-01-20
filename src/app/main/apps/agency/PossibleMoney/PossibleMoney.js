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
import Chart from '../../../components/widgets/Chart';
import PieChart from '../../../components/widgets/PieChart';
import Widget10 from '../../../components/widgets/Widget10';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { setProduction, setPeriod, setUser, setReport, setBonus } from '../store/productsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { autoAndFireHeader, lifeAndHealthHeader, bankHeader } from '../Headers';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function PossibleMoney(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const users = useSelector(selectUsers);
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ agencyApp }) => agencyApp.products.production);
	const period = useSelector(({ agencyApp }) => agencyApp.products.period);	
	const report = useSelector(({ agencyApp }) => agencyApp.products.report);
	const user = useSelector(({ agencyApp }) => agencyApp.products.user);
	const bonus = useSelector(({ agencyApp }) => agencyApp.products.bonus);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Possible Money');
	
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
								value={bonus}
								onChange={ev => dispatch(setBonus(ev))}
								type="bonus"
							/>
						</FuseAnimate>
					</div>
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => dispatch(setUser(ev))}
								type="users"
							/>
						</FuseAnimate>
					</div>
				</Header>
			}
			content={
				<div className="p-12">	
					<div className='flex items-center justify-center p-12'>
						<FuseAnimateGroup className="flex flex-wrap w-1/2" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Chart widget={widgets.Agency_PossibleMoney_Chart} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.widget10} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.widget10} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.widget10} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.widget10} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Widget10 widget={widgets.widget10} />						
						</FuseAnimateGroup>	
					</div>	
				</div>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('agencyApp', reducer)(PossibleMoney);