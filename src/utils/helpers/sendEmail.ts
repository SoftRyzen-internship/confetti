import { toast } from 'react-hot-toast';

import contactFormData from '@/data/contactForm.json';

import { ContactFormInputs } from '@/components/base/ContactForm/types';

export const sendEmail = (data: ContactFormInputs) => {
  const { success, error } = contactFormData.submitMessages;

  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      console.log('response:', response);
      toast.success(success);
    })
    .catch(err => {
      console.log('response with error: ', err);
      toast.error(error);
    });
};
