import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from '@lodash';
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

export function Card(props) {
	return(
		<div>							
			<Typography className={`text-${props.fontSize} leading-none ${props.color}`}>
				{props.count}
			</Typography>
			<Typography className="text-16" color="textSecondary">
				{props.label}
			</Typography>
		</div>
	);
}

function Widget5(props) {
	const [currentRange, setCurrentRange] = useState('TW');
	const theme = useTheme();

	const widget = _.merge({}, props.widget);

	_.setWith(widget, 'widget.mainChart.options.scales.xAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(widget, 'widget.mainChart.options.scales.yAxes[0].ticks.fontColor', theme.palette.text.secondary);

	function handleChangeRange(range) {
		setCurrentRange(range);
	}

	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 py-16 border-b-0">
				<Typography className="text-16">{widget.title}</Typography>			
			</div>
			<div className="flex flex-row flex-wrap">
				<div className="w-full md:w-1/2 p-8 min-h-420 h-420">
					<Bar
						data={{
							labels: widget.mainChart[currentRange].labels,
							datasets: widget.mainChart[currentRange].datasets.map((obj, index) => {
								const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
								return {
									...obj,
									borderColor: palette.main,
									backgroundColor: palette.main,
									pointBackgroundColor: palette.dark,
									pointHoverBackgroundColor: palette.main,
									pointBorderColor: palette.contrastText,
									pointHoverBorderColor: palette.contrastText
								};
							})
						}}
						options={widget.mainChart.options}
					/>
				</div>
				<div className="flex w-full md:w-1/2 flex-wrap">
					{Object.entries(widget.data).map(([key, item]) => {
						return (
							<div key={key} className="w-full sm:w-1/2 p-12">
								{/* <div className='h-full border-1'> */}
								<fieldset className='h-full rounded-8 border-1'>
    								<legend>{item.title}</legend>
									{/* <Typography className="text-15 whitespace-nowrap" color="textPrimary">
										{item.title}
									</Typography> */}
									<div className="flex flex-row justify-around">
										<Card {...item.cardData[0]} />
										<Card {...item.cardData[1]} />
									</div>
								</fieldset>	
								{/* </div> */}
							</div>
						);
					})}
				</div>
			</div>
		</Paper>
	);
}

export default React.memo(Widget5);
