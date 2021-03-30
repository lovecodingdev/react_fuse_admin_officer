import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardElements from '../components/CardElements';
import FirebaseRegisterTab from './tabs/FirebaseRegisterTab';
import JWTRegisterTab from './tabs/JWTRegisterTab';
import SubscriptionCard from './components/subscriptionCard';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { firebaseFunctionGetProductsEndpoint } from 'app/fuse-configs/endpointConfig';
import axios from 'axios';

const stripePromise = loadStripe(
	'pk_test_51IFn0pAfN4Ms4oOXNtWGRfBvhbBdJ0zIV4bCiefjGeRgt8eMDfq7Cm4jovgdj5BfdQm2qbV6oL7jzgcQ13jQ70l800ocRcNzky'
);
const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Register() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(1);
	const [state, setState] = useState({
		showPaymentForm: false,
		name: '',
		cardNumber: '',
		subscriptionStatus: false,
		token: ''
	});
	const [count, setCount] = useState([]);
	const routeParams = useParams();
	function handleTabChange(token) {
		setState({ ...state, showPaymentForm: true, token: token });
	}

	function setPaymentState(result) {
		console.log(result);
		setState({ ...state, subscriptionStatus: result });
	}

	useEffect(() => {
		setMembership();
	}, []);

	async function setMembership() {
		const response = await axios.post(firebaseFunctionGetProductsEndpoint);
		if (response.data) {
			setCount(response.data.data);
		}
	}

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 md:max-w-3xl rounded-12 shadow-2xl overflow-hidden">
					{state.subscriptionStatus && routeParams.id.length === 32 && (
						<Card
							className={clsx(
								classes.leftSection,
								'flex flex-col w-full max-w-sm items-center justify-center shadow-0'
							)}
							square
						>
							<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
								<FuseAnimate delay={300}>
									<div className="flex items-center justif-center mb-32">
										<img className="logo-icon w-48" src="assets/images/logos/fuse.svg" alt="logo" />
										<div className="border-l-1 mr-4 w-1 h-40" />
										<div>
											<Typography className="text-24 font-800 logo-text" color="inherit">
												EASY
											</Typography>
											<Typography
												className="text-16 tracking-widest -mt-8 font-700"
												color="textSecondary"
											>
												BONUS SYSTEM
											</Typography>
										</div>
									</div>
								</FuseAnimate>

								{selectedTab === 1 && <FirebaseRegisterTab state={state.subscriptionStatus} />}
							</CardContent>

							<div className="flex flex-col items-center justify-center pb-32">
								<div>
									<span className="font-medium mr-8">Already have an account?</span>
									<Link className="font-medium" to="/login">
										Login
									</Link>
								</div>
								<Link className="font-medium mt-8" to="/">
									Back to Dashboard
								</Link>
							</div>
						</Card>
					)}

					{!state.subscriptionStatus && routeParams.id.length === 150 && (
						<Card
							className={clsx(
								classes.leftSection,
								'flex flex-col w-full max-w-sm items-center justify-center shadow-0'
							)}
							square
						>
							<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
								<FuseAnimate delay={300}>
									<div className="flex items-center justif-center mb-32">
										<img className="logo-icon w-48" src="assets/images/logos/fuse.svg" alt="logo" />
										<div className="border-l-1 mr-4 w-1 h-40" />
										<div>
											<Typography className="text-24 font-800 logo-text" color="inherit">
												EASY
											</Typography>
											<Typography
												className="text-16 tracking-widest -mt-8 font-700"
												color="textSecondary"
											>
												BONUS SYSTEM
											</Typography>
										</div>
									</div>
								</FuseAnimate>

								{selectedTab === 1 && <FirebaseRegisterTab state={true} />}
							</CardContent>

							<div className="flex flex-col items-center justify-center pb-32">
								<div>
									<span className="font-medium mr-8">Already have an account?</span>
									<Link className="font-medium" to="/login">
										Login
									</Link>
								</div>
								<Link className="font-medium mt-8" to="/">
									Back to Dashboard
								</Link>
							</div>
						</Card>
					)}

					<div
						className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}
					>
						<div className="max-w-640">
							{routeParams.id.length === 32 && !state.showPaymentForm && (
								<FuseAnimate animation="transition.slideUpIn" delay={400}>
									<div className="flex">
										{count.length > 0 &&
											count.map(item => {
												return (
													<SubscriptionCard
														setBuy={handleTabChange}
														price={item.amount / 100}
														token={item.id}
													/>
												);
											})}
									</div>
								</FuseAnimate>
							)}
							{routeParams.id.length === 32 && state.showPaymentForm && (
								<FuseAnimate animation="transition.slideUpIn" delay={400}>
									<Elements stripe={stripePromise}>
										<CardElements setPaymentState={setPaymentState} token={state.token} />
									</Elements>
								</FuseAnimate>
							)}
							{routeParams.id.length !== 32 && (
								<FuseAnimate animation="transition.slideUpIn" delay={400}>
									<Typography variant="h3" color="inherit" className="font-800 leading-tight">
										Welcome <br />
										to the <br /> Agency Owner Home Page!
									</Typography>
								</FuseAnimate>
							)}

							{/* <FuseAnimate delay={500}>
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									Powerful and professional admin template for Web Applications, CRM, CMS, Admin
									Panels and more.
								</Typography>
							</FuseAnimate> */}
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Register;
