import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();
    const navigateToSubscribe = () => {
        navigate("/subscribe");
    }
    return (
        <>
            <Typography variant="h1">Landing Page</Typography>
            <Button onClick={navigateToSubscribe}>S'inscrire</Button>
        </>
    )
}

export default LandingPage;