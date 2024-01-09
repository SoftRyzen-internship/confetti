const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
              type: 'string',
              validation: (Rule: any) =>
                Rule.required().error('This field is required'),
            },
          ],
        },
      ],
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.length(9).error('This field should be less than 9 characters'),
      ],
    },
  ],
};

export default gallery;
