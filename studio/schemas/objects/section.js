export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      media: 'image',
    },
  },
}
