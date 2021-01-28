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
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { setProduction, setPeriod, setUser, setReport } from '../store/productsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { StaffSources_Header, ViewGrid_Header } from '../Headers';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function StaffSources(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const users = useSelector(selectUsers);
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ producerApp }) => producerApp.products.production);
	const period = useSelector(({ producerApp }) => producerApp.products.period);	
	const report = useSelector(({ producerApp }) => producerApp.products.report);
	const user = useSelector(({ producerApp }) => producerApp.products.user);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Staff Sources');
	
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
				<Header title={title}>
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={production}
								onChange={ev => dispatch(setProduction(ev))}
								type="production"
							/>
						</FuseAnimate>
					</div>
					{tabValue === 0 &&
						<div className="flex flex-1 items-center justify-center px-12 w-40">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<SelectBox
									value={period}
									onChange={ev => dispatch(setPeriod(ev))}
									type="period"
								/>
							</FuseAnimate>
						</div>	
					}	
					{tabValue === 1 &&
						<div className="flex flex-1 items-center justify-center px-12 w-40">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<SelectBox
									value={user}
									onChange={ev => dispatch(setUser(ev))}
									type="users"
								/>
							</FuseAnimate>
						</div>	
					}				
				</Header>
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="VIEW THE CHART" />
					<Tab className="h-64 normal-case" label="VIEW THE GRID" />									
				</Tabs>
			}
			content={
				<div className="w-full p-12">
					{tabValue === 0 &&
						<div>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-full p-12">
									<Chart widget={widgets.Producer_StaffSources_SourcesOfBusiness_Chart} />
								</div>						
							</FuseAnimateGroup>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_Auto_Table} entries fires lifes healthes />
								</div>	
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_Fire_Table} entries fires lifes healthes />
								</div>	
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_Life_Table} entries fires lifes healthes />
								</div>
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_Health_Table} entries fires lifes healthes />
								</div>
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_Bank_Table} entries fires lifes healthes />
								</div>
								<div className="widget flex w-full p-12">
									<Table header={StaffSources_Header} widget={widgets.Producer_StaffSources_All_Table} entries fires lifes healthes />
								</div>					
							</FuseAnimateGroup>
						</div>
					}	
					{tabValue === 1 && 
						<div>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-2/4 p-12">
									<PieChart widget={widgets.Producer_StaffSources_ProductSales_PieChart} />
								</div>	
								<div className="widget flex w-2/4 p-12">
									<PieChart widget={widgets.Producer_StaffSources_Production_PieChart} />
								</div>				
							</FuseAnimateGroup>	
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>	
								<div className='widget flex w-full p-12'>
									<Table header={ViewGrid_Header} widget={widgets.Producer_StaffSources_ViewGrid_Table} entries fires lifes healthes />
								</div>	
							</FuseAnimateGroup>	
						</div>
					}				
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('producerApp', reducer)(StaffSources);
