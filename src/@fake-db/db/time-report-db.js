import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

var belongTo = localStorage.getItem('@BELONGTO')
var UID = localStorage.getItem('@UID')

const timeReportAppDB = {
	widgets: [
		{
			id: 'Time_Report_Table',
			title: 'Title',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'auto',
						title: 'Auto',
						color: '',
						colSpan: 2
					},
					{
						id: 'fire',
						title: 'Fire',
						color: '',
						colSpan: 2
					},
					{
						id: 'life',
						title: 'Life',
						color: '',
						colSpan: 2
					},
					{
						id: 'health',
						title: 'Health',
						color: '',
						colSpan: 2
					},
					{
						id: 'bank',
						title: 'Bank',
						color: '',
						colSpan: 2
					},
					{
						id: 'total',
						title: 'Total',
						color: '',
						colSpan: 2
					},					
				],
				rows: [],
				headers: [
					{value:'Goals', type:true},
					{value:'Actual', type:false},
					{value:'Goals', type:true},
					{value:'Actual', type:false},
					{value:'Goals', type:true},
					{value:'Actual', type:false},
					{value:'Goals', type:true},
					{value:'Actual', type:false},
					{value:'Goals', type:true},
					{value:'Actual', type:false},
					{value:'Goals', type:true},
					{value:'Actual', type:false},
				],				
				tableContent : {
					name1:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',					
					},
					name2:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name3:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name4:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name5:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name6:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name7:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name8:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name9:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name11:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name12:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
					name13:{
						autoGoals:'-',
						autoActual:'-',
						fireGoals:'-',
						fireActual:'-',
						lifeGoals:'-',
						lifeActual:'-',
						healthGoals:'-',
						healthActual:'-',
						bankGoals:'-',
						bankActual:'-',	
						totalGoals:'-',
						totalActual:'-',
					},
				}
			}
		},	
		{
			id: 'Time_Track_Table',
			title: '',
			table: {
				columns: [],
				headers: [
					{value: 'Date', type:false, color:''},
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
				],
				rows: [],
				tableContent : {}
			}	
		},						
	],
};

mock.onGet('/api/time-report-app/track').reply(() => {
	return [200, timeReportAppDB.vision];
});

mock.onPost('/api/time-report-app/track/save').reply(request => {
	const data = JSON.parse(request.data);
	let product = data;

	realDb.ref(`TimeReport/${belongTo}/${UID}`).set({
		...data
	});

	return [200, product];
});

mock.onGet('/api/time-report-app/widgets').reply(config => {
	return [200, timeReportAppDB.widgets];
});
