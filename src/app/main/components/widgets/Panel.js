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
	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-4 pt-4">
				<Typography className="text-15 flex w-full" color="textSecondary">
					<span className="truncate">{props.data.title}</span>									
				</Typography>
				<IconButton aria-label="more">
					<Icon>more_vert</Icon>
				</IconButton>
			</div>
			<div className="text-center pt-12 pb-28">
				<Typography className={`text-72 leading-none ${props.data.color}`}>
					{props.data.count}
				</Typography>
				<Typography className="text-16" color="textSecondary">
					{props.label}
				</Typography>
			</div>
			<div className="flex items-center px-16 h-52 border-t-1">
				<Typography className="text-15 flex w-full" color="textSecondary">
					<span className="truncate">Subtitle</span>:
					<b className="px-8">{`${props.data.label}-${props.data.id}`}</b>
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Widget1);
