import { BiCog } from 'react-icons/bi'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: BiCog,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url'
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url'
    },
    {
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url'
    },
    {
      name: 'nav',
      title: 'Website navigation',
      type: 'array',
      of: [
        {type: 'dropdown'},
        {type: 'reference',
        to: [{type: 'page'}]}]
    }
  ]
}