'use client';
import { formatPhoneNumber } from '@/utils/helpers';
import { useFetch } from '@/utils/hooks';

import Tel from '~/icons/call.svg';
import Mail from '~/icons/sms.svg';

import { Props } from './types';
import { ContactType } from '@/types';

export const ContactLinks: React.FC<Props> = ({ className = '', location }) => {
  const { data } = useFetch('contact') as { data: ContactType[] };
  if (!data || data.length === 0) {
    return [];
  }
  const { phone, email } = data[0];
  return (
    <ul
      className={`flex flex-col items-center gap-4 font-manrope text-2xl font-medium tracking-[-0.24px] text-color-text-extra ${className}`}
    >
      <li>
        <a
          href={`tel:${phone}`}
          className="group inline-flex items-center justify-center gap-2 transition-all hover:text-color-accent-primary focus:text-color-accent-primary"
        >
          <Tel className="h-6 w-6" /> {formatPhoneNumber(phone)}
        </a>
      </li>

      {location === 'contacts' && (
        <li>
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center justify-center gap-2 transition-all hover:text-color-accent-primary focus:text-color-accent-primary"
          >
            <Mail className="h-6 w-6" />
            {email}
          </a>
        </li>
      )}
    </ul>
  );
};
