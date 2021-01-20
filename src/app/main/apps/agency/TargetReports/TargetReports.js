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
import { setProduction, setPeriod, setUser, setReport } from '../store/productsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { autoAndFireHeader, lifeAndHealthHeader, bankHeader } from '../Headers';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function PoliciesAndBank(props) {
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
	const [title, setTitle] = useState('Policies & Bank');
	
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
					<Tab className="h-64 normal-case" label="POLICIES" />
					<Tab className="h-64 normal-case" label="PREMIUM" />
					<Tab className="h-64 normal-case" label="AVERAGES" />
					<Tab className="h-64 normal-case" label="BANK" />					
				</Tabs>
			}
			content={
				<div className="w-full">					
					{tabValue === 0 && 
						<div>
							<div className='pb-24'>
								<Table header={autoAndFireHeader} widget={widgets.Producer_PoliciesAndBank_AutoAndFire_Table} entries fires lifes healthes />
							</div>	
							<div className='pb-24'>
								<Table header={lifeAndHealthHeader} widget={widgets.Producer_PoliciesAndBank_LifeAndHealth_Table} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Chart widget={widgets.Producer_PolicesAndBank_Premium_Chart} />
							</div>							
						</div>
					}				
					{tabValue === 1 && 
						<div>
							<div className='pb-24'>
								<Table header={autoAndFireHeader} widget={widgets.Producer_PoliciesAndBank_AutoAndFire_Table} entries fires lifes healthes />
							</div>	
							<div className='pb-24'>
								<Table header={lifeAndHealthHeader} widget={widgets.Producer_PoliciesAndBank_LifeAndHealth_Table} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Chart widget={widgets.Producer_PolicesAndBank_Premium_Chart} />
							</div>	
						</div>
					}			
					{tabValue === 2 && 
						<div>
							<div className='pb-24'>
								<Table header={autoAndFireHeader} widget={widgets.Producer_PoliciesAndBank_AutoAndFire_Table} entries fires lifes healthes />
							</div>	
							<div className='pb-24'>
								<Table header={lifeAndHealthHeader} widget={widgets.Producer_PoliciesAndBank_LifeAndHealth_Table} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Chart widget={widgets.Producer_PolicesAndBank_Premium_Chart} />
							</div>	
						</div>
					}	
					{tabValue === 3 && 
						<div>							
							<div className='pb-24'>
								<Table header={bankHeader} widget={widgets.Producer_PoliciesAndBank_Bank_Table} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Chart widget={widgets.Producer_PolicesAndBank_Bank_Chart} />
							</div>	
						</div>
					}						
				</div>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('producerApp', reducer)(PoliciesAndBank);
