import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_RESET, JOB_LOAD_SUCCESS } from "../constants/jobconstant"


export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true }
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

//Imaginons que vous ayez une application qui affiche une liste d'emplois.
// L'état géré par ce réducteur serait la liste des emplois à afficher.
// Lorsque l'utilisateur demande à charger la liste des emplois, une action de type JOB_LOAD_REQUEST est envoyée. 
//Une fois les emplois chargés avec succès, une action de type JOB_LOAD_SUCCESS est envoyée avec les données des emplois.
// Si le chargement échoue, une action de type JOB_LOAD_FAIL est envoyée avec un message d'erreur.
// Et enfin, si vous voulez réinitialiser la liste des emplois, une action de type JOB_LOAD_RESET est envoyée. 
//Le réducteur met à jour l'état en conséquence à chaque action reçue.