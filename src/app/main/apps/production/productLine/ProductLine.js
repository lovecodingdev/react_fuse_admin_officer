import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from '../store';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import Table from '../../../components/widgets/Table';
import ProductLineHeader from './ProductLineHeader';
import { autoHeader1, autoHeader2, autoHeader3, autoHeader4 } from './Headers';

function ProductLine(props) {
	const dispatch = useDispatch();
	const production = useSelector(({ productionApp }) => productionApp.products.production);
	const widgets = useSelector(selectWidgets);
	const [tabValue, setTabValue] = useState(0);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(widgets);
	
	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	useEffect(() => {		
		setLoading(false);
		setData(widgets);
	}, [widgets]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	if (_.isEmpty(widgets)) {
		return null;
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
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<ProductLineHeader />}
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
				<div className="w-full">					
					{tabValue === 0 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
							<div className='pb-24'>
								<Table header={autoHeader3} widget={widgets.productionLineTable3} entries fires lifes healthes />
							</div>
							<div className='pb-24'>
								<Table header={autoHeader4} widget={widgets.productionLineTable4} entries fires lifes healthes />
							</div>
						</div>
					}				
					{tabValue === 1 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div>	
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
						</div>
					}			
					{tabValue === 2 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div>	
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
						</div>
					}	
					{tabValue === 3 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div>	
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
						</div>
					}	
					{tabValue === 4 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div>	
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
						</div>
					}	
					{tabValue === 5 && 
						<div>
							<div className='pb-24'>
								<Table header={autoHeader1} widget={widgets.productionLineTable1} entries fires lifes healthes />
							</div>
							<div>	
								<Table header={autoHeader2} widget={widgets.productionLineTable2} entries fires lifes healthes />
							</div>	
						</div>
					}	
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('productionApp', reducer)(ProductLine);
