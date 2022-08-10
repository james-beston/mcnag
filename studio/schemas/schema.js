import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Objects
import blockContent from './objects/blockContent'
import category from './objects/category'
import author from './objects/author'

// Documents
import post from './documents/post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    author,
    category,
    blockContent,
    // Documents
    post,
  ]),
})
