
export default function CustomPropertiesProvider() {
  return {
    __init__: ['propertiesProvider'],
    propertiesProvider: ['type', function(this: any, propertiesPanel: any) {
      this.getTabs = function(element: any) {
        const tabs = propertiesPanel.getTabs(element);

        const businessObject = element.businessObject;

        const hasFlowableFields = businessObject?.extensionElements?.values?.some(
          (val: any) => val.$type === 'flowable:field'
        );
        if (hasFlowableFields) {
          console.log('Element has Flowable fields:', businessObject);

          // Dynamically map the existing flowable fields
          const dynamicEntries = businessObject.extensionElements.values
            .filter((val: any) => val.$type === 'flowable:Field')
            .map((field: any) => ({
              id: field.name,
              label: field.name,
              description: `Edit ${field.name}`,
              modelProperty: field.name,
            }));

          tabs.push({
            id: 'flowable-properties',
            label: 'Flowable Properties',
            groups: [
              {
                id: 'flowable-fields',
                label: 'Flowable Fields',
                entries: dynamicEntries,
              },
            ],
          });
        }

        return tabs;
      };
    }]
  };
}
