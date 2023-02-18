import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routeConfig.map((routeProps) => <Route key={routeProps.path} {...routeProps} />)}
			</Routes>
		</Suspense>
	);
};
