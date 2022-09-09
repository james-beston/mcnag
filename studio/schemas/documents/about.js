export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    },
    {
      name: 'members',
      title: 'Board Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'boardMember'}]
        }
      ]
    }
  ]
}