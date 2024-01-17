import { Html } from '@react-email/html';
import { Container, Text } from '@react-email/components';

import contactFormData from '@/data/contact-form.json';

import { ContactFormReq } from '@/types/ContactFormReq';

export function Email(props: ContactFormReq) {
  const { mailerMessage } = contactFormData;
  const { email, message, name } = props;

  return (
    <Html lang="pl">
      <div>
        <Container>
          <Text>
            <b>{mailerMessage.name}</b>
            <span>{name}</span>
          </Text>

          <Text>
            <b>{mailerMessage.email}</b>
            <span>{email}</span>
          </Text>

          {message && (
            <Text>
              <b>{mailerMessage.message}</b>
              <span>{message}</span>
            </Text>
          )}
        </Container>
      </div>
    </Html>
  );
}
