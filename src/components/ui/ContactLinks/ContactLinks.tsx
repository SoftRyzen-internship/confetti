'use client';

import { formatPhoneNumber } from '@/utils/helpers';
import { useFetch } from '@/utils/hooks';

import common from '@/data/common.json';

import Tel from '~/icons/call.svg';
import Mail from '~/icons/sms.svg';

import { Props } from './types';
import { ContactType } from '@/types';

export const ContactLinks: React.FC<Props> = ({ className = '', location }) => {
  const { data } = useFetch('contact') as { data: ContactType[] };
  const { phone } = common.sections.contacts;
  return (
    <ul
      className={`flex flex-col items-center gap-4 font-manrope text-2xl font-medium tracking-[-0.24px] text-color-text-extra ${className}`}
    >
      <li>
        <a
          href={data ? `tel:${data[0].phone}` : `tel:${phone}`}
          className="group inline-flex items-center justify-center gap-2 transition-all hover:text-color-accent-primary focus-visible:text-color-accent-primary"
        >
          <Tel className="h-6 w-6" />
          {data ? formatPhoneNumber(data[0].phone) : formatPhoneNumber(phone)}
        </a>
      </li>

      {location === 'contacts' && data && (
        <li>
          <a
            href={`mailto:${data[0]?.email}`}
            className="group inline-flex items-center justify-center gap-2 transition-all hover:text-color-accent-primary focus-visible:text-color-accent-primary"
          >
            <Mail className="h-6 w-6" />
            {data[0]?.email}
          </a>
        </li>
      )}
    </ul>
  );
};
