import _ from '@lodash';
import mock from '../mock';

const activityAppDB = {
	widgets: [
		{
			id: 'Dashboard_Multiline_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: 'Auto',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: 'Fire',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: 'Life',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: 'Health',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: 'Total',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: 'Auto',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				},
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: 'Fire',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: 'Life',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: ' ',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: 'Health',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: 'Total',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: 'Goal',					
					fontSize: 52,
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 52,
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
					fontSize: 52,
				}
			]
		},
		{
			id: 'Dashboard_LapseRate_Auto_Panel',
			title: 'Auto',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 52,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Fire_Panel',
			title: 'Fire',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 52,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Life_Panel',
			title: 'Life',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 52,
				},				
			]
		},
		{
			id: 'Dashboard_LapseRate_Health_Panel',
			title: 'Health',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 52,
				},				
			]
		},			
		{
			id: 'Dashboard_Personal_GoalVsActual_Chart',
			title: "Personal Product Goal Vs Actual",			
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
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
						xAxes: [
							{
								
								stacked: false,
								display: true,
								gridLines: {
									display: true
								},
								labels: [],
							}
						],
						yAxes: [
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
			},
			data: {},
		},
		{
			id: 'Dashboard_Team_GoalVsActual_Chart',
			title: "Team Product Goal Vs Actual",			
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
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
						xAxes: [
							{
								
								stacked: false,
								display: true,
								gridLines: {
									display: true
								},
								labels: [],
							}
						],
						yAxes: [
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
			},
			data: {},
		}

	],
};

mock.onGet('/api/dashboard-app/widgets').reply(() => {
	return [200, activityAppDB.widgets];
});



