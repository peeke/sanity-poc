// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import ingredient from './documents/ingredient'
import menu from './documents/menu'
import recipe from './documents/recipe'

// Object types
import figure from './objects/figure'
import hero from './objects/hero'
import internalLink from './objects/internalLink'
import link from './objects/link'
import menuItem from './objects/menuItem'
import portableText from './objects/portableText'
import portableTextSimple from './objects/portableTextSimple'
import recipeIngredient from './objects/recipeIngredient'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    figure,
    hero,
    ingredient,
    internalLink,
    link,
    menu,
    menuItem,
    portableText,
    portableTextSimple,
    recipe,
    recipeIngredient
  ])
})
