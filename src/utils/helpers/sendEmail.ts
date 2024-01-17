import { ContactFormInputs } from '@/components/base/ContactForm/types';

export const sendEmail = async (data: ContactFormInputs) => {
  const apiEndpoint = '/api/email';

  const res = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error();

  return res.json();
};
