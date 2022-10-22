export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
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
      name: 'nav',
      title: 'Website navigation',
      type: 'array',
      of: [
        {type: 'dropdown'},
        {type: 'reference',
        to: [
          {type: 'page'},
          {type: 'about'},
          {type: 'post'}
        ]}]
    }
  ]
}