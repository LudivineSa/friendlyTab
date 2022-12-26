import React from 'react';
import { Typography, Button } from '@mui/material';

import Dashboard from './Dashboard';
import LandingPage from './LandingPage';

import  useUserData, { useUserDataStore }  from '~/data/customHooks/useUserData';

const Homepage = () => {

    const user = useUserData();
    
    return (
        <>
            { user ? <Dashboard /> : <LandingPage /> }
        </>
    )
};

export default Homepage;