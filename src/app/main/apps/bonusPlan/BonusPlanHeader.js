import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { getUserData } from './store/userSlice';

function ContactsHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ bonusPlan }) => bonusPlan.autoBonus.searchText);
	const mainTheme = useSelector(selectMainTheme);
	const user = useSelector(({bonusPlan})=> bonusPlan.user)
	const [name, setName] = React.useState("")
	React.useEffect(()=>{
		dispatch(getUserData(props.name))
	},[])

	React.useEffect(()=>{
		if(user.length>0){
			setName(user[0].data.displayName)
		}
		if (props.name==='all'){
			setName("Team")
		}
		
	},[user])

	return (
		<div className="flex flex-1 items-center justify-between p-4 sm:p-24">
			<div className="flex flex-shrink items-center sm:w-224">
				<Hidden lgUp>
					<IconButton
						onClick={ev => {
							props.pageLayout.current.toggleLeftSidebar();
						}}
						aria-label="open left sidebar"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden>

				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">money</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
						{`${name} Bonus Plan`}
						</Typography>
					</FuseAnimate>
				</div>
			</div>

			{/* <div className="flex flex-1 items-center justify-center px-8 sm:px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Paper className="flex p-4 items-center w-full max-w-512 h-48 px-8 py-4 rounded-8 shadow">
							<Icon color="action">search</Icon>

							<Input
								placeholder="Search for anything"
								className="flex flex-1 px-16"
								disableUnderline
								fullWidth
								value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={ev => dispatch(setContactsSearchText(ev))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div> */}
		</div>
	);
}

export default ContactsHeader;
