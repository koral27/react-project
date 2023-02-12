import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{routeConfig.map((routeProps) => <Route key={routeProps.path} {...routeProps} />)}
			</Routes>
		</Suspense>
	);
};
