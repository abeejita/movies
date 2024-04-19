import {Home, Popular} from '../pages';
import {RouteObject, createBrowserRouter} from "react-router-dom";

import PrivateRouter from './privateRouter';
import PublicRouter from './publicRouter';
import {ROUTES} from './constants';

const routes: RouteObject[] = [
    {
        path: '/', element: <PrivateRouter/>,
        children: [
            {path: ROUTES.HOME, element: <Home/>},
            {path: ROUTES.POPULAR, element: <Popular/>}
        ]
    },
    {
        path: '/login', element: <PublicRouter/>,
        children: [
            {path: '/login', element: <div>Login</div>}
        ]
    }
]

export const router = createBrowserRouter(routes);