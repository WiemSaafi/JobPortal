/* ce code définit un composant appelé NotFound, qui est utilisé pour 
afficher une page "404 Not Found" *****lorsqu'une URL spécifique***** 
n'a pas été trouvée dans votre application. */

import { Box } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const NotFound = () => {
    //Rendu JSX
    return (
        //syntaxe de fragments React  pour englober plusieurs éléments sans ajouter de nœud DOM supplémentaire
        //sx est une propriété spécifique à MUI pour définir des styles en ligne.
        //navbar une barre de navigation pour votre application.
        <> 
        <Navbar /> 
        
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>

                <h1>Page not found!</h1>
            </Box>
            <Footer />
        </>
    )
}

/* En résumé, ce composant NotFound rend une page "404 Not Found"
 avec une barre de navigation en haut, un message "Page not found!" 
 centré verticalement et horizontalement, et un pied de page en bas. 
 Il utilise le composant Box de MUI pour créer un conteneur flexible
  et stylisé pour le message d'erreur. */
export default NotFound
