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
import { Producer_StaffMultiline_Ratios_Table, Producer_StaffMultiline_Summary_Table } from '../Headers';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function StaffMultiline(props) {
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
	const [title, setTitle] = useState('Staff Multiline');
	
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
					{tabValue === 0 &&
						<div className="flex flex-1 items-center justify-center px-12">
							<FuseAnimate animation="transition.slideUpIn" delay={300}>
								<SelectBox
									value={report}
									onChange={ev => dispatch(setReport(ev))}
									type="report"
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
					<Tab className="h-64 normal-case" label="RATIOS" />
					<Tab className="h-64 normal-case" label="SUMMARY" />									
				</Tabs>
			}
			content={
				<div className="w-full p-12">					
					{tabValue === 0 && 
						<div>
							<div className='p-12'>
								<Table header={Producer_StaffMultiline_Ratios_Table} widget={widgets.Producer_StaffMultiline_Ratios_Table} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Chart widget={widgets.StaffMultiline_Ratios_Policies_Chart} />
							</div>
							<div className='p-12'>
								<Chart widget={widgets.StaffMultiline_Ratios_Producer_Chart} />
							</div>							
						</div>
					}				
					{tabValue === 1 &&  
						<div>
							<div className='p-12'>
								<Chart widget={widgets.Producer_StaffMultiline_Summary_Chart_1} />
							</div>
							<div className='p-12'>
								<Chart widget={widgets.Producer_StaffMultiline_Summary_Chart_2} />
							</div>	
							<div className='p-12'>
								<Table header={Producer_StaffMultiline_Summary_Table} widget={widgets.Producer_StaffMultiline_Summary_Table} entries fires lifes healthes />
							</div>	
						</div>
					}													
				</div> 
			}
			innerScroll
		/>
	);
}

export default withReducer('producerApp', reducer)(StaffMultiline);
