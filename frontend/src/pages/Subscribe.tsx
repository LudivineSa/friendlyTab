import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useUserData, { useUserDataStore } from '~/data/customHooks/useUserData';

import { TextInput } from '~/UI/TextInput';
import FriendlyTabLogo from '~/assets/logo/FriendlyTabLogo';

const Subscribe = () => {
    const { user, registerUser } = useUserDataStore();
    const { isSuccess } = useUserData();

    console.log(isSuccess)
    const navigate = useNavigate();

    if (user) {
        navigate("/dashboard");
    }

    let schema = yup.object().shape({
        name: yup.string().required('Ce champs est obligatoire'),
        lastname: yup.string().required('Ce champs est obligatoire'),
        email: yup.string().email().required('Ce champs est obligatoire'),
        password: yup.string().required('Ce champs est obligatoire').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
          ),
        passwordConfirmation: yup.string().required('Ce champs est obligatoire').oneOf([yup.ref('password'), null], 'Les mots de passe saisis ne correspondent pas')
    });

    const methods = useForm({ resolver: yupResolver(schema)});
    
    const onSubmit = (data: any) => registerUser({
        firstname: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password
    })

    return (
        <Box sx={{mx:"2rem", my: "2rem"}}>
            <Box sx={{marginRight: "auto", marginLeft: "auto", width:"fit-content"}}>
                <FriendlyTabLogo />
            </Box>

            <Paper elevation={3} sx={{backgroundColor:"#F4F4F4", maxWidth: "40rem", marginRight:"auto", marginLeft:"auto", marginTop: "2rem"}} >
                <Box paddingTop="2rem">
                    <Typography variant="h1" sx={{textAlign: "center"}}>Créer un compte {process.env.REACT_APP_TEST}</Typography>
                    <Typography variant="h2" sx={{textAlign: "center"}}>Simplifiez vos remboursements entre amis</Typography>
                </Box>
                <FormProvider {...methods} > 
                    <form>
                        <Box display="flex" flexDirection="column" gap="1.5rem" px="2rem" py="3rem" marginRight="auto" marginLeft="auto" marginTop="1rem">
                            <TextInput label="Prénom" aria-label="name" name="name" />       
                            <TextInput label="Nom" aria-label="lastname" name="lastname" />
                            <TextInput label="Email" aria-label="email" name="email" />
                            <TextInput label="Mot de passe" aria-label="password" name="password" type="password" />
                            <TextInput label="Confirmez le mot de passe" aria-label="password confirmation" name="passwordConfirmation" type="password" />
                            <Button onClick={methods.handleSubmit(onSubmit)}>
                                S'inscrire
                            </Button>
                        </Box>
                    </form>
                </FormProvider>
            </Paper>
        </Box>
    )
};

export default Subscribe;