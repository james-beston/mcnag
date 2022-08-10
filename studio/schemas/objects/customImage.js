import FaRegImage from 'react-icons/fa';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: FaRegImage,
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