export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mainImageCredit',
      title: 'Main image credit',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }
  ]
}