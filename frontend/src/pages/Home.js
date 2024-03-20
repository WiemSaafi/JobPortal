import React, { useEffect, useState } from 'react'; // Importation des bibliothèques React et useState pour gérer les états
import Navbar from '../component/Navbar'; // Importation du composant Navbar
import Header from '../component/Header'; // Importation du composant Header
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'; // Importation des composants MUI
// hooks useSelector et useDispatch
import { useDispatch, useSelector } from 'react-redux'; // Importation des hooks useSelector et useDispatch pour interagir avec Redux
import { jobLoadAction } from '../redux/actions/jobAction'; // Importation de l'action jobLoadAction depuis le fichier d'action jobAction
import { Link, useParams } from 'react-router-dom'; // Importation des composants Link et useParams depuis react-router-dom
import CardElement from '../component/CardElement'; // Importation du composant CardElement
import Footer from '../component/Footer'; // Importation du composant Footer
import LoadingBox from '../component/LoadingBox'; // Importation du composant LoadingBox
import SelectComponent from '../component/SelectComponent'; // Importation du composant SelectComponent
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'; // Importation de l'action jobTypeLoadAction depuis le fichier d'action jobTypeAction
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Importation de l'icône LocationOn depuis MUI

// Définition de la fonction fléchée Home
const Home = () => {    
    // Déclaration des variables d'état et récupération des données depuis Redux avec useSelector
    const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);
    const { palette } = useTheme(); // Récupération du thème MUI
    const dispatch = useDispatch(); // Initialisation du dispatch Redux
    const { keyword, location } = useParams(); // Récupération des paramètres de l'URL

    // Déclaration des états locaux avec useState
    const [page, setPage] = useState(1); // État pour gérer la pagination
    const [cat, setCat] = useState(''); // État pour gérer la catégorie de filtre
    
    // Effet pour charger les offres d'emploi en fonction des paramètres
    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location, dispatch]); // Dépendances de l'effet

    // Effet pour charger les types d'emploi
    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, [dispatch]); // Dépendance de l'effet

    // Fonction pour gérer les changements de la sélection de catégorie d'emploi
    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }
    
    // Structure JSX de la page d'accueil
    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}> {/* Conteneur principal */}
                <Navbar /> {/* Composant de navigation */}
                <Header /> {/* Composant d'en-tête */}
                <Container> {/* Conteneur pour le contenu principal */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}> {/* Conteneur pour les filtres */}
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by category {/* Titre du filtre par catégorie */}
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} /> {/* Composant de sélection de catégorie */}
                            </Card>

                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by location {/* Titre du filtre par emplacement */}
                                    </Typography>
                                    <MenuList> {/* Liste des emplacements */}
                                        {setUniqueLocation && setUniqueLocation.map((location, i) => (
                                            <MenuItem key={i}>
                                                <ListItemIcon>
                                                    <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                </ListItemIcon>
                                                <Link to={`/search/location/${location}`}>{location}</Link>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ flex: 5, p: 2 }}>  {/* Conteneur pour les offres d'emploi */}
                            {loading ? (              // {/* Si les données sont en cours de chargement */}
                                <LoadingBox />
                            ) : jobs && jobs.length === 0 ? ( //{/* Si aucune offre d'emploi n'est disponible */}
                                <Box
                                    sx={{
                                        minHeight: '350px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <h2>No result found!</h2>
                                </Box>
                            ) : ( //{/* Sinon, afficher les offres d'emploi */}
                                jobs && jobs.map((job, i) => (
                                    <CardElement
                                        key={i}
                                        id={job._id}
                                        jobTitle={job.title}
                                        description={job.description}
                                        category={job.jobType ? job.jobType.jobTypeName : "No category"}
                                        location={job.location}
                                    />
                                ))
                            )}
                            <Stack spacing={2} > {/* Composant de pagination */}
                                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Footer /> {/* Pied de page */}
        </>
    )
}

export default Home; // Exportation de la fonction Home
