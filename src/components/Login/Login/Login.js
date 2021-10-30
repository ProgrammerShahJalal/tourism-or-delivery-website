import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className='mt-5 py-5 text-center'>
            <h2>Please Login</h2>
            <br />
            <button onClick={handleGoogleLogIn} className="regular-btn"><img className='google' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Google Sign In</button>
        </div>
    );
};

export default Login;