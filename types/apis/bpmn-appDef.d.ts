
declare interface AppDefMetadata extends ProcessMetadata {
        appDefinition: AppDefinition;

}
declare interface AppDefinition{
        icon:string,
        models:ProcessMetadata[]|[]
        theme:string
}
declare interface AppDefViewer{
created:number
definition:AppDefinition 
description:string
id:string
key:string
name:string
version:number 
}