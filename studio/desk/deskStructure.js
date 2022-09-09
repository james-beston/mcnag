import S from '@sanity/desk-tool/structure-builder'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiCog } from 'react-icons/bi'

export default () =>
  S.list()
    .title('Index')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(BiCog)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
      ),
      S.listItem()
      .title('About Us')
      .icon(HiOutlineUserGroup)
      .child(
        S.document()
          .schemaType('about')
          .documentId('about')
      ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'about'].includes(listItem.getId()))
    ])