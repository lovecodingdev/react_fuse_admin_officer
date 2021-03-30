import React, { useEffect, useState, useRef } from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

function Header(props) {
	const pageLayout = useRef(null);

	return (
		<div className="flex  justify-between flex-1 px-24 pt-24">
			<div className="flex justify-between items-start">
				<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h4">
					{props.title}
				</Typography>
				{/* <Hidden lgUp>
					<IconButton
						onClick={ev => pageLayout.current.toggleRightSidebar()}
						aria-label="open left sidebar"
						color="inherit"
					>
						<Icon>menu</Icon>
					</IconButton>
				</Hidden> */}
			</div>	
			{props.children}				
		</div>
	);
}

export default Header;
