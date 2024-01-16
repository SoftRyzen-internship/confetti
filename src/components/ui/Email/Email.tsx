import { Html } from '@react-email/html';
import { Container, Text, Tailwind } from '@react-email/components';

import contactFormData from '@/data/contact-form.json';

import config from '/tailwind.config';

import { ContactFormReq } from '@/types/ContactFormReq';

export function Email(props: ContactFormReq) {
  const { mailerMessage } = contactFormData;
  const { email, message, name } = props;

  return (
    <Tailwind config={config}>
      <Html lang="pl">
        <div className="text-color-primary">
          <Container>
            <Text>
              <span className="font-semibold">{mailerMessage.name}</span>
              <span>{name}</span>
            </Text>

            <Text className="font-semibold">
              <span className="font-semibold">{mailerMessage.email}</span>
              <span>{email}</span>
            </Text>

            {message && (
              <Text>
                <span className="font-semibold">{mailerMessage.message}</span>
                <span>{message}</span>
              </Text>
            )}
          </Container>
        </div>
      </Html>
    </Tailwind>
  );
}
