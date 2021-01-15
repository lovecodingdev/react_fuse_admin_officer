import React from 'react';
import { Redirect } from 'react-router-dom';

const ECommerceAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		
		{
			path: '/apps/enter-sales/auto-entry',
			component: React.lazy(() => import('./entry/Products'))
		},
		
		{
			path: '/apps/enter-sales/fire-entry',
			component: React.lazy(() => import('./fireEntry/Products'))
		},	
		{
			path: '/apps/enter-sales/life-entry',
			component: React.lazy(() => import('./lifeEntry/Products'))
		},	
		{
			path: '/apps/enter-sales/health-entry',
			component: React.lazy(() => import('./healthEntry/Products'))
		},	
		{
			path: '/apps/enter-sales',
			component: () => <Redirect to="/apps/enter-sales/auto-entry" />
		}
		
		
	]
};

export default ECommerceAppConfig;
