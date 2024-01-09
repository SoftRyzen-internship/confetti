const contact = {
  name: 'contact',
  title: 'Contacts (phone and email)',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.regex(/\+\d+$/).error('This field should contain only numbers'),
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.email().error('This field should be an email'),
      ],
    },
  ],
};

export default contact;
