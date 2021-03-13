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
import Table from '../../../components/widgets/SpecialTable';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision } from '../store/visionSlice';
import { policiesAndPremium1, monthsAndQuarters, colors, bonusPlanDbNames, policies, months, Options as options } from '../../../utils/Globals';
import { ceil, dividing } from '../../../utils/Function';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');

function TargetReports(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	// const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	// const vision = useSelector(selectVision);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [user, setUser] = useState('');
	const [production, setProduction] = useState("Show Written Production");
	const [userList, setUserList] = useState([])
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Product Line');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		// dispatch(getMarketings());
		dispatch(getEntries());	
		// dispatch(getVision());	
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		// creating temp
		if(users.length>0 && entries.length>0 && bonusPlans.length>0) {
			let temp = {};	
			const visionNames = {
				"Auto": "autoPolicies",
				"Fire": "firePolicies",
				"Life": "lifePolicies",
				"Health": "healthPolicies",
				"Bank": "bankProducts",
				"Totals": "totalProducts",
			};	
			options.production.data.map((pro) => {
				temp[pro.value] = {};
				monthsAndQuarters.map((month) => {				
					temp[pro.value][month.value] = {};
					users.map((user) => {
						// let userOptions = { id: 'Users', data: [] };
						// userOptions.data.push({ 
						// 	item: user.data.displayName, 
						// 	value: user.data.displayName 
						// });

						temp[pro.value][month.value][user.data.displayName] = {};
						policies.map((policy) => {
							temp[pro.value][month.value][user.data.displayName][policy.value] = {
								"Bonuses": 0,
								"Policy Premium": 0,
								"Number of Policies": 0,
								"Average Premium": 0,
								"Goal": 0,
							};

							// // adding marketing items
							// Object.keys(marketings).map((key) => {
							// 	const marketing = marketings[key];
							// 	temp[pro.value][month.value][user.data.displayName][policy.value][marketing.marketingName] = 0;			
							// }); 
							
							//adding bonusPlan items
							const bonusPlan = bonusPlans.length > 0 && 
								bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy.value].db) ? 
								bonusPlans[0][bonusPlanDbNames[policy.value].db] : 
								{};				
							Object.keys(bonusPlan).map((key) => {		
								const item = bonusPlan[key];
								temp[pro.value][month.value][user.data.displayName][policy.value][item.name] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Bonuses`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Policy Premium`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Number of Policies`] = 0;
								temp[pro.value][month.value][user.data.displayName][policy.value][`Average Premium`] = 0;
							});	

							// // adding vision items
							// if(vision.length > 0) {	
							// 	let trimedMonth = month.value;
							// 	switch(month.value) {
							// 		case "Quarter 1 Totals":
							// 			trimedMonth = "Quarter1";
							// 		case "Quarter 2 Totals":
							// 			trimedMonth = "Quarter2";
							// 		case "Quarter 3 Totals":
							// 			trimedMonth = "Quarter3";
							// 		case "Quarter 4 Totals":
							// 			trimedMonth = "Quarter4";	
							// 		case "Annual Totals":
							// 			trimedMonth = "Total";
							// 		case "Projected for Year":
							// 			trimedMonth = "Total";									
			
							// 	}		
							// 	if(vision[0].hasOwnProperty(user.id)) {
							// 		temp[pro.value][month.value][user.data.displayName][policy.value]["Goal"] = 
							// 			vision[0][user.id]['Goals'][trimedMonth][visionNames[policy.value]];
							// 	}								
							// }
						});
							
					});						
				});

				if(entries.length > 0) {
					const entryNames = {
						"Entries": "Auto", 
						"FireEntries": "Fire", 
						"LifeEntries": "Life", 
						"HealthEntries": "Health", 
						"BankEntries": "Bank", 
						"OtherEntries": "Other"
					};
					let dbName = '';

					users.map((user) => {
						const userName = user.data.displayName;
						Object.keys(entries[0]).map((entryName) => {
							if(entries[0][entryName].hasOwnProperty(user.id)) {
								Object.keys(entries[0][entryName][user.id]).map((key) => {
									const item = entries[0][entryName][user.id][key];
									const issuedMonth = (new Date(item.datePolicyIsIssued)).getMonth();
									const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth(); 
									const month = pro.value==="Show Written Production" ? months[writtenMonth].value : months[issuedMonth].value; 
									temp[pro.value][month][userName][entryNames[entryName]][item.typeOfProduct] += parseFloat(item.percentOfSaleCredit / 100);
									temp[pro.value][month][userName][entryNames[entryName]][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100);
									temp[pro.value][month][userName][entryNames[entryName]]["Bonuses"] += ceil(parseFloat(item.dollarBonus));									
									temp[pro.value][month][userName][entryNames[entryName]]["Policy Premium"] += ceil(parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) * 2 / 100);									
									temp[pro.value][month][userName][entryNames[entryName]]["Number of Policies"] += ceil(parseFloat(item.percentOfSaleCredit / 100));	
									temp[pro.value][month][userName][entryNames[entryName]]["Average Premium"] = ceil(
										dividing(
											temp[pro.value][month][userName][entryNames[entryName]]["Policy Premium"],
											temp[pro.value][month][userName][entryNames[entryName]]["Number of Policies"]		
										)	
									)
								});
							}
						});	
					});	
				}
			});		
			
			console.log('--------------------temp=', temp)
			setMain(temp)
		}
	}, [entries, bonusPlans, users]);

	useEffect(() => {	
		if(!_.isEmpty(widgets) && !_.isEmpty(main) && user!=='') {
			if(widgets.Agency_TargetReports_Auto_Table) {					
				policies.map(policy => {
					let tempRows = [];
					let policiesCells = [{
						id: 'left_title',
						value: 'Policies',
						classes: 'bg-blue text-white',
						icon: ''
					}];
					let annualPremiumCells = [{
						id: 'left_title',
						value: 'Anual Preminum',
						classes: 'bg-green text-white',
						icon: ''
					}];
					let levelReachedCells = [{
						id: 'left_title',
						value: 'Level Reached',
						classes: 'bg-red text-white',
						icon: ''
					}];
					let flatSAmountCells = [{
						id: 'left_title',
						value: 'Flat S Amount',
						classes: 'bg-pink text-white',
						icon: ''
					}];
					let targetBonusEarned = [{
						id: 'left_title',
						value: 'Target Bonus Earned',
						classes: 'bg-orange text-white',
						icon: ''
					}];
					if(policy.value !== 'Total') {
						months.map((month) => { 
							policiesCells.push({
								id: month.value,
								value: main[production][month.value][user][policy.value]['Number of Policies'],
								classes: '',
								icon: ''
							});
							annualPremiumCells.push({
								id: month.value,
								value: main[production][month.value][user][policy.value]['Policy Premium'],
								classes: '',
								icon: ''
							});
							levelReachedCells.push({
								id: month.value,
								value: getLevel(main[production][month.value][user][policy.value]['Number of Policies'], policy.value).level,
								classes: '',
								icon: ''
							});
							flatSAmountCells.push({
								id: month.value,
								value: getLevel(main[production][month.value][user][policy.value]['Number of Policies'], policy.value).amount,
								classes: '',
								icon: ''
							});
							targetBonusEarned.push({
								id: month.value,
								value: main[production][month.value][user][policy.value]['Bonuses'],
								classes: '',
								icon: ''
							});
						});
					
						tempRows.push({
							id: 1,
							cells: policiesCells
						});
						tempRows.push({
							id: 2,
							cells: annualPremiumCells
						});
						tempRows.push({
							id: 3,
							cells: levelReachedCells
						});
						tempRows.push({
							id: 4,
							cells: flatSAmountCells
						});
						tempRows.push({
							id: 5,
							cells: targetBonusEarned
						});
		
						widgets = {
							...widgets, [`Agency_TargetReports_${policy.value}_Table`]: {
								...widgets[`Agency_TargetReports_${policy.value}_Table`], title: 
									policy.value.toUpperCase()
							}				
						}
						widgets = {
							...widgets, [`Agency_TargetReports_${policy.value}_Table`]: {
								...widgets[`Agency_TargetReports_${policy.value}_Table`], table: {
									...widgets[`Agency_TargetReports_${policy.value}_Table`].table, rows: [
										...tempRows
									]
								}
							}				
						}
					}	
				});				
			}
		}	

		console.log('---------widgets', widgets)
		setData({ widgets });
	}, [widgets, main, user, production]);

	useEffect(() => {
		var temp = [];
		if (users.length > 0) {
			users.map(user => {
				if(user.belongTo === UID)
					temp.push({ item: user.data.displayName, value: user.data.displayName });
			});
			setUserList(temp);
		}
	}, [users]);

	function getLevel(policyCount, policyName) {
		let dbName = "";
		if(policyName==="Auto")
			dbName = "individualAutoTargetBonus";
			// dbName = "teamAutoTargetBonus";
		if(policyName==="Fire")
			dbName = "individualFireTargetBonus";
			// dbName = "teamFireTargetBonus";
		if(policyName==="Life")
			dbName = "individualLifeTargetBonus";
			// dbName = "teamLifeTargetBonus";
		if(policyName==="Health")
			dbName = "individualHealthTargetBonus";
			// dbName = "teamHealthTargetBonus";
		if(policyName==="Bank")
			dbName = "individualBankTargetBonus";
			// dbName = "teamBankTargetBonus";
		if(policyName==="Other")
			dbName = "individualOtherTargetBonus";	
			// dbName = "teamOtherTargetBonus";	

		let level = { 
			level: "", 
			policies: 0, 
			amount: 0, 
			nextLevel: "", 
			nextPolicies: 0, 
			nextAmount: 0, 
			maxLevel: "", 
			maxPolicies: 0, 
			maxAmount: 0 
		};
		let count = 0
		if(bonusPlans.length>0 && bonusPlans[0].hasOwnProperty(dbName)) {
			Object.keys(bonusPlans[0][dbName]).map((key, n) => {
				const item = bonusPlans[0][dbName][key];
				if(policyCount > 0) {
					if(n===0) {
						level.level = "None Reached";
					}
					if(policyCount >= item.policies) { 
						level.level = item.level; 
						level.policies = item.policies;
						level.amount = item.amount;
						count ++;
					}	
					if(n === count) { 				
						level.nextLevel = item.level;
						level.nextPolicies = item.policies;
						level.nextAmount = item.amount;
					}	
					if(n === Object.keys(bonusPlans[0][dbName]).length-1) {
						level.maxLevel = item.level;
						level.maxPolicies = item.policies;
						level.maxAmount = item.amount;
						;
					}
				}							
			});
		} 
		
		return level;
	}

	function handleChangeTab(event, value) {
		setTabValue(value);
	}
	
	function handleChangeUser(event) { 
		setUser(event.target.value);
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
					<div className="flex flex-1 items-center justify-center px-12 w-40">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => handleChangeUser(ev)}
								label="Users"
								data={userList}
							/>
						</FuseAnimate>
					</div>					
				</Header>
			}
			content={
				<div className="w-full p-12">	
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Table widget={data.widgets.Agency_TargetReports_Auto_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Table widget={data.widgets.Agency_TargetReports_Fire_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Table widget={data.widgets.Agency_TargetReports_Life_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Table widget={data.widgets.Agency_TargetReports_Health_Table} />						
						</FuseAnimateGroup>	
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
							<Table widget={data.widgets.Agency_TargetReports_Bank_Table} />						
						</FuseAnimateGroup>	
					</div>	
				</div>			
			}
			innerScroll
		/>
	);
}

export default withReducer('agencyApp', reducer)(TargetReports);
