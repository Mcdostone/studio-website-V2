import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';


export const history = createBrowserHistory();
export const routingMiddleware = routerMiddleware(history);

