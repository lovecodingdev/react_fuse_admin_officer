import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { selectProjects, getProjects } from './store/lapseSlice';
import { getAutoBonus, selectContacts } from './store/bonusPlanSlice';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import { rows, columns, levelColumns, firerows } from './tableDataTemplate';
import Widget10 from './widgets/Widget10';
import TargetTable from './widgets/TargetTable';
import {saveLapseRate, saveFireLapseRate} from './store/lapseSlice'

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

let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const projects = useSelector(selectProjects);
	console.log(projects)
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
		fireRows: firerows,
		monthlyAgencyLapseAutoBonus: [],
		monthlyAgencyLapseFireBonus: []
	});

	useEffect(() => {
		dispatch(getWidgets());
		dispatch(getProjects());
		dispatch(getAutoBonus());
	}, [dispatch]);

	useEffect(()=>{
		if(projects.length>0){
			console.log(projects[0])
			// setState({...state,autoRows:{...projects[0]}, fireRows:{...projects[1]}})
		}
		
	},[projects])

	useEffect(() => {
		let tempJSON = {
			monthlyAgencyLapseAutoBonus: [],
			monthlyAgencyLapseFireBonus: []
		};

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

	function handleChangeValue(value, month, field, title) {
		if (title === 'Auto') {
			let monthIndex = months.indexOf(month);
			let previousMonthValue = '-';
			let nextMonthValue = '-';
			if (monthIndex !== 0) {
				previousMonthValue =
					Math.round(
						(parseFloat(value) - parseFloat(state.autoRows[months[monthIndex - 1]].lapseRate.value || 0)) *
							100
					) / 100;
				if (parseFloat(state.autoRows[months[monthIndex + 1]].lapseRate.value || 0) !== 0) {
					nextMonthValue =
						Math.round(
							(parseFloat(state.autoRows[months[monthIndex + 1]].lapseRate.value || 0) -
								parseFloat(value)) *
								100
						) / 100;
				} else {
					nextMonthValue = '-';
				}
			}
			let temp = {
				...state.autoRows,
				[month]: {
					...state.autoRows[month],
					[field]: { ...state.autoRows[month][field], value: value },
					level: { ...state.autoRows[month].level, value: 'none' },
					previousMonth: { ...state.autoRows[month].previousMonth, value: previousMonthValue }
				},
				[months[monthIndex + 1]]: {
					...state.autoRows[months[monthIndex + 1]],
					previousMonth: {
						...state.autoRows[months[monthIndex + 1]].previousMonth,
						value: nextMonthValue
					}
				}
			};

			if (contacts.length > 0) {
				Object.keys(contacts[0]).map((item, index) => {
					if (item.includes('monthlyAgencyLapseAutoBonus')) {
						Object.keys(contacts[0].monthlyAgencyLapseAutoBonus).map(i => {
							if (
								parseFloat(contacts[0]['monthlyAgencyLapseAutoBonus'][i].percent) === parseFloat(value)
							) {
								temp = {
									...state.autoRows,
									[month]: {
										...state.autoRows[month],
										level: {
											...state.autoRows[month].level,
											value: contacts[0]['monthlyAgencyLapseAutoBonus'][i].name
										},
										[field]: { ...state.autoRows[month][field], value: value },
										previousMonth: {
											...state.autoRows[month].previousMonth,
											value: previousMonthValue
										}
									},
									[months[monthIndex + 1]]: {
										...state.autoRows[months[monthIndex + 1]],
										previousMonth: {
											...state.autoRows[months[monthIndex + 1]].previousMonth,
											value: nextMonthValue
										}
									}
								};
							}
						});
					}
				});
			}
			console.log(temp)
			dispatch(saveLapseRate(temp))
			setState({ ...state, autoRows: temp });
		} else {
			let monthIndex = months.indexOf(month);
			let previousMonthValue = '-';
			let nextMonthValue = '-';
			if (monthIndex !== 0) {
				previousMonthValue =
					Math.round(
						(parseFloat(value) - parseFloat(state.fireRows[months[monthIndex - 1]].lapseRate.value || 0)) *
							100
					) / 100;
				if (parseFloat(state.fireRows[months[monthIndex + 1]].lapseRate.value || 0) !== 0) {
					nextMonthValue =
						Math.round(
							(parseFloat(state.fireRows[months[monthIndex + 1]].lapseRate.value || 0) -
								parseFloat(value)) *
								100
						) / 100;
				} else {
					nextMonthValue = '-';
				}
			}
			let temp = {
				...state.fireRows,
				[month]: {
					...state.fireRows[month],
					[field]: { ...state.fireRows[month][field], value: value },
					level: { ...state.fireRows[month].level, value: 'none' },
					previousMonth: { ...state.fireRows[month].previousMonth, value: previousMonthValue }
				},
				[months[monthIndex + 1]]: {
					...state.fireRows[months[monthIndex + 1]],
					previousMonth: {
						...state.fireRows[months[monthIndex + 1]].previousMonth,
						value: nextMonthValue
					}
				}
			};
			if (contacts.length > 0) {
				Object.keys(contacts[0]).map((item, index) => {
					if (item.includes('monthlyAgencyLapseFireBonus')) {
						Object.keys(contacts[0].monthlyAgencyLapseFireBonus).map(i => {
							if (
								parseFloat(contacts[0]['monthlyAgencyLapseFireBonus'][i].percent) === parseFloat(value)
							) {
								temp = {
									...state.fireRows,
									[month]: {
										...state.fireRows[month],
										level: {
											...state.fireRows[month].level,
											value: contacts[0]['monthlyAgencyLapseFireBonus'][i].name
										},
										[field]: { ...state.fireRows[month][field], value: value },
										previousMonth: {
											...state.fireRows[month].previousMonth,
											value: previousMonthValue
										}
									},
									[months[monthIndex + 1]]: {
										...state.fireRows[months[monthIndex + 1]],
										previousMonth: {
											...state.fireRows[months[monthIndex + 1]].previousMonth,
											value: nextMonthValue
										}
									}
								};
							}
						});
					}
				});
			}
			dispatch(saveFireLapseRate(temp))
			setState({ ...state, fireRows: temp });
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
						<Icon className="text-32">local_activity</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
							Lapse Rate Report
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
							{console.log(state.autoRows)}
							<div className="widget flex w-full p-12">
								<div className="widget flex w-1/2 p-12">
									<Widget10
										columns={columns}
										rows={state.autoRows}
										title="Auto"
										handleChangeValue={handleChangeValue}
									/>
								</div>
								<div className="widget flex w-1/2 p-12">
									<Widget10
										columns={columns}
										rows={state.fireRows}
										title="Fire"
										handleChangeValue={handleChangeValue}
									/>
								</div>
							</div>

							<div className="widget flex w-full p-12">
								{console.log(state.monthlyAgencyLapseAutoBonus)}
								<div className="widget flex w-1/2 p-12">
									<TargetTable
										columns={levelColumns}
										rows={state.monthlyAgencyLapseAutoBonus}
										title="Target Levels & Bonus Schedule"
									/>
								</div>
								<div className="widget flex w-1/2 p-12">
									<TargetTable
										columns={levelColumns}
										rows={state.monthlyAgencyLapseFireBonus}
										title="Target Levels & Bonus Schedule"
									/>
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

export default withReducer('lapseRate', reducer)(ProjectDashboardApp);
