// import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import FuseAnimate from '@fuse/core/FuseAnimate';
// import Typography from '@material-ui/core/Typography';
// import FuseLoading from '@fuse/core/FuseLoading';
// import withReducer from 'app/store/withReducer';
// import _ from '@lodash';
// import reducer from '../store';
// import Table from '../../../components/widgets/Table~';
// import { monthsAndQuarters, policiesAndPremium1 } from '../../../utils/Globals';

// function OtherLine(props) {
// 	const dispatch = useDispatch();
	
// 	const [loading, setLoading] = useState(true);
// 	const [data, setData] = useState({});
// 	const [state, setState] = useState({ ...props.data });

// 	useEffect(() => {	
// 		const bonusPlans = 
// 			state.bonusPlans.length > 0 &&
// 			state.bonusPlans[0].hasOwnProperty(props.bonus) ?
// 			state.bonusPlans[0][props.bonus] : {};		
// 		const entries = 
// 			state.entries.length > 0 &&
// 			state.entries[0].hasOwnProperty(props.entry) && 
// 			state.entries[0][props.entry].hasOwnProperty[localStorage.getItem("@UID")] ?
// 			state.entries[0][props.entry][localStorage.getItem("@UID")] : {};
// 		const marketings = state.marketings;
// 		const production = state.production;

// 		let headers = [];
// 		let tableContent = {};
// 		let entryData = {};

				
// 		monthsAndQuarters.map((month) => {
// 			entryData[month.value] = {};
// 			policiesAndPremium1.map((item) =>{
// 				entryData[month.value][item.value] = 0;
// 			});
// 			Object.keys(bonusPlans).map((key) => {		
// 				const item = bonusPlans[key];
// 				entryData[month.value][item.name] = 0;
// 			});
// 			Object.keys(marketings).map((key) => {
// 				const item = marketings[key];
// 				entryData[month.value][item.marketingName] = 0;			
// 			}); 
// 			entryData[month.value]["Bonus"] = 0;
// 			entryData[month.value]["Adjustments"] = 0;
// 		});	
				
// 		Object.keys(entries).map((key) => {
// 			const item = entries[key];
// 			const issuedMonth = (new Date(item.datePolicyIsIssued)).getMonth();
// 			const writtenMonth = (new Date(item.datePolicyIsWritten)).getMonth();
// 			let month = "";
// 			production==="Show Written Production" ? month = monthsAndQuarters[writtenMonth].value : month = monthsAndQuarters[issuedMonth].value; 																				
// 			entryData[month][item.typeOfProduct] += parseFloat(item.percentOfSaleCredit / 100);					
// 			entryData[month][item.sourceOfBusiness] += parseFloat(item.percentOfSaleCredit / 100);	
// 			entryData[month]["Bonus"] += parseFloat(item.dollarBonus);
// 			entryData[month]["adjustments"] += parseFloat(item.adjustments);	
// 			entryData[month]["Policy Premium"] += parseFloat(item.policyPremium) * parseFloat(item.percentOfSaleCredit) / 100;
// 			entryData[month]["Number of Policies"] += parseFloat(item.percentOfSaleCredit / 100);			
// 			entryData[month]["Average Premium"] = 
// 				entryData[month]["Number of Policies"] > 0 ? 
// 				(entryData[month]["Policy Premium"] / entryData[month]["Number of Policies"]) : "";

// 		});
		
// 		Object.keys(bonusPlans).map((key) => {
// 			headers.push({ 
// 				id: bonusPlans[key].name, 
// 				value: bonusPlans[key].name, 
// 				type: true, 
// 				color: '' 
// 			});				
// 		});

// 		monthsAndQuarters.map((month, row) => {
// 			tableContent[month.value] = {};
// 			headers.map((item) => {					
// 				tableContent[month.value][item.value] = 
// 					row>11 ? 
// 						entryData[monthsAndQuarters[(row-12)*3+0].value][item.value] +
// 						entryData[monthsAndQuarters[(row-12)*3+1].value][item.value] +
// 						entryData[monthsAndQuarters[(row-12)*3+2].value][item.value] :
						
// 					row===16 ? 
// 						entryData[monthsAndQuarters[12].value][item.value] +
// 						entryData[monthsAndQuarters[13].value][item.value] +
// 						entryData[monthsAndQuarters[14].value][item.value] +
// 						entryData[monthsAndQuarters[15].value][item.value] : 					
// 					row===17 ? "" : 
// 						entryData[month.value][item.value];
// 			});			
// 		}); 

// 		headers.splice(0, 0, { 
// 			id: "Month", 
// 			value: "Month", 
// 			type: true, 
// 			color: '' 
// 		});	
	
// 		data["otherTableData"] = { 
// 			table: { 
// 				columns: [], 
// 				headers: headers, 
// 				rows: monthsAndQuarters, 
// 				tableContent: tableContent 
// 			} 
// 		};
		
// 		setLoading(false);
// 		setData(data);		
// 	}, [state.bonusPlans, state.marketings, state.entries, state.production]);

// 	if (loading) {
// 		return <FuseLoading />;
// 	}

// 	if (data.length === 0) {
// 		return (
// 			<FuseAnimate delay={100}>
// 				<div className="flex flex-1 items-center justify-center h-full">
// 					<Typography color="textSecondary" variant="h5">
// 						There are no data!
// 					</Typography>
// 				</div>
// 			</FuseAnimate>
// 		);
// 	}

// 	return (
// 		<div>
// 			<div className='p-12'>
// 				<Table data={data.otherTableData} />								
// 			</div>
// 		</div>
// 	);
// }

// export default withReducer('productionApp', reducer)(OtherLine);
