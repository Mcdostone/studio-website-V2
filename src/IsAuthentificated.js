import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';


export default UserAuthWrapper({
	authSelector: state => state.auth.user,
	wrapperDisplayName: 'IsAuthentificated',
	redirectAction: routerActions.replace,
	failureRedirectPath: '/',
	allowRedirectBack: false,
});
