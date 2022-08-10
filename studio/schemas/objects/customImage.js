export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'credit',
      title: 'Photo Credit',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    }
  ],
}