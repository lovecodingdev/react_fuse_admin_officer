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
import Table from '../../components/widgets/TempTable';
import Chart from '../../components/widgets/BarChart';
import PieChart from '../../components/widgets/PieChart';
import SelectBox from '../../components/CustomSelectBox';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import Header from '../../components/widgets/Header';
import { Options as options } from '../../utils/Globals';

function TimeReport(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [period, setPeriod] = useState("January");
	const [production, setProduction] = useState("Show Written Production");
	const [title, setTitle] = useState('Time Report');
	
	useEffect(() => {
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {	
		setData({  widgets });
	}, [ widgets]);

	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
	}

	function handleChangeProduction(event) {
		setProduction(event.target.value);
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
								onChange={ev => handleChangeProduction(ev)}
								label="Production"
								data={options.production.data}
							/>
						</FuseAnimate>
					</div>
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={period}
								onChange={ev => handleChangePeriod(ev)}
								label="Report Period"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>				
				</Header>
			}
			content={
				<div className="w-full p-12">
					<div className="p-12">
						<Table widget={data.widgets.Time_Report_Table} />
					</div>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('timeReportApp', reducer)(TimeReport);
