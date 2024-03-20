//Ce code définit un composant appelé Header, qui semble être l'en-tête de votre application
import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/per.jpg';
import SearchInputEl from './SearchInputEl';
const Header = () => {
//Utilisation du composant styled :
    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main
        }

    ));
    return (
        <>
            <StyleHeader >
                <SearchInputEl/>
            </StyleHeader>
        </>
    )
}

export default Header