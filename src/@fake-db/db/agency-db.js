import mock from '../mock';
import { db, realDb } from './firebase';

const agencyAppDB = {
	widgets: [
		{
			id: 'Agency_Sources_ViewYearTotalsByProduct_Chart',
			title: "Product Sales by Source of Business",		
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: '',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						}																							
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false,
						position: 'top'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: []
							}
						],
						yAxes: [
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
			},
			
		},
		{
			id: 'Agency_Sources_ViewMonthlyTotals_Chart',
			title: "Product Sales by Source of Business",			
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: '',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						}																							
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false,
						position: 'top'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: []
							}
						],
						yAxes: [
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
			},
			
		},
		{
			id: 'Agency_Sources_ViewMonthlyTotals_PieChart',
			title: 'Production by Product',
			mainChart: {
				labels: [
					'Auto', 
					'Fire', 
					'Life', 
					'Health', 
					'Bank',
				],
				datasets: [
					{
						data: [12, 17, 28, 25, 15],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		{
			id: 'Agency_Multiline_PieChart',
			title: 'Agency Premium by Policy Type',
			mainChart: {
				labels: [
					'Auto', 
					'Fire', 
					'Life', 
					'Health', 
					'Bank',
				],
				datasets: [
					{
						data: [],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		{
			id: 'Agency_Multiline_Chart',
			title: "Agency Sales Goals vs. Actual Production",			
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Sales Goal',
							data: [ 20, 25, 22, 12, 34],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual Sales',
							data: [11, 8, 10, 50, 22],
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
								labels: ['Auto', 'Fire', 'Life', 'Health', 'Bank']
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
			
		},
		{
			id: 'Agency_PossibleMoney_Chart',
			title: "POLICY PRODUCTION BY PERSON",
			ranges: {
				TW: 'As A Team',
				IN: 'Individually',
				IC: 'Include Initial Bonus',
				DI: "Don't Include Initial Bonus"
			},
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Auto',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Fire',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Life',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Health',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},	
						{
							type: 'bar',
							label: 'Bank',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},	
						{
							type: 'bar',
							label: 'Total',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},								
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'right'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['Current Bonus', 'Next Level', 'Max Level']
							}
						],
						yAxes: [
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
			},
			
		},
		{
			id: 'Agency_Multiline_AgencyGoalsAndProduction_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Product',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'individualGoalsAndProduction',
						title: 'Agency Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				rows: [
					{ value: 'Total', type: true, color:'', border: 'border-b-4' },
					{ value: 'Auto', type: true, color:''},
					{ value: 'Fire', type: true, color:''},
					{ value: 'Life', type: true, color:''},
					{ value: 'Halth', type: true, color:''},
					{ value: 'Bank', type: true, color:''},
				],
				headers: [
					{ value: 'Sales Goal', type:true, color:''},
					{ value: 'Actual Sales', type:true, color:''},
					{ value: 'Total Premium / Dollars', type:true, color:''},
					{ value: 'Average Premium / Dollars', type:true, color:''},
				],
				tableContent : {},
			}
		},
		{
			id: 'Agency_Multiline_Production_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: 'Product',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: '*',
						title: 'Where your Production Came From - Sources of Business',
						color: '',
						colSpan: 100,
					},
				],
				rows: [
					{ value: 'Total', type: true, color: '', border: 'border-b-4' },
					{ value: 'Auto', type: true, color: '' },
					{ value: 'Fire', type: true, color: '' },
					{ value: 'Life', type: true, color: '' },
					{ value: 'Health', type: true, color: '' },
					{ value: 'Bank', type: true, color: '' },					
				],
				headers: [],
				tableContent : {},
			}
		},	
		{
			id: 'Agency_TargetReports_Auto_Table',
			title: "AUTO",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Flat S Amount',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Agency_TargetReports_Fire_Table',
			title: "FIRE",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Flat S Amount',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		// {
		// 	id: 'Agency_PossibleMoney_Table',
		// 	title: "This is what you're making at your Current Level of Production",
		// 	table: {
		// 		columns: [
		// 			{
		// 				id: 'id',
		// 				title: ''
		// 			},
		// 			{
		// 				id: 'auto',
		// 				title: 'AUTO'
		// 			},
		// 			{
		// 				id: 'fire',
		// 				title: 'FIRE'
		// 			},
		// 			{
		// 				id: 'life',
		// 				title: 'LIFE'
		// 			},
		// 			{
		// 				id: 'health',
		// 				title: 'HEALTH'
		// 			},
		// 			{
		// 				id: 'bank',
		// 				title: 'BANK'
		// 			},
		// 			{
		// 				id: 'total',
		// 				title: 'TOTAL'
		// 			}
		// 		],
		// 		rows: [
		// 			{
		// 				id: 1,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Policies',
		// 						classes: 'bg-blue text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 2,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Anual Preminum',
		// 						classes: 'bg-green text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$21,080.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$17,240.34',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$3,839.66',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$8.22',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 3,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Avg Premium',
		// 						classes: 'bg-red text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$3,518.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$31,202.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$89.87',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 4,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Level Reached',
		// 						classes: 'bg-pink text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 5,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Target Bonus Earned',
		// 						classes: 'bg-orange text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$18,600.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// },
		{
    id: 'Agency_PossibleMoney_Current_Level_Table',
    title: "This is what you're making at your Current Level of Production",
    table: {
        columns: [
            {
                id: 'id',
                title: ''
            },
            {
                id: 'auto',
                title: 'AUTO'
            },
            {
                id: 'fire',
                title: 'FIRE'
            },
            {
                id: 'life',
                title: 'LIFE'
            },
            {
                id: 'health',
                title: 'HEALTH'
            },
            {
                id: 'bank',
                title: 'BANK'
            },
            {
                id: 'total',
                title: 'TOTAL'
            }
        ],
        rows: [
            {
                id: 1,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Policies',
                        classes: 'bg-blue text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'total',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 2,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Annual Premium',
                        classes: 'bg-green text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 3,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Avg Premium',
                        classes: 'bg-red text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 4,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Level Reached',
                        classes: 'bg-pink text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 5,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Target Bonus Earned',
                        classes: 'bg-orange text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            }
        ]
    }
},
{
    id: 'Agency_PossibleMoney_Next_Level_Table',
    title: "If you are reached the Next Target, this is what you could at the Next Level of Production",
    table: {
        columns: [
            {
                id: 'id',
                title: ''
            },
            {
                id: 'auto',
                title: 'AUTO'
            },
            {
                id: 'fire',
                title: 'FIRE'
            },
            {
                id: 'life',
                title: 'LIFE'
            },
            {
                id: 'health',
                title: 'HEALTH'
            },
            {
                id: 'bank',
                title: 'BANK'
            },
            {
                id: 'total',
                title: 'TOTAL'
            }
        ],
        rows: [
            {
                id: 1,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Policies',
                        classes: 'bg-blue text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'total',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 2,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Annual Premium',
                        classes: 'bg-green text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 3,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Avg Premium',
                        classes: 'bg-red text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 4,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Level Reached',
                        classes: 'bg-pink text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 5,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Target Bonus Earned',
                        classes: 'bg-orange text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            }
        ]
    }
},
{
    id: 'Agency_PossibleMoney_Max_Level_Table',
    title: "This is what you could at the Max Level of Production",
    table: {
        columns: [
            {
                id: 'id',
                title: ''
            },
            {
                id: 'auto',
                title: 'AUTO'
            },
            {
                id: 'fire',
                title: 'FIRE'
            },
            {
                id: 'life',
                title: 'LIFE'
            },
            {
                id: 'health',
                title: 'HEALTH'
            },
            {
                id: 'bank',
                title: 'BANK'
            },
            {
                id: 'total',
                title: 'TOTAL'
            }
        ],
        rows: [
            {
                id: 1,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Policies',
                        classes: 'bg-blue text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'total',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 2,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Annual Premium',
                        classes: 'bg-green text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 3,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Avg Premium',
                        classes: 'bg-red text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 4,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Level Reached',
                        classes: 'bg-pink text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            },
            {
                id: 5,
                cells: [
                    {
                        id: 'left_title',
                        value: 'Target Bonus Earned',
                        classes: 'bg-orange text-white',
                        icon: ''
                    },
                    {
                        id: 'auto',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'fire',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'life',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'health',
                        value: '',
                        classes: '',
                        icon: ''
                    },
                    {
                        id: 'bank',
                        value: '',
                        classes: '',
                        icon: ''
                    }
                ]
            }
        ]
    }
},
		{
			id: 'Agency_TargetReports_Life_Table',
			title: "LIFE",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Flat S Amount',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Agency_TargetReports_Health_Table',
			title: "HEALTH",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Flat S Amount',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Agency_TargetReports_Bank_Table',
			title: "BANK",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Flat S Amount',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Agency_PossibleMoney_BonusPlan_Table',
			title: "",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'auto',
						title: 'Auto Policies'
					},
					{
						id: 'fire',
						title: 'Fire Policies'
					},
					{
						id: 'life',
						title: 'Life Policies'
					},
					{
						id: 'health',
						title: 'Health Policies'
					},
					{
						id: 'bank',
						title: 'Bank Products'
					},					
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Level1',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							},							
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Level2',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level3',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Level4',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Level5',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		// {
		// 	id: 'Agency_PossibleMoney_Table',
		// 	title: "This is what you're making at your Current Level of Production",
		// 	table: {
		// 		columns: [
		// 			{
		// 				id: 'id',
		// 				title: ''
		// 			},
		// 			{
		// 				id: 'auto',
		// 				title: 'AUTO'
		// 			},
		// 			{
		// 				id: 'fire',
		// 				title: 'FIRE'
		// 			},
		// 			{
		// 				id: 'life',
		// 				title: 'LIFE'
		// 			},
		// 			{
		// 				id: 'health',
		// 				title: 'HEALTH'
		// 			},
		// 			{
		// 				id: 'bank',
		// 				title: 'BANK'
		// 			},
		// 			{
		// 				id: 'total',
		// 				title: 'TOTAL'
		// 			}
		// 		],
		// 		rows: [
		// 			{
		// 				id: 1,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Policies',
		// 						classes: 'bg-blue text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 2,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Anual Preminum',
		// 						classes: 'bg-green text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$21,080.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$17,240.34',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$3,839.66',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$8.22',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 3,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Avg Premium',
		// 						classes: 'bg-red text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$3,518.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$31,202.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$89.87',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 4,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Level Reached',
		// 						classes: 'bg-pink text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 5,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Target Bonus Earned',
		// 						classes: 'bg-orange text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$18,600.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	id: 'Agency_PossibleMoney_Table',
		// 	title: "This is what you're making at your Current Level of Production",
		// 	table: {
		// 		columns: [
		// 			{
		// 				id: 'id',
		// 				title: ''
		// 			},
		// 			{
		// 				id: 'auto',
		// 				title: 'AUTO'
		// 			},
		// 			{
		// 				id: 'fire',
		// 				title: 'FIRE'
		// 			},
		// 			{
		// 				id: 'life',
		// 				title: 'LIFE'
		// 			},
		// 			{
		// 				id: 'health',
		// 				title: 'HEALTH'
		// 			},
		// 			{
		// 				id: 'bank',
		// 				title: 'BANK'
		// 			},
		// 			{
		// 				id: 'total',
		// 				title: 'TOTAL'
		// 			}
		// 		],
		// 		rows: [
		// 			{
		// 				id: 1,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Policies',
		// 						classes: 'bg-blue text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 2,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Anual Preminum',
		// 						classes: 'bg-green text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$21,080.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$17,240.34',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$3,839.66',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$8.22',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 3,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Avg Premium',
		// 						classes: 'bg-red text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$3,518.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$31,202.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$89.87',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 4,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Level Reached',
		// 						classes: 'bg-pink text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 5,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Target Bonus Earned',
		// 						classes: 'bg-orange text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$18,600.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	id: 'Agency_PossibleMoney_Table',
		// 	title: "This is what you're making at your Current Level of Production",
		// 	table: {
		// 		columns: [
		// 			{
		// 				id: 'id',
		// 				title: ''
		// 			},
		// 			{
		// 				id: 'auto',
		// 				title: 'AUTO'
		// 			},
		// 			{
		// 				id: 'fire',
		// 				title: 'FIRE'
		// 			},
		// 			{
		// 				id: 'life',
		// 				title: 'LIFE'
		// 			},
		// 			{
		// 				id: 'health',
		// 				title: 'HEALTH'
		// 			},
		// 			{
		// 				id: 'bank',
		// 				title: 'BANK'
		// 			},
		// 			{
		// 				id: 'total',
		// 				title: 'TOTAL'
		// 			}
		// 		],
		// 		rows: [
		// 			{
		// 				id: 1,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Policies',
		// 						classes: 'bg-blue text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 2,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Anual Preminum',
		// 						classes: 'bg-green text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$21,080.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$17,240.34',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$3,839.66',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$8.22',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 3,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Avg Premium',
		// 						classes: 'bg-red text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$3,518.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$31,202.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '$89.87',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 4,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Level Reached',
		// 						classes: 'bg-pink text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 5,
		// 				cells: [
		// 					{
		// 						id: 'left_title',
		// 						value: 'Target Bonus Earned',
		// 						classes: 'bg-orange text-white',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'total_budget',
		// 						value: '$18,600.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_usd',
		// 						value: '$0.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'spent_perc',
		// 						value: '$81.78',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_usd',
		// 						value: '$34,720.00',
		// 						classes: '',
		// 						icon: ''
		// 					},
		// 					{
		// 						id: 'remaining_perc',
		// 						value: '',
		// 						classes: '',
		// 						icon: ''
		// 					}
		// 				]
		// 			}
		// 		]
		// 	}
		// },
		{
			id: 'Agency_ProductLine_Table_1',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 3
					},
					{
						id: 'policySalesByPolicyType',
						title: 'Policy Sales by Policy Type',
						color: '',
						colSpan: 100
					},									
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Agency_ProductLine_Table_2',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 3
					},				
					{
						id: 'policySalesBySourcesBusiness',
						title: 'Policy Sales by Sources of Business',
						color: '',
						colSpan: 100
					},					
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Agency_ProductLine_Table_3',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},					
					{
						id: 'PremiumSalesByPolicyType',
						title: 'Premium Sales by Policy Type(In Thousands)',
						color: '',
						colSpan: 100
					},									
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Agency_ProductLine_Table_4',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},					
					{
						id: 'policySalesBySourcesBusiness',
						title: 'Premium Sales by Sources of Business(In Thousands)',
						color: '',
						colSpan: 100
					},					
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'ProductLine_Life_Table_1',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 4
					},
					{
						id: 'policySalesByPolicyType',
						title: 'POLICY SALES by Policy Type',
						color: '',
						colSpan: 13
					},
					// {
					// 	id: 'policySalesBySourcesBusiness',
					// 	title: 'POLICY SALES by Sources of Business',
					// 	color: '',
					// 	colSpan: 20
					// },					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					ProjectedForYear:{
						// autoPolicies:'-',
						// autoPremium:'-',
						// firePolicies:'-',
						// firePremium:'-',
						// lifePolicies:'-',
						// lifePremium:'-',
						// healthPolicies:'-',
						// healthPremium:'-',
						// bankProducts:'-',
						// bankDollars:'-',					
						// totalProducts:'-',
						// totalPremium:'-',
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					}					
				},
			}
		},
		{
			id: 'ProductLine_Life_Table_2',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 4
					},
					// {
					// 	id: 'policySalesByPolicyType',
					// 	title: 'POLICY SALES by Policy Type',
					// 	color: '',
					// 	colSpan: 13
					// },
					{
						id: 'policySalesBySourcesBusiness',
						title: 'POLICY SALES by Sources of Business',
						color: '',
						colSpan: 20
					},					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					ProjectedForYear:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						policyCreditThisYear:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					}					
				},
			}
		},
		{
			id: 'Multiline_Individual_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'individualGoalsAndProduction',
						title: 'Individual Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				rows: [],
				headers: [],
				tableContent : {
					Auto:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Fire:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Life:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Health:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Bank:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Totals:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},											
				},
			}
		},
		{
			id: 'Multiline_Agency_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'AgencyGoalsAndProduction',
						title: 'Agency Goals and Production',
						color: '',
						colSpan: 3,
					},
				],
				rows: [],
				headers: [],
				tableContent : {
					Auto:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Fire:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Life:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Health:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Bank:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Totals:{
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},											
				},
			}
		},		
		{
			id: 'Multiline_Soueces_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: '*',
						title: 'Where your Individual Production Came From - Sources of Business',
						color: '',
						colSpan: 20,
					},
				],
				rows: [],
				headers: [],
				tableContent : {
					Auto:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Fire:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Life:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Health:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Bank:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Totals:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},											
				},
			}
		},		
		{
			id: 'ProductLine_Bank_Table_1',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'productsAndComm',
						title: 'Products & Comm',
						color: '',
						colSpan: 3
					},
					{
						id: 'ProductSalesByProductType',
						title: 'PRODUCT SALES by Product Type',
						color: '',
						colSpan: 13
					},
					// {
					// 	id: 'policySalesBySourcesBusiness',
					// 	title: 'POLICY SALES by Sources of Business',
					// 	color: '',
					// 	colSpan: 20
					// },					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					ProjectedForYear:{
						// autoPolicies:'-',
						// autoPremium:'-',
						// firePolicies:'-',
						// firePremium:'-',
						// lifePolicies:'-',
						// lifePremium:'-',
						// healthPolicies:'-',
						// healthPremium:'-',
						// bankProducts:'-',
						// bankDollars:'-',					
						// totalProducts:'-',
						// totalPremium:'-',
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					}					
				},
			}
		},
		{
			id: 'ProductLine_Bank_Table_2',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'productsAndComm',
						title: 'Product & Comm',
						color: '',
						colSpan: 3
					},
					// {
					// 	id: 'policySalesByPolicyType',
					// 	title: 'POLICY SALES by Policy Type',
					// 	color: '',
					// 	colSpan: 13
					// },
					{
						id: 'productSalesBySourcesOfBusiness',
						title: 'PRODUCT SALES by Sources of Business',
						color: '',
						colSpan: 20
					},					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					ProjectedForYear:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policyPremium:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					}					
				},
			}
		},
		{
			id: 'ProductLine_Bank_Table_3',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					// {
					// 	id: 'policiesAndPremium',
					// 	title: 'Policies & Premium',
					// 	color: '',
					// 	colSpan: 3
					// },
					{
						id: 'commissionSalesByProduct',
						title: 'COMMISSION SALES by Product(In Hundreds)',
						color: '',
						colSpan: 13
					},
					// {
					// 	id: 'policySalesBySourcesBusiness',
					// 	title: 'POLICY SALES by Sources of Business',
					// 	color: '',
					// 	colSpan: 20
					// },					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					February:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					March:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					April:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					May:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					June:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					July:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					August:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					September:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					October:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					November:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					December:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_1_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_2_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_3_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_4_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					AnnualTotals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					ProjectedForYear:{						
						// averagePremium:'-',
						// numberOfPolicies:'-',
						// policyPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					}					
				},
			}
		},
		{
			id: 'ProductLine_Bank_Table_4',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					// {
					// 	id: 'policiesAndPremium',
					// 	title: 'Policies & Premium',
					// 	color: '',
					// 	colSpan: 3
					// },
					// {
					// 	id: 'policySalesByPolicyType',
					// 	title: 'POLICY SALES by Policy Type',
					// 	color: '',
					// 	colSpan: 13
					// },
					{
						id: 'commissionSalesBySourcesByBusiness',
						title: 'COMMISSION SALES by Sources of Business(In Humdreds)',
						color: '',
						colSpan: 20
					},					
				],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					February:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					March:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					April:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					May:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					June:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					July:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					August:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					September:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					October:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					November:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					December:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_1_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_2_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_3_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_4_Totals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					AnnualTotals:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					ProjectedForYear:{
						// averagePremium:'-',
						// numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					}					
				},
			}
		},
		{
			id: 'ProductLine_Other_Table',
			title: '',
			table: {
				columns: [],
				rows: [],
				headers: [],
				tableContent : {
					January:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',									
					},
					February:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					March:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					April:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					May:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					June:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					July:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					August:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					September:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					October:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					November:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					December:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					Quarter_1_Totals:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					Quarter_2_Totals:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					Quarter_3_Totals:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					Quarter_4_Totals:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					AnnualTotals:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					},
					ProjectedForYear:{
						completedActivities:'-',
						multilineReviewApptKept:'-',
						ifr:'-',
						autoPoliciesBoughtIn:'-',
						firePoliciesBoughtIn:'-',
						lifePoliciesBoughtIn:'-',
						healthPoliciesBoughtIn:'-',
						bankDocumentsBoughtIn:'-',
						ifrCompleted:'-',
						bonus:'-',
					}					
				},
			}
		},
		{					
			id: 'Agency_Payroll_Table',
			title: '',
			table: {
				columns: [],
				headers: [
					{ id: 1, value: 'Producer', type: true },
					{ id: 2, value: 'Auto Policies', type: true },
					{ id: 3, value: 'Auto Bonuses', type: false },
					{ id: 4, value: 'Fire Policies', type: true },
					{ id: 5, value: 'Fire Bonuses', type: false },
					{ id: 6, value: 'Life Policies', type: true },
					{ id: 7, value: 'Life Bonuses', type: false },
					{ id: 8, value: 'Health Policies', type: true },
					{ id: 9, value: 'Health Bonuses', type: false },
					{ id: 10, value: 'Bank Products', type: true },
					{ id: 11, value: 'Bank Bonuses', type: false },
					{ id: 12, value: 'Other Activities', type: true },
					{ id: 13, value: 'Other Bonuses', type: false },
					{ id: 14, value: 'Individual Target Bonuses', type: false },
					{ id: 15, value: 'Team Target Bonuses', type: false },
					{ id: 16, value: 'Policy Growth Bonuses', type: false },
					{ id: 17, value: 'Lapse Rate % Bonus', type: false },
					{ id: 18, value: 'Special Promotion', type: false },
					{ id: 19, value: 'Total Policies', type: true },
					{ id: 20, value: 'Total Bonuses', type: false },
					{ id: 21, value: 'Bonus Verified?', type: true },
					{ id: 22, value: 'Amount Paid to Producer', type: true }
				],				
				rows: [],
				tableContent : {},
			}		
		},	
		{					
			id: 'Agency_Payroll_Yearly_Table',
			title: '',
			table: {
				columns: [],
				headers: [
					{ id: 1, value: 'Producer', type: true },
					{ id: 2, value: 'Auto Policies', type: true },
					{ id: 3, value: 'Auto Bonuses', type: false },
					{ id: 4, value: 'Fire Policies', type: true },
					{ id: 5, value: 'Fire Bonuses', type: false },
					{ id: 6, value: 'Life Policies', type: true },
					{ id: 7, value: 'Life Bonuses', type: false },
					{ id: 8, value: 'Health Policies', type: true },
					{ id: 9, value: 'Health Bonuses', type: false },
					{ id: 10, value: 'Bank Products', type: true },
					{ id: 11, value: 'Bank Bonuses', type: false },
					{ id: 12, value: 'Other Activities', type: true },
					{ id: 13, value: 'Other Bonuses', type: false },
					{ id: 14, value: 'Individual Target Bonuses', type: false },
					{ id: 15, value: 'Team Target Bonuses', type: false },
					{ id: 16, value: 'Policy Growth Bonuses', type: false },
					{ id: 17, value: 'Lapse Rate % Bonus', type: false },
					{ id: 18, value: 'Special Promotion', type: false },
					{ id: 19, value: 'Total Policies', type: true },
					{ id: 20, value: 'Total Bonuses', type: false },
					// { id: 21, value: 'Bonus Verified?', type: true },
					{ id: 22, value: 'Amount Paid to Producer', type: true }
				],				
				rows: [],
				tableContent : {},
			}		
		},	
		{					
			id: 'Agency_Payroll_Summary_Table',
			title: '',
			table: {
				columns: [],
				headers: [
					{ id: 1, value: 'Producer', type: true },
					{ id: 2, value: 'Auto Policies', type: true },
					{ id: 3, value: 'Auto Bonuses', type: false },
					{ id: 4, value: 'Fire Policies', type: true },
					{ id: 5, value: 'Fire Bonuses', type: false },
					{ id: 6, value: 'Life Policies', type: true },
					{ id: 7, value: 'Life Bonuses', type: false },
					{ id: 8, value: 'Health Policies', type: true },
					{ id: 9, value: 'Health Bonuses', type: false },
					{ id: 10, value: 'Bank Products', type: true },
					{ id: 11, value: 'Bank Bonuses', type: false },
					{ id: 12, value: 'Other Activities', type: true },
					{ id: 13, value: 'Other Bonuses', type: false },
					{ id: 14, value: 'Individual Target Bonuses', type: false },
					{ id: 15, value: 'Team Target Bonuses', type: false },
					{ id: 16, value: 'Policy Growth Bonuses', type: false },
					{ id: 17, value: 'Lapse Rate % Bonus', type: false },
					{ id: 18, value: 'Special Promotion', type: false },
					{ id: 19, value: 'Total Policies', type: true },
					{ id: 20, value: 'Total Bonuses', type: false },
					// { id: 21, value: 'Bonus Verified?', type: true },
					// { id: 22, value: 'Amount Paid to Producer', type: true }
				],				
				rows: [],
				tableContent : {},
			}		
		},	
		{
			id: 'Agency_Sources_ViewYearTotalsByProduct_Table',
			title: '',
			table: {
				columns: [],
				rows: [],
				headers: [
					{ id: 1, value: 'Source of Business', type: true, color: '' },
					{ id: 2, value: 'Products', type: true, color: '' },
					{ id: 3, value: 'Percent of Total', type: true, color: '' },					
				],
				tableContent : {},
			}
		},
		{
			id: 'Agency_Sources_ViewMonthlyTotals_Table',
			title: '',
			table: {
				columns: [],
				rows: [],
				headers: [
					{ id: 1, value: 'Sources', type: true, color: '' },
					{ id: 2, value: 'Auto', type: true, color: '' },
					{ id: 3, value: 'Fire', type: true, color: '' },
					{ id: 4, value: 'Life', type: true, color: '' },
					{ id: 5, value: 'Health', type: true, color: '' },
					{ id: 6, value: 'Bank', type: true, color: '' },
					{ id: 7, value: 'Total', type: true, color: '' },
				],
				tableContent : {},								
			}
		},
	],
	projects: [
		{
			id: 1,
			name: 'ACME Corp. Backend App'
		},
		{
			id: 2,
			name: 'ACME Corp. Frontend App'
		},
		{
			id: 3,
			name: 'Creapond'
		},
		{
			id: 4,
			name: 'Withinpixels'
		}
	],
	users: [],
};

mock.onGet('/api/agency-app/widgets').reply(config => {
	return [200, agencyAppDB.widgets];
});

mock.onGet('/api/agency-app/projects').reply(config => {
	return [200, agencyAppDB.projects];
});

mock.onGet('/api/agency-app/users').reply(() => new Promise((resolve, reject) => { 
	var starCountRef = realDb.ref(`users/`);
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();
		
		if(data) {
			Object.keys(data).map(item => {
				agencyAppDB.users.push(data[item])
			});
		}

		resolve(agencyAppDB.users);
	})
}));

mock.onPost('/api/agency-app/bonusVerified/save').reply(request => { 
	var belongTo = localStorage.getItem('@BELONGTO');
	const data = JSON.parse(request.data);
	let product = data;

	realDb.ref(`BonusVerified/${data.year}/${belongTo}/${data.uid}/${data.period}`).set({
		id: data.uid,
		month: data.period,
		checked: data.checked
	});

	return [200, product];
});
