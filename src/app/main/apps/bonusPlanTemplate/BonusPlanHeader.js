import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { getUserData } from './store/userSlice';
import { addContact } from './store/bonusPlanSlice';
import { showMessage } from 'app/store/fuse/messageSlice';
import {useHistory} from 'react-router-dom'

function ContactsHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ bonusPlanTemplate }) => bonusPlanTemplate.autoBonus.searchText);
	const mainTheme = useSelector(selectMainTheme);
	const user = useSelector(({bonusPlanTemplate})=> bonusPlanTemplate.user)
	const data = useSelector(({bonusPlanTemplate})=> bonusPlanTemplate.autoBonus.data)
	const [name, setName] = React.useState("")
	const history = useHistory()
	const [templateName, setTemplateName] = React.useState("")
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

	const addNewTemplate = () => {
		if(!templateName){
			dispatch(showMessage({ message: 'Please Enter Bonus Plan Template Name!' }))
		} else {
			dispatch(addContact({...data, name: templateName}))
			dispatch(showMessage({ message: 'Successfully Saved!' }))
			setTemplateName("")
			history.goBack()
		}
	}

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
				<div className="">
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/setup/bonus-plan/all"
								color="inherit"
							>
								<Icon className="text-20">
									{ 'arrow_back' }
								</Icon>
								<span className="mx-4">Bonus Plan</span>
							</Typography>
						</FuseAnimate>
				<div className="flex items-center">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						<Icon className="text-32">money</Icon>
					</FuseAnimate>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="h6" className="mx-12 hidden sm:flex">
						{`Bonus Plan Template`}
						</Typography>
					</FuseAnimate>
				</div>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center px-8 sm:px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Paper className="flex p-4 items-center w-full max-w-512 h-48 px-8 py-4 rounded-8 shadow">

							<Input
								placeholder="New Bonus Plan Template Name"
								className="flex flex-1 px-16"
								disableUnderline
								fullWidth
								value={templateName}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={ev => setTemplateName(ev.target.value)}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button
					component={Link}					
					className="whitespace-nowrap normal-case"
					variant="contained"
					color="secondary"
					onClick={addNewTemplate}
				>
					<span className="hidden sm:flex">Save New Bonus Plan Template</span>
					
				</Button>
			</FuseAnimate>

			
		</div>
	);
}

export default ContactsHeader;
