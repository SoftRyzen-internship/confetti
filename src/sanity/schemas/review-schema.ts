const review = {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  validation: (Rule: any) => [
    Rule.required().error('This collection is required'),
  ],
  fields: [
    {
      name: 'name',
      title: 'Author name',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(30).error('This field should be less than 30 characters'),
        Rule.min(2).error('This field should be more than 2 characters'),
      ],
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.max(135).error('This field should be less than 135 characters'),
        Rule.min(10).error('This field should be more than 10 characters'),
      ],
    },
  ],
};

export default review;
