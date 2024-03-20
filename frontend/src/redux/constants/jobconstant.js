export const JOB_LOAD_REQUEST = "JOB_LOAD_REQUEST";
export const JOB_LOAD_SUCCESS = "JOB_LOAD_SUCCESS";
export const JOB_LOAD_FAIL = "JOB_LOAD_FAIL";
export const JOB_LOAD_RESET = "JOB_LOAD_RESET";


/* Ces lignes de code sont des exemples de déclarations d'actions dans Redux, appelées "constantes d'action". Elles sont utilisées pour définir des types d'actions uniques dans votre application Redux. Permettez-moi de vous expliquer chacune d'elles :

1. **`JOB_LOAD_REQUEST`** :
   Cette constante représente le type d'action qui indique à votre application qu'une demande de chargement des emplois est en cours. Elle est généralement utilisée pour déclencher le chargement des données depuis une source externe, comme un serveur.

2. **`JOB_LOAD_SUCCESS`** :
   Cette constante représente le type d'action qui indique que le chargement des emplois a réussi avec succès. Elle est généralement utilisée pour transmettre les données chargées à votre application Redux, une fois que la demande de chargement est terminée avec succès.

3. **`JOB_LOAD_FAIL`** :
   Cette constante représente le type d'action qui indique que le chargement des emplois a échoué. Elle est généralement utilisée pour gérer les situations où la demande de chargement rencontre des erreurs, telles qu'une connexion réseau perdue ou une erreur de serveur.

4. **`JOB_LOAD_RESET`** :
   Cette constante représente le type d'action qui indique à votre application de réinitialiser l'état des emplois chargés. Elle est généralement utilisée lorsque vous souhaitez effacer les données des emplois actuellement stockées dans l'état Redux, par exemple, lorsqu'un utilisateur se déconnecte ou lorsqu'une certaine action spécifique est effectuée dans votre application.

En résumé, ces constantes d'action sont utilisées pour définir et identifier différents types d'actions dans votre application Redux. Elles fournissent une manière cohérente de déclencher et de gérer les changements d'état dans votre application, ce qui rend votre code plus lisible, plus maintenable et plus prévisible. */