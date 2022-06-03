import React from 'react';
import '../styles/LandingPage.css';
import background from '../images/background.png';

const LandingPage = () => {

    return (
        <div className='body' style={
            {
                backgroundImage: `url(` + background + `)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                height: '100vh',
                width: '100%'
            }
        }>
            <a href="/login" className='btn btn-dark centerButton'
                style={{
                    marginTop: '32%',
                    marginLeft: '43%',
                    width: '200px'
                }}>
                Go to Login
            </a>
        </div>
    )

}

export default LandingPage;