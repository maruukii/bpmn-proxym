declare interface ApplicationModalProps{
prop: any;
onCancel: () => void;
onSave: () => void;
setModalValue: React.Dispatch<React.SetStateAction<string>>;
modalValue: string;
t: any;
}


declare interface ApplicationAttributes{
id:number;
name: string;
scopeId: string;
scope: string;
evaluationScope: {parent: string};
evaluationScopeId:string;s
}
declare interface ApplicationMetadata{
    id: number;
    name: string;
    audience: string;
    oauthClientId:string;
    helpText:string;
    type: string;
    attributes?: [ApplicationAttributes];
}