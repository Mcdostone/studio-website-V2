import { routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'


const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: '/',
	redirectAction: routerActions.replace,
	authenticatedSelector: state => state.auth.authentificated === true && state.auth.user !== undefined,
	wrapperDisplayName: 'UserIsAuthenticated',
	allowRedirectBack: false
});

const adminIsAuthenticated = connectedRouterRedirect({
	redirectPath: '/',
	redirectAction: routerActions.replace,
	authenticatedSelector: state => state.auth.authentificated === true && state.auth.user !== undefined && state.auth.user.canAdmin(),
	wrapperDisplayName: 'AdminIsAuthenticated',
	allowRedirectBack: false
})

export { userIsAuthenticated, adminIsAuthenticated };

/*const isAuthentificated = UserAuthWrapper({
	authSelector: state => state.auth.user && state.auth.authentificated === true,
	wrapperDisplayName: 'isAuthentificated',
	redirectAction: routerActions.replace,
	failureRedirectPath: '/',
	allowRedirectBack: false,
});


const isAdminAuthentificated = UserAuthWrapper({
	authSelector: state => state.auth.user && state.auth.authentificated === true && state.auth.user.role >= 1,
	wrapperDisplayName: 'isAdminAuthentificated',
	redirectAction: routerActions.replace,
	failureRedirectPath: '/',
	allowRedirectBack: false,
});

export { isAuthentificated, isAdminAuthentificated };
*/
