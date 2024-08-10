// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

// pages
import { LayoutPage } from './pages/layoutPage/LayoutPage';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { HomePage } from './pages/homePage/HomePage';
import { MePage } from './pages/mePage/MePage';
import { LoginPage } from './pages/loginPage/LoginPage';

// css
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routes = createBrowserRouter([
	{
		path: '/', 
		element: <LayoutPage />, 
		errorElement: <ErrorPage />, 
		children: [
			{
				index: true, 
				path: '/', 
				element: <HomePage />, 
			}, 
			{
				path: '/me', 
				element: <MePage />, 
			}, 
			{
				path: '/login', 
				element: <LoginPage />, 
			}
		], 
	}
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();