import _ from '@lodash';
import mock from '../mock';

const activityAppDB = {
	widgets: [
		{
			id: 'Dashboard_Multiline_GoalAndActual_Auto_Panel',
			title: 'Personal Goal Vs Actual',
			subTitle: 'Auto',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Fire_Panel',
			title: 'Personal Goal Vs Actual',
			subTitle: 'Fire',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Life_Panel',
			title: 'Personal Goal Vs Actual',
			subTitle: 'Life',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Health_Panel',
			title: 'Personal Goal Vs Actual',
			subTitle: 'Health',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Total_Panel',
			title: 'Personal Goal Vs Actual',
			subTitle: 'Total',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Auto_Panel',
			title: 'Team Goal Vs Actual',
			subTitle: 'Auto',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Fire_Panel',
			title: 'Team Goal Vs Actual',
			subTitle: 'Fire',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Life_Panel',
			title: 'Team Goal Vs Actual',
			subTitle: 'Life',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Health_Panel',
			title: 'Team Goal Vs Actual',
			subTitle: 'Health',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Total_Panel',
			title: 'Team Goal Vs Actual',
			subTitle: 'Total',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 72,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
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
					fontSize: 72,
				}
			]
		},
		{
			id: 'Dashboard_LapseRate_Auto_Panel',
			title: 'Lapse Rate',
			subTitle: 'Auto',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 72,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Fire_Panel',
			title: 'Lapse Rate',
			subTitle: 'Fire',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 72,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Life_Panel',
			title: 'Lapse Rate',
			subTitle: 'Life',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 72,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Health_Panel',
			title: 'Lapse Rate',
			subTitle: 'Health',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 72,
				},				
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



