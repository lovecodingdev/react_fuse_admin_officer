import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { selectProjects, getProjects } from './store/lapseSlice';
import { getAutoBonus, selectContacts } from './store/bonusPlanSlice';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import {
	rows,
	columns,
	percentrows,
	levelRows,
	numberrows,
	houseHoldColumns,
	householdRows
} from './tableDataTemplate';
import Widget10 from './widgets/Widget10';
import Widget5 from './widgets/Widget5';

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const projects = useSelector(selectProjects);
	const contacts = useSelector(selectContacts);
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const [tabValue, setTabValue] = useState(0);
	const [selectedProject, setSelectedProject] = useState({
		id: 1,
		menuEl: null
	});
	const [state, setState] = useState({
		autoRows: rows,
		numberRows: numberrows,
		percentRows: percentrows,
		householdRows: householdRows,

		monthlyAgencyLapseAutoBonus: [],
		monthlyAgencyLapseFireBonus: []
	});

	useEffect(() => {
		dispatch(getWidgets());
		dispatch(getProjects());
		dispatch(getAutoBonus());
	}, [dispatch]);

	useEffect(() => {
		let tempJSON = {
			monthlyAgencyLapseAutoBonus: [],
			monthlyAgencyLapseFireBonus: []
		};
		console.log(contacts);
		if (contacts.length > 0) {
			Object.keys(contacts[0]).map((item, index) => {
				if (item.includes('monthlyAgencyLapseAutoBonus')) {
					const tempData = [];
					Object.keys(contacts[0].monthlyAgencyLapseAutoBonus).map(i => {
						tempData.push(contacts[0]['monthlyAgencyLapseAutoBonus'][i]);
					});
					tempJSON = { ...tempJSON, monthlyAgencyLapseAutoBonus: tempData };
				} else if (item.includes('monthlyAgencyLapseFireBonus')) {
					const tempData = [];
					Object.keys(contacts[0].monthlyAgencyLapseFireBonus).map(i => {
						tempData.push(contacts[0]['monthlyAgencyLapseFireBonus'][i]);
					});
					tempJSON = { ...tempJSON, monthlyAgencyLapseFireBonus: tempData };
				}
			});
			setState({ ...state, ...tempJSON });
		}
	}, [contacts]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChangeProject(id) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	function handleOpenProjectMenu(event) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
	}

	function handleChangeValue(value, month, field, title) {
		if (title === 'Policy Count') {
			let total =
				parseFloat((field==='auto'?value:state.autoRows[month].auto.value)||0) +
				parseFloat((field==='fire'?value:state.autoRows[month].fire.value)||0) +
				parseFloat((field==='life'?value:state.autoRows[month].life.value)||0) +
				parseFloat((field==='health'?value:state.autoRows[month].health.value)||0);
			let temp = {
				...state.autoRows,
				[month]: {
					...state.autoRows[month],
					[field]: { ...state.autoRows[month][field], value: value },
					total: { ...state.autoRows[month].total, value: total }
				}
			};		
			
			setState({ ...state, autoRows: temp, numberRows:temp, percentRows:temp });
		}
	}
	// return null;
	if (_.isEmpty(widgets) || _.isEmpty(projects)) {
		return null;
	}

	return (
		<FusePageSimple
			classes={{
				header: 'min-h-80 h-80',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex items-center px-24">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">align_vertical_bottom</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
							Team Policy Growth Report
						</Typography>
					</FuseAnimate>
				</div>
			}
			content={
				<div className="p-12">
					{tabValue === 0 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full p-12">
								<div className="widget flex w-1/3 p-12">
									<Widget10
										columns={columns}
										rows={state.autoRows}
										title="Policy Count"
										handleChangeValue={handleChangeValue}
									/>
								</div>
								<div className="widget flex w-1/3 p-12">
									<Widget10
										columns={columns}
										rows={state.numberRows}
										title="Number Change"
										handleChangeValue={handleChangeValue}
									/>
								</div>
								<div className="widget flex w-1/3 p-12">
									<Widget10
										columns={columns}
										rows={state.percentRows}
										title="Percent Change"
										handleChangeValue={handleChangeValue}
									/>
								</div>
							</div>

							<div className="widget flex w-full p-12">
								<div className="widget flex w-1/3 p-12">
									<Widget10
										columns={houseHoldColumns}
										rows={state.householdRows}
										title="Policies per Household"
										handleChangeValue={handleChangeValue}
									/>
								</div>
								<div className="widget flex w-2/3 p-12">
									<Widget5 widget={widgets.widget5} />
								</div>
							</div>
						</FuseAnimateGroup>
					)}
				</div>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('policyGrowthReport', reducer)(ProjectDashboardApp);
