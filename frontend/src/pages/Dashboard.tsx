import React from "react";
import { Typography, Button } from "@mui/material";

import  useUserData, { useUserDataStore }  from "../data/customHooks/useUserData";

const Dashboard = () => {
    const user = useUserData();

    return (
        <>
            <Typography variant="h1">Dashboard de {user && user.firstname}</Typography>
            <Button variant="contained" onClick={() => useUserDataStore.setState({
                user: null
            })}>Logout</Button>
        </>
    )
}

export default Dashboard;