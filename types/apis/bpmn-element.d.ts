declare interface ElementMetadata{
        _id?:string
    "type" ?: string,
    "id" ?: string,
    "title" ?: string,
    "description" ?: string,
    "view" ?: string
    "icon" ?: string|{ImageName:string,ImageLink:string},
    ElementImage?:any,
    ImageName?:string,
    "groups" ?: string,
    "bpmnType"?: string,
    "width"?: number,
    "height"?: number,
    "eventDefinitionType"?: string,
    "flowableType"?:string,
    "propertyPackages" ?: string[  ],
    "hiddenPropertyPackages" ?:never [ ],
    "roles" ?: string[  ]
}
declare interface SingleElementMetadata{
    setChanged:React.Dispatch<React.SetStateAction<boolean>>
    changed:boolean
element:ElementMetadata;
t:any
}
declare interface PropertiesMetadata{
    _id?:string
    "name"?: string,
      "properties"?: [SinglePropertyMetadata]
}
declare interface SinglePropertyMetadata{
 refToView?: string;
          "id"?: string,
          "type"?: string,
          "title"?: string,
          "value"?: string,
          "description"?:string,
          "popular"?: boolean
        
}