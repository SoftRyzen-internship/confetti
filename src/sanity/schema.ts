import { type SchemaTypeDefinition } from 'sanity';

import contact from '@/sanity/schemas/contact-schema';
import review from '@/sanity/schemas/review-schema';
import gallery from '@/sanity/schemas/gallery-schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, review, gallery],
};
