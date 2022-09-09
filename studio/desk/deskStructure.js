import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Index')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
       ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
    ])