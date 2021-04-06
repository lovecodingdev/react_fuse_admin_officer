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
import { formattedString } from '../../utils/Function'

export function Card(props) {
	return(
	<div>
		{props.title!=='' &&
			<div className="flex items-center justify-between px-8 pt-8">
				<Typography className="text-15 flex w-full" color="textPrimary">
					<span className="truncate">{props.title}</span>									
				</Typography>				
			</div>
		}
		<div className="text-center pt-12 pb-28">
			<Typography className={`lg:text-52 md:text-40 sm:text-36 leading-none ${props.color}`}>
				{`${formattedString(props.count)} ${props.endAdornment}`}
			</Typography>
			{props.label!=='' &&
				<Typography className="text-16" color="textSecondary">
					{props.label}
				</Typography>
			}
		</div>			
	</div>
	);
}

function Widget1(props) { 
	return (
		<Paper className="flex flex-col justify-center w-full rounded-8 shadow">
			{props.data.title!=='' &&
				<div className="flex items-center justify-between px-16 py-16">
					<Typography className="text-16">{props.data.title}</Typography>				
				</div>
			}
			
			{props.type==='One Number' &&
				<Card {...props.data.cardData[0]} />
			}	
			{props.type==='Two Number' &&
				<div className="flex flex-wrap justify-around">
					<Card {...props.data.cardData[0]} />
					<Card {...props.data.cardData[1]} />
				</div>
			}						
			{props.data.subTitle!=='' && 
				<div className="flex items-center px-16 h-52 border-t-1">
					<Typography className="text-15 flex w-full" color="textSecondary">
						<span className="truncate">{props.data.subTitle}</span>
						<b className="px-8">{''}</b>
					</Typography>
				</div>
			}
		</Paper>
	);
}

export default React.memo(Widget1);
