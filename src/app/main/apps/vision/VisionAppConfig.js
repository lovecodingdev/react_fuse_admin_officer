import React from 'react';
import { Redirect } from 'react-router-dom';

const VisionAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/apps/vision/products',
			component: React.lazy(() => import('./products/Products'))
		},
		{
			path: '/apps/vision',
			component: () => <Redirect to="/apps/vision/products" />
		}
	]
};

export default VisionAppConfig;
