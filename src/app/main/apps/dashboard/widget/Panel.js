import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

function Widget1(props) {
	const { data } = props.data;
	const length = data.length;
	return (
		<Paper className={`w-full  shadow h-full`}>
			<div className="flex items-center justify-between px-4 pt-4">
				<Typography className="text-15 flex w-full border-b-1" color="textSecondary">
					<span className="truncate">{props.data.title}</span>
				</Typography>
			</div>
			<div className="h-full text-center">
				<div className="h-full flex flex-wrap">
					{data.map((item, index) => (
						data.length===1 ?
						(	<div className="w-full h-full" key={index} >								
								<Typography className={`flex flex-col justify-center h-full text-48 leading-none  ${props.data.color}`}>
									{item[Object.keys(item)[0]]} {'%'}
								</Typography>
							</div>
						) : 
						(	<div className="w-1/2" key={index}>
								<Typography
									className={`leading-none border-b-1 ${length % (index + 1) !== 0 && `border-r-1`} ${
										index === 0 && `border-r-1`
									} py-5`}
								>
									{Object.keys(item)[0]}
								</Typography>
								<Typography
									className={`text-48 leading-none ${props.data.color} ${
										length % (index + 1) !== 0 && `border-r-1`
									} ${index === 0 && `border-r-1`} border-b-1 py-5`}
								>
									{item[Object.keys(item)[0]]}
									{props.data.title === 'Lapse Rate' && '%'}
								</Typography>
							</div>
						)																			
					))}
				</div>
			</div>
		</Paper>
	);
}

export default React.memo(Widget1);
