import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		paddingTop: 40,
		paddingBottom: 40,
		minWidth: 275,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		backgroundColor: '#091118',
		color: 'white',
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 20,
		paddingLeft: 20
	},
	title: {
		fontSize: 22,
		textAlign: 'center'
	},
	pos: {
		paddingTop: 40,
		paddingTop: 40,
		fontSize: 55,
		fontWeight: 'bold',
		color: '#00ff00',
		textAlign: 'center'
	}
});

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					Free Plan
				</Typography>

				<Typography className={classes.pos} color="textSecondary">
					0$/per month
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" className={classes.button}>
					Select this Plan
				</Button>
			</CardActions>
		</Card>
	);
}
