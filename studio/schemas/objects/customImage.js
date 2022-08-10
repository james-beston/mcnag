import { IoImageOutline } from 'react-icons/io';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: IoImageOutline,
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