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
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { setProduction, setPeriod, setUser, setReport, setProduct } from '../store/productsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { Agency_Sources_ViewYearTotalsByProduct_Table, Agency_Sources_ViewMonthlyTotals_Table } from '../Headers';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function Sources(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const users = useSelector(selectUsers);
	const widgets = useSelector(selectWidgets);
	const production = useSelector(({ agencyApp }) => agencyApp.products.production);
	const period = useSelector(({ agencyApp }) => agencyApp.products.period);	
	const report = useSelector(({ agencyApp }) => agencyApp.products.report);
	const product = useSelector(({ agencyApp }) => agencyApp.products.product);
	const user = useSelector(({ agencyApp }) => agencyApp.products.user);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Sources');
	
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
									value={product}
									onChange={ev => dispatch(setProduct(ev))}
									type="product"
								/>
							</FuseAnimate>
						</div>	
					}	
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
					<Tab className="h-64 normal-case" label="View Year Total by Product" />
					<Tab className="h-64 normal-case" label="View Monthly Totals" />									
				</Tabs>
			}
			content={
				<div className="p-12">
					{tabValue === 0 &&
						<div>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-2/3 p-12">
									<Chart widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_Chart} />
								</div>	
								<div className="widget flex w-1/3 p-12">
									<PieChart widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_PieChart} />
								</div>				
							</FuseAnimateGroup>	
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>	
								<div className='widget flex w-full p-12'>
									<Table header={Agency_Sources_ViewYearTotalsByProduct_Table} widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_Table} entries fires lifes healthes />
								</div>	
							</FuseAnimateGroup>	
						</div>
					}	
					{tabValue === 1 && 
						<div>							
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="widget flex w-2/3 p-12">
									<Chart widget={data.widgets.Agency_Sources_ViewYearTotalsByProduct_Chart} />
								</div>	
								<div className="widget flex w-1/3 p-12">
									<Table header={Agency_Sources_ViewMonthlyTotals_Table} widget={data.widgets.Agency_Sources_ViewMonthlyTotals_Table} entries fires lifes healthes />
								</div>				
							</FuseAnimateGroup>	
						</div>
					}				
				</div>
				
			}
			// innerScroll
			ref={pageLayout}
		/>
	);
}

export default withReducer('agencyApp', reducer)(Sources);