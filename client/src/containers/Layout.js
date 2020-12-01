import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

const routes = [
  {
    link: 'streams',
    path: 'streams',
    component: lazy(() => import('./Streams'))
	},
	// {
  //  link: 'types',
  //  path: 'types',
	// 	component: lazy(() => import('./Types')),
	// 	props: { string: 'test', number: 5 }
	// },
	{
   link: 'typescript',
   path: 'typescript',
	 component: lazy(() => import('./Typescript')),
	 props: { string: 'test', number: 5 }
	},
	{
		link: 'chart',
		path: 'chart',
		component: lazy(() => import('./Chart')),
	 },
];

const Layout = () => {
	const linksList = routes.map((route, index) => {
		return <NavLink key={index} to={`/${route.link}`} activeClassName='linkActive'>{route.link}</NavLink>
	});
	const routesList = routes.map((route, index) => {
		return <Route key={index} path={`/${route.path}`} component={() => <route.component {...route.props}/>} ></Route> 
		}
	);

  return (
    <LayoutWrapper>
			<nav>
				{linksList}
			</nav>
			<div className="mainContent">
				<Suspense fallback={() => <p>Loading...</p>}>
					<Switch>
						{routesList}
					</Switch>
				</Suspense>
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	nav {
		padding: 20px;
		border-bottom: 2px solid #ddd;
		a {
    	border: 2px solid #46b156;
    	border-radius: 5px;
    	color: #46b156;
			display: inline-block;
    	font-size: 14px;
    	font-weight: bold;
			margin-right: 20px;
    	padding: 6px 10px;
    	text-transform: uppercase;	
  	}
		.linkActive {
    	background-color: #46b156;
    	color: #fff;
    }
	}
	.mainContent {
		padding: 20px 20px 20px 20px;
	}
`

export default Layout;