import S from '@sanity/desk-tool/structure-builder'
import { HiOutlineUserGroup, HiOutlineHome, HiOutlineSpeakerphone } from 'react-icons/hi'
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
      .title('Home Page')
      .icon(HiOutlineHome)
      .child(
        S.document()
          .schemaType('home')
          .documentId('home')
      ),
      S.listItem()
      .title('About Us')
      .icon(HiOutlineUserGroup)
      .child(
        S.document()
          .schemaType('about')
          .documentId('about')
      ),
      S.listItem()
        .title('Contact')
        .icon(HiOutlineSpeakerphone)
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
      ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'home', 'about', 'contact'].includes(listItem.getId()))
    ])