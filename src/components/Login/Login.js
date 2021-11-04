import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import googleLogo from '../../images/google2.png'
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInWithGoogle, isLoading, setIsLoading } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center my-5 align-items-center">
                <div className="text-center">
                    <img src={googleLogo} alt="" />
                    <h3 className="my-2">Sign in</h3>

                    <button className="btn btn-primary" onClick={handleGoogleSignIn}>Sign with Google</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;