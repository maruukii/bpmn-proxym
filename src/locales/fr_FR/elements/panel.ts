export default{
    "GENERAL" : {
        "MAIN-TITLE": "Flowable Editeur",
        "NAVIGATION" : {
            "PROCESSES": "Processus",
            "CASEMODELS": "Modèle de cas",
            "FORMS": "Formulaires",
            "DECISION-TABLES": "Tables de décision",
            "APPS": "Apps"
        },
        "TITLE": {
            "SELECT-GROUP" :"Sélectionner un groupe",
            "MATCHING-GROUPS": "Groupes correspondants",
            "FILTER": "Filtre",
            "HISTORY": "Historique"
        },
        "ACTION": {
            "LOGOUT": "Déconnexion",
            "DASHBOARD": "Dashboard",
            "RETURN-TO-LIST": "Afficher toutes les définitions",
            "CANCEL": "Annuler",
            "CLOSE": "Fermer",
            "EDIT": "Editer",
            "SAVE": "Sauver",
            "OPEN": "Ouvrir",
            "OK": "Ok",
            "CONFIRM": "Confirmer",
            "CONFIRM-AND-CLOSE": "Confirmer et fermer",
            "NEW-FORM": "Nouveau formulaire",
            "SELECT-FORM": "Sélectionner un formulaire",
            "CREATE-FORM": "Créer un formulaire",
            "NEW-DECISION-TABLE": "Nouvelle table de décision",
            "CREATE-DECISION-TABLE": "Créer une table de décision"
        },
        "MESSAGE": {
          "SELECT-GROUP-HELP": "Utiliser &uparrow; et &downarrow; pour sélectionner et appuyer sur entrée pour confirmer ",
          "PEOPLE-NO-MATCHING-RESULTS": "Aucun utilisateur correspondant n'a été trouvé",
          "GROUP-NO-MATCHING-RESULTS": "Aucun groupe correspondant n'a été trouvé",
          "GROUP-SOURCE-TYPE": "Groupe source",
          "GROUP-SOURCE-SEARCH-OPTION": "Recherche de Groupe",
          "GROUP-SOURCE-FIELD-OPTION": "Champ de formulaire",
          "No element selected": "Aucun élément sélectionné",
        },
        "OTHERS": {
  "PROCESS": "Processus",
  "PROCESS_NAVIGATOR": "Navigateur de processus",
  "NO_STRUCTURAL_ELEMENTS_USED": "Aucun élément structurel utilisé."
}
    },
        "BPMN" : {
          "TITLE": "Éditeur de processus",
          "DESCRIPTION" : "Éditeur de processus BPMN",
          "PROPERTYPACKAGES" : {
            "PROCESS_IDPACKAGE" : {
              "PROCESS_ID" : {
                "TITLE" : "Identifiant du processus",
                "DESCRIPTION" : "Identifiant unique de la définition du processus."
              }
            },
            "OVERRIDEIDPACKAGE" : {
              "OVERRIDEID" : {
                "TITLE" : "ID",
                "DESCRIPTION" : "Identifiant unique de l'élément."
              }
            },
            "NAMEPACKAGE" : {
              "NAME" : {
                "TITLE" : "Nom",
                "DESCRIPTION" : "Le nom descriptif de l'élément BPMN."
              }
            },
            "DOCUMENTATIONPACKAGE" : {
              "DOCUMENTATION" : {
                "TITLE" : "Documentation",
                "DESCRIPTION" : "Documentation de l'élément BPMN."
              }
            },
            "CATEGORYPACKAGE" : {
              "CATEGORYDEFINITION" : {
                "TITLE" : "Catégorie",
                "DESCRIPTION" : "Catégorie de l'élément BPMN."
              }
            },
            "PROCESS_AUTHORPACKAGE" : {
              "PROCESS_AUTHOR" : {
                "TITLE" : "Auteur du processus",
                "DESCRIPTION" : "Auteur de la définition du processus."
              }
            },
            "PROCESS_VERSIONPACKAGE" : {
              "PROCESS_VERSION" : {
                "TITLE" : "Version du processus (documentation uniquement)",
                "DESCRIPTION" : "Identifiant de version à des fins de documentation."
              }
            },
            "PROCESS_HISTORYLEVELPACKAGE" : {
              "PROCESS_HISTORYLEVEL" : {
                "TITLE" : "Définir un niveau d'historique spécifique pour cette définition de processus",
                "DESCRIPTION" : "Définir un niveau d'historique spécifique pour cette définition de processus"
              }
            },
            "ISEXECUTABLEPACKAGE" : {
              "ISEXECUTABLE" : {
                "TITLE" : "Est exécutable",
                "DESCRIPTION" : "Le processus est-il exécutable ?"
              }
            },
            "PROCESS_POTENTIALSTARTERUSERPACKAGE" : {
              "PROCESS_POTENTIALSTARTERUSER" : {
                "TITLE" : "Utilisateur potentiel initiateur",
                "DESCRIPTION" : "Quel utilisateur peut démarrer le processus ?"
              }
            },
            "PROCESS_POTENTIALSTARTERGROUPPACKAGE" : {
              "PROCESS_POTENTIALSTARTERGROUP" : {
                "TITLE" : "Groupe potentiel initiateur",
                "DESCRIPTION" : "Quel groupe peut démarrer le processus ?"
              }
            },
            "PROCESS_NAMESPACEPACKAGE" : {
              "PROCESS_NAMESPACE" : {
                "TITLE" : "Espace de noms cible",
                "DESCRIPTION" : "Espace de noms cible pour la définition du processus."
              }
            },
            "PROCESS_ISEAGEREXECUTIONFETCHPACKAGE" : {
              "ISEAGEREXECUTIONFETCH" : {
                "TITLE" : "Récupération d'exécution avide",
                "DESCRIPTION" : "Activer la récupération d'exécution avide pour cette définition de processus ?"
              }
            },
            "ASYNCHRONOUSDEFINITIONPACKAGE" : {
              "ASYNCHRONOUSDEFINITION" : {
                "TITLE" : "Asynchrone",
                "DESCRIPTION" : "Définir l'activité comme asynchrone."
              }
            },
            "DATAPROPERTIESPACKAGE" : {
              "DATAPROPERTIES" : {
                "TITLE" : "Objets de données",
                "DESCRIPTION" : "Définition des propriétés des objets de données"
              }
            },
            "EXCLUSIVEDEFINITIONPACKAGE" : {
              "EXCLUSIVEDEFINITION" : {
                "TITLE" : "Exclusif",
                "DESCRIPTION" : "Définir l'activité comme exclusive."
              }
            },
            "EXECUTIONLISTENERSPACKAGE" : {
              "EXECUTIONLISTENERS" : {
                "TITLE" : "Écouteurs d'exécution",
                "DESCRIPTION" : "Écouteurs pour une activité, un processus, un flux séquentiel, un événement de début et de fin.",
                "EVENT":{
            "START":"début",
            "END":"fin",
            "TAKE":"prendre"}
              }
            },
            "TASKLISTENERSPACKAGE" : {
              "TASKLISTENERS" : {
                "TITLE" : "Écouteurs de tâche",
                "DESCRIPTION" : "Écouteurs pour une tâche utilisateur"
              }
            },
            "EVENTLISTENERSPACKAGE" : {
              "EVENTLISTENERS" : {
                "TITLE" : "Écouteurs d'événements",
                "DESCRIPTION" : "Écouteurs pour tout événement survenant dans le moteur Flowable. Il est également possible de renvoyer l'événement comme un signal, un message ou un événement d'erreur"
              }
            },
            "USERTASKASSIGNMENTPACKAGE" : {
              "USERTASKASSIGNMENT" : {
                "TITLE" : "Assignations",
                "DESCRIPTION" : "Définition d'assignation pour la tâche utilisateur"
              }
            },
            "FORMPROPERTIESPACKAGE" : {
              "FORMPROPERTIES" : {
                "TITLE" : "Propriétés de formulaire",
                "DESCRIPTION" : "Définition du formulaire avec une liste de propriétés de formulaire"
              }
            },
            "FORMKEYDEFINITIONPACKAGE" : {
              "FORMKEYDEFINITION" : {
                "TITLE" : "Clé de formulaire",
                "DESCRIPTION" : "Clé de formulaire fournissant une référence à un formulaire."
              }
            },
            "FORMFIELDVALIDATIONPACKAGE" : {
              "FORMFIELDVALIDATION" : {
                "TITLE" : "Valider les champs du formulaire",
                "DESCRIPTION" : "Valider les champs du formulaire lors de la soumission. (valeurs autorisées : 'true', 'false' ou expression)"
              }
            },
            "DUEDATEDEFINITIONPACKAGE" : {
              "DUEDATEDEFINITION" : {
                "TITLE" : "Date d'échéance",
                "DESCRIPTION" : "Date d'échéance de la tâche utilisateur."
              }
            },
            "PRIORITYDEFINITIONPACKAGE" : {
              "PRIORITYDEFINITION" : {
                "TITLE" : "Priorité",
                "DESCRIPTION" : "Priorité de la tâche utilisateur."
              }
            },
            "TASKIDVARIABLENAMEPACKAGE": {
              "TASKIDVARIABLENAME": {
                "TITLE": "Variable d'ID",
                "DESCRIPTION": "Si défini, l'ID de la tâche sera stocké dans cette variable"
              }
            },
            "SERVICETASKCLASSPACKAGE" : {
              "SERVICETASKCLASS" : {
                "TITLE" : "Classe",
                "DESCRIPTION" : "Classe implémentant la logique de la tâche de service."
              }
            },
            "SERVICETASKEXPRESSIONPACKAGE" : {
              "SERVICETASKEXPRESSION" : {
                "TITLE" : "Expression",
                "DESCRIPTION" : "Logique de tâche de service définie avec une expression."
              }
            },
            "SERVICETASKDELEGATEEXPRESSIONPACKAGE" : {
              "SERVICETASKDELEGATEEXPRESSION" : {
                "TITLE" : "Expression déléguée",
                "DESCRIPTION" : "Logique de tâche de service définie avec une expression déléguée."
              }
            },
            "SERVICETASKFAILEDJOBRETRYTIMECYCLEPACKAGE" : {
              "SERVICETASKFAILEDJOBRETRYTIMECYCLE" : {
                "TITLE" : "Cycle de temps de réessai de tâche échouée",
                "DESCRIPTION" : "Logique de tâche de service définie avec un cycle de temps de réessai de tâche échouée."
              }
            },
            "SERVICETASKFIELDSPACKAGE" : {
              "SERVICETASKFIELDS" : {
                "TITLE" : "Champs de classe",
                "DESCRIPTION" : "Extensions de champ"
              }
            },
            "SERVICETASKEXCEPTIONSPACKAGE" : {
              "SERVICETASKEXCEPTIONS" : {
                "TITLE" : "Exceptions",
                "DESCRIPTION" : "Exceptions mappées"
              }
            },
            "SERVICETASKRESULTVARIABLEPACKAGE" : {
              "SERVICETASKRESULTVARIABLE" : {
                "TITLE" : "Nom de la variable de résultat",
                "DESCRIPTION" : "Nom de la variable de processus pour stocker le résultat de la tâche de service."
              },
              "SERVICETASKUSELOCALSCOPEFORRESULTVARIABLE" : {
                "TITLE" : "Utiliser la portée locale pour la variable de résultat",
                "DESCRIPTION" : "Indique que la variable de résultat doit être enregistrée comme une variable locale"
              }
            },
            "SERVICETASKTRIGGERABLEPACKAGE" : {
              "SERVICETASKTRIGGERABLE" : {
                "TITLE" : "Définir la tâche de service comme déclenchable",
                "DESCRIPTION" : "Définit la tâche de service comme déclenchable"
              }
            },
            "SERVICETASKSTORERESULTVARIABLETRANSIENTPACKAGE" : {
              "SERVICETASKSTORERESULTVARIABLETRANSIENT" : {
                "TITLE" : "Stocker la variable de résultat de manière transitoire",
                "DESCRIPTION" : "Indique que le résultat de l'expression ne sera pas persistant à la fin de la transaction de base de données."
              }
            },
            "SCRIPTFORMATPACKAGE" : {
              "SCRIPTFORMAT" : {
                "TITLE" : "Format de script",
                "DESCRIPTION" : "Format de script de la tâche de script."
              }
            },
            "SCRIPTTEXTPACKAGE" : {
              "SCRIPTTEXT" : {
                "TITLE" : "Script",
                "DESCRIPTION" : "Texte du script de la tâche de script."
              }
            },
            "SCRIPTAUTOSTOREVARIABLESPACKAGE" : {
              "SCRIPTAUTOSTOREVARIABLES" : {
                "TITLE" : "Stocker automatiquement les variables",
                "DESCRIPTION" : "Stocker automatiquement toutes les variables de script dans le processus."
              }
            },
            "SHELLCOMMANDPACKAGE" : {
              "SHELLCOMMAND" : {
                "TITLE" : "Commande",
                "DESCRIPTION" : "Commande de la tâche shell"
              }
            },
            "SHELLARG1PACKAGE" : {
              "SHELLARG1" : {
                "TITLE" : "Argument 1",
                "DESCRIPTION" : "Argument 1 de la commande shell"
              }
            },
            "SHELLARG2PACKAGE" : {
              "SHELLARG2" : {
                "TITLE" : "Argument 2",
                "DESCRIPTION" : "Argument 2 de la commande shell"
              }
            },
            "SHELLARG3PACKAGE" : {
              "SHELLARG3" : {
                "TITLE" : "Argument 3",
                "DESCRIPTION" : "Argument 3 de la commande shell"
              }
            },
            "SHELLARG4PACKAGE" : {
              "SHELLARG4" : {
                "TITLE" : "Argument 4",
                "DESCRIPTION" : "Argument 4 de la commande shell"
              }
            },
            "SHELLARG5PACKAGE" : {
              "SHELLARG5" : {
                "TITLE" : "Argument 5",
                "DESCRIPTION" : "Argument 5 de la commande shell"
              }
            },
            "SHELLWAITPACKAGE" : {
              "SHELLWAIT" : {
                "TITLE" : "Attendre",
                "DESCRIPTION" : "Indicateur pour attendre la fin de l'exécution de la commande shell"
              }
            },
            "SHELLOUTPUTVARIABLEPACKAGE" : {
              "SHELLOUTPUTVARIABLE" : {
                "TITLE" : "Variable de sortie",
                "DESCRIPTION" : "Variable pour stocker la sortie de la commande shell"
              }
            },
            "SHELLERRORCODEVARIABLEPACKAGE" : {
              "SHELLERRORCODEVARIABLE" : {
                "TITLE" : "Variable de code d'erreur",
                "DESCRIPTION" : "Variable pour stocker le code d'erreur de la commande shell"
              }
            },
            "SHELLREDIRECTERRORPACKAGE" : {
              "SHELLREDIRECTERROR" : {
                "TITLE" : "Rediriger les erreurs",
                "DESCRIPTION" : "Si vrai, fusionne la sortie d'erreur avec la sortie standard"
              }
            },
            "SHELLCLEANENVPACKAGE" : {
              "SHELLCLEANENV" : {
                "TITLE" : "Environnement propre",
                "DESCRIPTION" : "Nettoyer l'environnement d'exécution shell"
              }
            },
            "SHELLDIRECTORYPACKAGE" : {
              "SHELLDIRECTORY" : {
                "TITLE" : "Répertoire",
                "DESCRIPTION" : "Répertoire de travail du processus shell"
              }
            },
            "RULETASK_RULESPACKAGE" : {
              "RULETASK_RULES" : {
                "TITLE" : "Règles",
                "DESCRIPTION" : "Règles de la tâche de règle."
              }
            },
            "RULETASK_VARIABLES_INPUTPACKAGE" : {
              "RULETASK_VARIABLES_INPUT" : {
                "TITLE" : "Variables d'entrée",
                "DESCRIPTION" : "Variables d'entrée de la tâche de règle."
              }
            },
            "RULETASK_EXCLUDEPACKAGE" : {
              "RULETASK_EXCLUDE" : {
                "TITLE" : "Exclure",
                "DESCRIPTION" : "Utiliser la propriété rules comme exclusion."
              }
            },
            "RULETASK_RESULTPACKAGE" : {
              "RULETASK_RESULT" : {
                "TITLE" : "Variable de résultat",
                "DESCRIPTION" : "Variable de résultat de la tâche de règle."
              }
            },
            "MAILTASKHEADERSPACKAGE" : {
              "MAILTASKHEADERS" : {
                "TITLE" : "En-têtes",
                "DESCRIPTION" : "En-têtes de mail séparés par des lignes (Par exemple - X-Attribute: value)."
              }
            },
            "MAILTASKTOPACKAGE" : {
              "MAILTASKTO" : {
                "TITLE" : "À",
                "DESCRIPTION" : "Les destinataires de l'e-mail. Plusieurs destinataires sont définis dans une liste séparée par des virgules."
              }
            },
            "MAILTASKFROMPACKAGE" : {
              "MAILTASKFROM" : {
                "TITLE" : "De",
                "DESCRIPTION" : "L'adresse e-mail de l'expéditeur. Si non fournie, l'adresse from configurée par défaut est utilisée."
              }
            },
            "MAILTASKSUBJECTPACKAGE" : {
              "MAILTASKSUBJECT" : {
                "TITLE" : "Objet",
                "DESCRIPTION" : "L'objet de l'e-mail."
              }
            },
            "MAILTASKCCPACKAGE" : {
              "MAILTASKCC" : {
                "TITLE" : "Cc",
                "DESCRIPTION" : "Les cc de l'e-mail. Plusieurs destinataires sont définis dans une liste séparée par des virgules"
              }
            },
            "MAILTASKBCCPACKAGE" : {
              "MAILTASKBCC" : {
                "TITLE" : "Cci",
                "DESCRIPTION" : "Les cci de l'e-mail. Plusieurs destinataires sont définis dans une liste séparée par des virgules"
              }
            },
            "MAILTASKTEXTPACKAGE" : {
              "MAILTASKTEXT" : {
                "TITLE" : "Texte",
                "DESCRIPTION" : "Le contenu de l'e-mail, dans le cas où on a besoin d'envoyer des e-mails en texte brut. Peut être utilisé en combinaison avec html, pour les clients e-mail qui ne supportent pas le contenu riche. Le client reviendra alors à cette alternative en texte seul."
              },
              "MAILTASKTEXTVAR" : {
                "TITLE" : "VariableTexte",
                "DESCRIPTION" : "Le nom d'une variable de processus qui contient le texte qui est le contenu de l'e-mail, dans le cas où on a besoin d'envoyer des e-mails en texte brut. Peut être utilisé en combinaison avec html, pour les clients e-mail qui ne supportent pas le contenu riche. Le client reviendra alors à cette alternative en texte seul."
              }
            },
            "MAILTASKHTMLPACKAGE" : {
              "MAILTASKHTML" : {
                "TITLE" : "Html",
                "DESCRIPTION" : "Un morceau de HTML qui est le contenu de l'e-mail."
              },
              "MAILTASKHTMLVAR" : {
                "TITLE" : "VariableHtml",
                "DESCRIPTION" : "Le nom d'une variable de processus qui contient le HTML qui est le contenu de l'e-mail."
              }
            },
            "MAILTASKCHARSETPACKAGE" : {
              "MAILTASKCHARSET" : {
                "TITLE" : "Jeu de caractères",
                "DESCRIPTION" : "Permet de changer le jeu de caractères de l'e-mail, ce qui est nécessaire pour de nombreuses langues non anglaises."
              }
            },
            "HTTPTASKREQUESTMETHODPACKAGE" : {
              "HTTPTASKREQUESTMETHOD" : {
                "TITLE" : "Méthode de requête",
                "DESCRIPTION" : "Méthode de requête (Par exemple - GET, POST, PUT etc)."
              }
            },
            "HTTPTASKREQUESTURLPACKAGE" : {
              "HTTPTASKREQUESTURL" : {
                "TITLE" : "URL de requête",
                "DESCRIPTION" : "URL de requête (Par exemple - http://flowable.org)."
              }
            },
            "HTTPTASKREQUESTHEADERSPACKAGE" : {
              "HTTPTASKREQUESTHEADERS" : {
                "TITLE" : "En-têtes de requête",
                "DESCRIPTION" : "En-têtes de requête HTTP séparés par des lignes (Par exemple - Content-Type: application/json)."
              }
            },
            "HTTPTASKREQUESTBODYPACKAGE" : {
              "HTTPTASKREQUESTBODYPACKAGE" : {
                "TITLE" : "Corps de requête",
                "DESCRIPTION" : "Corps de requête (Par exemple- ${sampleBody})."
              }
            },
            "HTTPTASKREQUESTBODYENCODINGPACKAGE" : {
              "HTTPTASKREQUESTBODYENCODING" : {
                "TITLE" : "Encodage du corps de requête",
                "DESCRIPTION" : "Encodage du corps de requête (Par exemple- UTF-8)."
              }
            },
            "HTTPTASKREQUESTTIMEOUTPACKAGE" : {
              "HTTPTASKREQUESTTIMEOUT" : {
                "TITLE" : "Délai d'attente de la requête",
                "DESCRIPTION" : "Délai d'attente en millisecondes pour la requête (Par exemple - 5000)."
              }
            },
            "HTTPTASKDISALLOWREDIRECTSPACKAGE" : {
              "HTTPTASKDISALLOWREDIRECTS" : {
                "TITLE" : "Interdire les redirections",
                "DESCRIPTION" : "Indicateur pour interdire les redirections HTTP."
              }
            },
            "HTTPTASKFAILSTATUSCODESPACKAGE" : {
              "HTTPTASKFAILSTATUSCODES" : {
                "TITLE" : "Codes d'état d'échec",
                "DESCRIPTION" : "Liste séparée par des virgules des codes d'état HTTP à réessayer, par exemple 400,5XX."
              }
            },
            "HTTPTASKHANDLESTATUSCODESPACKAGE" : {
              "HTTPTASKHANDLESTATUSCODES" : {
                "TITLE" : "Codes d'état à gérer",
                "DESCRIPTION" : "Liste séparée par des virgules des codes d'état HTTP à ignorer, par exemple 404,3XX."
              }
            },
            "HTTPTASKIGNOREEXCEPTIONPACKAGE" : {
              "HTTPTASKIGNOREEXCEPTION" : {
                "TITLE" : "Ignorer les exceptions",
                "DESCRIPTION" : "Indicateur pour ignorer les exceptions."
              }
            },
            "HTTPTASKSAVERESPONSEPARAMETERSTRANSIENTPACKAGE" : {
              "HTTPTASKSAVERESPONSEPARAMETERSTRANSIENT" : {
                "TITLE" : "Enregistrer la réponse comme une variable transitoire",
                "DESCRIPTION" : "Indique que les variables de réponse doivent être stockées de manière transitoire"
              }
            },
            "HTTPTASKSAVERESPONSEASJSONPACKAGE" : {
              "HTTPTASKSAVERESPONSEASJSON" : {
                "TITLE" : "Enregistrer la réponse en JSON",
                "DESCRIPTION" : "Indique que la variable de réponse doit être stockée comme une variable JSON au lieu d'une chaîne"
              }
            },
            "HTTPTASKPARALLELINSAMETRANSACTIONPACKAGE" : {
              "HTTPTASKPARALLELINSAMETRANSACTION" : {
                "TITLE" : "Exécuter en parallèle dans la même transaction",
                "DESCRIPTION" : "Indique que l'appel HTTP doit être effectué en parallèle dans la même transaction. Cela signifie que lors de l'utilisation de passerelles parallèles, plusieurs tâches HTTP sont exécutées en même temps dans la même transaction et donc l'exécution globale du processus est plus rapide."
              }
            },
            "SKIPEXPRESSIONPACKAGE" : {
              "SKIPEXPRESSION" : {
                "TITLE" : "Expression de saut",
                "DESCRIPTION" : "Sauter une exécution d'expression associée à une tâche ou association ou non."
              }
            },
            "HTTPTASKRESPONSEVARIABLENAMEPACKAGE" : {
              "HTTPTASKRESPONSEVARIABLENAME" : {
                "TITLE" : "Nom de la variable de réponse",
                "DESCRIPTION" : "Définir le nom de la variable pour stocker la réponse http."
              }
            },
            "HTTPTASKSAVEREQUESTVARIABLESPACKAGE" : {
              "HTTPTASKSAVEREQUESTVARIABLES" : {
                "TITLE" : "Enregistrer les variables de requête",
                "DESCRIPTION" : "Indicateur pour enregistrer les variables de requête."
              }
            },
            "HTTPTASKSAVERESPONSEPARAMETERSPACKAGE" : {
              "HTTPTASKSAVERESPONSEPARAMETERS" : {
                "TITLE" : "Enregistrer le statut de réponse, les en-têtes",
                "DESCRIPTION" : "Indicateur pour enregistrer le statut de réponse, les en-têtes etc."
              }
            },
            "HTTPTASKRESULTVARIABLEPREFIXPACKAGE" : {
              "HTTPTASKRESULTVARIABLEPREFIX" : {
                "TITLE" : "Préfixe de variable de résultat",
                "DESCRIPTION" : "Préfixe pour les noms des variables d'exécution."
              }
            },
            "CALLACTIVITYCALLEDELEMENTPACKAGE" : {
              "CALLACTIVITYCALLEDELEMENT" : {
                "TITLE" : "Élément appelé",
                "DESCRIPTION" : "Référence de processus."
              }
            },
            "CALLACTIVITYCALLEDELEMENTTYPEPACKAGE" : {
              "CALLACTIVITYCALLEDELEMENTTYPE" : {
                "TITLE" : "Type d'élément appelé",
                "DESCRIPTION" : "Type de la référence de processus utilisée."
              }
            },
            "CALLACTIVITYINPARAMETERSPACKAGE" : {
              "CALLACTIVITYINPARAMETERS" : {
                "TITLE" : "Paramètres d'entrée",
                "DESCRIPTION" : "Définition des paramètres d'entrée"
              }
            },
            "CALLACTIVITYOUTPARAMETERSPACKAGE" : {
              "CALLACTIVITYOUTPARAMETERS" : {
                "TITLE" : "Paramètres de sortie",
                "DESCRIPTION" : "Définition des paramètres de sortie"
              }
            },
            "CALLACTIVITYINHERITVARIABLESPACKAGE" : {
              "CALLACTIVITYINHERITVARIABLES" : {
                "TITLE" : "Hériter des variables dans le sous-processus",
                "DESCRIPTION" : "Hériter des variables du processus parent dans le sous-processus."
              }
            },
            "CALLACTIVITYSAMEDEPLOYMENTPACKAGE" : {
              "CALLACTIVITYSAMEDEPLOYMENT" : {
                "TITLE" : "Démarrer le processus référencé depuis le même déploiement.",
                "DESCRIPTION" : "Utiliser le processus référencé depuis le même déploiement."
              }
            },
            "CALLACTIVITYFALLBACKTODEFAULTTENANTPACKAGE" : {
              "CALLACTIVITYFALLBACKTODEFAULTTENANT" : {
                "TITLE" : "Revenir au locataire par défaut",
                "DESCRIPTION" : "Rechercher la définition par clé dans le locataire par défaut lorsque la recherche dans le locataire actuel échoue."
              }
            },
            "CALLACTIVITYIDVARIABLENAMEPACKAGE": {
              "CALLACTIVITYIDVARIABLENAME": {
                "TITLE": "Variable d'ID",
                "DESCRIPTION": "Si défini, l'ID de l'instance démarrée sera stocké dans cette variable"
              }
            },
            "CALLACTIVITYPROCESSINSTANCENAMEPACKAGE" : {
              "CALLACTIVITYPROCESSINSTANCENAME" : {
                "TITLE" : "Nom de l'instance de processus",
                "DESCRIPTION" : "Une expression qui se résout en le nom de l'instance de processus enfant"
              }
            },
            "CALLACTIVITYINHERITBUSINESSKEYPACKAGE" : {
              "CALLACTIVITYINHERITBUSINESSKEY" : {
                "TITLE" : "Hériter de la clé métier",
                "DESCRIPTION" : "Hériter de la clé métier du processus parent."
              }
            },
            "CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERSPACKAGE" : {
              "CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERS" : {
                "TITLE" : "Utiliser la portée locale pour les paramètres de sortie",
                "DESCRIPTION" : "Utiliser la portée de variable locale pour les paramètres de sortie."
              }
            },
            "CALLACTIVITYBUSINESSKEYPACKAGE" : {
              "CALLACTIVITYBUSINESSKEY" : {
                "TITLE" : "Expression de clé métier",
                "DESCRIPTION" : "Une expression qui se résout en une clé métier pour l'instance de processus enfant"
              }
            },
            "CALLACTIVITYCOMPLETEASYNCPACKAGE" : {
              "CALLACTIVITYCOMPLETEASYNC" : {
                "TITLE" : "Terminer de manière asynchrone",
                "DESCRIPTION" : "Si défini, la fin du processus enfant et la complétion de l'activité d'appel se font de manière asynchrone. Utile lors de l'utilisation d'une instance multiple parallèle avec une définition de processus appelée qui a des tâches asynchrones."
              }
            },
            "CAMELTASKCAMELCONTEXTPACKAGE" : {
              "CAMELTASKCAMELCONTEXT" : {
                "TITLE" : "Contexte Camel",
                "DESCRIPTION" : "Une définition de contexte Camel optionnelle, si laissée vide, la valeur par défaut est utilisée."
              }
            },
            "MULETASKENDPOINTURLPACKAGE" : {
              "MULETASKENDPOINTURL" : {
                "TITLE" : "URL du point de terminaison",
                "DESCRIPTION" : "Une URL de point de terminaison requise pour envoyer le message à Mule."
              }
            },
            "MULETASKLANGUAGEPACKAGE" : {
              "MULETASKLANGUAGE" : {
                "TITLE" : "Langage",
                "DESCRIPTION" : "Une définition requise pour le langage afin de résoudre l'expression de charge utile, comme juel."
              }
            },
            "MULETASKPAYLOADEXPRESSIONPACKAGE" : {
              "MULETASKPAYLOADEXPRESSION" : {
                "TITLE" : "Expression de charge utile",
                "DESCRIPTION" : "Une définition requise pour la charge utile du message envoyé à Mule."
              }
            },
            "MULETASKRESULTVARIABLEPACKAGE" : {
              "MULETASKRESULTVARIABLE" : {
                "TITLE" : "Variable de résultat",
                "DESCRIPTION" : "Une variable de résultat optionnelle pour la charge utile retournée."
              }
            },
            "CONDITIONSEQUENCEFLOWPACKAGE" : {
              "CONDITIONSEQUENCEFLOWPACKAGE" : {
                "TITLE" : "Condition de flux",
                "DESCRIPTION" : "La condition du flux séquentiel"
              }
            },
            "DEFAULTFLOWPACKAGE" : {
              "DEFAULTFLOW" : {
                "TITLE" : "Flux par défaut",
                "DESCRIPTION" : "Définir le flux séquentiel comme par défaut"
              }
            },
            "CONDITIONALFLOWPACKAGE" : {
              "CONDITIONALFLOW" : {
                "TITLE" : "Flux conditionnel",
                "DESCRIPTION" : "Définir le flux séquentiel avec une condition"
              }
            },
            "TIMERCYCLEDEFINITIONPACKAGE" : {
              "TIMERCYCLEDEFINITION" : {
                "TITLE" : "Cycle temporel (ex. R3/PT10H)",
                "DESCRIPTION" : "Définir le minuteur avec un cycle ISO-8601."
              }
            },
            "TIMERDATEDEFINITIONPACKAGE" : {
              "TIMERDATEDEFINITION" : {
                "TITLE" : "Date temporelle en ISO-8601",
                "DESCRIPTION" : "Définir le minuteur avec une définition de date ISO-8601."
              }
            },
            "TIMERDURATIONDEFINITIONPACKAGE" : {
              "TIMERDURATIONDEFINITION" : {
                "TITLE" : "Durée temporelle (ex. PT5M)",
                "DESCRIPTION" : "Définir le minuteur avec une durée ISO-8601."
              }
            },
            "TIMERENDDATEDEFINITIONPACKAGE" : {
              "TIMERENDDATEDEFINITION" : {
                "TITLE" : "Date de fin temporelle en ISO-8601",
                "DESCRIPTION" : "Définir le minuteur avec une durée ISO-8601."
              }
            },
            "MESSAGEREFPACKAGE" : {
              "MESSAGEREF" : {
                "TITLE" : "Référence de message",
                "DESCRIPTION" : "Définir le nom du message."
              }
            },
            "MESSAGEEXPRESSIONPACKAGE" : {
              "MESSAGEEXPRESSION" : {
                "TITLE" : "Expression de message",
                "DESCRIPTION" : "Résout l'événement de message au moment de l'exécution basé sur une expression."
              }
            },
            "SIGNALREFPACKAGE" : {
              "SIGNALREF" : {
                "TITLE" : "Référence de signal",
                "DESCRIPTION" : "Définir le nom du signal."
              }
            },
            "COMPENSATIONACTIVITYREFPACKAGE" : {
              "COMPENSATIONACTIVITYREF" : {
                "TITLE" : "Référence d'activité de compensation",
                "DESCRIPTION" : "Définir la référence d'activité."
              }
            },
            "SIGNALEXPRESSIONPACKAGE" : {
              "SIGNALEXPRESSION" : {
                "TITLE" : "Expression de signal",
                "DESCRIPTION" : "Résout l'événement de signal au moment de l'exécution basé sur une expression."
              }
            },
            "ERRORREFPACKAGE" : {
              "ERRORREF" : {
                "TITLE" : "Référence d'erreur",
                "DESCRIPTION" : "Définir le nom de l'erreur."
              }
            },
            "ERRORVARIABLEPACKAGE" : {
              "ERRORVARIABLENAME" : {
                "TITLE" : "Nom de la variable d'erreur",
                "DESCRIPTION" : "Stocke le code d'erreur BPMN dans une variable avec le nom donné."
              },          
              "ERRORVARIABLETRANSIENT" : {
                "TITLE" : "Variable d'erreur transitoire",
                "DESCRIPTION" : "Indique si la variable d'erreur définie sera stockée de manière transitoire."
              },
              "ERRORVARIABLELOCALSCOPE" : {
                "TITLE" : "Portée locale de la variable d'erreur",
                "DESCRIPTION" : "Indique si la variable d'erreur définie sera stockée dans une portée locale."
              }          
            },
            "ESCALATIONREFPACKAGE" : {
              "ESCALATIONREF" : {
                "TITLE" : "Référence d'escalade",
                "DESCRIPTION" : "Définir le nom de l'escalade."
              }
            },
            "CONDITIONALEVENTPACKAGE" : {
              "CONDITION" : {
                "TITLE" : "Expression de condition",
                "DESCRIPTION" : "Définir l'expression de condition pour l'événement conditionnel."
              }
            },
            "CANCELACTIVITYPACKAGE" : {
              "CANCELACTIVITY" : {
                "TITLE" : "Annuler l'activité",
                "DESCRIPTION" : "L'activité doit-elle être annulée"
              }
            },
            "INITIATORPACKAGE" : {
              "INITIATOR" : {
                "TITLE" : "Initiateur",
                "DESCRIPTION" : "Initiateur du processus."
              }
            },
            "TEXTPACKAGE" : {
              "TEXT" : {
                "TITLE" : "Texte",
                "DESCRIPTION" : "Le texte de l'annotation de texte."
              }
            },
            "MULTIINSTANCE_TYPEPACKAGE" : {
              "MULTIINSTANCE_TYPE" : {
                "TITLE" : "Type multi-instance",
                "DESCRIPTION" : "L'exécution répétée d'activité (parallèle ou séquentielle) peut être affichée à travers différents types de boucle",
                "PARALLEL" : "Parallèle",
                "SEQUENTIAL" : "Séquentiel",
                "NONE" : "Aucun"
              },
              "VARIABLE_AGGREGATIONS" : {
                "TITLE" : "Agrégations de variables (Multi-instance)",
                "DESCRIPTION" : "Définition d'agrégation de variables lorsque l'instance multiple se termine."
              }
            },
            "MULTIINSTANCE_CARDINALITYPACKAGE" : {
              "MULTIINSTANCE_CARDINALITY" : {
                "TITLE" : "Cardinalité (Multi-instance)",
                "DESCRIPTION" : "Définir la cardinalité de l'instance multiple."
              }
            },
            "MULTIINSTANCE_COLLECTIONPACKAGE" : {
              "MULTIINSTANCE_COLLECTION" : {
                "TITLE" : "Collection (Multi-instance)",
                "DESCRIPTION" : "Définir la collection pour l'instance multiple."
              }
            },
            "MULTIINSTANCE_VARIABLEPACKAGE" : {
              "MULTIINSTANCE_VARIABLE" : {
                "TITLE" : "Variable d'élément (Multi-instance)",
                "DESCRIPTION" : "Définir la variable d'élément pour l'instance multiple."
              }
            },
            "MULTIINSTANCE_CONDITIONPACKAGE" : {
              "MULTIINSTANCE_CONDITION" : {
                "TITLE" : "Condition d'achèvement (Multi-instance)",
                "DESCRIPTION" : "Définir la condition d'achèvement pour l'instance multiple."
              }
            },
            "ISFORCOMPENSATIONPACKAGE" : {
              "ISFORCOMPENSATION" : {
                "TITLE" : "Est pour compensation",
                "DESCRIPTION" : "Un indicateur qui identifie si cette activité est destinée à des fins de compensation."
              }
            },
            "SEQUENCEFLOWORDERPACKAGE" : {
              "SEQUENCEFLOWORDER" : {
                "TITLE" : "Ordre des flux",
                "DESCRIPTION" : "Ordonner les flux séquentiels sortants."
              }
            },
            "SIGNALDEFINITIONSPACKAGE" : {
              "SIGNALDEFINITIONS" : {
                "TITLE" : "Définitions de signal",
                "DESCRIPTION" : "Définitions de signal"
              }
            },
            "MESSAGEDEFINITIONSPACKAGE" : {
              "MESSAGEDEFINITIONS" : {
                "TITLE" : "Définitions de message",
                "DESCRIPTION" : "Définitions de message"
              }
            },
            "ESCALATIONDEFINITIONSPACKAGE" : {
              "ESCALATIONDEFINITIONS" : {
                "TITLE" : "Définitions d'escalade",
                "DESCRIPTION" : "Définitions d'escalade"
              }
            },
            "EVENTREGISTRYPACKAGE" : {
              "EVENTKEY" : {
                "TITLE" : "Clé d'événement",
                "DESCRIPTION" : "Définition de la clé d'événement"
              },
              "EVENTNAME" : {
                "TITLE" : "Nom d'événement",
                "DESCRIPTION" : "Définition du nom d'événement"
              },
              "EVENTINPARAMETERS" : {
                "TITLE" : "Mapping vers la charge utile d'événement",
                "DESCRIPTION" : "Mapping des variables de processus vers les propriétés de la charge utile d'événement"
              },
              "EVENTOUTPARAMETERS" : {
                "TITLE" : "Mapping depuis la charge utile d'événement",
                "DESCRIPTION" : "Mapping des propriétés de la charge utile d'événement vers les variables de processus"
              },
              "EVENTCORRELATIONPARAMETERS" : {
                "TITLE" : "Paramètres de corrélation",
                "DESCRIPTION" : "Définition des paramètres de corrélation"
              },
              "CHANNELKEY" : {
                "TITLE" : "Clé de canal",
                "DESCRIPTION" : "Définition de la clé de canal"
              },
              "CHANNELNAME" : {
                "TITLE" : "Nom de canal",
                "DESCRIPTION" : "Définition du nom de canal"
              },
              "CHANNELTYPE" : {
                "TITLE" : "Type de canal",
                "DESCRIPTION" : "Définition du type de canal"
              },
              "CHANNELDESTINATION" : {
                "TITLE" : "Destination de canal",
                "DESCRIPTION" : "Définition de la destination de canal"
              },
              "TRIGGEREVENTKEY" : {
                "TITLE" : "Clé d'événement de déclenchement",
                "DESCRIPTION" : "Définition de la clé d'événement de déclenchement"
              },
              "TRIGGEREVENTNAME" : {
                "TITLE" : "Nom d'événement de déclenchement",
                "DESCRIPTION" : "Définition du nom d'événement de déclenchement"
              },
              "TRIGGERCHANNELKEY" : {
                "TITLE" : "Clé de canal de déclenchement",
                "DESCRIPTION" : "Définition de la clé de canal de déclenchement"
              },
              "TRIGGERCHANNELNAME" : {
                "TITLE" : "Nom de canal de déclenchement",
                "DESCRIPTION" : "Définition du nom de canal de déclenchement"
              },
              "TRIGGERCHANNELTYPE" : {
                "TITLE" : "Type de canal de déclenchement",
                "DESCRIPTION" : "Définition du type de canal de déclenchement"
              },
              "TRIGGERCHANNELDESTINATION" : {
                "TITLE" : "Destination de canal de déclenchement",
                "DESCRIPTION" : "Définition de la destination de canal de déclenchement"
              },
              "KEYDETECTIONFIXEDVALUE" : {
                "TITLE" : "Valeur fixe de clé d'événement",
                "DESCRIPTION" : "Définition de la valeur fixe de clé d'événement"
              },
              "KEYDETECTIONJSONFIELD" : {
                "TITLE" : "Champ json de clé d'événement",
                "DESCRIPTION" : "Définition de la détection de clé d'événement avec un champ json"
              },
              "KEYDETECTIONJSONPOINTER" : {
                "TITLE" : "Pointeur json de clé d'événement",
                "DESCRIPTION" : "Définition de la détection de clé d'événement avec une expression de pointeur json"
              }
            },
            "VARIABLELISTENERPACKAGE": {
              "VARIABLENAME" : {
                "TITLE" : "Nom de variable",
                "DESCRIPTION" : "Définit la variable qui sera surveillée pour les changements de valeur"
              },
              "VARIABLECHANGETYPE" : {
                "TITLE" : "Type de changement de variable",
                "DESCRIPTION" : "Configure pour quel type de changement l'écouteur de variable sera déclenché"
              }
            },
            "EXTERNALWORKERJOBPACKAGE": {
              "TOPIC": {
                "TITLE": "Sujet du job",
                "DESCRIPTION": "Le sujet du job que le worker externe interrogera"
              }
            },
            "ISTRANSACTIONPACKAGE" : {
              "ISTRANSACTION" : {
                "TITLE" : "Est un sous-processus de transaction",
                "DESCRIPTION" : "Un indicateur qui identifie si ce sous-processus est de type transaction."
              }
            },
            "FORMREFERENCEPACKAGE" : {
              "FORMREFERENCE" : {
                "TITLE" : "Référence de formulaire",
                "DESCRIPTION" : "Référence à un formulaire"
              }
            },
            "TERMINATEALLPACKAGE" : {
              "TERMINATEALL" : {
                "TITLE" : "Terminer tout",
                "DESCRIPTION" : "Activer pour terminer l'instance de processus"
              }
            },
            "DECISIONTASKDECISIONTABLEREFERENCEPACKAGE" : {
              "DECISIONTASKDECISIONTABLEREFERENCE" : {
                "TITLE" : "Référence de table de décision",
                "DESCRIPTION" : "Définir la référence de table de décision"
              }
            },
            "DECISIONTASKDECISIONSERVICEREFERENCEPACKAGE" : {
              "DECISIONTASKDECISIONSERVICEREFERENCE" : {
                "TITLE" : "Référence de service de décision",
                "DESCRIPTION" : "Définir la référence de service de décision"
              }
            },
            "DECISIONTASKTHROWERRORONNOHITSPACKAGE" : {
              "DECISIONTASKTHROWERRORONNOHITS" : {
                "TITLE" : "Lancer une erreur si aucune règle n'a été atteinte",
                "DESCRIPTION" : "Une erreur doit-elle être lancée si aucune règle de la table de décision n'a été atteinte et par conséquent aucun résultat n'a été trouvé."
              }
            },
            "DECISIONTASKFALLBACKTODEFAULTTENANTPACKAGE" : {
              "DECISIONTASKFALLBACKTODEFAULTTENANT" : {
                "TITLE" : "Revenir au locataire par défaut",
                "DESCRIPTION" : "Rechercher la définition de décision sans locataire lorsque les tentatives précédentes pour la trouver avec un locataire ont échoué."
              }
            },
            "INTERRUPTINGPACKAGE" : {
              "INTERRUPTING" : {
                "TITLE" : "Interrompant",
                "DESCRIPTION" : "Toutes les exécutions parentes doivent-elles être terminées ?"
              }
            },
            "COMPLETIONCONDITIONPACKAGE" : {
              "COMPLETIONCONDITION" : {
                "TITLE" : "Condition d'achèvement",
                "DESCRIPTION" : "La condition d'achèvement pour le sous-processus ad hoc"
              }
            },
            "ORDERINGPACKAGE" : {
              "ORDERING" : {
                "TITLE" : "Ordonnancement",
                "DESCRIPTION" : "L'ordonnancement pour le sous-processus ad hoc"
              }
            },
            "CANCELREMAININGINSTANCESPACKAGE" : {
              "CANCELREMAININGINSTANCES" : {
                "TITLE" : "Annuler les instances restantes",
                "DESCRIPTION" : "Annuler les instances restantes pour le sous-processus ad hoc ?"
              }
            }
    
          },
          "STENCILS" : {
            "GROUPS" : {
              "STARTEVENTS" : "Événements de début",
              "ENDEVENTS" : "Événements de fin",
              "DIAGRAM" : "Diagramme",
              "ACTIVITIES" : "Activités",
              "STRUCTURAL" : "Structurels",
              "GATEWAYS" : "Passerelles",
              "BOUNDARYEVENTS" : "Événements limites",
              "INTERMEDIATECATCHINGEVENTS" : "Événements intermédiaires de capture",
              "INTERMEDIATETHROWINGEVENTS" : "Événements intermédiaires de lancement",
              "SWIMLANES" : "Couloirs",
              "CONNECTINGOBJECTS" : "Objets de connexion",
              "ARTIFACTS" : "Artefacts"
            },
            "BPMNDIAGRAM" : {
              "TITLE" : "Diagramme BPMN",
              "DESCRIPTION" : "Un diagramme BPMN 2.0."
            },
            "STARTNONEEVENT" : {
              "TITLE" : "Événement de début",
              "DESCRIPTION" : "Un événement de début sans déclencheur spécifique"
            },
            "STARTTIMEREVENT" : {
              "TITLE" : "Événement de début temporel",
              "DESCRIPTION" : "Un événement de début avec un déclencheur temporel"
            },
            "STARTSIGNALEVENT" : {
              "TITLE" : "Événement de début de signal",
              "DESCRIPTION" : "Un événement de début avec un déclencheur de signal"
            },
            "STARTMESSAGEEVENT" : {
              "TITLE" : "Événement de début de message",
              "DESCRIPTION" : "Un événement de début avec un déclencheur de message"
            },
            "STARTEVENTREGISTRYEVENT" : {
              "TITLE" : "Événement de début du registre d'événements",
              "DESCRIPTION" : "Un événement de début avec un déclencheur du registre d'événements"
            },
            "STARTVARIABLELISTENEREVENT" : {
              "TITLE" : "Événement de début d'écoute de variable",
              "DESCRIPTION" : "Un événement de début déclenché lorsque la valeur de la variable configurée change"
            },
            "STARTCONDITIONALEVENT" : {
              "TITLE" : "Événement de début conditionnel",
              "DESCRIPTION" : "Un événement de début qui évalue un événement conditionnel"
            },
            "STARTERROREVENT" : {
              "TITLE" : "Événement de début d'erreur",
              "DESCRIPTION" : "Un événement de début qui capture une erreur BPMN lancée"
            },
            "STARTESCALATIONEVENT" : {
              "TITLE" : "Événement de début d'escalade",
              "DESCRIPTION" : "Un événement de début qui capture une escalade BPMN lancée"
            },
            "USERTASK" : {
              "TITLE" : "Tâche utilisateur",
              "DESCRIPTION" : "Une tâche manuelle assignée à une personne spécifique"
            },
            "SERVICETASK" : {
              "TITLE" : "Tâche de service",
              "DESCRIPTION" : "Une tâche automatique avec une logique de service"
            },
            "SCRIPTTASK" : {
              "TITLE" : "Tâche de script",
              "DESCRIPTION" : "Une tâche automatique avec une logique de script"
            },
            "BUSINESSRULE" : {
              "TITLE" : "Tâche de règle métier",
              "DESCRIPTION" : "Une tâche automatique avec une logique de règle"
            },
            "RECEIVETASK" : {
              "TITLE" : "Tâche de réception",
              "DESCRIPTION" : "Une tâche qui attend un signal"
            },
            "RECEIVEEVENTTASK" : {
              "TITLE" : "Tâche de réception d'événement",
              "DESCRIPTION" : "Une tâche qui reçoit un événement"
            },
            "MANUALTASK" : {
              "TITLE" : "Tâche manuelle",
              "DESCRIPTION" : "Une tâche automatique sans logique"
            },
            "MAILTASK" : {
              "TITLE" : "Tâche de mail",
              "DESCRIPTION" : "Une tâche de mail"
            },
            "CAMELTASK" : {
              "TITLE" : "Tâche Camel",
              "DESCRIPTION" : "Une tâche qui envoie un message à Camel"
            },
            "HTTPTASK" : {
              "TITLE" : "Tâche HTTP",
              "DESCRIPTION" : "Une tâche HTTP"
            },
            "MULETASK" : {
              "TITLE" : "Tâche Mule",
              "DESCRIPTION" : "Une tâche qui envoie un message à Mule"
            },
            "SENDTASK" : {
              "TITLE" : "Tâche d'envoi",
              "DESCRIPTION" : "Une tâche qui envoie un message"
            },
            "DECISIONTASK" : {
              "TITLE" : "Tâche de décision",
              "DESCRIPTION" : "Tâche pour utiliser le moteur de règles DMN de Flowable"
            },
            "SENDEVENTTASK" : {
              "TITLE" : "Tâche d'envoi d'événement",
              "DESCRIPTION" : "Une tâche qui envoie un événement au registre d'événements"
            },
            "EXTERNALWORKERTASK" : {
              "TITLE" : "Tâche de worker externe",
              "DESCRIPTION" : "Une tâche qui crée un job pouvant être exécuté par un worker externe"
            },
            "SHELLTASK" : {
              "TITLE" : "Tâche shell",
              "DESCRIPTION" : "Une tâche automatique avec une logique de script shell"
            },
            "SUBPROCESS" : {
              "TITLE" : "Sous-processus",
              "DESCRIPTION" : "Une portée de sous-processus"
            },
            "COLLAPSEDSUBPROCESS" : {
              "TITLE" : "Sous-processus réduit",
              "DESCRIPTION" : "Une portée de sous-processus"
            },
            "EVENTSUBPROCESS" : {
              "TITLE" : "Sous-processus d'événement",
              "DESCRIPTION" : "Une portée de sous-processus d'événement"
            },
            "CALLACTIVITY" : {
              "TITLE" : "Activité d'appel",
              "DESCRIPTION" : "Une activité d'appel"
            },
            "EXCLUSIVEGATEWAY" : {
              "TITLE" : "Passerelle exclusive",
              "DESCRIPTION" : "Une passerelle de choix"
            },
            "PARALLELGATEWAY" : {
              "TITLE" : "Passerelle parallèle",
              "DESCRIPTION" : "Une passerelle parallèle"
            },
            "INCLUSIVEGATEWAY" : {
              "TITLE" : "Passerelle inclusive",
              "DESCRIPTION" : "Une passerelle inclusive"
            },
            "EVENTGATEWAY" : {
              "TITLE" : "Passerelle d'événement",
              "DESCRIPTION" : "Une passerelle d'événement"
            },
            "BOUNDARYCONDITIONALEVENT" : {
              "TITLE" : "Événement limite conditionnel",
              "DESCRIPTION" : "Un événement limite qui évalue un événement conditionnel"
            },
            "BOUNDARYERROREVENT" : {
              "TITLE" : "Événement limite d'erreur",
              "DESCRIPTION" : "Un événement limite qui capture une erreur BPMN"
            },
            "BOUNDARYESCALATIONEVENT" : {
              "TITLE" : "Événement limite d'escalade",
              "DESCRIPTION" : "Un événement limite qui capture une escalade BPMN"
            },
            "BOUNDARYTIMEREVENT" : {
              "TITLE" : "Événement limite temporel",
              "DESCRIPTION" : "Un événement limite avec un déclencheur temporel"
            },
            "BOUNDARYSIGNALEVENT" : {
              "TITLE" : "Événement limite de signal",
              "DESCRIPTION" : "Un événement limite avec un déclencheur de signal"
            },
            "BOUNDARYMESSAGEEVENT" : {
              "TITLE" : "Événement limite de message",
              "DESCRIPTION" : "Un événement limite avec un déclencheur de message"
            },
            "BOUNDARYCANCELEVENT" : {
              "TITLE" : "Événement limite d'annulation",
              "DESCRIPTION" : "Un événement limite d'annulation"
            },
            "BOUNDARYEVENTREGISTRYEVENT" : {
              "TITLE" : "Événement limite du registre d'événements",
              "DESCRIPTION" : "Un événement limite du registre d'événements"
            },
            "BOUNDARYVARIABLELISTENEREVENT" : {
              "TITLE" : "Événement limite d'écoute de variable",
              "DESCRIPTION" : "Un événement limite d'écoute de variable déclenché lorsque la valeur de la variable configurée change"
            },
            "BOUNDARYCOMPENSATIONEVENT" : {
              "TITLE" : "Événement limite de compensation",
              "DESCRIPTION" : "Un événement limite de compensation"
            },
            "CATCHTIMEREVENT" : {
              "TITLE" : "Événement intermédiaire de capture temporelle",
              "DESCRIPTION" : "Un événement intermédiaire de capture avec un déclencheur temporel"
            },
            "CATCHSIGNALEVENT" : {
              "TITLE" : "Événement intermédiaire de capture de signal",
              "DESCRIPTION" : "Un événement intermédiaire de capture avec un déclencheur de signal"
            },
            "CATCHMESSAGEEVENT" : {
              "TITLE" : "Événement intermédiaire de capture de message",
              "DESCRIPTION" : "Un événement intermédiaire de capture avec un déclencheur de message"
            },
            "CATCHCONDITIONALEVENT" : {
              "TITLE" : "Événement intermédiaire de capture conditionnelle",
              "DESCRIPTION" : "Un événement intermédiaire de capture avec un déclencheur conditionnel"
            },
            "CATCHEVENTREGISTRYEVENT" : {
              "TITLE" : "Événement intermédiaire de capture du registre d'événements",
              "DESCRIPTION" : "Un événement intermédiaire de capture attendant de recevoir un événement du registre d'événements"
            },
            "CATCHVARIABLELISTENEREVENT": {
              "TITLE" : "Événement intermédiaire d'écoute de variable",
              "DESCRIPTION" : "Un événement intermédiaire de capture attendant de recevoir un événement lorsque la variable configurée est modifiée"
            },
            "THROWNONEEVENT" : {
              "TITLE" : "Événement intermédiaire de lancement sans déclencheur",
              "DESCRIPTION" : "Un événement intermédiaire sans déclencheur spécifique"
            },
            "THROWSIGNALEVENT" : {
              "TITLE" : "Événement intermédiaire de lancement de signal",
              "DESCRIPTION" : "Un événement intermédiaire avec un déclencheur de signal"
            },
            "THROWESCALATIONEVENT" : {
              "TITLE" : "Événement intermédiaire de lancement d'escalade",
              "DESCRIPTION" : "Un événement intermédiaire avec un déclencheur d'escalade"
            },
            "THROWCOMPENSATIONEVENT": {
              "TITLE" : "Événement intermédiaire de lancement de compensation",
              "DESCRIPTION" : "Un événement intermédiaire avec un déclencheur de compensation"
            },
            "ENDNONEEVENT" : {
              "TITLE" : "Événement de fin",
              "DESCRIPTION" : "Un événement de fin sans déclencheur spécifique"
            },
            "ENDERROREVENT" : {
              "TITLE" : "Événement de fin d'erreur",
              "DESCRIPTION" : "Un événement de fin qui lance un événement d'erreur"
            },
            "ENDESCALATIONEVENT" : {
              "TITLE" : "Événement de fin d'escalade",
              "DESCRIPTION" : "Un événement de fin qui lance un événement d'escalade"
            },
            "ENDCANCELEVENT" : {
              "TITLE" : "Événement de fin d'annulation",
              "DESCRIPTION" : "Un événement de fin d'annulation"
            },
            "ENDTERMINATEEVENT" : {
              "TITLE" : "Événement de fin de terminaison",
              "DESCRIPTION" : "Un événement de fin de terminaison"
            },
            "POOL" : {
              "TITLE" : "Pool",
              "DESCRIPTION" : "Un pool pour structurer la définition du processus"
            },
            "LANE" : {
              "TITLE" : "Couloir",
              "DESCRIPTION" : "Un couloir pour structurer la définition du processus"
            },
            "SEQUENCEFLOW" : {
              "TITLE" : "Flux séquentiel",
              "DESCRIPTION" : "Le flux séquentiel définit l'ordre d'exécution des activités."
            },
            "MESSAGEFLOW" : {
              "TITLE" : "Flux de message",
              "DESCRIPTION" : "Flux de message pour connecter des éléments dans différents pools."
            },
            "ASSOCIATION" : {
              "TITLE" : "Association",
              "DESCRIPTION" : "Associe une annotation de texte à un élément."
            },
            "DATAASSOCIATION" : {
              "TITLE" : "Association de données",
              "DESCRIPTION" : "Associe un élément de données à une activité."
            },
            "TEXTANNOTATION" : {
              "TITLE" : "Annotation de texte",
              "DESCRIPTION" : "Annote des éléments avec du texte descriptif."
            },
            "DATASTORE" : {
              "TITLE" : "Magasin de données",
              "DESCRIPTION" : "Référence à un magasin de données."
            },
            "ADHOCSUBPROCESS" : {
              "TITLE" : "Sous-processus ad hoc",
              "DESCRIPTION" : "Un sous-processus ad hoc"
            }}},

    "EDITOR": {
      "POPUP": {
        "UNSAVED-CHANGES": {
          "TITLE": "Vous avez des modifications non enregistrées ",
          "DESCRIPTION": "Que voulez vous faire des modifications non sauvegardées ?",
          "ACTION": {
            "SAVE": "Sauver",
            "DISCARD": "Ignorer les changements",
            "CONTINUE": "Continuer à éditer"
          }
        }
      }
    },

    "PROCESS-LIST" : {
        "TITLE" : "Modèles de processus métiers",
        "SEARCH-PLACEHOLDER": "Rechercher",
        "ACTION" : {
            "CREATE": "Créer un processus",
            "IMPORT": "Importer un processus"
        },

        "FILTER" : {
            "PROCESSES": "Modèles de processus",
            "PROCESSES-COUNT": "Il y a {{total}} modèles de processus",
            "PROCESSES-ONE": "Il y a un modèle de processus",
            "PROCESSES-EMPTY": "Il n'y a pas de modèle de processus encore créé. Vous pouvez créer des modèles de processus, des formulaires et les  grouper au sein d'une application. La première étpage consiste à créer ce modèle de processus:",
            "PROCESSES-BPMN-HINT": "Créer un modèle BPMN en utilisant l'Editeur visuel BPMN.",
            "PROCESSES-BPMN-IMPORT-HINT": "Vous pouvez aussi importer des modèles BPMN existants.",
            "FILTER-TEXT": ", correspondant à \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "Il n'y a pas de modèles de processus correspondant à \"{{filterText}}\"",
            "RECENT": "Récent",
            "RECENT-COUNT": "{{total}} modèles récemment utilisés",
            "RECENT-ONE": "Un modèle récemment utilisé",
            "RECENT-EMPTY": "Aucun modèle récemment utilisé"
        },

        "SORT": {
            "MODIFIED-ASC": "Du plus vieux",
            "MODIFIED-DESC": "Dernières modifications",
            "NAME-ASC": "Nom, A-Z",
            "NAME-DESC": "Nom, Z-A"
        }
    },
    
    "CASE-LIST" : {
        "TITLE" : "Modèles de Cas",
        "SEARCH-PLACEHOLDER": "Recherche",
        "ACTION" : {
            "CREATE": "Créer un Cas",
            "IMPORT": "Importer un Cas"
        },

        "FILTER" : {
            "CASES": "Modèles de Cas",
            "CASES-COUNT": "Il y a {{total}} modèles de Cas",
            "CASES-ONE": "Il y a un modèle de Cas",
            "CASES-EMPTY": "Aucun modèle de cas n'a encore été créé. Vous pouvez créer un modèle de cas, des formulaires et les grouper au sein d'une définition d'App. La première étape consiste à créer ce modèle de Cas:",
            "CASES-CMMN-HINT": "Créer un modèle CMMN en utilisant l'éditeur visuel CMMN.",
            "CASES-CMMN-IMPORT-HINT": "Vous pouvez aussi importer un modèle CMMN existant.",
            "FILTER-TEXT": ", correspondant à \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "Il n'y a pas de modèle de cas correspondant à  \"{{filterText}}\"",
            "RECENT": "Récent",
            "RECENT-COUNT": "{{total}}modèles récemment utilisés",
            "RECENT-ONE": "Un modèle récemment utilisé",
            "RECENT-EMPTY": "Aucun modèle récemment utilisé"
        },

        "SORT": {
            "MODIFIED-ASC": "Du plus vieux",
            "MODIFIED-DESC": "Dernières modifications",
            "NAME-ASC": "Nom, A-Z",
            "NAME-DESC": "Nom, Z-A"
        }
    },

    "FORMS-LIST" : {
        "TITLE" : "Formulaires",
        "SEARCH-PLACEHOLDER": "Recherche",
        "ACTION" : {
            "CREATE": "Créer un formulaire",
            "CREATE-INLINE": "Créer un nouveau formulaire maintenant!",
            "SHOW-MORE": "Voir plus..."
        },

        "FILTER" : {
            "FORMS": "Formulaires",
            "FORMS-COUNT": "Il y a {{total}} formulaires",
            "FORMS-ONE": "Il y a un formulaire",
            "FORMS-EMPTY": "Il n'y a pas formulaires.  Pour en ajouter un, cliquer sur Créer formulaire.",
            "FILTER-TEXT": ", correspondant \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "Il n'y a pas de formulaires correspondant à \"{{filterText}}\""
        },

        "SORT": {
            "MODIFIED-ASC": "Du plus vieux",
            "MODIFIED-DESC": "Dernières modifications",
            "NAME-ASC": "Nom, A-Z",
            "NAME-DESC": "Nom, Z-A"
        }
    },

    "DECISIONS-LIST": {
        "TITLE": "Tables de décision",
        "SEARCH-PLACEHOLDER": "Recherche",
        "ACTION": {
            "CREATE": "Créer une table de décision",
            "IMPORT": "Importer une table de décision",
            "CREATE-INLINE": "Créer une nouvelle table de décision maintenant!",
            "SHOW-MORE": "Voir plus..."
        },

        "FILTER": {
            "DECISION-TABLES": "Table de décisions",
            "DECISION-TABLES-COUNT": "Il y a {{total}} tables de décision",
            "DECISION-TABLES-ONE": "Il y a une table de décision",
            "DECISION-TABLES-EMPTY": "Il n'y a pas de table de décisions. Pour en ajouter une, cliquer sur Créer une table de décision.",
            "FILTER-TEXT": ", correspondant \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "Il n'y a pas de table de décision correpondants à  \"{{filterText}}\""
        },

        "SORT": {
            "MODIFIED-ASC": "Du plus vieux",
            "MODIFIED-DESC": "Dernières modifications",
            "NAME-ASC": "Nom, A-Z",
            "NAME-DESC": "Nom, Z-A"
        }
    },

    "APPS-LIST" : {
        "TITLE" : "Définitions d'App",
        "SEARCH-PLACEHOLDER": "Recherche",
        "ACTION" : {
            "CREATE": "Créer une App",
            "IMPORT": "Importer une App",
            "SHOW-MORE": "Voir plus..."
        },

        "FILTER" : {
            "APPS": "Définitions d'App",
            "APPS-COUNT": "Il y a {{total}} définitions d'App",
            "APPS-ONE": "Il y a une définition d'App",
            "APPS-EMPTY": "Il n'y a pas de définitions d'App. Pour en ajouter une, cliquer sur Créer une Définition d'App .",
            "FILTER-TEXT": ", correspondant à \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "Il n'y a pas de définitions d'App correpondant à \"{{filterText}}\"",

            "NO-APPS": "Vous pouvez créer une définition d'App en publiant un  paquet de modèles de processus.",
            "NO-APPS-CALL-TO-ACTION": "Vous pouvez créer une définition d'App maintenant.",
            "NO-APPS-NOTE": "N'oubliez pas de Publier quand vous êtes prêt à l'utiliser."
        },

        "SORT": {
            "MODIFIED-ASC": "Du plus vieux",
            "MODIFIED-DESC": "Dernières modifications",
            "NAME-ASC": "Nom, A-Z",
            "NAME-DESC": "Nom, Z-A"
        }
    },
    "PROCESS": {
      "NAME": "Nom du Modèle",
      "KEY": "Clé du Modèle",
      "DESCRIPTION": "Description",
      "VERSION-COMMENT": "Commentaire de version",
      "ACTION": {
            "DETAILS": "Voir les détails",
            "EDIT": "Modifier les propriétés du modèle",
            "DUPLICATE": "Dupliquer le modèle",
            "EXPORT_BPMN20": "Exporter en BPMN 2.0",
            "DELETE": "Supprimer le modèle",
            "CREATE-CONFIRM": "Créer un nouveau modèle",
            "DUPLICATE-CONFIRM": "Dupliquer le modèle",
            "OPEN-IN-EDITOR": "Editeur Visuel",
            "EDIT-CONFIRM": "Sauvegarder",
            "DELETE-CONFIRM": "Supprimer le modèle de processus",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
            "FAVORITE": "Mettre en favori ce modèle"

        },
        "DETAILS": {
          "HISTORY-TITLE": "Historique",
          "LAST-UPDATED-BY": "Dernière modification par {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Créé par {{createdBy}}",
          "NO-DESCRIPTION": "Ce modèle n'a pas de description. Modifier les propriétés du modèle pour en ajouter un."
        },

        "POPUP": {
          "CREATE-TITLE": "Créer un nouveau modèle de processus métier",
          "DUPLICATE-TITLE": "Dupliquer un modèle de processus métier",
          "CREATE-DESCRIPTION": "Vous devez donner un nom à ce modèle et en même temps vous devriez en profiter pour ajouter une description. ",
          "DUPLICATE-DESCRIPTION": "Vous pouvez changer le nom du nouveau modèle et en même temps vous devriez en profiter pour ajouter une description.",
          "EDIT-DESCRIPTION": "Modifier les propriétés ci-dessous et ensuite appuyer sur Sauvegarder pour mettre à jour le modèle.",
          "DELETE-DESCRIPTION": "Êtes-vous sûr de vouloir supprimer le modèle de processus \"{{name}}\"?",
          "EDIT-TITLE":"Modifier les détails du modèle",
          "DELETE-TITLE": "Supprimer le modèle",
          "DELETE-LOADING-RELATIONS": "Vérification des usages du modèle...",
          "DELETE-RELATIONS-DESCRIPTION-SINGLE": "Ce modèle ne peut être supprimé car un autre modèle l'utilise:",
          "DELETE-RELATIONS-DESCRIPTION": "Ce modèle ne peut être supprimé car il est utilisé par d'autres modèles:",
          "DELETE-PROCESS-RELATION": "Modèle de processus",
          "DELETE-FORM-RELATION": "Modèle de formulaire",
          "DELETE-APP-RELATION": "Modèle d'App",
          "IMPORT-DESCRIPTION": "Veuillez naviguer vers ou déposer un fichier de défnition BPMN XML avec une extension en .bpmn ou .bpmn20.xml",
          "IMPORT-TITLE": "Importer un modèle de processus",
          "USE-AS-NEW-TITLE": "Utiliser en tant que nouvelle version",
          "USE-AS-NEW-DESCRIPTION": "Êtes-vous sûr de vouloir utiliser la version {{version}} pour créer une nouvelle version de  \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Impossibilité de restaurer le modèle d'App dans la version choisie: certains modèles référencés sont manquants car précédemment supprimés. Veuillez mettre à jour votre modèle d'App en conséquence. Modèles manquants:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Modèle '{{name}}' avec un identifiant interne {{id}}, créé par {{createdBy}}",
          "SHARED-WITH": "Partagé avec",
          "PERMISSION": "Permission",
          "ACTIONS": "Actions",
          "IMPORT": {
              "DROPZONE": "Déposer un fichier BPMN avec une extension en .bpmn ou .bpmn20.xml",
              "CANCEL-UPLOAD": "Annuler l'envoi",
              "ERROR": "Une erreur s'est produite lors du traitement du fichier BPMN XML",
              "NO-DROP": "Glisser/déposer n'est pas supporté"
          }
        },
        "ALERT": {
          "EDIT-CONFIRM": "Modèle mise à jour"
        },
        "ERROR": {
          "NOT-FOUND": "Le modèle demandé n'existe pas."
        }
    },

    "SUBPROCESS": {
        "NAME": "Nom du sous-processus",
        "DESCRIPTION": "Description",
        "ACTION": {
            "CREATE-CONFIRM": "Créer un nouveau sous-processus"
        },
        "POPUP": {
            "CREATE-TITLE": "Créer un nouveau sous-processus",
            "CREATE-DESCRIPTION": "Vous devez donner un nom au nouveau sous-processus et en même temps vous devriez ajouter une description."
        }
    },
    
    "CASE": {
      "NAME": "Nom du Modèle",
      "KEY": "Clé du Modèle",
      "DESCRIPTION": "Description",
      "VERSION-COMMENT": "Commentaire de Version",
      "ACTION": {
            "DETAILS": "Voir les détails",
            "EDIT": "Modifier les propriétés du modèle",
            "DUPLICATE": "Dupliquer ce modèle",
            "EXPORT_CMMN": "Exporter en CMMN 1.1",
            "DELETE": "Supprimer ce modèle",
            "CREATE-CONFIRM": "Créer un nouveau modèle",
            "DUPLICATE-CONFIRM": "Dupliquer ce modèle",
            "OPEN-IN-EDITOR": "Editeur Visuel",
            "EDIT-CONFIRM": "Sauvegarder",
            "DELETE-CONFIRM": "Supprimer ce modèle de Cas ",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
            "FAVORITE": "Mettre en favori ce modèle"

        },
        "DETAILS": {
          "HISTORY-TITLE": "Historique",
          "LAST-UPDATED-BY": "Dernière modification par {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Created by {{createdBy}}",
          "NO-DESCRIPTION": "Ce modèle n'a pas de description. Modifier les propriétés du modèle pour en ajouter un."
        },

        "POPUP": {
          "CREATE-TITLE": "Créer un nouveau modèle de Cas ",
          "DUPLICATE-TITLE": "Dupliquer le modèle de Cas ",
          "CREATE-DESCRIPTION": "Vous devez donner un nom au nouveau modèle et en même temps vous devriez ajouter une description.",
          "DUPLICATE-DESCRIPTION": "Vous pouvez changer le nom du nouveau modèle et en même temps vous devriez en profiter pour ajouter une description.",
          "EDIT-DESCRIPTION": "Modifier les propriétés ci-dessous du modèle et appuyez sur Sauvegarder pour mettre à jour le modèle.",
          "DELETE-DESCRIPTION": "Êtes-vous sûr de want to supprimer the modèle de processus \"{{name}}\"?",
          "EDIT-TITLE":"Edit modèle details",
          "DELETE-TITLE": "Supprimer modèle",
          "DELETE-LOADING-RELATIONS": "Checking modèle usage...",
          "DELETE-RELATIONS-DESCRIPTION-SINGLE": "This modèle cannot be deleted, because another modèle is using it:",
          "DELETE-RELATIONS-DESCRIPTION": "This modèle cannot be deleted, because it is used by other models:",
          "DELETE-PROCESS-RELATION": "Cas modèle",
          "DELETE-FORM-RELATION": "formulaire modèle",
          "DELETE-APP-RELATION": "App modèle",
          "IMPORT-DESCRIPTION": "Please browse for or drop a CMMN XML definition with an .cmmn or .cmmn.xml extension",
          "IMPORT-TITLE": "Import a Cas modèle",
          "USE-AS-NEW-TITLE": "Use as new version",
          "USE-AS-NEW-DESCRIPTION": "Êtes-vous sûr de vouloir utiliser la version {{version}} afin de créer une nouvelle  version de \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Impossibilité de restaurer le modèle à la version choisie: certains modèles référencés sont manquants car précédemment supprimés. Veuillez mettre à jour votre modèle d'App en conséquence. Modèles manquants:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Modèle '{{name}}' avec l'identifiant interne {{id}}, créé par {{createdBy}}",
          "SHARED-WITH": "Partagé avec",
          "PERMISSION": "Permission",
          "ACTIONS": "Actions",
          "IMPORT": {
              "DROPZONE": "Déposer un fichier CMMN XML avec une extension .cmmn ou .cmmn.xml ",
              "CANCEL-UPLOAD": "Annuler l'envoi",
              "ERROR": "Erreur durant le traitement du fichier CMMN XML ",
              "NO-DROP": "Glisser/Déposer n'est pas supporté."
          }
        },
        "ALERT": {
          "EDIT-CONFIRM": "Modèle mis à jour"
        },
        "ERROR": {
          "NOT-FOUND": "Le modèle demandé n'existe pas"
        }
    },

    "FORM": {
      "NAME": "Nom du formulaire",
      "KEY": "Clé du formulaire",
      "DESCRIPTION": "Description",
      "ACTION": {
            "DETAILS": "Afficher les détails",
            "EDIT": "Modifier les propriétés du modèle",
            "DELETE": "Supprimer le formulaire",
            "CREATE-CONFIRM": "Créer un nouveau formulaire",
            "DUPLICATE": "Dupliquer ce formulaire",
            "DUPLICATE-CONFIRM": "Dupliquer le formulaire",
            "OPEN-IN-EDITOR": "Editeur de formulaire",
            "EDIT-CONFIRM": "Sauvegarder",
            "DELETE-CONFIRM": "Supprimer le formulaire",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version"

        },
        "DETAILS": {
          "HISTORY-TITLE": "Historique",
          "LAST-UPDATED-BY": "Dernière modification par {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Créé par {{createdBy}}"
        },

        "POPUP": {
          "CREATE-TITLE": "Créer un nouveau formulaire",
          "DUPLICATE-TITLE": "Dupliquer le formulaire",
          "CREATE-DESCRIPTION": "Vous devez donner un nom au nouveau formulaire et en même temps vous devriez ajouter une description.",
          "DUPLICATE-DESCRIPTION": "Vous devez donner un nom au nouveau formulaire et en même temps vous devriez ajouter une description.",
          "SAVE-FORM-TITLE": "Sauvegarder le formulaire",
          "EDIT-DESCRIPTION": "Modifier les propriétés ci-dessous du formulaire et ensuite appuyer sur Sauvegarder pour mettre à jour le formulaire",
          "DELETE-DESCRIPTION": "Êtes-vous sûr de vouloir supprimer le formulaire \"{{name}}\"?",
          "EDIT-TITLE":"Editer les détails du formulaire",
          "DELETE-TITLE": "Supprimer le formulaire",
          "USE-AS-NEW-TITLE": "Utiliser en tant que nouvelle version",
          "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
          "USE-AS-NEW-DESCRIPTION": "Êtes-vous sûr d'utiliser la version {{version}} pour créer une nouvelle version de \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Impossibilité de restaurer le modèle à la version choisie: certains modèles référencés sont manquants car précédemment supprimés. Veuillez mettre à jour votre modèle d'App en conséquence. Modèles manquants:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Modèle '{{name}}'avec l'identifiant interne {{id}}, créé par {{createdBy}}"
        }
    },

    "DECISION-TABLE": {
        "NAME": "Nom de la table de décision",
        "KEY": "Clé de la table de décision",
        "DESCRIPTION": "Description",
        "VERSION-COMMENT": "Commentaire de Version",
        "HIT-POLICY": "Hit Policy:",
        "ACTION": {
            "DETAILS": "Afficher les détails",
            "EDIT": "Modifier les propriétés du modèle",
            "SHARE": "Partager cette table de décision",
            "DELETE": "Supprimer cette table de décision",
            "ADD-COMMENT": "+ Ajouter un commentaire",
            "CREATE-CONFIRM": "Créer une nouvelle table de décision",
            "OPEN-IN-EDITOR": "Editeur de table de décision",
            "EXPORT": "Exporter la table de décision",
            "DELETE-CONFIRM": "Supprimer la table de décision",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
            "FAVORITE": "Mettre en favori cette table de décision",
            "DUPLICATE": "Dupliquer cette table de décision"
        },
        "DETAILS": {
            "HISTORY-TITLE": "Historique",
            "COMMENTS-TITLE": "Commentaires",
            "LAST-UPDATED-BY": "Dernière modification par {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
            "CREATED-BY": "Créé par {{createdBy}}"
        },
        "HIT-POLICIES": {
            "FIRST": "Les premiers",
            "ANY": "Tous",
            "UNIQUE": "Unique",
            "PRIORITY": "Priorité",
            "RULE ORDER": "Ordre des règles",
            "OUTPUT ORDER": "Ordre de résultats",
            "COLLECT": "Collecte"
        },
        "COLLECT-OPERATORS": {
            "SUM": "Sum",
            "MIN": "Min",
            "MAX": "Max",
            "COUNT": "Count"
        },
        "POPUP": {
            "CREATE-TITLE": "Créer une nouvelle table de décision",
            "CREATE-DESCRIPTION": "Vous devez donner un nom à la nouvelle table de décision et en même temps vous devriez ajouter une description.",
            "SAVE-DESCRIPTION": "Vous devez donner un nom à la nouvelle table de décision ainsi qu'une clé unique et en même temps vous devriez ajouter une description.",
            "DUPLICATE-TITLE": "Dupliquer la table de décision",
            "DUPLICATE-DESCRIPTION": "Vous devez donner un nom à la nouvelle table de décision et en même temps vous devriez ajouter une description.",
            "DELETE-TITLE": "Supprimer la table de décision",
            "DELETE-DESCRIPTION": "Êtes-vous sûr de vouloir supprimer la table de décision \"{{name}}\"?",
            "SAVE-DECISION-TABLE-TITLE": "Sauvegarder la table de décision",
            "IMPORT-DESCRIPTION": "Veuillez naviguer vers ou déposer un fichier de définition DMN XML avec une extension en .dmn ou .dmn.xml",
          	"IMPORT-TITLE": "Importer un modèle DMN ",
	        "IMPORT": {
	            "DROPZONE": "Déposer un fichier DMN XML avec une extension en a .dmn ou .dmn.xml",
	            "CANCEL-UPLOAD": "Annuler l'envoi",
	            "ERROR": "Erreurr lors du tratiement du fichier DMN XML",
	            "NO-DROP": "Glisser/Déposer n'est pas supporté."
	        },
            "USE-AS-NEW-TITLE": "Utiliser en tant que nouvelle version",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
            "USE-AS-NEW-DESCRIPTION": "Êtes-vous sûr de vouloir utiliser la version {{version}} pour créer une nouvelle version de \"{{name}}\"?",
            "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Impossibilité de restaurer le modèle à la version choisie: certains modèles référencés sont manquants car précédemment supprimés. Veuillez mettre à jour votre modèle d'App en conséquence. Modèles manquants:",
            "USE-AS-NEW-UNRESOLVED-MODEL": "Modèle '{{name}}' avec l'identifiant interne {{id}}, créé par {{createdBy}}"
        },
        "ALERT": {
            "FAVORITE-CONFIRM": "La table de décision est maintenant en favori",
            "UN-FAVORITE-CONFIRM": "La table de décision n'est plus marqué en favori"
        }
    },

    "APP": {
        "NAME": "Nom de la définition d'App",
        "KEY": "Clé de la définition d'App",
        "DESCRIPTION": "Description",
        "ICON": "Icône",
        "THEME": "Thème",
        "GROUPS-ACCESS": "Groupes avec accès, séparés par des virgules",
		"USERS-ACCESS": "Utilisateurs avec access, séparés par des virgules",
        "ACTION": {
            "DETAILS": "Afficher les détails",
            "EDIT": "Modifier les propriétés de la définition d'App",
            "DUPLICATE": "Dupliquer la définition",
            "SHARE": "Partagé la définition d'App",
            "DELETE": "Supprimer la définition d'App",
            "CREATE-CONFIRM": "Créer une nouvelle définition d'App",
            "DUPLICATE-CONFIRM": "Dupliquer la définition d'App",
            "DELETE-CONFIRM": "Supprimer la définition d'App",
            "USE-AS-NEW-VERSION": "Utiliser en tant que nouvelle version",
            "OPEN-IN-EDITOR": "Editeur d'App",
            "PUBLISH": "Publier",
            "PUBLISH-CONFIRM": "Publier la définition d'App",
            "SELECT-ICON": "Changer l'icône...",
            "SELECT-THEME": "Change le thème...",
            "EDIT-MODELS": "Editer les modèles inclus",
            "EXPORT-ZIP": "Exporter la définition d'App dans un fichier zip",
            "EXPORT-BAR": "Exporter la définition d'App en tant que fichier bar deployable"

        },
        "DETAILS": {
          "TITLE": "Détails de la définition d'App: {{name}}",
          "HISTORY-TITLE": "Historique",
          "MODELS-TITLE": "Modèles inclus dans la définition d'App",
          "LAST-UPDATED-BY": "Dernière modification par {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Créé par {{createdBy}}",
          "NO-DESCRIPTION": "La définition d'App n'a pas de description. Modifier les propriétés de la définition d'App pour en ajouter une",
          "NO-MODELS-SELECTED": "Aucun modèle n'a été sélectionné pour cette App"
        },
        "TITLE": {
          "SELECT-ICON": "Choisir une icône d'App",
          "SELECT-THEME": "Choisir des couleurs d'App",
          "PREVIEW": "Prévisualiser"

        },
        "POPUP": {
          "CREATE-TITLE": "Créer une nouvelle définition d'App",
          "DUPLICATE-TITLE": "Dupliquer une définition d'App",
          "SAVE-APP-TITLE": "Sauvegarder la définition d'App",
          "SAVE-APP-SAVE-SUCCESS": "La définition d'App a été sauvé",
          "CREATE-DESCRIPTION": "Vous devez donner un nom à la nouvelle définition d'App et en même temps vous devriez ajouter une description.",
          "DUPLICATE-DESCRIPTION": "Vous devez donner un nom à la nouvelle définition d'App et en même temps vous devriez ajouter une description.",
          "PUBLISH-TITLE": "Publier la définition d'App",
          "PUBLISH-DESCRIPTION": "Êtes-vous sûr de vouloir publier la définition d'App \"{{name}}\"? A noter que cette définition d'App sera versionné et l'App de sera mise à jour s'il existe",
          "PUBLISH-FIELD": "Publier? A noter que si la publication est activé,la définition d'App sera versionné et que l'App de workflow  sera mis à jour s'il existe. .",
          "PUBLISH-ERROR-PROCDEF-KEY-CONFLICT": "Votre modèle de processus \"{{modelInAppName}}\" a le même identifiant \"{{processDefinitionKey}}\" que le processus déjà déployé \"{{conflictingModelName}}\" de l'App \"{{conflictingAppName}}\". Veuillez changer la valeur de la propriété \"id\" du modèle de processus.",
          "PUBLISH-ERROR-PROCESS-ALREADY-USED": "Les modèles de processus sont déjà utilisés dans d'autres applications. Est ce normal ?",
          "PUBLISH-ERROR-PROCESS-ALREADY-USED-APP": "App",
          "PUBLISH-ERROR-PROCDEF-DUPLICATE-KEYS": "App invalide: Duplication trouvé des identifians de processus (modifier la propriété \"id\" des modèles de processus mise en cause):",
          "DELETE-TITLE": "Supprimer la définition d'App",
          "DELETE-DESCRIPTION": "Êtes-vous sûr de vouloir  supprimer la définition d'App \"{{name}}\"?",
          "DELETE-DESCRIPTION-WITH-RUNTIME": "Êtes-vous sûr de vouloir supprimer la définition d'App \"{{name}}\"? A noter que la définition d'App a été déployé sur la page d'accueil des tâches et en confirmant l'App sera supprimé des pages d'accueil.",
          "DELETE-CASCADE-FALSE": "Supprimer uniquement la version courante de la définition d'App (v{{version}})",
          "DELETE-CASCADE-TRUE": "Supprimer aussi toutes les versions précédentes de la définition d'App",
          "HAS-CUSTOM-STENCILITEM" : "Modèle \"{{modelName}}\" utilise un stencil avec des objets personnalisés de stencil. Il n'est pas possible d'utiliser ce modèle dans une définition d'App.",
          "HAS-VALIDATIONERROR" : "Modèle \"{{modelName}}\" a des erreurs de validations et ne peut être ajouté à une définition d'App. Ouvrez le modèle dans l'éditeur and vérifier les détails des erreurs.",
          "IMPORT-DESCRIPTION":"Veuillez naviguer ou déposer une définition d'App avec une extension en .zip",
          "IMPORT-TITLE":"Importer un modèle de définition d'App ",
          "IMPORT": {
              "DROPZONE": "Déposer un fichier de définition d'App en .zip",
              "CANCEL-UPLOAD": "Annuler l'envoi",
              "RENEWIDM-IDS": "Renouveler les identifiants d'utilisateur et de groupe lors de l'importation de modèles d'étapes et BPMN. Ceci est souvent requis lors de l'importation de la définition d'application dans un environnement Flowable différent. Il essaiera de lier les étapes humaines et les tâches utilisateur au bon utilisateur et groupe dans cet environnement cible.",
              "ERROR": "Une erreur s'est produite lors du traitement du fichier",
              "NO-DROP": "Glisser/Déposer n'est pas supporté."
          },
          "INCLUDE-MODELS-TITLE": "Modèles inclus dans la définition d'App"
        },
        "ALERT": {
          "DELETE-CONFIRM": "La définition d'App a été supprimé",
          "PUBLISH-CONFIRM": "La définition d'App a été publié",
          "PUBLISH-ERROR": "Impossible de publier la définition d'App. Veuillez vérifier la validité des références de modèles de processus"
        }
    },

    "SHARE-INFO": {
        "ACTION": {
          "ADD": "Ajouter une autre personne"
        }
    },

    "FORM-BUILDER": {
        "PALLETTE": {
            "TEXT": "Texte",
            "MULTILINE-TEXT": "Texte Multiligne",
            "PASSWORD": "Mot de passe",
            "NUMBER": "Nombre",
            "CHECKBOX": "Case à cocher",
            "DATE": "Date",
            "DROPDOWN": "Liste déroulante",
            "RADIO": "Boutton radio",
            "PEOPLE": "Personnes",
            "GROUP-OF-PEOPLE": "Groupes de personnes",
            "UPLOAD": "Téléchargement",
            "EXPRESSION": "Expression",
            "DECIMAL": "Décimal",
	    	"HYPERLINK": "Lien Hypertexte",
	    	"SPACER": "Spacer",
			"HORIZONTAL-LINE": "Horizontal line",
			"HEADLINE": "Headline",
			"HEADLINE-WITH-LINE":"Headline"
        },
        "TABS": {
            "GENERAL": "Général",
            "OPTIONS": "Options",
            "UPLOAD-OPTIONS": "Options de téléchargement",
            "ADVANCED-OPTIONS":"Avancé"
        },
        "VERSION": "Version {{version}}",
        "LAST-UPDATED": "Dernière modification par {{lastUpdatedBy}}, {{lastUpdated | dateformat}}",
        "TITLE": {
            "DESIGN": "Conception",
            "OUTCOME": "Résultats"
        },
        "POPUP": {
            "EDIT-TITLE": "Editer le champ '{{name}}'",
            "EXPRESSION-TITLE": "Editer l'expression"
        },
        "MESSAGE": {
            "EMPTY-EXPRESSION": "(Aucune valeur de l'expression)",
            "EXPRESSION-HELP": "Vous pouvez également afficher les valeurs préalablement soumises dans tout formulaire, dans le cadre du texte, en utilisant une notation de référence comme ${myFieldId}.",
            "OPTIONS-EXPRESSION-HELP": "Vous pouvez utiliser une expression pour remplir dynamiquement des options, par exemple en référençant une variable telle que ${optionsVariable}. L'expression doit aboutir à un objet java (java.util.List avec des objets Option) ou à sa représentation json."
        },
        "LABEL" : {
            "FUNCTIONAL-GROUP": "Sélectionner un groupe..",
            "PERSON": "Sélectionner une personne.."
        },
        "COMPONENT": {
            "LABEL": "Libellé:",
            "OVERRIDEID": "Surcharger l'identifiant?",
            "ID": "Identifiant:",
            "PLACEHOLDER": "Paramètre fictif:",
            "OPTIONS": "Options",
            "RADIO-BUTTON-DEFAULT": "Option 1",
            "DROPDOWN-DEFAULT-EMPTY-SELECTION": "Veuillez en choisir un...",
            "DROPDOWN-EMPTY-VALUE-HELP": "Ceci est l'option pour la 'valeur à vide'. Le sélectionner lors de l'utilisation signifie 'aucune valeur' ou 'vide'.  Ceci est autorisé pour les champs optionnels mais pas pour les champs obligatoires.",
            "OPTIONS-EXPRESSION": "Expression des options:",
            "OPTIONS-EXPRESSION-ENABLED": "Activer l'expression des options",
            "REQUIRED": "Requis",
	          "READONLY": "Lecture seul",
            "EXPRESSION": "Expression",
            "ADD-OPTION": "+ Ajouter une nouvelle option",
            "UPLOAD-ALLOW-MULTIPLE": "Autoriser le téléchargement de plusieurs fichiers",
            "SIZE": "Taille",
	          "MAX-LENGTH":"Longueur maximale:",
            "MIN-LENGTH":"Longueur minimum:",
            "PASSWORD-UNMASK-OPTION": "Option de masquage / démasquage de mot de passe",
	          "HYPERLINK-URL": "URL line hypertexte",
	          "REGEX-PATTERN":"Regex standard",
            "MASK":{
              "TITLE":"Masque de saisie",
              "EXAMPLES":{
                "TITLE":"Exemples:",
                "NUMBER":"tous les nombres",
                "LETTER":"toutes les lettres",
                "NUMBERORLETTER":"N'importe quel nombre ou lettre",
                "OPTIONAL":"Rendre le masque optionel (non valide)",
                "PHONE":"Téléphone"
               }
           }
        },
        "OUTCOMES": {
            "DESCRIPTION": "Vous pouvez définir plusieurs résultats pour cette tâche. Une fois la tâche complété, les utilisateurs choisissent la variable de résultat qui pourra ensuite être utilisé en tant que tel dans le processus.",
            "NO-OUTCOMES-OPTION": "Ne pas utiliser les résultats personnalisés, afficher uniquement le boutton 'Terminer'",
            "OUTCOMES-OPTION": "Utiliser des résultats personnalisés pour ce formulaire.",
            "POSSIBLE-OUTCOMES": "Résultats possibles",
            "NEW-OUTCOME-PLACEHOLDER": "Entrer un nouveau résultat",
            "ADD": "Ajouter un résultat",
            "REMOVE": "Retirer"
        }
    },

    "DECISION-TABLE-EDITOR": {
        "EMPTY-MESSAGES": {
            "NO-VARIABLE-SELECTED": "Indéfini"
        },
        "POPUP": {
            "EXPRESSION-EDITOR": {
                "INPUT-TITLE": "Modifier la colonne d'entrée",
                "INPUT-DESCRIPTION": "Sélectionnez la variable d'entrée comme entrée pour la colonne",
                "OUTPUT-TITLE": "Modifier la colonne de sortiee",
                "OUTPUT-DESCRIPTION": "Sélectionnez une variable de sortie existante ou créez une nouvelle",
                "EXPRESSION-LABEL": "Libellé de colonne:",
                "EXPRESSION-PLACEHOLDER": "Entrer un libellé optionnel",
                "EXPRESSION-VARIABLE-NAME": "Nom de variable:",
                "EXPRESSION-VARIABLE-TYPE": "Type de variable:",
                "EXPRESSION-VARIABLE-NAME-PLACEHOLDER": "Entrer un nom de variable",
                "OUTPUT-NEW-VARIABLE-ID": "Variable ID:",
                "OUTPUT-NEW-VARIABLE-TYPE": "Type de variable:",
                "COMPLEX-EXPRESSION-LABEL": "Expression complexe :",
                "ALLOWED-VALUES": "Valeurs autorisées (optionel):",
                "OUTPUT-VALUES": "Valeurs de résultats ",
                "OUTPUT-VALUES-OPTIONAL": "(optionel):",
                "OUTPUT-VALUES-NOT-OPTIONAL": "(drag rows for priority / output order):"
            }
        },
        "BUTTON-ACTIONS-LABEL": "Actions",
        "BUTTON-ADD-INPUT-LABEL": "Ajouter une entrée",
        "BUTTON-ADD-OUTPUT-LABEL": "Ajouter une sortie",
        "BUTTON-ADD-RULE-LABEL": "Ajouter une règle",
        "BUTTON-MOVE-RULE-UPWARDS-LABEL": "Déplacer vers le haut",
        "BUTTON-MOVE-RULE-DOWNWARDS-LABEL": "Déplacer vers le bas",
        "BUTTON-REMOVE-RULE-LABEL": "Retirer une règle",
        "ALERT": {
            "EXPRESSION-VARIABLE-REQUIRED-ERROR": "Toutes les expressions d'entrée et de sorties doivent référencer un champs de formulaire ou une variable.",
            "SAVE-CONFIRM": "La table de décision '{{name}}' a été sauvegardée"
        }
    },

    "TOUR": {
        "WELCOME-TITLE": "Bienvenue, {{userName}}",
        "WELCOME-CONTENT": "Ceci est une introduction à l'éditeur Flowable. Les prochaines étapes vous guideront dans les différentes sections de l'application pour vous aider à démarrer. Appuyez sur la touche ESC pour arrêter à tout moment." ,
        "PALETTE-TITLE": "La Palette",
        "PALETTE-CONTENT": "Tous les éléments disponibles pour créer un processus métier peuvent être trouvées ici. Ils sont organisés dans des groupes logiques. Pour ouvrir un groupe, cliquez simplement dessus:",
        "CANVAS-TITLE": "Le Canevas",
        "CANVAS-CONTENT": "C'est l'espace de travail sur lequel vous créez votre processus métier. Faites glisser des éléments de la palette sur la gauche et déposez-les sur le canevas pour commencer la modélisation..",
        "DRAGDROP-TITLE": "Exemple de glisser-déposer",
        "DRAGDROP-CONTENT": "Voici un exemple de comment commencer avec la modélisation:",
        "PROPERTIES-TITLE": "Propriétés",
        "PROPERTIES-CONTENT": "Ici, vous pouvez configurer les propriétés des éléments constitutif de votre processus métier. Il suffit de sélectionner l'élément sur le canevas et ses propriétés seront affichées. Cliquez sur la propriété si vous souhaitez l'éditer",
        "TOOLBAR-TITLE": "La Barre d'outils",
        "TOOLBAR-CONTENT": "Toutes les actions peuvent être trouvées ici: sauvegarder ou valider un modèle, copier et coller des éléments d'un processus, etc. Survolez les boutons pour obtenir une description pour une action.",
        "END-TITLE": "La Fin",
        "END-CONTENT": "C'est tout! Vous pouvez maintenant commencer à modéliser vos processus. Si vous avez des questions, n'hésitez pas à les poser sur le <a href=\"http://forum.flowable.org/\" target=\"_blank\">Forum Flowable</a> "
    },

    "FEATURE-TOUR" : {
        "BENDPOINT" : {
            "TITLE": "Tutorial sur les points de courbure",
            "DESCRIPTION" : "Lorsque vous connectez les étapes d'un processus l'une à l'autre en utilisant le flux de séquence (les flèches entre les étapes d'un processus), vous pourriez constater que ces flux de séquence se croisent ou que vous souhaitez les répartir différemment. Pour ce faire, vous pouvez ajouter ou supprimer un point de courbure vers ou à partir d'un flux de séquence. <br/> <br/> Comme indiqué ci-dessous dans l'image, cliquez d'abord sur 'Ajouter un point de courbure', puis cliquez sur un flux de séquence pour ajoutez-le. Notez que le flux de séquence vous montrera une indication subtile en vert pour montrer que le point de flexion peut être ajouté là. <br/> <br/> La suppression d'un point de courbure suit à nouveau un motif similaire: cliquez sur le bouton 'supprimer le point de courbure' et cliquez sur le bouton courber le point pour le retirer à nouveau."
        }
    },

    "ACTION.OK" : "Ok",
    "ACTION.SAVE" : "Sauvegarder",
    "ACTION.SAVE-AND-CLOSE" : "Sauvegarder et fermer l'éditeur",
    "ACTION.SEND" : "Envoyer",
    "ACTION.CANCEL" : "Annuler",
    "ACTION.SELECT" : "Sélectionner",
    "ACTION.ADD" : "Ajouter",
    "NEW_ENTRY":"Ajouter une nouvelle entrée ",
    "ACTION.REMOVE" : "Retirer",
    "ACTION.MOVE.UP" : "Déplacer l'entrée vers le haut",
    "ACTION.MOVE.DOWN" : "Déplacer l'entrée vers le base",

    "TOOLBAR.ACTION.CLOSE" : "Fermer l'éditeur et revenir vers la page de vue d'ensemble",
    "TOOLBAR.ACTION.SAVE" : "Sauvegarder le modèle",
    "TOOLBAR.ACTION.VALIDATE" : "Valider le modèle",
    "TOOLBAR.ACTION.CUT" : "Couper (sélectionner un ou plusieurs éléments dans votre processus métier)",
    "TOOLBAR.ACTION.COPY" : "Copier (sélectionner un ou plusieurs éléments dans votre processus métier)",
    "TOOLBAR.ACTION.PASTE" : "Coller",
    "TOOLBAR.ACTION.DELETE" : "Supprimer l'élément sélectionné",
    "TOOLBAR.ACTION.UNDO" : "Annuler",
    "TOOLBAR.ACTION.REDO" : "Refaire",
    "TOOLBAR.ACTION.ZOOMIN" : "Zoom avant",
    "TOOLBAR.ACTION.ZOOMOUT" : "Zoom arrière",
    "TOOLBAR.ACTION.ZOOMACTUAL" : "Zoom en taille réelle",
    "TOOLBAR.ACTION.ZOOMFIT" : "Zoom pour s'adapter",
    "TOOLBAR.ACTION.BENDPOINT.ADD" : "Ajouter un point de courbure sur le flux de séquence sélectionné",
    "TOOLBAR.ACTION.BENDPOINT.REMOVE" : "Retirer un point de courbure sur le flux de séquence sélectionné",
    "TOOLBAR.ACTION.ALIGNHORIZONTAL" : "Aligner le modèle horizontalement",
    "TOOLBAR.ACTION.ALIGNVERTICAL" : "Aligner modèle verticalement",
    "TOOLBAR.ACTION.SAMESIZE" : "Même taille",
    "TOOLBAR.ACTION.HELP": "Démarrer la visite guidée",
    "TOOLBAR.ACTION.FEEDBACK": "Faire un retour d'information",

    "FORM_TOOLBAR.ACTION.SAVE" : "Sauvegarder le modèle",

    "APP_DEFINITION_TOOLBAR.ACTION.SAVE" : "Sauvegarder la définition d'App",

    "BUTTON.ACTION.DELETE.TOOLTIP": "Supprimer un élément from the modèle",
    "BUTTON.ACTION.MORPH.TOOLTIP": "Changer un type d'élément",

    "ELEMENT.AUTHOR" : "Auteur",
    "ELEMENT.DATE_CREATED" : "Date de creation",

    "PROPERTY.REMOVED" : "supprimé",
    "PROPERTY.EMPTY" : "Aucune valeur",
    "PROPERTY.PROPERTY.EDIT.TITLE" : "Changer la valeur pour ",

    "PROPERTY.FEEDBACK.TITLE" : "Veuillez ajouter vos commentaires",

    "PROPERTY.ASSIGNMENT.TITLE" : "Tâche",
    "PROPERTY.ASSIGNMENT.TYPE" : "Type",
    "PROPERTY.ASSIGNMENT.TYPE.IDENTITYSTORE" : "Identity store",
    "PROPERTY.ASSIGNMENT.TYPE.STATIC" : "Valeurs fixées",
    "PROPERTY.ASSIGNMENT.ASSIGNEE" : "Personne assignée",
    "PROPERTY.ASSIGNMENT.MATCHING" : "Utiliser &uparrow; et &downarrow; pour sélectionner et appuyer sur Entrée pour confirmer ou utiliser la souris",
    "PROPERTY.ASSIGNMENT.ASSIGNEE_PLACEHOLDER" : "Choisir une personne assignée",
    "PROPERTY.ASSIGNMENT.EMPTY" : "Aucune personne assignée sélectionné",
    "PROPERTY.ASSIGNMENT.NONE" : "Aucune ...",
    "PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHUSER": "Recherche un utilisateur",
    "PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHGROUP": "Recherche un groupe",
    "PROPERTY.ASSIGNMENT.SEARCH": "Recherche: ",
    "PROPERTY.ASSIGNMENT.ASSIGNEE_DISPLAY" : "Personne assignée {{assignee}}",
    "PROPERTY.ASSIGNMENT.CANDIDATE_USERS_DISPLAY" : "{{length}} utilisateurs candidats",
    "PROPERTY.ASSIGNMENT.CANDIDATE_USERS" : "Utilisateurs candidats",
    "PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS_DISPLAY" :  "{{length}} groupes candidats",
    "PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS" :  "Groupes candidats",
    "PROPERTY.ASSIGNMENT.USER_IDM_DISPLAY": "Utilisateur {{firstName}} {{lastName}}",
    "PROPERTY.ASSIGNMENT.USER_IDM_EMAIL_DISPLAY": "Utilisateur {{email}}",
    "PROPERTY.ASSIGNMENT.USER_IDM_FIELD_DISPLAY": "Champs {{name}}",
    "PROPERTY.ASSIGNMENT.IDM_EMPTY" : "Initiateur de processus",
    "PROPERTY.ASSIGNMENT.IDM.TYPE" : "Tâche",
    "PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_USERS" : "Aucun utilisateur candidat sélectionné...",
    "PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_GROUPS" : "Aucun groupe candidat sélectionné...",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.INITIATOR" : "Assigné à l'initiateur de processus",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USER" : "Assigné à un seul utilisateur",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USERS" : "Utilisateurs candidats",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.GROUPS" : "Groupes candidats",
    "PROPERTY.ASSIGNMENT.INITIATOR-CAN-COMPLETE" : "Autoriser l'initiateur de processus à terminer la tâche",
    "PROPERTY.EXECUTIONLISTENERS.DISPLAY" : "{{length}} execution listeners",
    "PROPERTY.EXECUTIONLISTENERS.EMPTY" : "No execution listeners configured",
    "PROPERTY.EXECUTIONLISTENERS.EVENT" : "Événement",
    "PROPERTY.EXECUTIONLISTENERS.CLASS" : "Class",
    "PROPERTY.EXECUTIONLISTENERS.CLASS.PLACEHOLDER" : "Entrer un classname",
    "PROPERTY.EXECUTIONLISTENERS.EXPRESSION" : "Expression",
    "PROPERTY.EXECUTIONLISTENERS.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Entrer une delegate expression",
    "PROPERTY.EXECUTIONLISTENERS.UNSELECTED" : "Aucun execution listener sélectionné",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME" : "Nom",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME.PLACEHOLDER" : "Entrer un nom",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE" : "valeur de chaîne",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER" : "Entrer une valeur de chaîne",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING" : "String",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING.PLACEHOLDER" : "Entrer une valeur de chaîne",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.IMPLEMENTATION" : "Implementation",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EMPTY" : "Aucun champ sélectionné",

    "PROPERTY.FIELDS" : "{{length}} champs",
    "PROPERTY.FIELDS.EMPTY" : "Aucun champ sélectionné",
    "PROPERTY.FIELDS.NAME" : "Nom",
    "PROPERTY.FIELDS.NAME.PLACEHOLDER" : "Entrer un nom",
    "PROPERTY.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.FIELDS.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.FIELDS.STRINGVALUE" : "valeur de chaîne",
    "PROPERTY.FIELDS.STRINGVALUE.PLACEHOLDER" : "Entrer a string value",
    "PROPERTY.FIELDS.STRING" : "String",
    "PROPERTY.FIELDS.STRING.PLACEHOLDER" : "Entrer a string",
    "PROPERTY.FIELDS.IMPLEMENTATION" : "Implémentation",

    "PROPERTY.DATAPROPERTIES.VALUES" : "{{length}} data objects",
    "PROPERTY.DATAPROPERTIES.EMPTY" : "Aucun objet de données configuré",
    "PROPERTY.DATAPROPERTIES.ID" : "Id",
    "PROPERTY.DATAPROPERTIES.ID.PLACEHOLDER" : "Entrer une id",
    "PROPERTY.DATAPROPERTIES.NAME" : "Nom",
    "PROPERTY.DATAPROPERTIES.NAME.PLACEHOLDER" : "Entrer a nom",
    "PROPERTY.DATAPROPERTIES.TYPE" : "Type",
    "PROPERTY.DATAPROPERTIES.VALUE.PLACEHOLDER" : "Entrer une value (optionnel)",
    "PROPERTY.DATAPROPERTIES.VALUE" : "Valeur par défaut",

    "PROPERTY.FORMPROPERTIES.VALUE" : "{{length}} propriétés de formulaire",
    "PROPERTY.FORMPROPERTIES.EMPTY" : "Aucune propriété du formulaire sélectionné",
    "PROPERTY.FORMPROPERTIES.ID" : "Identifiant",
    "PROPERTY.FORMPROPERTIES.ID.PLACEHOLDER" : "Entrer un identifiant",
    "PROPERTY.FORMPROPERTIES.NAME" : "Nom",
    "PROPERTY.FORMPROPERTIES.NAME.PLACEHOLDER" : "Entrer un nom",
    "PROPERTY.FORMPROPERTIES.TYPE" : "Type",
    "PROPERTY.FORMPROPERTIES.DATEPATTERN" : "Pattern de Date",
    "PROPERTY.FORMPROPERTIES.DATEPATTERN.PLACEHOLDER" : "Entrer un Pattern de date",
    "PROPERTY.FORMPROPERTIES.VALUES" : "Valeurs",
    "PROPERTY.FORMPROPERTIES.ENUMVALUES.EMPTY" : "Aucune valeur d'énumération sélectionné",
    "PROPERTY.FORMPROPERTIES.VALUES.ID" : "Identifiant",
    "PROPERTY.FORMPROPERTIES.VALUES.NAME" : "Nom",
    "PROPERTY.FORMPROPERTIES.VALUES.ID.PLACEHOLDER" : "Entrer un identifiant pour la valeur",
  	"PROPERTY.FORMPROPERTIES.VALUES.NAME.PLACEHOLDER" : "Entrer un nom pour la valeur",
    "PROPERTY.FORMPROPERTIES.EXPRESSION" : "Expression",
    "PROPERTY.FORMPROPERTIES.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.FORMPROPERTIES.VARIABLE" : "Variable",
    "PROPERTY.FORMPROPERTIES.VARIABLE.PLACEHOLDER" : "Entrer une variable",
    "PROPERTY.FORMPROPERTIES.DEFAULT" : "default",
    "PROPERTY.FORMPROPERTIES.DEFAULT.PLACEHOLDER" : "Entrer une default",
    "PROPERTY.FORMPROPERTIES.REQUIRED" : "Requise",
    "PROPERTY.FORMPROPERTIES.READABLE" : "Lecture",
    "PROPERTY.FORMPROPERTIES.WRITABLE" : "Ecriture",

    "PROPERTY.INPARAMETERS.VALUE" : "{{length}} paramètres d'entrée",
    "PROPERTY.INPARAMETERS.EMPTY" : "Aucun  paramètres d'entrée configuré",

    "PROPERTY.OUTPARAMETERS.VALUE" : "{{length}} paramètres de sortie",
    "PROPERTY.OUTPARAMETERS.EMPTY" : "No paramètres de sortie configuré",

    "PROPERTY.PARAMETER.SOURCE" : "Source",
    "PROPERTY.PARAMETER.SOURCE.PLACEHOLDER" : "Entrer une source",
    "PROPERTY.PARAMETER.SOURCEEXPRESSION" : "Expression de source",
    "PROPERTY.PARAMETER.SOURCEEXPRESSION.PLACEHOLDER" : "Entrer une expression de source",
    "PROPERTY.PARAMETER.TARGET" : "Cible (Target)",
    "PROPERTY.PARAMETER.TARGET.PLACEHOLDER" : "Entrer une Cible",
    "PROPERTY.PARAMETER.TARGETEXPRESSION" : "Expression de cible",
    "PROPERTY.PARAMETER.TARGETEXPRESSION.PLACEHOLDER" : "Entrer une expression de cible",
    "PROPERTY.PARAMETER.EMPTY" : "Aucun paramètre sélectionné",

    "PROPERTY.PROCESSREFERENCE.EMPTY" : "Aucune référence sélectionnée",
    "PROPERTY.PROCESSREFERENCE.TITLE" : "Référence de processus",
    "PROPERTY.PROCESSREFERENCE.ERROR.SUBPROCESS" : "Une erreur a été rencontré lors du chargement des processus. Veuillez réessayer ultérieurement",
    "PROPERTY.PROCESSREFERENCE.PROCESS.LOADING" : "Chargement des processus...",
    "PROPERTY.PROCESSREFERENCE.PROCESS.EMPTY" : "Ce répertoire ne contient pas de processus",

    "PROPERTY.FORMREFERENCE.EMPTY" : "Aucune reference sélectionnée",
    "PROPERTY.FORMREFERENCE.TITLE" : "Référence de formulaire",
    "PROPERTY.FORMREFERENCE.DESCRIPTION" : "Référence vers un formulaire",
    "PROPERTY.FORMREFERENCE.ERROR.FORM" : "Une erreur a été rencontré lors du chargement des formulaires.  Veuillez réessayer ultérieurement",
    "PROPERTY.FORMREFERENCE.FORM.LOADING" : "Chargement des formulaires...",
    "PROPERTY.FORMREFERENCE.FORM.EMPTY" : "Ce répertoire ne contient pas de formulaires",

    "PROPERTY.TASKLISTENERS.VALUE" : "{{length}} task listeners",
    "PROPERTY.TASKLISTENERS.EMPTY" : "Aucun task listeners configuré",
    "PROPERTY.TASKLISTENERS.EVENT" : "Événements",
    "PROPERTY.TASKLISTENERS.CLASS" : "Class",
    "PROPERTY.TASKLISTENERS.CLASS.PLACEHOLDER" : "Entrer un classname",
    "PROPERTY.TASKLISTENERS.EXPRESSION" : "Expression",
    "PROPERTY.TASKLISTENERS.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Entrer une delegate expression",
    "PROPERTY.TASKLISTENERS.UNSELECTED" : "Aucun task listener sélectionné",
    "PROPERTY.TASKLISTENERS.FIELDS.NAME" : "Nom",
    "PROPERTY.TASKLISTENERS.FIELDS.NAME.PLACEHOLDER" : "Entrer un nom",
    "PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER" : "Entrer une expression",
    "PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE" : "valeur de chaîne",
    "PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER" : "Entrer une valeur de chaîne",
    "PROPERTY.TASKLISTENERS.FIELDS.STRING" : "String",
    "PROPERTY.TASKLISTENERS.FIELDS.STRING.PLACEHOLDER" : "Entrer a string",
    "PROPERTY.TASKLISTENERS.FIELDS.IMPLEMENTATION" : "Implémentation",
    "PROPERTY.TASKLISTENERS.FIELDS.EMPTY" : "Aucun champ sélectionné",

    "PROPERTY.EVENTLISTENERS.DISPLAY" : "{{length}} événement listeners",
    "PROPERTY.EVENTLISTENERS.EMPTY" : "Aucun événement listeners configured",
    "PROPERTY.EVENTLISTENERS.EVENTS": "Événements",
    "PROPERTY.EVENTLISTENERS.RETHROW": "Renvoyer l'événement?",
    "PROPERTY.EVENTLISTENERS.CLASS" : "Class",
    "PROPERTY.EVENTLISTENERS.CLASS.PLACEHOLDER" : "Entrer un classname",
    "PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Entrer une delegate expression",
    "PROPERTY.EVENTLISTENERS.ENTITYTYPE" : "Type de l'entité",
    "PROPERTY.EVENTLISTENERS.ENTITYTYPE.PLACEHOLDER" : "Entrer le type de l'entité ",
    "PROPERTY.EVENTLISTENERS.RETHROWTYPE": "Renvoyer le type d'événement",
    "PROPERTY.EVENTLISTENERS.ERRORCODE" : "Code d'erreur",
    "PROPERTY.EVENTLISTENERS.ERRORCODE.PLACEHOLDER" : "Entrer un code d'erreur ",
    "PROPERTY.EVENTLISTENERS.MESSAGENAME" : "Nom du Message",
    "PROPERTY.EVENTLISTENERS.MESSAGENAME.PLACEHOLDER" : "Entrer le nom du message",
    "PROPERTY.EVENTLISTENERS.SIGNALNAME" : "Nom du Signal",
    "PROPERTY.EVENTLISTENERS.SIGNALNAME.PLACEHOLDER" : "Entrer le nom du signal",
    "PROPERTY.EVENTLISTENERS.UNSELECTED" : "Aucun événement listener sélectionné",

    "PROPERTY.PLANITEMLIFECYCLELISTENERS.VALUE" : "{{length}} lifecycle listeners",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.EMPTY" : "No lifecycle listeners configured",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.EVENT" : "Event",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.SOURCE_STATE" : "Source state",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.TARGET_STATE" : "Target state",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.CLASS" : "Class",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.CLASS.PLACEHOLDER" : "Enter a classname",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.EXPRESSION" : "Expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Enter a delegate expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.UNSELECTED" : "No task listener selected",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.NAME" : "Name",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.STRINGVALUE" : "String value",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER" : "Enter a string value",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.STRING" : "String",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.STRING.PLACEHOLDER" : "Enter a string",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.IMPLEMENTATION" : "Implementation",
    "PROPERTY.PLANITEMLIFECYCLELISTENERS.FIELDS.EMPTY" : "No Field selected",

    "PROPERTY.SIGNALDEFINITIONS.DISPLAY" : "{{length}} définitions de signal",
    "PROPERTY.SIGNALDEFINITIONS.EMPTY" : "Aucune définitions de signal configuré",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE-GLOBAL": "Global",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE-PROCESSINSTANCE": "Instance de processus ",
    "PROPERTY.SIGNALDEFINITIONS.ID" : "Identifiant",
    "PROPERTY.SIGNALDEFINITIONS.NAME" : "Nom",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE" : "Portée",

    "PROPERTY.MESSAGEDEFINITIONS.DISPLAY" : "{{length}} definitions de message",
    "PROPERTY.MESSAGEDEFINITIONS.EMPTY" : "Aucune définitions de message configuré",
    "PROPERTY.MESSAGEDEFINITIONS.ID" : "Identifiant",
    "PROPERTY.MESSAGEDEFINITIONS.NAME" : "Nom",

    "PROPERTY.SEQUENCEFLOW.ORDER.EMPTY" : "Aucune ordre de flux de séquence défini",
    "PROPERTY.SEQUENCEFLOW.ORDER.NOT.EMPTY" : "Ordre flux de séquence order défini",
    "PROPERTY.SEQUENCEFLOW.ORDER.NO.OUTGOING.SEQUENCEFLOW.FOUND" : "Aucun flux de séquence sortant trouvé.",
    "PROPERTY.SEQUENCEFLOW.ORDER.DESCRIPTION" : "Définir l'ordre dans lequel le flux de séquence doit être évalué:",
    "PROPERTY.SEQUENCEFLOW.ORDER.SEQUENCEFLOW.VALUE" : "Flux de séquence vers {{targetType}} {{targetTitle}}",

    "PROPERTY.SEQUENCEFLOW.CONDITION.TITLE" : "condition du flux de séquence ",
    "PROPERTY.SEQUENCEFLOW.CONDITION.STATIC" : "Condition expression",
    "PROPERTY.SEQUENCEFLOW.CONDITION.NO-CONDITION-DISPLAY": "Aucune condition définie",

    "PROPERTY.DUEDATE.EMPTY" : "Aucune date d'échéance",
    "PROPERTY.DUEDATE.DEFINED" : "Date d'échéance définie",
    "PROPERTY.DUEDATE.TITLE" : "Date d'échéance",
    "PROPERTY.DUEDATE.EXPRESSION-LABEL" : "Expression de la Date d'échéance ",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.NO-DUEDATE" : "Aucune date d'échéance",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.EXPRESSION" : "Définition de l'expression ",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.STATIC" : "Durée fixe après la création de la tâche",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.FIELD" : "Basé sur le champ",

    "MODEL.SAVE.TITLE" : "Sauvegarder le modèle",
    "MODEL.VALIDATE.TITLE" : "Validation des résultats",
    "MODEL.NAME" : "Nom",
    "MODEL.KEY" : "Clé",
    "MODEL.DESCRIPTION" : "Description",
    "MODEL.SAVE.NEWVERSION" : "Sauvegarder ceci en tant que nouvelle version?  Cela signifie que vous pouvez toujours revenir à une version précédente",
    "MODEL.SAVE.COMMENT" : "Commentaire",
    "MODEL.SAVE.SAVING" : "Sauvegarder du modèle",
    "MODEL.LASTMODIFIEDDATE" : "Dernière sauvegarde",
    "MODEL.SAVE.ERROR": "Erreur innatendue: impossible de sauvegarder le modèle",
    "MODEL.VALIDATIONERRORS": "Notez que le modèle contient des erreurs de validation. Cela signifie que le modèle ne peut pas être déployé sur le Moteur Flowable dans son état actuel.",
    "MODEL.CONFLICT.WRITE": "Impossible de sauvegarder le modèle: '{{userFullName}}' a éffectué des changements à ce modèle",
    "MODEL.CONFLICT.WRITE.OPTIONS": "Sélectionner une option pour résoudre ce conflit:",
    "MODEL.CONFLICT.WRITE.OPTION.OVERWRITE": "Surcharger l'autre modèle",
    "MODEL.CONFLICT.WRITE.OPTION.DISCARDCHANGES": "Ignorer mes modifications",
    "MODEL.CONFLICT.WRITE.OPTION.SAVEAS": "Sauvegarder en tant que nouveau modèle",
    "MODEL.CONFLICT.WRITE.OPTION.NEWVERSION": "Créer une nouvelle version",
    "MODEL.CONFLICT.SAVEAS" : "Sauvegarder en tant que:",

    "EVENT_TYPE.ACTIVITY.COMPENSATE.TOOLTIP": "Une activité est sur le point d'être exécutée en compensation d'une autre activité. L'événement cible l'activité qui va être exécutée par compensation",
    "EVENT_TYPE.ACTIVITY.COMPLETED.TOOLTIP": "Une activité a été terminée avec succès",
    "EVENT_TYPE.ACTIVITY.ERROR.RECEIVED.TOOLTIP": "Une activité a reçu un événement d'erreur. Expédié avant que l'erreur réelle n'ait été reçue par l'activité",
    "EVENT_TYPE.MEMBERSHIP.CREATED.TOOLTIP": "Une nouvelle adhésion a été créée",
    "EVENT_TYPE.MEMBERSHIP.DELETED.TOOLTIP": "Une seule adhésion a été supprimée",
    "EVENT_TYPE.MEMBERSHIPS.DELETED.TOOLTIP": "Toutes les adhésions au groupe concerné ont été supprimées. Aucun évènement individuel ne sera envoyé pour des raisons de performances",
    "EVENT_TYPE.TASK.ASSIGNED.TOOLTIP": "Une tâche a été assignée. Ceci est executé en même temps qu'un événement ENTITY_UPDATED",
    "EVENT_TYPE.TASK.COMPLETED.TOOLTIP": "Une tâche a été effectuée. Déployé avant que l'entité de tâche ne soit supprimée",
    "EVENT_TYPE.UNCAUGHT.BPMNERROR.TOOLTIP": "Lorsqu'une erreur BPMN a été lancée, mais elle n'a pas été prise dans le processus",
    "EVENT_TYPE.VARIABLE.CREATED.TOOLTIP": "Une nouvelle variable a été créé",
    "EVENT_TYPE.VARIABLE.DELETED.TOOLTIP": "Une variable existante a été supprimé",
    "EVENT_TYPE.VARIABLE.UPDATED.TOOLTIP": "Une variable existante a été mis à jour",

    "PROPERTY.DECISIONTABLEREFERENCE.EMPTY" : "Aucune référence sélectionné",
    "PROPERTY.DECISIONTABLEREFERENCE.TITLE" : "Référence de la table de décision",
    "PROPERTY.DECISIONTABLEREFERENCE.ERROR.FORM" : "Une erreur s'est produite lors du chargement des tables de décision. Veuillez réessayer ultérieurement",
    "PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.LOADING" : "Chargement des tables de décision...",
    "PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.EMPTY" : "Ce répertoire ne contient pas de tables de décision",

    "PROPERTY.CASEREFERENCE.EMPTY" : "Aucune référence sélectionné",
    "PROPERTY.CASEREFERENCE.TITLE" : "Réference du modèle de cas",
    "PROPERTY.CASEREFERENCE.ERROR.FORM" : "Une erreur a été rencontré lors du chargement des modèles de cas.  Veuillez réessayer ultérieurement",
    "PROPERTY.CASEREFERENCE.CASE.LOADING" : "Chargement des modèles de cas...",
    "PROPERTY.CASEREFERENCE.CASE.EMPTY" : "Ce répertoire ne contient pas de modèle de cas"
}