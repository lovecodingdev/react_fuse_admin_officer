import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

const leftLabel = [
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
	'December', 
	'Quarter1', 
	'Quarter2', 
	'Quarter3', 
	'Quarter3', 
	'Annual Total'
];

const _averages = [];
const _goals = [];

leftLabel.map((label, i) => {
	_goals[i] = {};
	_goals[i].id = i
	_goals[i].name = label;
	_goals[i].data = [];
	for(let j = 0; j < 20; j ++) {
		_goals[i].data[j] = 0;
	}
});

for(let i = 0; i < 2; i ++) {
	_averages[i] = {}
	_averages[i].id = i+1;
	_averages[i].data = []
	for(let j = 0; j < 5; j ++) {
		_averages[i].data[j] = 0;
	}
}

const visionAppDB = {
	widgets: [
		{
			id: 'GoalsTable',
			title: 'Team Members',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'policyAndProductGoals',
						title: 'POLICY & PRODUCT GOALS',
						color: 'bg-green-300',
						colSpan: 6
					},
					{
						id: 'premiumAndDollarsGoals',
						title: 'PREMIUM & DOLLARS GOALS',
						color: 'bg-yellow-500',
						colSpan: 6
					},
					{
						id: 'otherActivityGoals',
						title: 'OTHER ACTIVY GOALS',
						color: 'bg-indigo-200',
						colSpan: 8
					},					
				],
			}	
		},
		{
			id: 'AveragesTable',
			title: 'Team Members',
			table: {
				columns: [
					{
						id: 'averagesPerItem',
						title: 'Averages Per Item',
						color: '',
						colSpan: 5
					},								
				],
			}	
		},
		{
			id: 'BonusesTable',
			title: 'Team Members',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'BONUSES',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'initialPoliciAndProductGoals',
						title: 'INITIAL POLICY & PRODUCT GOALS',
						color: 'bg-green-300',
						colSpan: 5
					},
					{
						id: 'indivisualTargetBonuses',
						title: 'INDIVIDUAL TARGET BONUSES',
						color: 'bg-yellow-500',
						colSpan: 5
					},
					{
						id: 'otherActivityBonuses',
						title: 'OTHER ACTIVY BONUSES',
						color: 'bg-indigo-200',
						colSpan: 9
					},					
				],
			}	
		},		
	],
	goals: _goals,
	averages: _averages,	
	orders: []
};

mock.onGet('/api/vision-app/goals').reply(() => {
	return [200, visionAppDB.goals];
});

mock.onPost('/api/vision-app/goals/save').reply(request => {
	const data = JSON.parse(request.data);
	let product = null;

	visionAppDB.goals = visionAppDB.goals.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		visionAppDB.goals = [...visionAppDB.goals, product];
	}

	// realDb.ref(`Vision/Goals/${data.id}`).set({
	realDb.ref(`Vision/Goals/`).set({
		...data
	});

	return [200, product];
});

mock.onGet('/api/vision-app/averages').reply(() => {
	return [200, visionAppDB.averages];
});

mock.onPost('/api/vision-app/averages/save').reply(request => {
	const data = JSON.parse(request.data);
	let product = null;

	visionAppDB.averages = visionAppDB.averages.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		visionAppDB.averages = [...visionAppDB.averages, product];
	}

	// realDb.ref(`Vision/Goals/${data.id}`).set({
	realDb.ref(`Vision/Averages/`).set({
		...data
	});

	return [200, product];
});

mock.onGet('/api/vision-app/widgets').reply(config => {
	return [200, visionAppDB.widgets];
});
