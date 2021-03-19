import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom'


const HeaderDownLoadButton = props => {
	const history = useHistory()


	return (
		<Tooltip title="Time track excel file download" placement="bottom">
			<IconButton className={clsx('w-40 h-40', props.className)}>
				<a href="https://firebasestorage.googleapis.com/v0/b/insurancewebapptest.appspot.com/o/Timesheet%20Template.xlsx?alt=media&token=8e28b55b-fdca-48bf-baf5-0de84fb2564b"><Icon>download</Icon></a>
			</IconButton>
		</Tooltip>
	);
};

export default HeaderDownLoadButton;
