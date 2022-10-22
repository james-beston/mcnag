export default {
  name: 'contact',
  title: 'Contact Us',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
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
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
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
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.custom(email => {
          if (typeof email === 'undefined') {
              return true // Allow undefined values
          }
          
          return email.toLowerCase()
              .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
                
              ? true
              : 'This is not an email'
        })
    }
  ]
}