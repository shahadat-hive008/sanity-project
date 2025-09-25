

export const eventType = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'eventType',
      type: 'string',
    },
    {
      name: 'date',
      type: 'datetime',
    },
    {
      name: 'doorsOpen',
      type: 'number',
    },
    {
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
    },
    {
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'tickets',
      type: 'url',
    },
    {
      name: 'doorOpen',
      type: 'number',
    },
    ({
      name: 'firstPublished',
      description: 'Automatically set when first published',
      type: 'datetime',
      readOnly: true,
    }),
  ],
}
