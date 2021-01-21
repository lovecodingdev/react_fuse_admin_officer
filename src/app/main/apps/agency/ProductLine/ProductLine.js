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
import { autoHeader1, autoHeader2, autoHeader3, autoHeader4 } from './AutoHeader';
import { fireHeader1, fireHeader2, fireHeader3, fireHeader4 } from './FireHeader'; 
import { lifeHeader1, lifeHeader2, lifeHeader3, lifeHeader4 } from './LifeHeader';
import { healthHeader1, healthHeader2, healthHeader3, healthHeader4,  } from './HealthHeader';
import { bankHeader1, bankHeader2, bankHeader3, bankHeader4 } from './BankHeader';
import { otherHeader } from './OtherHeader';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
}));

function ProductLine(props) {
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
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Product Line');
	
	useEffect(() => {
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {	
		setData({ widgets });
	}, [ widgets]);

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
					<Tab className="h-64 normal-case" label="AUTO" />
					<Tab className="h-64 normal-case" label="FIRE" />
					<Tab className="h-64 normal-case" label="LIFE" />
					<Tab className="h-64 normal-case" label="HEALTH" />
					<Tab className="h-64 normal-case" label="BANK" />
					<Tab className="h-64 normal-case" label="OTHER" />
				</Tabs>
			}
			content={
				<div className="w-full p-12">					
					{tabValue === 0 && 					 
						<div>
							<div className='p-12'>
								<Table header={autoHeader1} widget={data.widgets.Agency_ProductLine_Auto_Table_1} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={autoHeader2} widget={data.widgets.Agency_ProductLine_Auto_Table_2} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Table header={autoHeader3} widget={data.widgets.Agency_ProductLine_Auto_Table_3} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={autoHeader4} widget={data.widgets.Agency_ProductLine_Auto_Table_4} entries fires lifes healthes />
							</div>
						</div>
					}				
					{tabValue === 1 && 
						<div>
							<div className='p-12'>
								<Table header={fireHeader1} widget={data.widgets.Agency_ProductLine_Auto_Table_1} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={fireHeader2} widget={data.widgets.Agency_ProductLine_Auto_Table_2} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Table header={fireHeader3} widget={data.widgets.Agency_ProductLine_Auto_Table_3} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={fireHeader4} widget={data.widgets.Agency_ProductLine_Auto_Table_4} entries fires lifes healthes />
							</div>	
						</div>
					}			
					{tabValue === 2 && 
						<div>
							<div className='p-12'>
								<Table header={lifeHeader1} widget={data.widgets.ProductLine_Life_Table_1} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={lifeHeader2} widget={data.widgets.ProductLine_Life_Table_2} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Table header={lifeHeader3} widget={data.widgets.Agency_ProductLine_Auto_Table_3} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={lifeHeader4} widget={data.widgets.Agency_ProductLine_Auto_Table_4} entries fires lifes healthes />
							</div>
						</div>
					}	
					{tabValue === 3 && 
						<div>
							<div className='p-12'>
								<Table header={healthHeader1} widget={data.widgets.ProductLine_Life_Table_1} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={healthHeader2} widget={data.widgets.ProductLine_Life_Table_2} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Table header={healthHeader3} widget={data.widgets.Agency_ProductLine_Auto_Table_3} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={healthHeader4} widget={data.widgets.Agency_ProductLine_Auto_Table_4} entries fires lifes healthes />
							</div>	
						</div>
					}	
					{tabValue === 4 && 
						<div>
							<div className='p-12'>
								<Table header={bankHeader1} widget={data.widgets.ProductLine_Bank_Table_1} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={bankHeader2} widget={data.widgets.ProductLine_Bank_Table_2} entries fires lifes healthes />
							</div>	
							<div className='p-12'>
								<Table header={bankHeader3} widget={data.widgets.ProductLine_Bank_Table_3} entries fires lifes healthes />
							</div>
							<div className='p-12'>
								<Table header={bankHeader4} widget={data.widgets.ProductLine_Bank_Table_4} entries fires lifes healthes />
							</div>	
						</div>
					}	
					{tabValue === 5 && 
						<div>
							<div className='p-12'>
								<Table header={otherHeader} widget={data.widgets.ProductLine_Other_Table} entries fires lifes healthes />
							</div>
						</div>
					}	
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(ProductLine);
