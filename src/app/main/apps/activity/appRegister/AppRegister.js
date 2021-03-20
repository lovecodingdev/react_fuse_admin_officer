import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
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
import SpecialTable from '../../../components/widgets/SpecialTable';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { formattedDate } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function AppRegister(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [main, setMain] = useState({});
	const [title, setTitle] = useState('PRODUCER APPS REPORT');

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getEntries());
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
		let temp = [];		
		if(entries.length>0 && users.length>0) {
			const entryNames = {
				"Entries": "Auto", 
				"FireEntries": "Fire", 
				"LifeEntries": "Life", 
				"HealthEntries": "Health", 
				"BankEntries": "Bank", 
				"OtherEntries": "Other"
			};

			let i = 0;
			Object.keys(entries[0]).map((entryName) => {
				users.map(user => {	
					if(user.belongTo === UID) {
						if(entries[0][entryName].hasOwnProperty(user.id)) { 
							Object.keys(entries[0][entryName][user.id]).map((key, rowNum) => {
								const item = entries[0][entryName][user.id][key];
								const issuedMonth = item.datePolicyIsIssued==='' ? '' : (new Date(item.datePolicyIsIssued)).getMonth() + 1;
								const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth() + 1; 
								temp[i] = {};
								// temp[i]["No"] = rowNum + 1;
								temp[i]["Client Name"] = item.policyHolderName;
								temp[i]["Policy(Tracking) Number or Description"] = item.policyInformation;
								temp[i]["Date Product Is Written"] = formattedDate(new Date(item.datePolicyIsWritten));
								temp[i]["Date Product Is Issued"] = formattedDate(new Date(item.datePolicyIsIssued));
								temp[i]["Product Line"] = entryNames[entryName];
								temp[i]["Product Type"] = item["typeOfProduct"];
								temp[i]["Source of Business"] = item["sourceOfBusiness"];
								temp[i]["Product Dollars"] = item["policyPremium"];
								temp[i]["Bonus"] = item["dollarBonus"];
								temp[i]["Month Written"] = writtenMonth;
								temp[i]["Month Issued"] = issuedMonth;
								i ++;													
							});
						}
					}
				});
			});		
		}

		console.log('--------------------temp=', temp)
		setMain(temp)
	}, [entries, users]);

	useEffect(() => {	
		if(widgets.Activity_AppRegister_Table && main.length>0) {
			let rows = [];
			main.map((item, n) => {
				rows.push(
					{ id: n+1, value: n+1, color: "" },
				);				
				Object.keys(item).map((key) => {
					widgets = {
						...widgets, Activity_AppRegister_Table: {
							...widgets.Activity_AppRegister_Table, table: {
								...widgets.Activity_AppRegister_Table.table, tableContent: {
									...widgets.Activity_AppRegister_Table.table.tableContent, [n+1]: {
										...widgets.Activity_AppRegister_Table.table.tableContent[n+1], [key]:
											item[key]
									}
								}
							}
						}
					}
				});
			});	
			widgets = {
				...widgets, Activity_AppRegister_Table: {
					...widgets.Activity_AppRegister_Table, table: {
						...widgets.Activity_AppRegister_Table.table, rows: 
							rows							
					}
				}
			}			
		}

		console.log('-----Widgets=', widgets)
		setData({ widgets });
	}, [widgets, main]);

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
				<Header title={title} />				
			}
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex p-12">
							<Table data={data.widgets.Activity_AppRegister_Table} sortable />
						</div>						
					</FuseAnimateGroup>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('activityApp', reducer)(AppRegister);
