import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

export default {
  name: 'dropdown',
  title: 'Dropdown menu',
  type: 'object',
  icon: MdOutlineArrowDropDownCircle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'page'},
            {type: 'about'},
            {type: 'post'}
          ]
        }
      ]
    }
  ]
}