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
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../../components/widgets/TempTable';
import Chart from '../../components/widgets/BarChart';
import PieChart from '../../components/widgets/PieChart';
import SelectBox from '../../components/CustomSelectBox';
import Header from '../../components/widgets/Header';
import { getTracks, selectTracks, saveTrack } from './store/trackSlice';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import { toUntrimed, Options as options } from '../../utils/Globals';
import { swap } from '../../utils/Function';

export const tableHeaders = [
    {id: "in", value: 'In', type:false, color:''},
    {id: "out", value: 'Out', type:false, color:''},	
    {id: "lunch", value: 'Lunch', type:false, color:''},
    {id: "totalHrsWorked", value: 'Total Hrs Worked', type:false, color:''},
    {id: "regHrs", value: 'Reg. Hrs', type:false, color:''},
    {id: "proj1Hrs", value: 'Proj 1 Hrs', type:false, color:''},
    {id: "proj2Hrs", value: 'Proj 2 Hrs', type:false, color:''},
    {id: "proj3Hrs", value: 'Proj 3 Hrs', type:false, color:''},
    {id: "vacation", value: 'Vacation', type:false, color:''},
    {id: "v", value: 'V', type:false, color:''},
    {id: "sick", value: 'Sick', type:false, color:''},
    {id: "s", value: 'S', type:false, color:''},
    {id: "bereavement", value: 'Bereavement', type: false, color: '' },
    {id: "b", value: 'B', type: false, color: '' },
    {id: "holiday", value: 'Holiday', type: false, color: '' },
    {id: "totalHrs", value: 'Total Hrs', type: false, color: '' },
    {id: "notes", value: 'Notes', type: false, color: '' },
];

let tableContent = {};
for(let i = 0; i < 31; i ++) {
	const day = i + 1;
	tableContent[day] = {};
	tableHeaders.map((header) => {
		tableContent[day][header.value] = 0;
	});
}

function TimeTrack(props) {
	const dispatch = useDispatch();
	const tracks = useSelector(selectTracks);
	let widgets = useSelector(selectWidgets);
	const cell = useSelector(({ timeReportApp }) => timeReportApp.tracks.cell);	
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [month, setMonth] = useState("January");
	const [main, setMain] = useState({  });
	const [title, setTitle] = useState('Time Track');

	function onSave() {	
		const toTrimed = swap(toUntrimed);
		let temp = {}; 
		temp = { ...temp, id: month }
		Object.keys(tableContent).map((row) => {
			Object.keys(tableContent[row]).map((col) => {
				temp = { 
					...temp, [row]: { 
						...temp[row], [toTrimed[col]]: 
							tableContent[row][col] 
					} 
				} 
			});
		});
		dispatch(saveTrack({ Tracks: temp }));
	}

	useEffect(() => {
		dispatch(getTracks());
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => { 		
		if(widgets.Time_Track_Table ) {
			if(Object.keys(main).length > 0) {			
				widgets = { 
					...widgets, Time_Track_Table: { 
						...widgets.Time_Track_Table, table: {
							...widgets.Time_Track_Table.table, tableContent: 
								main.tableContent
						}						
					}
				};
			} 
			else {
				widgets = { 
					...widgets, Time_Track_Table: { 
						...widgets.Time_Track_Table, table: {
							...widgets.Time_Track_Table.table, headers: 
								tableHeaders
						}						
					}
				};
				widgets = { 
					...widgets, Time_Track_Table: { 
						...widgets.Time_Track_Table, table: {
							...widgets.Time_Track_Table.table, tableContent: 
								tableContent
						}						
					}
				};
			}
						
		}
		console.log('----widgets=', widgets)
		
		setData({ widgets });
	}, [widgets, main]);

	useEffect(() => { 	
		if(tracks.length > 0) {	
			Object.keys(tracks[0]).map((rowKey, row) => {
				if(rowKey!=="id") 
					Object.keys(tracks[0][rowKey]).map((colKey) => {										
						tableContent[rowKey][toUntrimed[colKey]] = tracks[0][rowKey][colKey];						
					});
			}); 	
		} 
		console.log('-----track', tableContent)
		setMain({ tableContent });
	}, [tracks]);

	useEffect(() => { 
		const tableName = cell.tableName;
		const row = cell.row;
		const col = cell.col;
		const rowKey = cell.rowKey;
		const colKey = cell.colKey;
		const value = parseFloat(cell.value === '' ? 0 : cell.value);
								
		tableContent = {
			...tableContent, [rowKey]: {
				...tableContent[rowKey], [colKey]:
					value
			}
		}
		 		
		setMain({ tableContent });
	}, [cell]);

	function handleChangeMonth(event) { 
		setMonth(event.target.value);
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
								value={month}
								onChange={ev => handleChangeMonth(ev)}
								label="Month"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>	
					<FuseAnimate animation="transition.slideRightIn" delay={300}>
						<Button
							component={Link}
							className="whitespace-nowrap normal-case"
							variant="contained"
							color="secondary"
							onClick={onSave}
						>
							<span className="hidden sm:flex">Save</span>
							<span className="flex sm:hidden">New</span>
						</Button>
					</FuseAnimate>
				</Header>
			}
			content={
				<div className="w-full flex flex-col p-12">				
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="TRACK" widget={data.widgets.Time_Track_Table} editable />
						</FuseAnimateGroup>
					</div>				
				</div>				
			}
			innerScroll
		/>		
	);
}

export default withReducer('timeReportApp', reducer)(TimeTrack);