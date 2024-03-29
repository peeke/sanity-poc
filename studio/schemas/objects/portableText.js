export default {
  type: 'object',
  name: 'portableText',
  title: 'Portable Text',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      options: {
        editModal: 'popover'
      },
      of: [
        {
          type: 'block',
          lists: [],
          styles: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [{ type: 'link' }, { type: 'internalLink' }]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      blocks: 'blocks'
    },
    prepare({ blocks = [] }) {
      const block = blocks.find(block => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : 'No title'
      }
    }
  }
}
