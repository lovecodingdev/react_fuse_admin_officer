import _ from '@lodash';
import mock from '../mock';

const activityAppDB = {
	widgets: [
		{
			id: 'Dashboard_Panel',
			title: 'Panel',
			data: [
				{
					id: 1,
					title: 'Lapse Rate',
					label: 'label',
					color: 'text-blue',
					data:[
						{
							Auto: 0
						},
						{
							Fire: 0
						},
						{
							Health: 0
						},
						{
							Life:0
						}
					]
				},
				{
					id: 2,
					title: 'Multiline Percentage',	
					label: 'label',
					color: 'text-blue',
					data:[
						{
							Percentage: 0
						}
					]
				},
				{
					id: 3,
					title: 'Goals vs Actual',	
					label: 'label',
					color: 'text-blue',
					data:[
						{
							Goals: 0
						},
						{
							Actual: 0
						}
					]
				}
			]
		},	
		{
			id: 'Dashboard_Chart',
			title: "Title",			
			mainChart: {
				TW: {
					
					labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
					datasets: [
						{
							// type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal1',
							data: [65, 59, 90, 81, 56, 55, 40],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							// type: 'bar',
							barPercentage: 0.5,
							label: 'Goal2',
							data: [28, 48, 40, 19, 96, 27, 100],
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
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6'],
							}
						],
						xAxes: [
							{
								stacked: true,
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



