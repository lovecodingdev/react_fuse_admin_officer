import _ from '@lodash';
import mock from '../mock';

const activityAppDB = {
	widgets: [
		{
			id: 'Dashboard_GoalsAndActual_Table',
			title: '',
			table: {
				columns: [
					// {
					// 	id: 'avatar',
					// 	title: 'Month',
					// 	color: '',
					// 	align: 'center',
					// 	colSpan: 1,
					// 	rowSpan: 2
					// },
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
						id: 'total',
						title: 'Total',
						color: '',
						colSpan: 2
					},					
				],
				headers: [
					{ id: 'Auto@Goal', value: 'Auto@Goal', type: false, color: '' },
					{ id: 'Auto@Actual', value: 'Auto@Actual', type: false, color: '' },
					{ id: 'Fire@Goal', value: 'Fire@Goal', type: false, color: '' },
					{ id: 'Fire2Actual', value: 'Fire@Actual', type: false, color: '' },
					{ id: 'Life@Goal', value: 'Life@Goal', type: false, color: '' },
					{ id: 'Life@Actual', value: 'Life@Actual', type: false, color: '' },
					{ id: 'Health@Goal', value: 'Health@Goal', type: false, color: '' },
					{ id: 'Health@Actual', value: 'Health@Actual', type: false, color: '' },
					{ id: 'Total@Goal', value: 'Total@Goal', type: false, color: '' },
					{ id: 'Total@Actual', value: 'Total@Actual', type: false, color: '' },										
				],
				rows: [],
				tableContent : {},
			}
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: 'Personal Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Personal Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: 'Personal Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Personal Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: 'Personal Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Personal Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: 'Personal Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Personal Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: 'Personal Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Personal Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: 'Team Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Team Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: 'Team Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Team Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: 'Team Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Team Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: 'Team Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Team Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: 'Team Goal Vs Actual',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',
					description: 'Team Goal Vs Actual',
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',
					description: '',
					fontSize: 72,
					icon: true,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Percentage_Panel',
			title: 'Multiline Percentage',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',
					description: '',
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_LapseRate_Panel',
			title: 'Rapse Rate',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Auto',
					description: '',
					fontSize: 48, 
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Fire',
					description: '',
					fontSize: 48,
				},
				{
					title: '',
					count: 0,
					color: 'text-orange',
					label: 'Life',
					description: '',
					fontSize: 48,
				},
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Health',
					description: '',
					fontSize: 48,
				}
			]
		},		
		{
			id: 'Dashboard_Chart',
			title: "Personal Product Goal Vs Actual",			
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							// type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							// type: 'bar',
							barPercentage: 0.5,
							label: 'Actual',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},										
					]
				},
				options: {
					onClick: function(e){
						console.log(e)
					},
					
					
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'bottom'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						yAxes: [
							{
								stacked: false,
								display: true,
								gridLines: {
									display: true
								},
								labels: [],
							}
						],
						xAxes: [
							{
								stacked: false,
								type: 'linear',
								display: true,
								position: 'left',
								gridLines: {
									display: true
								},
								labels: {
									show: true
								}
							}
						]
					}
				}
			}
		}
	],
};

mock.onGet('/api/dashboard-app/widgets').reply(() => {
	return [200, activityAppDB.widgets];
});



