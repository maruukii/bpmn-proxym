export default {
    "GENERAL" : {
        "MAIN-TITLE": "Flowable Editor",
        "NAVIGATION" : {
            "PROCESSES": "Processes",
            "CASEMODELS": "Case models",
            "FORMS": "Forms",
            "DECISIONS": "Decisions",
            "APPS": "Apps"
        },
        "TITLE": {
            "SELECT-GROUP" :"Select group",
            "MATCHING-GROUPS": "Matching groups",
            "FILTER": "Filter",
            "HISTORY": "History"
        },
        "ACTION": {
            "LOGOUT": "Sign out",
            "DASHBOARD": "Dashboard",
            "RETURN-TO-LIST": "Show all definitions",
            "CANCEL": "Cancel",
            "CLOSE": "Close",
            "EDIT": "Edit",
            "SAVE": "Save",
            "OPEN": "Open",
            "OK": "Ok",
            "CONFIRM": "Confirm",
            "CONFIRM-AND-CLOSE": "Confirm and close",
            "NEW-FORM": "New form",
            "CREATE-FORM": "Create form",
            "SELECT-FORM": "Select form",
            "NEW-DECISION-TABLE": "New Decision Table",
            "CREATE-DECISION-TABLE": "Create Decision Table",
            "NEW-DECISION-SERVICE": "New Decision Service",
            "CREATE-DECISION-SERVICE": "Create Decision Service"
        },
        "MESSAGE": {
          "SELECT-GROUP-HELP": "Use &uparrow; and &downarrow; to select and press Enter to confirm",
          "PEOPLE-NO-MATCHING-RESULTS": "No matching users were found",
          "GROUP-NO-MATCHING-RESULTS": "No matching groups were found",
          "GROUP-SOURCE-TYPE": "Group source",
          "GROUP-SOURCE-SEARCH-OPTION": "Group search",
          "GROUP-SOURCE-FIELD-OPTION": "Form field",
          "No element selected": "No element selected",
        },
        "OTHERS" : {
          "PROCESS" : "Process",
          "PROCESS_NAVIGATOR" : "Process Navigator",
          "NO_STRUCTURAL_ELEMENTS_USED" : "No structural elements used."
        }
    },

    "BPMN" : {
      "TITLE": "Process editor",
      "DESCRIPTION" : "BPMN process editor",
      
          "CATEGORIES": {
            "CUSTOMIZED" : {
            "TITLE" : "Customized",
            "DESCRIPTION" : "Customized BPMN elements",
          },
          
            "STARTEVENTS" : {
              "TITLE" : "Start events",
              "DESCRIPTION" : "Start event elements"
            },
            "ENDEVENTS" : {
              "TITLE" : "End events",
              "DESCRIPTION" : "End event elements"
            },
            "ACTIVITIES":{
              "TITLE": "Activities",
              "DESCRIPTION": "Activity elements"
            },
            "STRUCTURAL":{
              "TITLE": "Structural",
              "DESCRIPTION": "Structural elements"
            },
            "GATEWAYS": {
              "TITLE": "Gateways",
              "DESCRIPTION": "Gateway elements"
            },
            "BOUNDARYEVENTS": {
              "TITLE": "Boundary events",
              "DESCRIPTION": "Boundary event elements"
            },
            "INTERMEDIATECATCHINGEVENTS": {
              "TITLE": "Intermediate catching events",
              "DESCRIPTION": "Intermediate catching event elements"
            },
            "INTERMEDIATETHROWINGEVENTS": {
              "TITLE": "Intermediate throwing events",
              "DESCRIPTION": "Intermediate throwing event elements"
            },
            "SWIMLANES": {
              "TITLE": "Swimlanes",
              "DESCRIPTION": "Swimlane elements"
            },
            "ARTIFACTS": {
              "TITLE": "Artifacts",
              "DESCRIPTION": "Artifact elements"
            }
          },
      "PROPERTYPACKAGES" : {
        "PROCESS_IDPACKAGE" : {
          "PROCESS_ID" : {
            "TITLE" : "Process identifier",
            "DESCRIPTION" : "Unique identifier of the process definition."
          }
        },
        
        "OVERRIDEIDPACKAGE" : {
          "OVERRIDEID" : {
            "TITLE" : "Id",
            "DESCRIPTION" : "Unique identifier of the element."
          }
        },
        "NAMEPACKAGE" : {
          "NAME" : {
            "TITLE" : "Name",
            "DESCRIPTION" : "The descriptive name of the BPMN element."
          }
        },
        "DOCUMENTATIONPACKAGE" : {
          "DOCUMENTATION" : {
            "TITLE" : "Documentation",
            "DESCRIPTION" : "Documentation of the BPMN element."
          }
        },
        "CATEGORYPACKAGE" : {
          "CATEGORYDEFINITION" : {
            "TITLE" : "Application",
            "DESCRIPTION" : "Application of the BPMN element."
          }
        },
        "PROCESS_AUTHORPACKAGE" : {
          "PROCESS_AUTHOR" : {
            "TITLE" : "Process author",
            "DESCRIPTION" : "Author of the process definition."
          }
        },
        "PROCESS_VERSIONPACKAGE" : {
          "PROCESS_VERSION" : {
            "TITLE" : "Process version string (documentation only)",
            "DESCRIPTION" : "Version identifier for documentation purpose."
          }
        },
        "PROCESS_HISTORYLEVELPACKAGE" : {
          "PROCESS_HISTORYLEVEL" : {
            "TITLE" : "Set a specific history level for this process definition",
            "DESCRIPTION" : "Set a specific history level for this process definition"
          }
        },
        "ISEXECUTABLEPACKAGE" : {
          "ISEXECUTABLE" : {
            "TITLE" : "Is executable",
            "DESCRIPTION" : "Is the process executable?"
          }
        },
        "PROCESS_POTENTIALSTARTERUSERPACKAGE" : {
          "PROCESS_POTENTIALSTARTERUSER" : {
            "TITLE" : "Potential starter user",
            "DESCRIPTION" : "Which user, can start the process?"
          }
        },
        "PROCESS_POTENTIALSTARTERGROUPPACKAGE" : {
          "PROCESS_POTENTIALSTARTERGROUP" : {
            "TITLE" : "Potential starter group",
            "DESCRIPTION" : "Which group, can start the process?"
          }
        },
        "PROCESS_NAMESPACEPACKAGE" : {
          "PROCESS_NAMESPACE" : {
            "TITLE" : "Target namespace",
            "DESCRIPTION" : "Target namespace for the process definition."
          }
        },
        "PROCESS_ISEAGEREXECUTIONFETCHPACKAGE" : {
          "ISEAGEREXECUTIONFETCH" : {
            "TITLE" : "Eager execution fetching",
            "DESCRIPTION" : "Enable eager execution fetching for this process definition?"
          }
        },
        "ASYNCHRONOUSDEFINITIONPACKAGE" : {
          "ASYNCHRONOUSDEFINITION" : {
            "TITLE" : "Asynchronous",
            "DESCRIPTION" : "Define the activity as asynchronous."
          }
        },
        "DATAPROPERTIESPACKAGE" : {
          "DATAPROPERTIES" : {
            "TITLE" : "Data Objects",
            "DESCRIPTION" : "Definition of the data object properties"
          }
        },
        "EXCLUSIVEDEFINITIONPACKAGE" : {
          "EXCLUSIVEDEFINITION" : {
            "TITLE" : "Exclusive",
            "DESCRIPTION" : "Define the activity as exclusive."
          }
        },
        "EXECUTIONLISTENERSPACKAGE" : {
          "EXECUTIONLISTENERS" : {
            "TITLE" : "Execution listeners",
            "DESCRIPTION" : "Listeners for an activity, process, sequence flow, start and end event.",
            "EVENT":{
            "START":"start",
            "END":"end",
            "TAKE":"take"}
          }
        },
        "TASKLISTENERSPACKAGE" : {
          "TASKLISTENERS" : {
            "TITLE" : "Task listeners",
            "DESCRIPTION" : "Listeners for a user task"
          }
        },
        "EVENTLISTENERSPACKAGE" : {
          "EVENTLISTENERS" : {
            "TITLE" : "Event listeners",
            "DESCRIPTION" : "Listeners for any event happening in the Flowable Engine. It's also possible to rethrow the event as a signal, message or error event"
          }
        },
        "USERTASKASSIGNMENTPACKAGE" : {
          "USERTASKASSIGNMENT" : {
            "TITLE" : "Assignments",
            "DESCRIPTION" : "Assignment definition for the user task"
          }
        },
        "FORMPROPERTIESPACKAGE" : {
          "FORMPROPERTIES" : {
            "TITLE" : "Form properties",
            "DESCRIPTION" : "Definition of the form with a list of form properties"
          }
        },
        "FORMKEYDEFINITIONPACKAGE" : {
          "FORMKEYDEFINITION" : {
            "TITLE" : "Form key",
            "DESCRIPTION" : "Form key that provides a reference to a form."
          }
        },
        "FORMFIELDVALIDATIONPACKAGE" : {
          "FORMFIELDVALIDATION" : {
            "TITLE" : "Validate form fields",
            "DESCRIPTION" : "Validate form fields on the form submission. (allowed values are 'true', 'false' or expression)"
          }
        },
        "DUEDATEDEFINITIONPACKAGE" : {
          "DUEDATEDEFINITION" : {
            "TITLE" : "Due date",
            "DESCRIPTION" : "Due date of the user task."
          }
        },
        "PRIORITYDEFINITIONPACKAGE" : {
          "PRIORITYDEFINITION" : {
            "TITLE" : "Priority",
            "DESCRIPTION" : "Priority of the user task."
          }
        },
        "TASKIDVARIABLENAMEPACKAGE": {
          "TASKIDVARIABLENAME": {
            "TITLE": "ID variable",
            "DESCRIPTION": "If set, the id of the task will be stored in this variable"
          }
        },
        "SERVICETASKCLASSPACKAGE" : {
          "SERVICETASKCLASS" : {
            "TITLE" : "Class",
            "DESCRIPTION" : "Class that implements the service task logic."
          }
        },
        "SERVICETASKEXPRESSIONPACKAGE" : {
          "SERVICETASKEXPRESSION" : {
            "TITLE" : "Expression",
            "DESCRIPTION" : "Service task logic defined with an expression."
          }
        },
        "SERVICETASKDELEGATEEXPRESSIONPACKAGE" : {
          "SERVICETASKDELEGATEEXPRESSION" : {
            "TITLE" : "Delegate expression",
            "DESCRIPTION" : "Service task logic defined with a delegate expression."
          }
        },
        "SERVICETASKFAILEDJOBRETRYTIMECYCLEPACKAGE" : {
          "SERVICETASKFAILEDJOBRETRYTIMECYCLE" : {
            "TITLE" : "Failed job retry time cycle",
            "DESCRIPTION" : "Service task logic defined with a failed job retry time cycle."
          }
        },
        "SERVICETASKFIELDSPACKAGE" : {
          "SERVICETASKFIELDS" : {
            "TITLE" : "Class fields",
            "DESCRIPTION" : "Field extensions"
          }
        },
        "SERVICETASKEXCEPTIONSPACKAGE" : {
          "SERVICETASKEXCEPTIONS" : {
            "TITLE" : "Exceptions",
            "DESCRIPTION" : "Mapped Exceptions"
          }
        },
        "SERVICETASKRESULTVARIABLEPACKAGE" : {
          "SERVICETASKRESULTVARIABLE" : {
            "TITLE" : "Result variable name",
            "DESCRIPTION" : "Process variable name to store the service task result."
          },
          "SERVICETASKUSELOCALSCOPEFORRESULTVARIABLE" : {
            "TITLE" : "Use local scope for result variable",
            "DESCRIPTION" : "Flag that marks that the used resultVariable needs to be saved as a local variable"
          }
        },
        "SERVICETASKTRIGGERABLEPACKAGE" : {
          "SERVICETASKTRIGGERABLE" : {
            "TITLE" : "Set service task to be triggerable",
            "DESCRIPTION" : "Sets the service task to be triggerable"
          }
        },
        "SERVICETASKSTORERESULTVARIABLETRANSIENTPACKAGE" : {
          "SERVICETASKSTORERESULTVARIABLETRANSIENT" : {
            "TITLE" : "Store result variable transiently",
            "DESCRIPTION" : "Flag that marks that the result of the expression will not be persisted at the end of the database transaction."
          }
        },
        "SCRIPTFORMATPACKAGE" : {
          "SCRIPTFORMAT" : {
            "TITLE" : "Script format",
            "DESCRIPTION" : "Script format of the script task."
          }
        },
        "SCRIPTTEXTPACKAGE" : {
          "SCRIPTTEXT" : {
            "TITLE" : "Script",
            "DESCRIPTION" : "Script text of the script task."
          }
        },
        "SCRIPTAUTOSTOREVARIABLESPACKAGE" : {
          "SCRIPTAUTOSTOREVARIABLES" : {
            "TITLE" : "Auto Store Variables",
            "DESCRIPTION" : "Automatically store all script variables to the process."
          }
        },
        "SHELLCOMMANDPACKAGE" : {
          "SHELLCOMMAND" : {
            "TITLE" : "Command",
            "DESCRIPTION" : "Shell task command"
          }
        },
        "SHELLARG1PACKAGE" : {
          "SHELLARG1" : {
            "TITLE" : "Argument 1",
            "DESCRIPTION" : "Shell command arg 1"
          }
        },
        "SHELLARG2PACKAGE" : {
          "SHELLARG2" : {
            "TITLE" : "Argument 2",
            "DESCRIPTION" : "Shell command arg 2"
          }
        },
        "SHELLARG3PACKAGE" : {
          "SHELLARG3" : {
            "TITLE" : "Argument 3",
            "DESCRIPTION" : "Shell command arg 3"
          }
        },
        "SHELLARG4PACKAGE" : {
          "SHELLARG4" : {
            "TITLE" : "Argument 4",
            "DESCRIPTION" : "Shell command arg 4"
          }
        },
        "SHELLARG5PACKAGE" : {
          "SHELLARG5" : {
            "TITLE" : "Argument 5",
            "DESCRIPTION" : "Shell command arg 5"
          }
        },
        "SHELLWAITPACKAGE" : {
          "SHELLWAIT" : {
            "TITLE" : "Wait",
            "DESCRIPTION" : "Flag to wait for shell command execution end"
          }
        },
        "SHELLOUTPUTVARIABLEPACKAGE" : {
          "SHELLOUTPUTVARIABLE" : {
            "TITLE" : "Output variable",
            "DESCRIPTION" : "Variable to store shell command output"
          }
        },
        "SHELLERRORCODEVARIABLEPACKAGE" : {
          "SHELLERRORCODEVARIABLE" : {
            "TITLE" : "Error code variable",
            "DESCRIPTION" : "Variable to store shell command error code"
          }
        },
        "SHELLREDIRECTERRORPACKAGE" : {
          "SHELLREDIRECTERROR" : {
            "TITLE" : "Redirect error",
            "DESCRIPTION" : "If true merge error output with standard output"
          }
        },
        "SHELLCLEANENVPACKAGE" : {
          "SHELLCLEANENV" : {
            "TITLE" : "Clean env",
            "DESCRIPTION" : "Clean shell execution environment"
          }
        },
        "SHELLDIRECTORYPACKAGE" : {
          "SHELLDIRECTORY" : {
            "TITLE" : "Directory",
            "DESCRIPTION" : "Shell process working directory"
          }
        },
        "RULETASK_RULESPACKAGE" : {
          "RULETASK_RULES" : {
            "TITLE" : "Rules",
            "DESCRIPTION" : "Rules of the rule task."
          }
        },
        "RULETASK_VARIABLES_INPUTPACKAGE" : {
          "RULETASK_VARIABLES_INPUT" : {
            "TITLE" : "Input variables",
            "DESCRIPTION" : "Input variables of the rule task."
          }
        },
        "RULETASK_EXCLUDEPACKAGE" : {
          "RULETASK_EXCLUDE" : {
            "TITLE" : "Exclude",
            "DESCRIPTION" : "Use the rules property as exclusion."
          }
        },
        "RULETASK_RESULTPACKAGE" : {
          "RULETASK_RESULT" : {
            "TITLE" : "Result variable",
            "DESCRIPTION" : "Result variable of the rule task."
          }
        },
        "MAILTASKHEADERSPACKAGE" : {
          "MAILTASKHEADERS" : {
            "TITLE" : "Headers",
            "DESCRIPTION" : "Line separated Mail headers (For example - X-Attribute: value)."
          }
        },
        "MAILTASKTOPACKAGE" : {
          "MAILTASKTO" : {
            "TITLE" : "To",
            "DESCRIPTION" : "The recipients if the e-mail. Multiple recipients are defined in a comma-separated list."
          }
        },
        "MAILTASKFROMPACKAGE" : {
          "MAILTASKFROM" : {
            "TITLE" : "From",
            "DESCRIPTION" : "The sender e-mail address. If not provided, the default configured from address is used."
          }
        },
        "MAILTASKSUBJECTPACKAGE" : {
          "MAILTASKSUBJECT" : {
            "TITLE" : "Subject",
            "DESCRIPTION" : "The subject of the e-mail."
          }
        },
        "MAILTASKCCPACKAGE" : {
          "MAILTASKCC" : {
            "TITLE" : "Cc",
            "DESCRIPTION" : "The cc's of the e-mail. Multiple recipients are defined in a comma-separated list"
          }
        },
        "MAILTASKBCCPACKAGE" : {
          "MAILTASKBCC" : {
            "TITLE" : "Bcc",
            "DESCRIPTION" : "The bcc's of the e-mail. Multiple recipients are defined in a comma-separated list"
          }
        },
        "MAILTASKTEXTPACKAGE" : {
          "MAILTASKTEXT" : {
            "TITLE" : "Text",
            "DESCRIPTION" : "The content of the e-mail, in case one needs to send plain none-rich e-mails. Can be used in combination with html, for e-mail clients that don't support rich content. The client will then fall back to this text-only alternative."
          },
          "MAILTASKTEXTVAR" : {
            "TITLE" : "TextVar",
            "DESCRIPTION" : "The name of a process variable that holds the text that is the content of the e-mail, in case one needs to send plain none-rich e-mails. Can be used in combination with html, for e-mail clients that don't support rich content. The client will then fall back to this text-only alternative."
          }
        },
        "MAILTASKHTMLPACKAGE" : {
          "MAILTASKHTML" : {
            "TITLE" : "Html",
            "DESCRIPTION" : "A piece of HTML that is the content of the e-mail."
          },
          "MAILTASKHTMLVAR" : {
            "TITLE" : "HtmlVar",
            "DESCRIPTION" : "The name of a process variable that holds the HTML that is the content of the e-mail."
          }
        },
        "MAILTASKCHARSETPACKAGE" : {
          "MAILTASKCHARSET" : {
            "TITLE" : "Charset",
            "DESCRIPTION" : "Allows to change the charset of the email, which is necessary for many non-English languages. "
          }
        },
        "HTTPTASKREQUESTMETHODPACKAGE" : {
          "HTTPTASKREQUESTMETHOD" : {
            "TITLE" : "Request method",
            "DESCRIPTION" : "Request method (For example - GET,POST,PUT etc)."
          }
        },
        "HTTPTASKREQUESTURLPACKAGE" : {
          "HTTPTASKREQUESTURL" : {
            "TITLE" : "Request URL",
            "DESCRIPTION" : "Request URL (For example - http://flowable.org)."
          }
        },
        "HTTPTASKREQUESTHEADERSPACKAGE" : {
          "HTTPTASKREQUESTHEADERS" : {
            "TITLE" : "Request headers",
            "DESCRIPTION" : "Line separated HTTP request headers (For example - Content-Type: application/json)."
          }
        },
        "HTTPTASKREQUESTBODYPACKAGE" : {
          "HTTPTASKREQUESTBODYPACKAGE" : {
            "TITLE" : "Request body",
            "DESCRIPTION" : "Request body (For example- ${sampleBody})."
          }
        },
        "HTTPTASKREQUESTBODYENCODINGPACKAGE" : {
          "HTTPTASKREQUESTBODYENCODING" : {
            "TITLE" : "Request body encoding",
            "DESCRIPTION" : "Request body encoding (For example- UTF-8)."
          }
        },
        "HTTPTASKREQUESTTIMEOUTPACKAGE" : {
          "HTTPTASKREQUESTTIMEOUT" : {
            "TITLE" : "Request timeout",
            "DESCRIPTION" : "Timeout in milliseconds for the request (For example - 5000)."
          }
        },
        "HTTPTASKDISALLOWREDIRECTSPACKAGE" : {
          "HTTPTASKDISALLOWREDIRECTS" : {
            "TITLE" : "Disallow redirects",
            "DESCRIPTION" : "Flag to disallow HTTP redirects."
          }
        },
        "HTTPTASKFAILSTATUSCODESPACKAGE" : {
          "HTTPTASKFAILSTATUSCODES" : {
            "TITLE" : "Fail status codes",
            "DESCRIPTION" : "Comma separated list of HTTP response status codes to retry, for example 400,5XX."
          }
        },
        "HTTPTASKHANDLESTATUSCODESPACKAGE" : {
          "HTTPTASKHANDLESTATUSCODES" : {
            "TITLE" : "Handle status codes",
            "DESCRIPTION" : "Comma separated list of HTTP response status codes to ignore, for example 404,3XX."
          }
        },
        "HTTPTASKIGNOREEXCEPTIONPACKAGE" : {
          "HTTPTASKIGNOREEXCEPTION" : {
            "TITLE" : "Ignore exception",
            "DESCRIPTION" : "Flag to ignore exceptions."
          }
        },
        "HTTPTASKSAVERESPONSEPARAMETERSTRANSIENTPACKAGE" : {
          "HTTPTASKSAVERESPONSEPARAMETERSTRANSIENT" : {
            "TITLE" : "Save response as a transient variable",
            "DESCRIPTION" : "Flag indicating to store the response variable(s) transient"
          }
        },
        "HTTPTASKSAVERESPONSEASJSONPACKAGE" : {
          "HTTPTASKSAVERESPONSEASJSON" : {
            "TITLE" : "Save response as JSON",
            "DESCRIPTION" : "Flag indicating to store the response variable as a JSON variable instead of a String"
          }
        },
        "HTTPTASKPARALLELINSAMETRANSACTIONPACKAGE" : {
          "HTTPTASKPARALLELINSAMETRANSACTION" : {
            "TITLE" : "Execute parallel in same transaction",
            "DESCRIPTION" : "Flag indicating that the Http call should be done parallel in the same transaction. This means that when using parallel gateways multiple http tasks are executed in the same time in the same transaction and thus the entire execution of the process is faster."
          }
        },
        "SKIPEXPRESSIONPACKAGE" : {
          "SKIPEXPRESSION" : {
            "TITLE" : "Skip expression",
            "DESCRIPTION" : "Skip an expression execution associated with task or association or not."
          }
        },
        "HTTPTASKRESPONSEVARIABLENAMEPACKAGE" : {
          "HTTPTASKRESPONSEVARIABLENAME" : {
            "TITLE" : "Response variable name",
            "DESCRIPTION" : "Define the variable name to store the http response."
          }
        },
        "HTTPTASKSAVEREQUESTVARIABLESPACKAGE" : {
          "HTTPTASKSAVEREQUESTVARIABLES" : {
            "TITLE" : "Save request variables",
            "DESCRIPTION" : "Flag to save request variables."
          }
        },
        "HTTPTASKSAVERESPONSEPARAMETERSPACKAGE" : {
          "HTTPTASKSAVERESPONSEPARAMETERS" : {
            "TITLE" : "Save response status, headers",
            "DESCRIPTION" : "Flag to save response status, headers etc."
          }
        },
        "HTTPTASKRESULTVARIABLEPREFIXPACKAGE" : {
          "HTTPTASKRESULTVARIABLEPREFIX" : {
            "TITLE" : "Result variable prefix",
            "DESCRIPTION" : "Prefix for the execution variable names."
          }
        },
        "CALLACTIVITYCALLEDELEMENTPACKAGE" : {
          "CALLACTIVITYCALLEDELEMENT" : {
            "TITLE" : "Called element",
            "DESCRIPTION" : "Process reference."
          }
        },
        "CALLACTIVITYCALLEDELEMENTTYPEPACKAGE" : {
          "CALLACTIVITYCALLEDELEMENTTYPE" : {
            "TITLE" : "Called element type",
            "DESCRIPTION" : "Type of the used process reference."
          }
        },
        "CALLACTIVITYINPARAMETERSPACKAGE" : {
          "CALLACTIVITYINPARAMETERS" : {
            "TITLE" : "In parameters",
            "DESCRIPTION" : "Definition of the input parameters"
          }
        },
        "CALLACTIVITYOUTPARAMETERSPACKAGE" : {
          "CALLACTIVITYOUTPARAMETERS" : {
            "TITLE" : "Out parameters",
            "DESCRIPTION" : "Definition of the output parameters"
          }
        },
        "CALLACTIVITYINHERITVARIABLESPACKAGE" : {
          "CALLACTIVITYINHERITVARIABLES" : {
            "TITLE" : "Inherit variables in sub process",
            "DESCRIPTION" : "Inherit parent process variables in the sub process."
          }
        },
        "CALLACTIVITYSAMEDEPLOYMENTPACKAGE" : {
          "CALLACTIVITYSAMEDEPLOYMENT" : {
            "TITLE" : "Start the referenced process from the same deployment.",
            "DESCRIPTION" : "Use the referenced process from the same deployment."
          }
        },
        "CALLACTIVITYFALLBACKTODEFAULTTENANTPACKAGE" : {
          "CALLACTIVITYFALLBACKTODEFAULTTENANT" : {
            "TITLE" : "Fallback to default tenant",
            "DESCRIPTION" : "Look for the definition by key in the default tenant when current tenant search fails."
          }
        },
        "CALLACTIVITYIDVARIABLENAMEPACKAGE": {
          "CALLACTIVITYIDVARIABLENAME": {
            "TITLE": "ID variable",
            "DESCRIPTION": "If set, the instance id of the started instance will be stored in this variable"
          }
        },
        "CALLACTIVITYPROCESSINSTANCENAMEPACKAGE" : {
          "CALLACTIVITYPROCESSINSTANCENAME" : {
            "TITLE" : "Process instance name",
            "DESCRIPTION" : "An expression that resolves to the name of the child process instance"
          }
        },
        "CALLACTIVITYINHERITBUSINESSKEYPACKAGE" : {
          "CALLACTIVITYINHERITBUSINESSKEY" : {
            "TITLE" : "Inherit business key",
            "DESCRIPTION" : "Inherit the business key from the parent process."
          }
        },
        "CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERSPACKAGE" : {
          "CALLACTIVITYUSELOCALSCOPEFOROUTPARAMETERS" : {
            "TITLE" : "Use local scope for out parameters",
            "DESCRIPTION" : "Use local variable scope for out parameters."
          }
        },
        "CALLACTIVITYBUSINESSKEYPACKAGE" : {
          "CALLACTIVITYBUSINESSKEY" : {
            "TITLE" : "Business key expression",
            "DESCRIPTION" : "An expression that resolves to a business key for the child process instance"
          }
        },
        "CALLACTIVITYCOMPLETEASYNCPACKAGE" : {
          "CALLACTIVITYCOMPLETEASYNC" : {
            "TITLE" : "Complete asynchronously",
            "DESCRIPTION" : "If set, the child process ending and completing the call activity is done asynchronously. Useful when using parallel multi instance with a called process definition that has async tasks."
          }
        },
        "CAMELTASKCAMELCONTEXTPACKAGE" : {
          "CAMELTASKCAMELCONTEXT" : {
            "TITLE" : "Camel context",
            "DESCRIPTION" : "An optional camel context definition, if left empty the default is used."
          }
        },
        "MULETASKENDPOINTURLPACKAGE" : {
          "MULETASKENDPOINTURL" : {
            "TITLE" : "Endpoint url",
            "DESCRIPTION" : "A required endpoint url to sent the message to Mule."
          }
        },
        "MULETASKLANGUAGEPACKAGE" : {
          "MULETASKLANGUAGE" : {
            "TITLE" : "Language",
            "DESCRIPTION" : "A required definition for the language to resolve the payload expression, like juel."
          }
        },
        "MULETASKPAYLOADEXPRESSIONPACKAGE" : {
          "MULETASKPAYLOADEXPRESSION" : {
            "TITLE" : "Payload expression",
            "DESCRIPTION" : "A required definition for the payload of the message sent to Mule."
          }
        },
        "MULETASKRESULTVARIABLEPACKAGE" : {
          "MULETASKRESULTVARIABLE" : {
            "TITLE" : "Result variable",
            "DESCRIPTION" : "An optional result variable for the payload returned."
          }
        },
        "CONDITIONSEQUENCEFLOWPACKAGE" : {
          "CONDITIONSEQUENCEFLOWPACKAGE" : {
            "TITLE" : "Flow condition",
            "DESCRIPTION" : "The condition of the sequence flow"
          }
        },
        "DEFAULTFLOWPACKAGE" : {
          "DEFAULTFLOW" : {
            "TITLE" : "Default flow",
            "DESCRIPTION" : "Define the sequence flow as default"
          }
        },
        "CONDITIONALFLOWPACKAGE" : {
          "CONDITIONALFLOW" : {
            "TITLE" : "Conditional flow",
            "DESCRIPTION" : "Define the sequence flow with a condition"
          }
        },
        "TIMERCYCLEDEFINITIONPACKAGE" : {
          "TIMERCYCLEDEFINITION" : {
            "TITLE" : "Time cycle (e.g. R3/PT10H)",
            "DESCRIPTION" : "Define the timer with a ISO-8601 cycle."
          }
        },
        "TIMERDATEDEFINITIONPACKAGE" : {
          "TIMERDATEDEFINITION" : {
            "TITLE" : "Time date in ISO-8601",
            "DESCRIPTION" : "Define the timer with a ISO-8601 date definition."
          }
        },
        "TIMERDURATIONDEFINITIONPACKAGE" : {
          "TIMERDURATIONDEFINITION" : {
            "TITLE" : "Time duration (e.g. PT5M)",
            "DESCRIPTION" : "Define the timer with a ISO-8601 duration."
          }
        },
        "TIMERENDDATEDEFINITIONPACKAGE" : {
          "TIMERENDDATEDEFINITION" : {
            "TITLE" : "Time End Date in ISO-8601",
            "DESCRIPTION" : "Define the timer with a ISO-8601 duration."
          }
        },
        "MESSAGEREFPACKAGE" : {
          "MESSAGEREF" : {
            "TITLE" : "Message reference",
            "DESCRIPTION" : "Define the message name."
          }
        },
        "MESSAGEEXPRESSIONPACKAGE" : {
          "MESSAGEEXPRESSION" : {
            "TITLE" : "Message expression",
            "DESCRIPTION" : "Resolves the message event at runtime based on an expression."
          }
        },
        "SIGNALREFPACKAGE" : {
          "SIGNALREF" : {
            "TITLE" : "Signal reference",
            "DESCRIPTION" : "Define the signal name."
          }
        },
        "COMPENSATIONACTIVITYREFPACKAGE" : {
          "COMPENSATIONACTIVITYREF" : {
            "TITLE" : "Compensation activity reference",
            "DESCRIPTION" : "Define the activity reference."
          }
        },
        "SIGNALEXPRESSIONPACKAGE" : {
          "SIGNALEXPRESSION" : {
            "TITLE" : "Signal expression",
            "DESCRIPTION" : "Resolves the signal event at runtime based on an expression."
          }
        },
        "ERRORREFPACKAGE" : {
          "ERRORREF" : {
            "TITLE" : "Error reference",
            "DESCRIPTION" : "Define the error name."
          }
        },
        "ERRORVARIABLEPACKAGE" : {
          "ERRORVARIABLENAME" : {
            "TITLE" : "Error variable name",
            "DESCRIPTION" : "Stores the bpmn error code to a variable with the given name."
          },          
          "ERRORVARIABLETRANSIENT" : {
            "TITLE" : "Error variable transient",
            "DESCRIPTION" : "Flag defines whether the defined error variable will be stored transiently."
          },
          "ERRORVARIABLELOCALSCOPE" : {
            "TITLE" : "Error variable local scope",
            "DESCRIPTION" : "Flag defines whether defined error variable will be stored to a local scope."
          }          
        },
        "ESCALATIONREFPACKAGE" : {
          "ESCALATIONREF" : {
            "TITLE" : "Escalation reference",
            "DESCRIPTION" : "Define the escalation name."
          }
        },
        "CONDITIONALEVENTPACKAGE" : {
          "CONDITION" : {
            "TITLE" : "Condition expression",
            "DESCRIPTION" : "Define the condition expression for the conditional event."
          }
        },
        "CANCELACTIVITYPACKAGE" : {
          "CANCELACTIVITY" : {
            "TITLE" : "Cancel activity",
            "DESCRIPTION" : "Should the activity be cancelled"
          }
        },
        "INITIATORPACKAGE" : {
          "INITIATOR" : {
            "TITLE" : "Initiator",
            "DESCRIPTION" : "Initiator of the process."
          }
        },
        "TEXTPACKAGE" : {
          "TEXT" : {
            "TITLE" : "Text",
            "DESCRIPTION" : "The text of the text annotation."
          }
        },
        "MULTIINSTANCE_TYPEPACKAGE" : {
          "MULTIINSTANCE_TYPE" : {
            "TITLE" : "Multi-instance type",
            "DESCRIPTION" : "Repeated activity execution (parallel or sequential) can be displayed through different loop types",
            "PARALLEL" : "Parallel",
            "SEQUENTIAL" : "Sequential",
            "NONE" : "None"
          },
          "VARIABLE_AGGREGATIONS" : {
            "TITLE" : "Variable aggregations (Multi-instance)",
            "DESCRIPTION" : "Variable aggregation definition for when the multi instance completes."
          }
        },
        "MULTIINSTANCE_CARDINALITYPACKAGE" : {
          "MULTIINSTANCE_CARDINALITY" : {
            "TITLE" : "Cardinality (Multi-instance)",
            "DESCRIPTION" : "Define the cardinality of multi instance."
          }
        },
        "MULTIINSTANCE_COLLECTIONPACKAGE" : {
          "MULTIINSTANCE_COLLECTION" : {
            "TITLE" : "Collection (Multi-instance)",
            "DESCRIPTION" : "Define the collection for the multi instance."
          }
        },
        "MULTIINSTANCE_VARIABLEPACKAGE" : {
          "MULTIINSTANCE_VARIABLE" : {
            "TITLE" : "Element variable (Multi-instance)",
            "DESCRIPTION" : "Define the element variable for the multi instance."
          }
        },
        "MULTIINSTANCE_CONDITIONPACKAGE" : {
          "MULTIINSTANCE_CONDITION" : {
            "TITLE" : "Completion condition (Multi-instance)",
            "DESCRIPTION" : "Define the completion condition for the multi instance."
          }
        },
        "ISFORCOMPENSATIONPACKAGE" : {
          "ISFORCOMPENSATION" : {
            "TITLE" : "Is for compensation",
            "DESCRIPTION" : "A flag that identifies whether this activity is intended for the purposes of compensation."
          }
        },
        "SEQUENCEFLOWORDERPACKAGE" : {
          "SEQUENCEFLOWORDER" : {
            "TITLE" : "Flow order",
            "DESCRIPTION" : "Order outgoing sequence flows."
          }
        },
        "SIGNALDEFINITIONSPACKAGE" : {
          "SIGNALDEFINITIONS" : {
            "TITLE" : "Signal definitions",
            "DESCRIPTION" : "Signal definitions"
          }
        },
        "MESSAGEDEFINITIONSPACKAGE" : {
          "MESSAGEDEFINITIONS" : {
            "TITLE" : "Message definitions",
            "DESCRIPTION" : "Message definitions"
          }
        },
        "ESCALATIONDEFINITIONSPACKAGE" : {
          "ESCALATIONDEFINITIONS" : {
            "TITLE" : "Escalation definitions",
            "DESCRIPTION" : "Escalation definitions"
          }
        },
        "EVENTREGISTRYPACKAGE" : {
          "EVENTKEY" : {
            "TITLE" : "Event key",
            "DESCRIPTION" : "Definition of the event key"
          },
          "EVENTNAME" : {
            "TITLE" : "Event name",
            "DESCRIPTION" : "Definition of the event name"
          },
          "EVENTINPARAMETERS" : {
            "TITLE" : "Mapping to event payload",
            "DESCRIPTION" : "Mapping of the process variables to event payload properties"
          },
          "EVENTOUTPARAMETERS" : {
            "TITLE" : "Mapping from event payload",
            "DESCRIPTION" : "Mapping of the event payload properties to process variables"
          },
          "EVENTCORRELATIONPARAMETERS" : {
            "TITLE" : "Correlation parameters",
            "DESCRIPTION" : "Definition of the correlation parameters"
          },
          "CHANNELKEY" : {
            "TITLE" : "Channel key",
            "DESCRIPTION" : "Definition of the channel key"
          },
          "CHANNELNAME" : {
            "TITLE" : "Channel name",
            "DESCRIPTION" : "Definition of the channel name"
          },
          "CHANNELTYPE" : {
            "TITLE" : "Channel type",
            "DESCRIPTION" : "Definition of the channel type"
          },
          "CHANNELDESTINATION" : {
            "TITLE" : "Channel destination",
            "DESCRIPTION" : "Definition of the channel destination"
          },
          "TRIGGEREVENTKEY" : {
            "TITLE" : "Trigger event key",
            "DESCRIPTION" : "Definition of the trigger event key"
          },
          "TRIGGEREVENTNAME" : {
            "TITLE" : "Trigger event name",
            "DESCRIPTION" : "Definition of the trigger event name"
          },
          "TRIGGERCHANNELKEY" : {
            "TITLE" : "Trigger channel key",
            "DESCRIPTION" : "Definition of the trigger channel key"
          },
          "TRIGGERCHANNELNAME" : {
            "TITLE" : "Trigger channel name",
            "DESCRIPTION" : "Definition of the trigger channel name"
          },
          "TRIGGERCHANNELTYPE" : {
            "TITLE" : "Trigger channel type",
            "DESCRIPTION" : "Definition of the trigger channel type"
          },
          "TRIGGERCHANNELDESTINATION" : {
            "TITLE" : "Trigger channel destination",
            "DESCRIPTION" : "Definition of the trigger channel destination"
          },
          "KEYDETECTIONFIXEDVALUE" : {
            "TITLE" : "Event key fixed value",
            "DESCRIPTION" : "Definition of the event key fixed value"
          },
          "KEYDETECTIONJSONFIELD" : {
            "TITLE" : "Event key json field",
            "DESCRIPTION" : "Definition of the event key detection with a json field"
          },
          "KEYDETECTIONJSONPOINTER" : {
            "TITLE" : "Event key json pointer",
            "DESCRIPTION" : "Definition of the event key detection with a json pointer expression"
          }
        },
        "VARIABLELISTENERPACKAGE": {
          "VARIABLENAME" : {
            "TITLE" : "Variable name",
            "DESCRIPTION" : "Defines the variable that will be watched for value changes"
          },
          "VARIABLECHANGETYPE" : {
            "TITLE" : "Variable change type",
            "DESCRIPTION" : "Configures for which change type the variable listener will be triggered"
          }
        },
        "EXTERNALWORKERJOBPACKAGE": {
          "TOPIC": {
            "TITLE": "Job topic",
            "DESCRIPTION": "The job topic that the external worker will query jobs on"
          }
        },
        "ISTRANSACTIONPACKAGE" : {
          "ISTRANSACTION" : {
            "TITLE" : "Is a transaction sub process",
            "DESCRIPTION" : "A flag that identifies whether this sub process is of type transaction."
          }
        },
        "FORMREFERENCEPACKAGE" : {
          "FORMREFERENCE" : {
            "TITLE" : "Form reference",
            "DESCRIPTION" : "Reference to a form"
          }
        },
        "TERMINATEALLPACKAGE" : {
          "TERMINATEALL" : {
            "TITLE" : "Terminate all",
            "DESCRIPTION" : "Enable to terminate the process instance"
          }
        },
        "DECISIONTASKDECISIONTABLEREFERENCEPACKAGE" : {
          "DECISIONTASKDECISIONTABLEREFERENCE" : {
            "TITLE" : "Decision table reference",
            "DESCRIPTION" : "Set the decision table reference"
          }
        },
        "DECISIONTASKDECISIONSERVICEREFERENCEPACKAGE" : {
          "DECISIONTASKDECISIONSERVICEREFERENCE" : {
            "TITLE" : "Decision service reference",
            "DESCRIPTION" : "Set the decision service reference"
          }
        },
        "DECISIONTASKTHROWERRORONNOHITSPACKAGE" : {
          "DECISIONTASKTHROWERRORONNOHITS" : {
            "TITLE" : "Throw error if no rules were hit",
            "DESCRIPTION" : "Should an error be thrown if no rules of the decision table were hit and consequently no result was found."
          }
        },
        "DECISIONTASKFALLBACKTODEFAULTTENANTPACKAGE" : {
          "DECISIONTASKFALLBACKTODEFAULTTENANT" : {
            "TITLE" : "Fallback to default tenant",
            "DESCRIPTION" : "Find decision definition without tenant when previous attempts to find it with tenant failed."
          }
        },
        "INTERRUPTINGPACKAGE" : {
          "INTERRUPTING" : {
            "TITLE" : "Interrupting",
            "DESCRIPTION" : "Should all parent executions be terminated?"
          }
        },
        "COMPLETIONCONDITIONPACKAGE" : {
          "COMPLETIONCONDITION" : {
            "TITLE" : "Completion condition",
            "DESCRIPTION" : "The completion condition for the adhoc sub process"
          }
        },
        "ORDERINGPACKAGE" : {
          "ORDERING" : {
            "TITLE" : "Ordering",
            "DESCRIPTION" : "The ordering for the adhoc sub process"
          }
        },
        "CANCELREMAININGINSTANCESPACKAGE" : {
          "CANCELREMAININGINSTANCES" : {
            "TITLE" : "Cancel remaining instances",
            "DESCRIPTION" : "Cancel the remaining instances for the adhoc sub process?"
          }
        }

      },
      "STENCILS" : {
        "GROUPS" : {
          "STARTEVENTS" : "Start Events",
          "ENDEVENTS" : "End Events",
          "DIAGRAM" : "Diagram",
          "ACTIVITIES" : "Activities",
          "STRUCTURAL" : "Structural",
          "GATEWAYS" : "Gateways",
          "BOUNDARYEVENTS" : "Boundary Events",
          "INTERMEDIATECATCHINGEVENTS" : "Intermediate Catching Events",
          "INTERMEDIATETHROWINGEVENTS" : "Intermediate Throwing Events",
          "SWIMLANES" : "Swimlanes",
          "CONNECTINGOBJECTS" : "Connecting Objects",
          "ARTIFACTS" : "Artifacts"
        },
        "CUSTOM":{
"MYSQL":{
   "TITLE" : "MySQL Task",
          "DESCRIPTION" : "An automatic mysql task with service logic"
}
        },
        "BPMNDIAGRAM" : {
          "TITLE" : "BPMN-Diagram",
          "DESCRIPTION" : "A BPMN 2.0 diagram."
        },
        "STARTNONEEVENT" : {
          "TITLE" : "Start event",
          "DESCRIPTION" : "A start event without a specific trigger"
        },
        "STARTTIMEREVENT" : {
          "TITLE" : "Start timer event",
          "DESCRIPTION" : "A start event with a timer trigger"
        },
        "STARTSIGNALEVENT" : {
          "TITLE" : "Start signal event",
          "DESCRIPTION" : "A start event with a signal trigger"
        },
        "STARTMESSAGEEVENT" : {
          "TITLE" : "Start message event",
          "DESCRIPTION" : "A start event with a message trigger"
        },
        "STARTEVENTREGISTRYEVENT" : {
          "TITLE" : "Start event registry event",
          "DESCRIPTION" : "A start event with an event registry trigger"
        },
        "STARTVARIABLELISTENEREVENT" : {
          "TITLE" : "Start variable listener event",
          "DESCRIPTION" : "A start event that is triggered when the configured variable value changes"
        },
        "STARTCONDITIONALEVENT" : {
          "TITLE" : "Start conditional event",
          "DESCRIPTION" : "A start event that evaluates a conditional event"
        },
        "STARTERROREVENT" : {
          "TITLE" : "Start error event",
          "DESCRIPTION" : "A start event that catches a thrown BPMN error"
        },
        "STARTESCALATIONEVENT" : {
          "TITLE" : "Start escalation event",
          "DESCRIPTION" : "A start event that catches a thrown BPMN escalation"
        },
        "USERTASK" : {
          "TITLE" : "User task",
          "DESCRIPTION" : "A manual task assigned to a specific person"
        },
        "SERVICETASK" : {
          "TITLE" : "Service task",
          "DESCRIPTION" : "An automatic task with service logic"
        },
        "SCRIPTTASK" : {
          "TITLE" : "Script task",
          "DESCRIPTION" : "An automatic task with script logic"
        },
        "BUSINESSRULE" : {
          "TITLE" : "Business rule task",
          "DESCRIPTION" : "An automatic task with rule logic"
        },
        "RECEIVETASK" : {
          "TITLE" : "Receive task",
          "DESCRIPTION" : "An task that waits for a signal"
        },
        "RECEIVEEVENTTASK" : {
          "TITLE" : "Receive event task",
          "DESCRIPTION" : "An task that receives an event"
        },
        "MANUALTASK" : {
          "TITLE" : "Manual task",
          "DESCRIPTION" : "An automatic task with no logic"
        },
        "MAILTASK" : {
          "TITLE" : "Mail task",
          "DESCRIPTION" : "An mail task"
        },
        "CAMELTASK" : {
          "TITLE" : "Camel task",
          "DESCRIPTION" : "An task that sends a message to Camel"
        },
        "HTTPTASK" : {
          "TITLE" : "Http task",
          "DESCRIPTION" : "A HTTP task"
        },
        "MULETASK" : {
          "TITLE" : "Mule task",
          "DESCRIPTION" : "An task that sends a message to Mule"
        },
        "SENDTASK" : {
          "TITLE" : "Send task",
          "DESCRIPTION" : "An task that sends a message"
        },
        "DECISIONTASK" : {
          "TITLE" : "Decision task",
          "DESCRIPTION" : "Task to use the Flowable DMN rule engine"
        },
        "SENDEVENTTASK" : {
          "TITLE" : "Send event task",
          "DESCRIPTION" : "An task that sends an event to the event registry"
        },
        "EXTERNALWORKERTASK" : {
          "TITLE" : "External Worker task",
          "DESCRIPTION" : "An task that creates a job which can be executed by an external worker"
        },
        "SHELLTASK" : {
          "TITLE" : "Shell task",
          "DESCRIPTION" : "An automatic task with shell batch logic"
        },
        "SUBPROCESS" : {
          "TITLE" : "Sub process",
          "DESCRIPTION" : "A sub process scope"
        },
        "COLLAPSEDSUBPROCESS" : {
          "TITLE" : "Collapsed Sub process",
          "DESCRIPTION" : "A sub process scope"
        },
        "EVENTSUBPROCESS" : {
          "TITLE" : "Event sub process",
          "DESCRIPTION" : "A event sub process scope"
        },
        "CALLACTIVITY" : {
          "TITLE" : "Call activity",
          "DESCRIPTION" : "A call activity"
        },
        "EXCLUSIVEGATEWAY" : {
          "TITLE" : "Exclusive gateway",
          "DESCRIPTION" : "A choice gateway"
        },
        "PARALLELGATEWAY" : {
          "TITLE" : "Parallel gateway",
          "DESCRIPTION" : "A parallel gateway"
        },
        "INCLUSIVEGATEWAY" : {
          "TITLE" : "Inclusive gateway",
          "DESCRIPTION" : "An inclusive gateway"
        },
        "EVENTGATEWAY" : {
          "TITLE" : "Event gateway",
          "DESCRIPTION" : "An event gateway"
        },
        "BOUNDARYCONDITIONALEVENT" : {
          "TITLE" : "Boundary conditional event",
          "DESCRIPTION" : "A boundary event that evaluates a conditional event"
        },
        "BOUNDARYERROREVENT" : {
          "TITLE" : "Boundary error event",
          "DESCRIPTION" : "A boundary event that catches a BPMN error"
        },
        "BOUNDARYESCALATIONEVENT" : {
          "TITLE" : "Boundary escalation event",
          "DESCRIPTION" : "A boundary event that catches a BPMN escalation"
        },
        "BOUNDARYTIMEREVENT" : {
          "TITLE" : "Boundary timer event",
          "DESCRIPTION" : "A boundary event with a timer trigger"
        },
        "BOUNDARYSIGNALEVENT" : {
          "TITLE" : "Boundary signal event",
          "DESCRIPTION" : "A boundary event with a signal trigger"
        },
        "BOUNDARYMESSAGEEVENT" : {
          "TITLE" : "Boundary message event",
          "DESCRIPTION" : "A boundary event with a message trigger"
        },
        "BOUNDARYCANCELEVENT" : {
          "TITLE" : "Boundary cancel event",
          "DESCRIPTION" : "A boundary cancel event"
        },
        "BOUNDARYEVENTREGISTRYEVENT" : {
          "TITLE" : "Boundary event registry event",
          "DESCRIPTION" : "A boundary event registry event"
        },
        "BOUNDARYVARIABLELISTENEREVENT" : {
          "TITLE" : "Boundary variable listener event",
          "DESCRIPTION" : "A boundary variable listener event that is triggered when the configured variable value changes"
        },
        "BOUNDARYCOMPENSATIONEVENT" : {
          "TITLE" : "Boundary compensation event",
          "DESCRIPTION" : "A boundary compensation event"
        },
        "CATCHTIMEREVENT" : {
          "TITLE" : "Intermediate timer catching event",
          "DESCRIPTION" : "An intermediate catching event with a timer trigger"
        },
        "CATCHSIGNALEVENT" : {
          "TITLE" : "Intermediate signal catching event",
          "DESCRIPTION" : "An intermediate catching event with a signal trigger"
        },
        "CATCHMESSAGEEVENT" : {
          "TITLE" : "Intermediate message catching event",
          "DESCRIPTION" : "An intermediate catching event with a message trigger"
        },
        "CATCHCONDITIONALEVENT" : {
          "TITLE" : "Intermediate conditional catching event",
          "DESCRIPTION" : "An intermediate catching event with a conditional trigger"
        },
        "CATCHEVENTREGISTRYEVENT" : {
          "TITLE" : "Intermediate event registry catching event",
          "DESCRIPTION" : "An intermediate catching event waiting to receive an event from the event registry"
        },
        "CATCHVARIABLELISTENEREVENT": {
          "TITLE" : "Intermediate variable listener catching event",
          "DESCRIPTION" : "An intermediate catching event waiting to receive an event when the configured variable is changed"
        },
        "THROWNONEEVENT" : {
          "TITLE" : "Intermediate none throwing event",
          "DESCRIPTION" : "An intermediate event without a specific trigger"
        },
        "THROWSIGNALEVENT" : {
          "TITLE" : "Intermediate signal throwing event",
          "DESCRIPTION" : "An intermediate event with a signal trigger"
        },
        "THROWESCALATIONEVENT" : {
          "TITLE" : "Intermediate escalation throwing event",
          "DESCRIPTION" : "An intermediate event with an escalation trigger"
        },
        "THROWCOMPENSATIONEVENT": {
          "TITLE" : "Intermediate compensation throwing event",
          "DESCRIPTION" : "An intermediate event with a compensation trigger"
        },
        "ENDNONEEVENT" : {
          "TITLE" : "End event",
          "DESCRIPTION" : "An end event without a specific trigger"
        },
        "ENDERROREVENT" : {
          "TITLE" : "End error event",
          "DESCRIPTION" : "An end event that throws an error event"
        },
        "ENDESCALATIONEVENT" : {
          "TITLE" : "End escalation event",
          "DESCRIPTION" : "An end event that throws an escalation event"
        },
        "ENDCANCELEVENT" : {
          "TITLE" : "End cancel event",
          "DESCRIPTION" : "A cancel end event"
        },
        "ENDTERMINATEEVENT" : {
          "TITLE" : "End terminate event",
          "DESCRIPTION" : "A terminate end event"
        },
        "POOL" : {
          "TITLE" : "Pool",
          "DESCRIPTION" : "A pool to structure the process definition"
        },
        "LANE" : {
          "TITLE" : "Lane",
          "DESCRIPTION" : "A lane to structure the process definition"
        },
        "SEQUENCEFLOW" : {
          "TITLE" : "Sequence flow",
          "DESCRIPTION" : "Sequence flow defines the execution order of activities."
        },
        "MESSAGEFLOW" : {
          "TITLE" : "Message flow",
          "DESCRIPTION" : "Message flow to connect elements in different pools."
        },
        "ASSOCIATION" : {
          "TITLE" : "Association",
          "DESCRIPTION" : "Associates a text annotation with an element."
        },
        "DATAASSOCIATION" : {
          "TITLE" : "DataAssociation",
          "DESCRIPTION" : "Associates a data element with an activity."
        },
        "TEXTANNOTATION" : {
          "TITLE" : "Text annotation",
          "DESCRIPTION" : "Annotates elements with description text."
        },
        "DATASTORE" : {
          "TITLE" : "Data store",
          "DESCRIPTION" : "Reference to a data store."
        },
        "ADHOCSUBPROCESS" : {
          "TITLE" : "Adhoc sub process",
          "DESCRIPTION" : "An adhoc sub process"
        }
      }
    },
    "EDITOR": {
      "POPUP": {
        "UNSAVED-CHANGES": {
          "TITLE": "You have unsaved changes",
          "DESCRIPTION": "What do you want to do with your unsaved changes?",
          "ACTION": {
            "SAVE": "Save changes",
            "DISCARD": "Discard changes",
            "CONTINUE": "Continue editing"
          }
        }
      }
    },

    "PROCESS-LIST" : {
        "TITLE" : "Business Process Models",
        "SEARCH-PLACEHOLDER": "Search",
        "ACTION" : {
            "CREATE": "Create Process",
            "IMPORT": "Import Process"
        },

        "FILTER" : {
            "PROCESSES": "Process models",
            "PROCESSES-COUNT": "There are {{total}} process models",
            "PROCESSES-ONE": "There is one process model",
            "PROCESSES-EMPTY": "There is no process model created yet. You can design process models, user forms and then bundle them up into a process app. The first step is to create a process model:",
            "PROCESSES-BPMN-HINT": "Create a BPMN model using the BPMN Visual Editor.",
            "PROCESSES-BPMN-IMPORT-HINT": "You can also import existing BPMN models.",
            "FILTER-TEXT": ", matching \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "There are no process models matching \"{{filterText}}\"",
            "RECENT": "Recent",
            "RECENT-COUNT": "{{total}} recently used models",
            "RECENT-ONE": "One recently used models",
            "RECENT-EMPTY": "No recently used models"
        },

        "SORT": {
            "MODIFIED-ASC": "Oldest",
            "MODIFIED-DESC": "Last modified",
            "NAME-ASC": "Name, A-Z",
            "NAME-DESC": "Name, Z-A"
        }
    },

    "CASE-LIST" : {
        "TITLE" : "Case Models",
        "SEARCH-PLACEHOLDER": "Search",
        "ACTION" : {
            "CREATE": "Create Case",
            "IMPORT": "Import Case"
        },

        "FILTER" : {
            "CASES": "Case models",
            "CASES-COUNT": "There are {{total}} case models",
            "CASES-ONE": "There is one case model",
            "CASES-EMPTY": "There is no case model created yet. You can design case models, user forms and then bundle them up into an app definition. The first step is to create a case model:",
            "CASES-CMMN-HINT": "Create a CMMN model using the CMMN Visual Editor.",
            "CASES-CMMN-IMPORT-HINT": "You can also import existing CMMN models.",
            "FILTER-TEXT": ", matching \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "There are no case models matching \"{{filterText}}\"",
            "RECENT": "Recent",
            "RECENT-COUNT": "{{total}} recently used models",
            "RECENT-ONE": "One recently used models",
            "RECENT-EMPTY": "No recently used models"
        },

        "SORT": {
            "MODIFIED-ASC": "Oldest",
            "MODIFIED-DESC": "Last modified",
            "NAME-ASC": "Name, A-Z",
            "NAME-DESC": "Name, Z-A"
        }
    },

    "FORMS-LIST" : {
        "TITLE" : "Forms",
        "SEARCH-PLACEHOLDER": "Search",
        "ACTION" : {
            "CREATE": "Create Form",
            "CREATE-INLINE": "Create a new form now!",
            "SHOW-MORE": "Show more..."
        },

        "FILTER" : {
            "FORMS": "Forms",
            "FORMS-COUNT": "There are {{total}} forms",
            "FORMS-ONE": "There is one form",
            "FORMS-EMPTY": "There are no forms.  To add one, click Create Form.",
            "FILTER-TEXT": ", matching \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "There is no form matching \"{{filterText}}\""
        },

        "SORT": {
            "MODIFIED-ASC": "Oldest",
            "MODIFIED-DESC": "Last modified",
            "NAME-ASC": "Name, A-Z",
            "NAME-DESC": "Name, Z-A"
        }
    },

    "DECISIONS-LIST": {
        "TITLE": "Decisions",
        "SEARCH-PLACEHOLDER": "Search",
        "ACTION": {
            "CREATE-DECISION-SERVICE": "Create Decision Service",
            "CREATE": "Create Decision Table",
            "IMPORT-DECISION-TABLE": "Import Decision Table",
            "IMPORT-DECISION-SERVICE": "Import Decision Service",
            "CREATE-DECISION-TABLES-INLINE": "Create a new decision table now!",
            "CREATE-DECISION-SERVICES-INLINE": "Create a new decision service now!",
            "SHOW-MORE": "Show more..."
        },

        "FILTER": {
            "DECISION-TABLES": "Decision tables",
            "DECISION-TABLES-COUNT": "There are {{total}} decision tables",
            "DECISION-TABLES-ONE": "There is one decision table",
            "DECISION-TABLES-EMPTY": "There are no decision tables. To add one, click Create Decision Table.",
            "FILTER-TEXT": ", matching \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "There are no decision table matching \"{{filterText}}\"",
            "DECISION-SERVICES": "Decision services",
            "DECISION-SERVICES-COUNT": "There are {{total}} decision services",
            "DECISION-SERVICES-ONE": "There is one decision service",
            "DECISION-SERVICES-EMPTY": "There are no decision services. To add one, click Create Decision Service."
        },

        "SORT": {
            "MODIFIED-ASC": "Oldest",
            "MODIFIED-DESC": "Last modified",
            "NAME-ASC": "Name, A-Z",
            "NAME-DESC": "Name, Z-A"
        }
    },

    "APPS-LIST" : {
        "TITLE" : "App definitions",
        "SEARCH-PLACEHOLDER": "Search",
        "ACTION" : {
            "CREATE": "Create App",
            "IMPORT": "Import App",
            "SHOW-MORE": "Show more..."
        },

        "FILTER" : {
            "APPS": "App definitions",
            "APPS-COUNT": "There are {{total}} app definitions",
            "APPS-ONE": "There is one app definition",
            "APPS-EMPTY": "There are no app definitions. To add one, click Create App Definition.",
            "FILTER-TEXT": ", matching \"{{filterText}}\"",
            "FILTER-TEXT-EMPTY": "There are no app definitions matching \"{{filterText}}\"",

            "NO-APPS": "You can create an App definition by publishing a bundle of Process Models.",
            "NO-APPS-CALL-TO-ACTION": "You can create an App definition now.",
            "NO-APPS-NOTE": "Remember to Publish it when you are ready to use it."
        },

        "SORT": {
            "MODIFIED-ASC": "Oldest",
            "MODIFIED-DESC": "Last modified",
            "NAME-ASC": "Name, A-Z",
            "NAME-DESC": "Name, Z-A"
        }
    },
    "PROCESS": {
      "NAME": "Model name",
      "KEY": "Model key",
      "DESCRIPTION": "Description",
      "VERSION-COMMENT": "Version comment",
      "ACTION": {
            "DETAILS": "Show details",
            "EDIT": "Modify model properties",
            "DUPLICATE": "Duplicate this model",
            "EXPORT_BPMN20": "Export to BPMN 2.0",
            "DELETE": "Delete this model",
            "CREATE-CONFIRM": "Create new model",
            "DUPLICATE-CONFIRM": "Duplicate the model",
            "OPEN-IN-EDITOR": "Visual Editor",
            "EDIT-CONFIRM": "Save",
            "DELETE-CONFIRM": "Delete process model",
            "USE-AS-NEW-VERSION": "Use as new version",
            "FAVORITE": "Favorite this model"

        },
        "DETAILS": {
          "HISTORY-TITLE": "History",
          "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Created by {{createdBy}}",
          "NO-DESCRIPTION": "This model has no description. Modify the model properties to add one"
        },

        "POPUP": {
          "CREATE-TITLE": "Create a new business process model",
          "DUPLICATE-TITLE": "Duplicate the business process model",
          "CREATE-DESCRIPTION": "You need to give a name for the new model and you may want to add a description at the same time.",
          "DUPLICATE-DESCRIPTION": "You can change the name for the new model and you may want to change the description at the same time.",
          "EDIT-DESCRIPTION": "Change any of the model properties below and then press Save to update the model.",
          "DELETE-DESCRIPTION": "Are you sure you want to delete the process model \"{{name}}\"?",
          "EDIT-TITLE":"Edit model details",
          "DELETE-TITLE": "Delete model",
          "DELETE-LOADING-RELATIONS": "Checking model usage...",
          "DELETE-RELATIONS-DESCRIPTION-SINGLE": "This model cannot be deleted, because another model is using it:",
          "DELETE-RELATIONS-DESCRIPTION": "This model cannot be deleted, because it is used by other models:",
          "DELETE-PROCESS-RELATION": "Process model",
          "DELETE-FORM-RELATION": "Form model",
          "DELETE-APP-RELATION": "App model",
          "IMPORT-DESCRIPTION": "Please browse for or drop a BPMN XML definition with an .bpmn or .bpmn20.xml extension",
          "IMPORT-TITLE": "Import a process model",
          "USE-AS-NEW-TITLE": "Use as new version",
          "USE-AS-NEW-DESCRIPTION": "Are you sure you want to use version {{version}} to create a new version of \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Could not fully restore the app model to the chosen version: some referenced models are missing due to being deleted in the past. Please update the app model accordingly. Missing models:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Model '{{name}}' with internal id {{id}}, created by {{createdBy}}",
          "SHARED-WITH": "Shared with",
          "PERMISSION": "Permission",
          "ACTIONS": "Actions",
          "IMPORT": {
              "DROPZONE": "Drop a .bpmn or .bpmn20.xml BPMN XML file",
              "CANCEL-UPLOAD": "Cancel the upload",
              "ERROR": "Error while processing the BPMN XML file",
              "NO-DROP": "Drag and drop not supported"
          }
        },
        "ALERT": {
          "EDIT-CONFIRM": "Model updated"
        },
        "ERROR": {
          "NOT-FOUND": "The requested model does not exist"
        }
    },

    "SUBPROCESS": {
        "NAME": "Sub process name",
        "DESCRIPTION": "Description",
        "ACTION": {
            "CREATE-CONFIRM": "Create new sub process"
        },
        "POPUP": {
            "CREATE-TITLE": "Create a new sub process",
            "CREATE-DESCRIPTION": "You need to give a name for the new sub process and you may want to add a description at the same time."
        }
    },

    "CASE": {
      "NAME": "Model name",
      "KEY": "Model key",
      "DESCRIPTION": "Description",
      "VERSION-COMMENT": "Version comment",
      "ACTION": {
            "DETAILS": "Show details",
            "EDIT": "Modify model properties",
            "DUPLICATE": "Duplicate this model",
            "EXPORT_CMMN": "Export to CMMN 1.1",
            "DELETE": "Delete this model",
            "CREATE-CONFIRM": "Create new model",
            "DUPLICATE-CONFIRM": "Duplicate the model",
            "OPEN-IN-EDITOR": "Visual Editor",
            "EDIT-CONFIRM": "Save",
            "DELETE-CONFIRM": "Delete case model",
            "USE-AS-NEW-VERSION": "Use as new version",
            "FAVORITE": "Favorite this model"
        },
        "DETAILS": {
          "HISTORY-TITLE": "History",
          "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Created by {{createdBy}}",
          "NO-DESCRIPTION": "This model has no description. Modify the model properties to add one"
        },

        "POPUP": {
          "CREATE-TITLE": "Create a new case model",
          "DUPLICATE-TITLE": "Duplicate the case model",
          "CREATE-DESCRIPTION": "You need to give a name for the new model and you may want to add a description at the same time.",
          "DUPLICATE-DESCRIPTION": "You can change the name for the new model and you may want to change the description at the same time.",
          "EDIT-DESCRIPTION": "Change any of the model properties below and then press Save to update the model.",
          "DELETE-DESCRIPTION": "Are you sure you want to delete the process model \"{{name}}\"?",
          "EDIT-TITLE":"Edit model details",
          "DELETE-TITLE": "Delete model",
          "DELETE-LOADING-RELATIONS": "Checking model usage...",
          "DELETE-RELATIONS-DESCRIPTION-SINGLE": "This model cannot be deleted, because another model is using it:",
          "DELETE-RELATIONS-DESCRIPTION": "This model cannot be deleted, because it is used by other models:",
          "DELETE-PROCESS-RELATION": "Case model",
          "DELETE-FORM-RELATION": "Form model",
          "DELETE-APP-RELATION": "App model",
          "IMPORT-DESCRIPTION": "Please browse for or drop a CMMN XML definition with an .cmmn or .cmmn.xml extension",
          "IMPORT-TITLE": "Import a case model",
          "USE-AS-NEW-TITLE": "Use as new version",
          "USE-AS-NEW-DESCRIPTION": "Are you sure you want to use version {{version}} to create a new version of \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Could not fully restore the app model to the chosen version: some referenced models are missing due to being deleted in the past. Please update the app model accordingly. Missing models:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Model '{{name}}' with internal id {{id}}, created by {{createdBy}}",
          "SHARED-WITH": "Shared with",
          "PERMISSION": "Permission",
          "ACTIONS": "Actions",
          "IMPORT": {
              "DROPZONE": "Drop a .cmmn or .cmmn.xml CMMN XML file",
              "CANCEL-UPLOAD": "Cancel the upload",
              "ERROR": "Error while processing the CMMN XML file",
              "NO-DROP": "Drag and drop not supported"
          }
        },
        "ALERT": {
          "EDIT-CONFIRM": "Model updated"
        },
        "ERROR": {
          "NOT-FOUND": "The requested model does not exist"
        }
    },

    "FORM": {
      "NAME": "Form name",
      "KEY": "Form key",
      "DESCRIPTION": "Description",
      "ACTION": {
            "DETAILS": "Show details",
            "EDIT": "Modify model properties",
            "DELETE": "Delete this form",
            "CREATE-CONFIRM": "Create new form",
            "DUPLICATE": "Duplicate this form",
            "DUPLICATE-CONFIRM": "Duplicate the form",
            "OPEN-IN-EDITOR": "Form Editor",
            "EDIT-CONFIRM": "Save",
            "DELETE-CONFIRM": "Delete form",
            "USE-AS-NEW-VERSION": "Use as new version"

        },
        "DETAILS": {
          "HISTORY-TITLE": "History",
          "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Created by {{createdBy}}"
        },

        "POPUP": {
          "CREATE-TITLE": "Create a new form",
          "DUPLICATE-TITLE": "Duplicate form",
          "CREATE-DESCRIPTION": "You need to give a name for the new form and you may want to add a description at the same time.",
          "DUPLICATE-DESCRIPTION": "You need to give a name for the new form and you may want to add a description at the same time.",
          "SAVE-FORM-TITLE": "Save form",
          "EDIT-DESCRIPTION": "Change any of the form properties below and then press Save to update the form.",
          "DELETE-DESCRIPTION": "Are you sure you want to delete the form \"{{name}}\"?",
          "EDIT-TITLE":"Edit form details",
          "DELETE-TITLE": "Delete form",
          "USE-AS-NEW-TITLE": "Use as new version",
          "USE-AS-NEW-VERSION": "Use as new version",
          "USE-AS-NEW-DESCRIPTION": "Are you sure you want to use version {{version}} to create a new version of \"{{name}}\"?",
          "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Could not fully restore the app model to the chosen version: some referenced models are missing due to being deleted in the past. Please update the app model accordingly. Missing models:",
          "USE-AS-NEW-UNRESOLVED-MODEL": "Model '{{name}}' with internal id {{id}}, created by {{createdBy}}"
        }
    },
    "DECISION-SERVICE": {
      "NAME": "Decision service name",
      "KEY": "Decision service key",
      "DESCRIPTION": "Description",
      "ACTION": {
        "DETAILS": "Show details",
        "EDIT": "Modify model properties",
        "SHARE": "Share this decision service",
        "DELETE": "Delete this decision service",
        "ADD-COMMENT": "+ Add comment",
        "CREATE-CONFIRM": "Create new decision service",
        "OPEN-IN-EDITOR": "Decision Service Editor",
        "EXPORT": "Export decision service",
        "DELETE-CONFIRM": "Delete decision service",
        "USE-AS-NEW-VERSION": "Use as new version",
        "FAVORITE": "Favorite this decision service",
        "DUPLICATE": "Duplicate this decision service",
        "DUPLICATE-CONFIRM": "Duplicate the decision service"
      },
      "DETAILS": {
        "HISTORY-TITLE": "History",
        "COMMENTS-TITLE": "Comments",
        "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
        "CREATED-BY": "Created by {{createdBy}}"
      },
      "POPUP": {
        "CREATE-TITLE": "Create a new decision service",
        "CREATE-DESCRIPTION": "You need to give a name for the new decision service and you may want to add a description at the same time.",
        "DUPLICATE-TITLE": "Duplicate decision service",
        "DUPLICATE-DESCRIPTION": "You need to give a name for the new decision service and you may want to add a description at the same time.",
        "DELETE-TITLE": "Delete decision service",
        "DELETE-DESCRIPTION": "Are you sure you want to delete the decision service \"{{name}}\"?",
        "IMPORT-DESCRIPTION": "Please browse for or drop a DMN XML definition with an .dmn or .dmn.xml extension",
        "IMPORT-TITLE": "Import a DMN decision service model",
        "IMPORT": {
          "DROPZONE": "Drop a .dmn or .dmn.xml DMN XML file",
          "CANCEL-UPLOAD": "Cancel the upload",
          "ERROR": "Error while processing the DMN XML file",
          "NO-DROP": "Drag and drop not supported"
        }
      }
    },
    "DECISION-TABLE": {
        "NAME": "Decision Table name",
        "KEY": "Decision Table key",
        "DESCRIPTION": "Description",
        "VERSION-COMMENT": "Version comment",
        "HIT-POLICY": "Hit Policy:",
        "ACTION": {
            "DETAILS": "Show details",
            "EDIT": "Modify model properties",
            "SHARE": "Share this decision table",
            "DELETE": "Delete this decision table",
            "ADD-COMMENT": "+ Add comment",
            "CREATE-CONFIRM": "Create new decision table",
            "OPEN-IN-EDITOR": "Decision Table Editor",
            "EXPORT": "Export decision table",
            "DELETE-CONFIRM": "Delete decision table",
            "USE-AS-NEW-VERSION": "Use as new version",
            "FAVORITE": "Favorite this decision table",
            "DUPLICATE": "Duplicate this decision table"
        },
        "DETAILS": {
            "HISTORY-TITLE": "History",
            "COMMENTS-TITLE": "Comments",
            "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
            "CREATED-BY": "Created by {{createdBy}}"
        },
        "HIT-POLICIES": {
            "FIRST": "First",
            "ANY": "Any",
            "UNIQUE": "Unique",
            "PRIORITY": "Priority",
            "RULE ORDER": "Rule Order",
            "OUTPUT ORDER": "Output Order",
            "COLLECT": "Collect"
        },
        "COLLECT-OPERATORS": {
            "SUM": "Sum",
            "MIN": "Min",
            "MAX": "Max",
            "COUNT": "Count"
        },
        "POPUP": {
            "CREATE-TITLE": "Create a new decision table",
            "CREATE-DESCRIPTION": "You need to give a name for the new decision table and you may want to add a description at the same time.",
            "SAVE-DESCRIPTION": "You need to give a name and a unique key for the new decision table and you may want to add a description at the same time.",
            "DUPLICATE-TITLE": "Duplicate decision table",
            "DUPLICATE-DESCRIPTION": "You need to give a name for the new decision table and you may want to add a description at the same time.",
            "DELETE-TITLE": "Delete decision table",
            "DELETE-DESCRIPTION": "Are you sure you want to delete the decision table \"{{name}}\"?",
            "SAVE-DECISION-TABLE-TITLE": "Save decision table",
            "IMPORT-DESCRIPTION": "Please browse for or drop a DMN XML definition with an .dmn or .dmn.xml extension",
          	"IMPORT-TITLE": "Import a DMN decision table model",
	        "IMPORT": {
	            "DROPZONE": "Drop a .dmn or .dmn.xml DMN XML file",
	            "CANCEL-UPLOAD": "Cancel the upload",
	            "ERROR": "Error while processing the DMN XML file",
	            "NO-DROP": "Drag and drop not supported"
	        },
            "USE-AS-NEW-TITLE": "Use as new version",
            "USE-AS-NEW-VERSION": "Use as new version",
            "USE-AS-NEW-DESCRIPTION": "Are you sure you want to use version {{version}} to create a new version of \"{{name}}\"?",
            "USE-AS-NEW-UNRESOLVED-MODELS-ERROR": "Could not fully restore the app model to the chosen version: some referenced models are missing due to being deleted in the past. Please update the app model accordingly. Missing models:",
            "USE-AS-NEW-UNRESOLVED-MODEL": "Model '{{name}}' with internal id {{id}}, created by {{createdBy}}",
            "FORCE-DMN-11": "Force DMN 1.1"
        },
        "ALERT": {
            "FAVORITE-CONFIRM": "This decision table is now favorited",
            "UN-FAVORITE-CONFIRM": "This decision table is no longer favorited"
        }
    },

    "APP": {
        "NAME": "App definition name",
        "KEY": "App definition key",
        "DESCRIPTION": "Description",
        "ICON": "Icon",
        "THEME": "Theme",
        "GROUPS-ACCESS": "Groups access, separated by commas",
		"USERS-ACCESS": "Users access, separated by commas",
        "ACTION": {
            "DETAILS": "Show details",
            "EDIT": "Modify app definition properties",
            "DUPLICATE": "Duplicate this application",
            "SHARE": "Share this app definition",
            "DELETE": "Delete this app definition",
            "CREATE-CONFIRM": "Create new app definition",
            "DUPLICATE-CONFIRM": "Duplicate the app definition",
            "DELETE-CONFIRM": "Delete app definition",
            "USE-AS-NEW-VERSION": "Use as new version",
            "OPEN-IN-EDITOR": "App Editor",
            "PUBLISH": "Publish",
            "PUBLISH-CONFIRM": "Publish app definition",
            "SELECT-ICON": "Change icon...",
            "SELECT-THEME": "Change theme...",
            "EDIT-MODELS": "Edit included models",
            "EXPORT-ZIP": "Export app definition as a zip file",
            "EXPORT-BAR": "Export app definition as a deployable bar file"

        },
        "DETAILS": {
          "TITLE": "App definition details: {{name}}",
          "HISTORY-TITLE": "History",
          "MODELS-TITLE": "Models included in the app definition",
          "LAST-UPDATED-BY": "Last updated by {{lastUpdatedBy}} - {{lastUpdated | dateformat}}",
          "CREATED-BY": "Created by {{createdBy}}",
          "NO-DESCRIPTION": "This app definition has no description. Modify the app definition properties to add one",
          "NO-MODELS-SELECTED": "No models are selected for this app"
        },
        "TITLE": {
          "SELECT-ICON": "Select app icon",
          "SELECT-THEME": "Select app colors",
          "PREVIEW": "Preview"

        },
        "POPUP": {
          "CREATE-TITLE": "Create a new app definition",
          "DUPLICATE-TITLE": "Duplicate an app definition",
          "SAVE-APP-TITLE": "Save app definition",
          "SAVE-APP-SAVE-SUCCESS": "Saved app definition",
          "CREATE-DESCRIPTION": "You need to give a name for the new app definition and you may want to add a description at the same time.",
          "DUPLICATE-DESCRIPTION": "You can give a name for the new app definition and you may want to change the description at the same time.",
          "PUBLISH-TITLE": "Publish app definition",
          "PUBLISH-DESCRIPTION": "Are you sure you want to publish the app definition \"{{name}}\"? Note that this app definition will be versioned and the workflow app will be updated if existing already.",
          "PUBLISH-FIELD": "Publish? Note that if publish is enabled, this app definition will be versioned and the workflow app will be updated if existing already.",
          "PUBLISH-ERROR-PROCDEF-KEY-CONFLICT": "Your process model \"{{modelInAppName}}\" has the same identifier \"{{processDefinitionKey}}\" as the existing deployed process \"{{conflictingModelName}}\" of the app \"{{conflictingAppName}}\". Please change this \"id\" property of the process model to something different.",
          "PUBLISH-ERROR-PROCESS-ALREADY-USED": "Following process models are already used in another app. Is this ok?",
          "PUBLISH-ERROR-PROCESS-ALREADY-USED-APP": "App",
          "PUBLISH-ERROR-PROCDEF-DUPLICATE-KEYS": "Invalid app: duplicate process identifiers found (change the \"id\" property of the offending process models):",
          "DELETE-TITLE": "Delete app definition",
          "DELETE-DESCRIPTION": "Are you sure you want to delete the app definition \"{{name}}\"?",
          "DELETE-DESCRIPTION-WITH-RUNTIME": "Are you sure you want to delete the app definition \"{{name}}\"? Note that this app definition has been deployed to the task landing page and by confirming, the app will be removed from the task app landing page.",
          "DELETE-CASCADE-FALSE": "Only delete the current version of this app definition (v{{version}})",
          "DELETE-CASCADE-TRUE": "Also delete all previous versions of this app definition",
          "HAS-CUSTOM-STENCILITEM" : "Model \"{{modelName}}\" uses a stencil with custom stencil items. It is not possible to use this model in an app definition.",
          "HAS-VALIDATIONERROR" : "Model \"{{modelName}}\" has validation errors and cannot be added to an app definition. Open the model in the editor to see more details about the validation error(s).",
          "IMPORT-DESCRIPTION":"Please browse for or drop a app definition with a .zip extension",
          "IMPORT-TITLE":"Import an app definition model",
          "IMPORT": {
              "DROPZONE": "Drop a .zip app definition file",
              "CANCEL-UPLOAD": "Cancel the upload",
              "RENEWIDM-IDS": "Renew the user and group identifiers when importing step and BPMN models. This is often required when importing the app definition into a different Flowable environment. It will try to link the human steps and user tasks to the right user and group in this target environment.",
              "ERROR": "Error while processing the app definition file",
              "NO-DROP": "Drag and drop not supported"
          },
          "INCLUDE-MODELS-TITLE": "Models included in the app definition"
        },
        "ALERT": {
          "DELETE-CONFIRM": "App definition deleted",
          "PUBLISH-CONFIRM": "The app definition has been published",
          "PUBLISH-ERROR": "Could not publish app definition. Please check the validity of the referenced process models"
        }
    },

    "SHARE-INFO": {
        "ACTION": {
          "ADD": "Add another person"
        }
    },

    "FORM-BUILDER": {
        "PALLETTE": {
            "TEXT": "Text",
            "MULTILINE-TEXT": "Multiline text",
            "PASSWORD": "Password",
            "NUMBER": "Number",
            "CHECKBOX": "Checkbox",
            "DATE": "Date",
            "DROPDOWN": "Dropdown",
            "RADIO": "Radio buttons",
            "PEOPLE": "People",
            "GROUP-OF-PEOPLE": "Group of people",
            "UPLOAD": "Upload",
            "EXPRESSION": "Expression",
            "DECIMAL": "Decimal",
	    	"HYPERLINK": "Hyperlink",
	    	"SPACER": "Spacer",
			"HORIZONTAL-LINE": "Horizontal line",
			"HEADLINE": "Headline",
			"HEADLINE-WITH-LINE":"Headline"
        },
        "TABS": {
            "GENERAL": "General",
            "OPTIONS": "Options",
            "UPLOAD-OPTIONS": "Upload options",
	    "ADVANCED-OPTIONS":"Advanced"
        },
        "VERSION": "Version {{version}}",
        "LAST-UPDATED": "Last updated by {{lastUpdatedBy}}, {{lastUpdated | dateformat}}",
        "TITLE": {
            "DESIGN": "Design",
            "OUTCOME": "Outcomes"
        },
        "POPUP": {
            "EDIT-TITLE": "Edit field '{{name}}'",
            "EXPRESSION-TITLE": "Edit expression"
        },
        "MESSAGE": {
            "EMPTY-EXPRESSION": "(No expression value)",
            "EXPRESSION-HELP": "You can also display values previously submitted in any form, as part of the text, by referencing them using a notation as follows ${myFieldId}.",
            "OPTIONS-EXPRESSION-HELP": "You can use an expression to dynamically populate options for example by referencing a variable like this ${optionsVariable}. The expression needs to result in either a java object (java.util.List with Option objects) or its json representation."
        },
        "LABEL" : {
            "FUNCTIONAL-GROUP": "Select group..",
            "PERSON": "Select person.."
        },
        "COMPONENT": {
            "LABEL": "Label:",
            "OVERRIDEID": "Override id?",
            "ID": "Id:",
            "PLACEHOLDER": "Placeholder:",
            "OPTIONS": "Options",
            "RADIO-BUTTON-DEFAULT": "Option 1",
            "DROPDOWN-DEFAULT-EMPTY-SELECTION": "Please choose one...",
            "DROPDOWN-EMPTY-VALUE-HELP": "This is the 'empty value' option. Selecting this at runtime is the taken to mean 'no value' or 'empty'.  This is allowed for optional fields, but not allowed for required fields.",
            "OPTIONS-EXPRESSION": "Options expression:",
            "OPTIONS-EXPRESSION-ENABLED": "Enable options expression",
            "REQUIRED": "Required",
	          "READONLY": "Read-only",
            "EXPRESSION": "Expression",
            "ADD-OPTION": "+ Add a new option",
            "UPLOAD-ALLOW-MULTIPLE": "Allow uploading multiple files",
            "SIZE": "Size",
	          "MAX-LENGTH":"Maximum length:",
            "MIN-LENGTH":"Minimum length:",
            "PASSWORD-UNMASK-OPTION": "password masking/unmasking option",
	          "HYPERLINK-URL": "Hyperlink URL",
	          "REGEX-PATTERN":"Regex standard",
            "MASK":{
              "TITLE":"Input mask",
              "EXAMPLES":{
                "TITLE":"Examples:",
                "NUMBER":"Any number",
                "LETTER":"Any letter",
                "NUMBERORLETTER":"Any letter or number",
                "OPTIONAL":"Make mask optional (not valid)",
                "PHONE":"Phone"
               }
           }
        },
        "OUTCOMES": {
            "DESCRIPTION": "You can define multiple outcomes for this task. When completing a task, the users selects one of the available outcomes, which can be used in eg. a condition further on in the process.",
            "NO-OUTCOMES-OPTION": "Don't use custom outcomes, only show a 'Complete' button.",
            "OUTCOMES-OPTION": "Use custom outcomes for this form.",
            "POSSIBLE-OUTCOMES": "Possible outcomes",
            "NEW-OUTCOME-PLACEHOLDER": "Enter new outcome",
            "ADD": "Add outcome",
            "REMOVE": "Remove"
        }
    },

    "DECISION-TABLE-EDITOR": {
        "EMPTY-MESSAGES": {
            "NO-VARIABLE-SELECTED": "Undefined"
        },
        "POPUP": {
            "EXPRESSION-EDITOR": {
                "INPUT-TITLE": "Edit input column",
                "INPUT-DESCRIPTION": "Select input variable as input for the column",
                "OUTPUT-TITLE": "Edit output column",
                "OUTPUT-DESCRIPTION": "Select an existing output variable or create a new one",
                "EXPRESSION-LABEL": "Column label:",
                "EXPRESSION-PLACEHOLDER": "Enter an optional label",
                "EXPRESSION-VARIABLE-NAME": "Variable name:",
                "EXPRESSION-VARIABLE-TYPE": "Variable type:",
                "EXPRESSION-VARIABLE-NAME-PLACEHOLDER": "Enter a variable name",
                "OUTPUT-NEW-VARIABLE-ID": "Variable ID:",
                "OUTPUT-NEW-VARIABLE-TYPE": "Variable type:",
                "COMPLEX-EXPRESSION-LABEL": "Complex expression:",
                "ALLOWED-VALUES": "Allowed values (optional):",
                "OUTPUT-VALUES": "Output values ",
                "OUTPUT-VALUES-OPTIONAL": "(optional):",
                "OUTPUT-VALUES-NOT-OPTIONAL": "(drag rows for priority / output order):"
            }
        },
        "BUTTON-ACTIONS-LABEL": "Actions",
        "BUTTON-ADD-INPUT-LABEL": "Add input",
        "BUTTON-ADD-OUTPUT-LABEL": "Add output",
        "BUTTON-ADD-RULE-LABEL": "Add rule",
        "BUTTON-MOVE-RULE-UPWARDS-LABEL": "Move up",
        "BUTTON-MOVE-RULE-DOWNWARDS-LABEL": "Move down",
        "BUTTON-REMOVE-RULE-LABEL": "Remove rule",
        "ALERT": {
            "EXPRESSION-VARIABLE-REQUIRED-ERROR": "All input and output expressions must reference a form field or variable.",
            "SAVE-CONFIRM": "Saved decision table '{{name}}'"
        }
    },

    "TOUR": {
        "WELCOME-TITLE": "Welcome, {{userName}}",
        "WELCOME-CONTENT": "This a short tour of the Flowable editor. The next few steps will guide you through the different sections of the application to get you started. Press the ESC key to stop at any time." ,
        "PALETTE-TITLE": "The Palette",
        "PALETTE-CONTENT": "All the available constructs to create a business process can be found here. They are arranged in logical groups. To open a group simply click on it:",
        "CANVAS-TITLE": "The Canvas",
        "CANVAS-CONTENT": "This is the work space on which you create your business process. Drag elements from the palette on the left and drop them on this canvas to start modeling.",
        "DRAGDROP-TITLE": "Drag and Drop Example",
        "DRAGDROP-CONTENT": "Here is an example how you get started with modeling:",
        "PROPERTIES-TITLE": "Properties",
        "PROPERTIES-CONTENT": "Here you can configure the properties of a business process construct. Simply select the item on the canvas and its properties will be shown. Click on the property if you want to edit it",
        "TOOLBAR-TITLE": "The Toolbar",
        "TOOLBAR-CONTENT": "All the actions can be found here: saving or validating a model, copy and pasting parts of a process, and so on. Hover over the buttons to get a description for an action.",
        "END-TITLE": "The End",
        "END-CONTENT": "That's it! You can now start modeling your processes. If you have any questions, feel free to ask them on the <a href=\"http://forum.flowable.org/\" target=\"_blank\">Flowable Forum</a> "
    },

    "FEATURE-TOUR" : {
        "BENDPOINT" : {
            "TITLE": "Bend point tutorial",
            "DESCRIPTION" : "When you are connecting process steps with each other using sequence flow (those arrows between process steps), you might find that these sequence flow cross each other or you would like to arrange them differently. To do this, you can add or remove a bend point to or from a sequence flow.<br/><br/> As shown below in the picture, you first click the 'add bendpoint' and then click on a sequence flow to add it. Note that the sequence flow will show you a subtle indication in green to show the bendpoint can be added there.<br/><br/> Removing a bendpoint again follows a similar pattern: click the 'remove bendpoint' button and click on the bend point to remove it again."
        }
    },

    "ACTION.OK" : "Ok",
    "ACTION.SAVE" : "Save",
    "ACTION.SAVE-AND-CLOSE" : "Save and close editor",
    "ACTION.SEND" : "Send",
    "ACTION.CANCEL" : "Cancel",
    "ACTION.SELECT" : "Select",
    "ACTION.ADD" : "Add",
    "NEW_ENTRY":"Add new entry",
    "ACTION.REMOVE" : "Remove",
    "ACTION.MOVE.UP" : "Move entry up",
    "ACTION.MOVE.DOWN" : "Move entry down",

    "TOOLBAR.ACTION.CLOSE" : "Close the editor and go back to the overview page",
    "TOOLBAR.ACTION.SAVE" : "Save the model",
    "TOOLBAR.ACTION.VALIDATE" : "Validate the model",
    "TOOLBAR.ACTION.CUT" : "Cut (select one or more elements in your business process)",
    "TOOLBAR.ACTION.COPY" : "Copy (select one or more elements in your business process)",
    "TOOLBAR.ACTION.PASTE" : "Paste",
    "TOOLBAR.ACTION.DELETE" : "Delete the selected element",
    "TOOLBAR.ACTION.UNDO" : "Undo",
    "TOOLBAR.ACTION.REDO" : "Redo",
    "TOOLBAR.ACTION.ZOOMIN" : "Zoom in",
    "TOOLBAR.ACTION.ZOOMOUT" : "Zoom out",
    "TOOLBAR.ACTION.ZOOMACTUAL" : "Zoom to actual size",
    "TOOLBAR.ACTION.ZOOMFIT" : "Zoom to fit",
    "TOOLBAR.ACTION.BENDPOINT.ADD" : "Add bend-point to the selected sequence flow",
    "TOOLBAR.ACTION.BENDPOINT.REMOVE" : "Remove bend-point from the selected sequence flow",
    "TOOLBAR.ACTION.ALIGNHORIZONTAL" : "Align model horizontal",
    "TOOLBAR.ACTION.ALIGNVERTICAL" : "Align model vertical",
    "TOOLBAR.ACTION.SAMESIZE" : "Same size",
    "TOOLBAR.ACTION.HELP": "Start the guided tour",
    "TOOLBAR.ACTION.FEEDBACK": "Provide feedback",

    "FORM_TOOLBAR.ACTION.SAVE" : "Save the model",

    "APP_DEFINITION_TOOLBAR.ACTION.SAVE" : "Save the app definition",

    "BUTTON.ACTION.DELETE.TOOLTIP": "Delete the element from the model",
    "BUTTON.ACTION.MORPH.TOOLTIP": "Change the element type",

    "ELEMENT.AUTHOR" : "Author",
    "ELEMENT.DATE_CREATED" : "Date created",

    "PROPERTY.REMOVED" : "removed",
    "PROPERTY.EMPTY" : "No value",
    "PROPERTY.PROPERTY.EDIT.TITLE" : "Change value for ",

    "PROPERTY.FEEDBACK.TITLE" : "Please fill-in your feedback",

    "PROPERTY.ASSIGNMENT.TITLE" : "Assignment",
    "PROPERTY.ASSIGNMENT.TYPE" : "Type",
    "PROPERTY.ASSIGNMENT.TYPE.IDENTITYSTORE" : "Identity store",
    "PROPERTY.ASSIGNMENT.TYPE.STATIC" : "Fixed values",
    "PROPERTY.ASSIGNMENT.ASSIGNEE" : "Assignee",
    "PROPERTY.ASSIGNMENT.MATCHING" : "Use &uparrow; and &downarrow; to select and press Enter to confirm or use the mouse",
    "PROPERTY.ASSIGNMENT.ASSIGNEE_PLACEHOLDER" : "Enter an assignee",
    "PROPERTY.ASSIGNMENT.EMPTY" : "No assignment selected",
    "PROPERTY.ASSIGNMENT.NONE" : "None ...",
    "PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHUSER": "Search user",
    "PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHGROUP": "Search group",
    "PROPERTY.ASSIGNMENT.SEARCH": "Search: ",
    "PROPERTY.ASSIGNMENT.ASSIGNEE_DISPLAY" : "Assignee {{assignee}}",
    "PROPERTY.ASSIGNMENT.CANDIDATE_USERS_DISPLAY" : "{{length}} Candidate users",
    "PROPERTY.ASSIGNMENT.CANDIDATE_USERS" : "Candidate users",
    "PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS_DISPLAY" :  "{{length}} Candidate groups",
    "PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS" :  "Candidate groups",
    "PROPERTY.ASSIGNMENT.USER_IDM_DISPLAY": "User {{firstName}} {{lastName}}",
    "PROPERTY.ASSIGNMENT.USER_IDM_EMAIL_DISPLAY": "User {{email}}",
    "PROPERTY.ASSIGNMENT.USER_IDM_FIELD_DISPLAY": "Field {{name}}",
    "PROPERTY.ASSIGNMENT.IDM_EMPTY" : "Process initiator",
    "PROPERTY.ASSIGNMENT.IDM.TYPE" : "Assignment",
    "PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_USERS" : "No candidate users selected...",
    "PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_GROUPS" : "No candidate groups selected...",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.INITIATOR" : "Assigned to process initiator",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USER" : "Assigned to single user",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USERS" : "Candidate users",
    "PROPERTY.ASSIGNMENT.IDM.DROPDOWN.GROUPS" : "Candidate groups",
    "PROPERTY.ASSIGNMENT.INITIATOR-CAN-COMPLETE" : "Allow process initiator to complete task",
    "PROPERTY.EXECUTIONLISTENERS.DISPLAY" : "{{length}} execution listeners",
    "PROPERTY.EXECUTIONLISTENERS.EMPTY" : "No execution listeners configured",
    "PROPERTY.EXECUTIONLISTENERS.EVENT" : "Event",
    "PROPERTY.EXECUTIONLISTENERS.CLASS" : "Class",
    "PROPERTY.EXECUTIONLISTENERS.CLASS.PLACEHOLDER" : "Enter a classname",
    "PROPERTY.EXECUTIONLISTENERS.EXPRESSION" : "Expression",
    "PROPERTY.EXECUTIONLISTENERS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Enter a delegate expression",
    "PROPERTY.EXECUTIONLISTENERS.UNSELECTED" : "No execution listener selected",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME" : "Name",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE" : "String value",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER" : "Enter a string value",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING" : "String",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING.PLACEHOLDER" : "Enter a string",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.IMPLEMENTATION" : "Implementation",
    "PROPERTY.EXECUTIONLISTENERS.FIELDS.EMPTY" : "No Field selected",

    "PROPERTY.FIELDS" : "{{length}} fields",
    "PROPERTY.FIELDS.EMPTY" : "No fields selected",
    "PROPERTY.FIELDS.NAME" : "Name",
    "PROPERTY.FIELDS.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.FIELDS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.FIELDS.STRINGVALUE" : "String value",
    "PROPERTY.FIELDS.STRINGVALUE.PLACEHOLDER" : "Enter a string value",
    "PROPERTY.FIELDS.STRING" : "String",
    "PROPERTY.FIELDS.STRING.PLACEHOLDER" : "Enter a string",
    "PROPERTY.FIELDS.IMPLEMENTATION" : "Implementation",

    "PROPERTY.EXCEPTIONS" : "{{length}} exceptions",
    "PROPERTY.EXCEPTIONS.EMPTY" : "No exceptions selected",
    "PROPERTY.EXCEPTIONS.CODE" : "Code",
    "PROPERTY.EXCEPTIONS.CODE.PLACEHOLDER" : "Enter a code",
    "PROPERTY.EXCEPTIONS.CLASS" : "Class",
    "PROPERTY.EXCEPTIONS.CLASS.PLACEHOLDER" : "Enter an class",
    "PROPERTY.EXCEPTIONS.CHILDREN" : "Include child exceptions",

    "PROPERTY.DATAPROPERTIES.VALUES" : "{{length}} data objects",
    "PROPERTY.DATAPROPERTIES.EMPTY" : "No data objects configured",
    "PROPERTY.DATAPROPERTIES.ID" : "Id",
    "PROPERTY.DATAPROPERTIES.ID.PLACEHOLDER" : "Enter an id",
    "PROPERTY.DATAPROPERTIES.NAME" : "Name",
    "PROPERTY.DATAPROPERTIES.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.DATAPROPERTIES.TYPE" : "Type",
    "PROPERTY.DATAPROPERTIES.VALUE.PLACEHOLDER" : "Enter a value (optional)",
    "PROPERTY.DATAPROPERTIES.VALUE" : "Default Value",

    "PROPERTY.FORMPROPERTIES.VALUE" : "{{length}} form properties",
    "PROPERTY.FORMPROPERTIES.EMPTY" : "No form properties selected",
    "PROPERTY.FORMPROPERTIES.ID" : "Id",
    "PROPERTY.FORMPROPERTIES.ID.PLACEHOLDER" : "Enter an id",
    "PROPERTY.FORMPROPERTIES.NAME" : "Name",
    "PROPERTY.FORMPROPERTIES.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.FORMPROPERTIES.TYPE" : "Type",
    "PROPERTY.FORMPROPERTIES.DATEPATTERN" : "Date pattern",
    "PROPERTY.FORMPROPERTIES.DATEPATTERN.PLACEHOLDER" : "Enter date pattern",
    "PROPERTY.FORMPROPERTIES.VALUES" : "Values",
    "PROPERTY.FORMPROPERTIES.ENUMVALUES.EMPTY" : "No enum value selected",
    "PROPERTY.FORMPROPERTIES.VALUES.ID" : "Id",
    "PROPERTY.FORMPROPERTIES.VALUES.NAME" : "Name",
    "PROPERTY.FORMPROPERTIES.VALUES.ID.PLACEHOLDER" : "Enter id of a value",
  	"PROPERTY.FORMPROPERTIES.VALUES.NAME.PLACEHOLDER" : "Enter name of a value",
    "PROPERTY.FORMPROPERTIES.EXPRESSION" : "Expression",
    "PROPERTY.FORMPROPERTIES.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.FORMPROPERTIES.VARIABLE" : "Variable",
    "PROPERTY.FORMPROPERTIES.VARIABLE.PLACEHOLDER" : "Enter a variable",
    "PROPERTY.FORMPROPERTIES.DEFAULT" : "default",
    "PROPERTY.FORMPROPERTIES.DEFAULT.PLACEHOLDER" : "Enter a default",
    "PROPERTY.FORMPROPERTIES.REQUIRED" : "Required",
    "PROPERTY.FORMPROPERTIES.READABLE" : "Readable",
    "PROPERTY.FORMPROPERTIES.WRITABLE" : "Writable",

    "PROPERTY.INPARAMETERS.VALUE" : "{{length}} in-parameters",
    "PROPERTY.INPARAMETERS.EMPTY" : "No in-parameters configured",

    "PROPERTY.OUTPARAMETERS.VALUE" : "{{length}} out-parameters",
    "PROPERTY.OUTPARAMETERS.EMPTY" : "No out-parameters configured",

    "PROPERTY.PARAMETER.SOURCE" : "Source",
    "PROPERTY.PARAMETER.SOURCE.PLACEHOLDER" : "Enter a source",
    "PROPERTY.PARAMETER.SOURCEEXPRESSION" : "Source expression",
    "PROPERTY.PARAMETER.SOURCEEXPRESSION.PLACEHOLDER" : "Enter a source expression",
    "PROPERTY.PARAMETER.TARGET" : "Target",
    "PROPERTY.PARAMETER.TARGET.PLACEHOLDER" : "Enter a target",
    "PROPERTY.PARAMETER.TARGETEXPRESSION" : "Target expression",
    "PROPERTY.PARAMETER.TARGETEXPRESSION.PLACEHOLDER" : "Enter a target expression",
    "PROPERTY.PARAMETER.EMPTY" : "No parameter selected",

    "PROPERTY.PROCESSREFERENCE.EMPTY" : "No reference selected",
    "PROPERTY.PROCESSREFERENCE.TITLE" : "Process reference",
    "PROPERTY.PROCESSREFERENCE.ERROR.PROCESS" : "There was an error loading the processes. Try again later",
    "PROPERTY.PROCESSREFERENCE.PROCESS.LOADING" : "Loading processes...",
    "PROPERTY.PROCESSREFERENCE.PROCESS.EMPTY" : "This folder contains no processes",

    "PROPERTY.FORMREFERENCE.EMPTY" : "No reference selected",
    "PROPERTY.FORMREFERENCE.TITLE" : "Form reference",
    "PROPERTY.FORMREFERENCE.DESCRIPTION" : "Reference to a form",
    "PROPERTY.FORMREFERENCE.ERROR.FORM" : "There was an error loading the forms. Try again later",
    "PROPERTY.FORMREFERENCE.FORM.LOADING" : "Loading forms...",
    "PROPERTY.FORMREFERENCE.FORM.EMPTY" : "This folder contains no forms",

    "PROPERTY.TASKLISTENERS.VALUE" : "{{length}} task listeners",
    "PROPERTY.TASKLISTENERS.EMPTY" : "No task listeners configured",
    "PROPERTY.TASKLISTENERS.EVENT" : "Event",
    "PROPERTY.TASKLISTENERS.CLASS" : "Class",
    "PROPERTY.TASKLISTENERS.CLASS.PLACEHOLDER" : "Enter a classname",
    "PROPERTY.TASKLISTENERS.EXPRESSION" : "Expression",
    "PROPERTY.TASKLISTENERS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Enter a delegate expression",
    "PROPERTY.TASKLISTENERS.UNSELECTED" : "No task listener selected",
    "PROPERTY.TASKLISTENERS.FIELDS.NAME" : "Name",
    "PROPERTY.TASKLISTENERS.FIELDS.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION" : "Expression",
    "PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER" : "Enter an expression",
    "PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE" : "String value",
    "PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER" : "Enter a string value",
    "PROPERTY.TASKLISTENERS.FIELDS.STRING" : "String",
    "PROPERTY.TASKLISTENERS.FIELDS.STRING.PLACEHOLDER" : "Enter a string",
    "PROPERTY.TASKLISTENERS.FIELDS.IMPLEMENTATION" : "Implementation",
    "PROPERTY.TASKLISTENERS.FIELDS.EMPTY" : "No Field selected",

    "PROPERTY.EVENTLISTENERS.DISPLAY" : "{{length}} event listeners",
    "PROPERTY.EVENTLISTENERS.EMPTY" : "No event listeners configured",
    "PROPERTY.EVENTLISTENERS.EVENTS": "Events",
    "PROPERTY.EVENTLISTENERS.RETHROW": "Rethrow event?",
    "PROPERTY.EVENTLISTENERS.CLASS" : "Class",
    "PROPERTY.EVENTLISTENERS.CLASS.PLACEHOLDER" : "Enter a classname",
    "PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER" : "Enter a delegate expression",
    "PROPERTY.EVENTLISTENERS.ENTITYTYPE" : "Entity type",
    "PROPERTY.EVENTLISTENERS.ENTITYTYPE.PLACEHOLDER" : "Enter an entity type",
    "PROPERTY.EVENTLISTENERS.RETHROWTYPE": "Rethrow event type",
    "PROPERTY.EVENTLISTENERS.ERRORCODE" : "Error code",
    "PROPERTY.EVENTLISTENERS.ERRORCODE.PLACEHOLDER" : "Enter an error code",
    "PROPERTY.EVENTLISTENERS.MESSAGENAME" : "Message name",
    "PROPERTY.EVENTLISTENERS.MESSAGENAME.PLACEHOLDER" : "Enter a message name",
    "PROPERTY.EVENTLISTENERS.SIGNALNAME" : "Signal name",
    "PROPERTY.EVENTLISTENERS.SIGNALNAME.PLACEHOLDER" : "Enter a signal name",
    "PROPERTY.EVENTLISTENERS.UNSELECTED" : "No event listener selected",

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

    "PROPERTY.SIGNALDEFINITIONS.DISPLAY" : "{{length}} signal definitions",
    "PROPERTY.SIGNALDEFINITIONS.EMPTY" : "No signal definitions configured",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE-GLOBAL": "Global",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE-PROCESSINSTANCE": "Process Instance",
    "PROPERTY.SIGNALDEFINITIONS.ID" : "Id",
    "PROPERTY.SIGNALDEFINITIONS.NAME" : "Name",
    "PROPERTY.SIGNALDEFINITIONS.SCOPE" : "Scope",

    "PROPERTY.MESSAGEDEFINITIONS.DISPLAY" : "{{length}} message definitions",
    "PROPERTY.MESSAGEDEFINITIONS.EMPTY" : "No message definitions configured",
    "PROPERTY.MESSAGEDEFINITIONS.ID" : "Id",
    "PROPERTY.MESSAGEDEFINITIONS.NAME" : "Name",

    "PROPERTY.ESCALATIONDEFINITIONS.DISPLAY" : "{{length}} escalation definitions",
    "PROPERTY.ESCALATIONDEFINITIONS.EMPTY" : "No escalation definitions configured",
    "PROPERTY.ESCALATIONDEFINITIONS.ID" : "Id",
    "PROPERTY.ESCALATIONDEFINITIONS.NAME" : "Name",

    "PROPERTY.SEQUENCEFLOW.ORDER.EMPTY" : "No sequence flow order determined",
    "PROPERTY.SEQUENCEFLOW.ORDER.NOT.EMPTY" : "Sequence flow order set",
    "PROPERTY.SEQUENCEFLOW.ORDER.NO.OUTGOING.SEQUENCEFLOW.FOUND" : "No outgoing sequence flow found.",
    "PROPERTY.SEQUENCEFLOW.ORDER.DESCRIPTION" : "Set the order in which the sequence flow need to be evaluated:",
    "PROPERTY.SEQUENCEFLOW.ORDER.SEQUENCEFLOW.VALUE" : "Sequence flow to {{targetType}} {{targetTitle}}",

    "PROPERTY.SEQUENCEFLOW.CONDITION.TITLE" : "Sequence flow condition",
    "PROPERTY.SEQUENCEFLOW.CONDITION.STATIC" : "Condition expression",
    "PROPERTY.SEQUENCEFLOW.CONDITION.NO-CONDITION-DISPLAY": "No condition set",

    "PROPERTY.DUEDATE.EMPTY" : "No due date",
    "PROPERTY.DUEDATE.DEFINED" : "Due date defined",
    "PROPERTY.DUEDATE.TITLE" : "Due date",
    "PROPERTY.DUEDATE.EXPRESSION-LABEL" : "Due date expression",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.NO-DUEDATE" : "No due date",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.EXPRESSION" : "Expression definition",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.STATIC" : "Fixed duration after task creation",
    "PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.FIELD" : "Based on field",

    "PROPERTY.EVENTINPARAMETERS.VALUE" : "{{length}} event in parameter items",
    "PROPERTY.EVENTINPARAMETERS.EMPTY" : "No in parameter configured",

    "PROPERTY.EVENTINPARAMETERS.EVENTNAME" : "Event property name",
    "PROPERTY.EVENTINPARAMETERS.EVENTNAME.PLACEHOLDER" : "Enter an event property name",
    "PROPERTY.EVENTINPARAMETERS.EVENTTYPE" : "Type",
    "PROPERTY.EVENTINPARAMETERS.VARIABLENAME" : "Variable name",
    "PROPERTY.EVENTINPARAMETERS.VARIABLENAME.PLACEHOLDER" : "Enter a variable name",
    "PROPERTY.EVENTINPARAMETERS.NOSELECTION" : "No parameter selected",

    "PROPERTY.EVENTOUTPARAMETERS.VALUE" : "{{length}} event out parameter items",
    "PROPERTY.EVENTOUTPARAMETERS.EMPTY" : "No out parameter configured",

    "PROPERTY.EVENTOUTPARAMETERS.EVENTNAME" : "Event property name",
    "PROPERTY.EVENTOUTPARAMETERS.EVENTNAME.PLACEHOLDER" : "Enter an event property name",
    "PROPERTY.EVENTOUTPARAMETERS.EVENTTYPE" : "Type",
    "PROPERTY.EVENTOUTPARAMETERS.VARIABLENAME" : "Variable name",
    "PROPERTY.EVENTOUTPARAMETERS.VARIABLENAME.PLACEHOLDER" : "Enter a variable name",
    "PROPERTY.EVENTOUTPARAMETERS.NOSELECTION" : "No parameter selected",

    "PROPERTY.EVENTCORRELATIONPARAMETERS.VALUE" : "{{length}} correlation parameters",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.EMPTY" : "No correlation parameters configured",

    "PROPERTY.EVENTCORRELATIONPARAMETERS.NAME" : "Name",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.NAME.PLACEHOLDER" : "Enter a name",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.TYPE" : "Type",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.NOSELECTION" : "No parameter selected",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.VALUEPROP" : "Value",
    "PROPERTY.EVENTCORRELATIONPARAMETERS.VALUEPROP.PLACEHOLDER" : "Enter a value / expression",

    "PROPERTY.VARIABLE.AGGREGATIONS.CLASS" : "Class",
    "PROPERTY.VARIABLE.AGGREGATIONS.CLASS.PLACEHOLDER" : "Enter a classname",
    "PROPERTY.VARIABLE.AGGREGATIONS.CREATEOVERVIEW" : "Create target overview variable",
    "PROPERTY.VARIABLE.AGGREGATIONS.DEFINITIONS.UNSELECTED" : "No variables selected",
    "PROPERTY.VARIABLE.AGGREGATIONS.DELEGATEEXPRESSION" : "Delegate expression",
    "PROPERTY.VARIABLE.AGGREGATIONS.DELEGATEEXPRESSION.PLACEHOLDER" : "Enter a delegate expression",
    "PROPERTY.VARIABLE.AGGREGATIONS.EMPTY" : "No variable aggregations configured",
    "PROPERTY.VARIABLE.AGGREGATIONS.STOREASTRANSIENT" : "Store target variable transiently",
    "PROPERTY.VARIABLE.AGGREGATIONS.UNSELECTED" : "No variable aggregations selected",
    "PROPERTY.VARIABLE.AGGREGATIONS.VALUE" : "{{length}} variable aggregations",

    "MODEL.SAVE.TITLE" : "Save model",
    "MODEL.VALIDATE.TITLE" : "Validation results",
    "MODEL.NAME" : "Name",
    "MODEL.KEY" : "Key",
    "MODEL.DESCRIPTION" : "Description",
    "MODEL.SAVE.NEWVERSION" : "Save this as a new version?  This means you can always go back to a previous version",
    "MODEL.SAVE.COMMENT" : "Comment",
    "MODEL.SAVE.SAVING" : "Saving model",
    "MODEL.LASTMODIFIEDDATE" : "Last saved",
    "MODEL.SAVE.ERROR": "Unexpected error: could not save model",
    "MODEL.VALIDATIONERRORS": "Note that the model contains validation errors. This means that the model can not be deployed on the Flowable Engine in its current state.",
    "MODEL.CONFLICT.WRITE": "Could not save model: '{{userFullName}}' has made changes to this model",
    "MODEL.CONFLICT.WRITE.OPTIONS": "Select an option to resolve this conflict:",
    "MODEL.CONFLICT.WRITE.OPTION.OVERWRITE": "Overwrite other model",
    "MODEL.CONFLICT.WRITE.OPTION.DISCARDCHANGES": "Discard my changes",
    "MODEL.CONFLICT.WRITE.OPTION.SAVEAS": "Save as new model",
    "MODEL.CONFLICT.WRITE.OPTION.NEWVERSION": "Create new version",
    "MODEL.CONFLICT.SAVEAS" : "Save as:",

    "EVENT_TYPE.ACTIVITY.COMPENSATE.TOOLTIP": "An activity is about to be executed as a compensation for another activity. The event targets the activity that is about to be executed for compensation",
    "EVENT_TYPE.ACTIVITY.COMPLETED.TOOLTIP": "An activity has been completed successfully",
    "EVENT_TYPE.ACTIVITY.ERROR.RECEIVED.TOOLTIP": "An activity has received an error event. Dispatched before the actual error has been received by the activity",
    "EVENT_TYPE.MEMBERSHIP.CREATED.TOOLTIP": "A new membership has been created",
    "EVENT_TYPE.MEMBERSHIP.DELETED.TOOLTIP": "A single membership has been deleted",
    "EVENT_TYPE.MEMBERSHIPS.DELETED.TOOLTIP": "All memberships in the related group have been deleted. No individual events will be dispatched due to possible performance reasons",
    "EVENT_TYPE.TASK.ASSIGNED.TOOLTIP": "A task as been assigned. This is thrown alongside with an ENTITY_UPDATED event",
    "EVENT_TYPE.TASK.COMPLETED.TOOLTIP": "A task has been completed. Dispatched before the task entity is deleted",
    "EVENT_TYPE.UNCAUGHT.BPMNERROR.TOOLTIP": "When a BPMN Error was thrown, but was not caught within in the process",
    "EVENT_TYPE.VARIABLE.CREATED.TOOLTIP": "A new variable has been created",
    "EVENT_TYPE.VARIABLE.DELETED.TOOLTIP": "An existing variable has been deleted",
    "EVENT_TYPE.VARIABLE.UPDATED.TOOLTIP": "An existing variable has been updated",

    "PROPERTY.DECISIONTABLEREFERENCE.EMPTY" : "No reference selected",
    "PROPERTY.DECISIONTABLEREFERENCE.TITLE" : "Decision table reference",
    "PROPERTY.DECISIONTABLEREFERENCE.ERROR.FORM" : "There was an error loading the decision tables. Try again later",
    "PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.LOADING" : "Loading decision tables...",
    "PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.EMPTY" : "This folder contains no decision tables",

    "PROPERTY.DECISIONSERVICEREFERENCE.EMPTY" : "No reference selected",
    "PROPERTY.DECISIONSERVICEREFERENCE.TITLE" : "Decision service reference",
    "PROPERTY.DECISIONSERVICEREFERENCE.ERROR.FORM" : "There was an error loading the decision services. Try again later",
    "PROPERTY.DECISIONSERVICEREFERENCE.DECISIONSERVICE.LOADING" : "Loading decision services...",
    "PROPERTY.DECISIONSERVICEREFERENCE.DECISIONSERVICE.EMPTY" : "This folder contains no decision services",

    "PROPERTY.CASEREFERENCE.EMPTY" : "No reference selected",
    "PROPERTY.CASEREFERENCE.TITLE" : "Case model reference",
    "PROPERTY.CASEREFERENCE.ERROR.FORM" : "There was an error loading the case models. Try again later",
    "PROPERTY.CASEREFERENCE.CASE.LOADING" : "Loading case models...",
    "PROPERTY.CASEREFERENCE.CASE.EMPTY" : "This folder contains no case models"
}