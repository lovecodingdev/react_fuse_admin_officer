import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import reducer from '../store';
import Table from '../../../components/widgets/Table';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { Elements } from '@stripe/react-stripe-js';
import { getUsers, selectUsers } from '../store/usersSlice';
import { realDb } from '../../../../../@fake-db/db/firebase';
import SubscriptionCard from './SubscriptionCard';
import {
	firebaseFunctionGetProductsEndpoint,
	firebaseFunctionGetSubscrioption,
	firebaseFunctionCancelSubscriptionEndpoint
} from 'app/fuse-configs/endpointConfig';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CardElements from './CardElement';
import { loadStripe } from '@stripe/stripe-js';

const belongTo = localStorage.getItem('@BELONGTO');
const UID = localStorage.getItem('@UID');
const publicKeyTest =
	'pk_test_51IFn0pAfN4Ms4oOXNtWGRfBvhbBdJ0zIV4bCiefjGeRgt8eMDfq7Cm4jovgdj5BfdQm2qbV6oL7jzgcQ13jQ70l800ocRcNzky';
const publicKeyProduction =
	'pk_live_51IFn0pAfN4Ms4oOXN3BfEGMoy6hhPMMhQ40T3Cn2gvUCDM8WohYEulmi9fNxjsU5Q428UhiuaVOaK9xI1TGnE9Zw00fx2e7IOG';
const stripePromise = loadStripe(publicKeyTest);

function Multiline(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);

	let user = useSelector(selectUsers);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });

	const [year, setYear] = useState(moment().format('yyyy'));

	const [title, setTitle] = useState('Subscription');
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = uid => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		setOpen(false);
		try {
			if (Object.keys(user[0]).includes('subscriptionInfo')) {
				const uid = localStorage.getItem('@BELONGTO');
				const response = await axios.post(firebaseFunctionCancelSubscriptionEndpoint, {
					subscriptionID: user[0].subscriptionInfo.response.id
				});
				console.log(response);
				let temp = { ...user[0] };
				delete temp.subscriptionInfo;
				if (response) {
					realDb.ref(`admin/${uid}/`).set({
						...temp
					});
				}
				dispatch(getUsers());
			}
		} catch (error) {
			console.log(error);
		}
	};

	console.log(user);
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	const [state, setState] = useState({
		count: [],
		currentSubscription: {},
		token: '',
		openPay: false
	});

	const { count, openPay } = state;
	useEffect(() => {
		setMembership(user);
	}, [user]);

	async function setMembership(user) {
		try {
			const response = await axios.post(firebaseFunctionGetProductsEndpoint);
			// const res = await axios.post(firebaseFunctionGetSubscrioption);

			if (response.data) {
				console.log(response.data);
				if (user.length > 0) {
					if (Object.keys(user[0]).includes('subscriptionInfo')) {
						setState({
							...state,
							count: response.data.data,
							currentSubscription: user[0].subscriptionInfo.response
						});
					} else {
						setState({ ...state, count: response.data.data, currentSubscription: {} });
					}
				} else {
					setState({ ...state, count: response.data.data, currentSubscription: {} });
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	function handleTabChange(token) {
		// setState({ ...state, showPaymentForm: true, token: token });
	}

	function setBuy(token) {
		setState({ ...state, token, openPay: true });
	}

	function setPaymentState(result) {
		console.log(result);
		setState({ ...state, openPay: false, subscriptionInfo: result.data });
		let temp = { ...user[0] };
		let uid = localStorage.getItem('@BELONGTO');
		temp.subscriptionInfo = result.data;

		realDb.ref(`admin/${uid}/`).set({
			...temp
		});
		dispatch(getUsers());
	}

	if (loading) {
		return <FuseLoading />;
	}

	if (data.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no data!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<Header title={title}></Header>}
			content={
				<div className="w-full p-12 flex items-center justify-center">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						{!openPay && (
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<div className="flex">
									{console.log('-----------------------------', count)}
									{count.length > 0 &&
										count.map(item => {
											return (
												<SubscriptionCard
													setBuy={setBuy}
													price={item.amount / 100}
													interval={item.interval_count + ' ' + item.interval}
													token={item.id}
													currentSubscription={state.currentSubscription}
													handleClickOpen={handleClickOpen}
												/>
											);
										})}
								</div>
							</FuseAnimate>
						)}

						{openPay && (
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Elements stripe={stripePromise}>
									<CardElements setPaymentState={setPaymentState} token={state.token} />
								</Elements>
							</FuseAnimate>
						)}
					</FuseAnimateGroup>
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">{'Are you really revoke this user?'}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								You will lost this users data.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								No
							</Button>
							<Button onClick={handleDelete} color="primary" autoFocus>
								Yes
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('subscription', reducer)(Multiline);
