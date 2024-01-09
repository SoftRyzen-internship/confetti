export const myStructure = (S: any) =>
  S.list()
    .title('Collections')
    .items([
      S.listItem()
        .title('Contacts (phone and email)')
        .child(S.document().schemaType('contact').documentId('contact')),
      S.listItem()
        .title('Gallery')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      ...S.documentTypeListItems()
        .filter((listItem: any) => !['contact'].includes(listItem.getId()))
        .filter((listItem: any) => !['gallery'].includes(listItem.getId())),
    ]);
