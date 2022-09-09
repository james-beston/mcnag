import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Objects
import author from './objects/author'
import blockContent from './objects/blockContent'
import category from './objects/category'
import customImage from './objects/customImage'
import dropdown from './objects/dropdown'
import section from './objects/section'

// Documents
import home from './documents/home'
import page from './documents/page'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    author,
    blockContent,
    category,
    customImage,
    dropdown,
    section,
    // Documents
    home,
    page,
    post,
    siteSettings
  ]),
})
