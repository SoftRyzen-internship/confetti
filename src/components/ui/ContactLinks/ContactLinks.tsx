import { formatPhoneNumber } from '@/utils/helpers';

import data from '@/data/contactLinks.json';

import Tel from '~/icons/call.svg';
import Mail from '~/icons/sms.svg';

import { ContactLinksData, Props } from './types';

export const ContactLinks: React.FC<Props> = ({ className = '', location }) => {
  const { contactLinks } = data as ContactLinksData;
  return (
    <ul
      className={`flex flex-col items-center gap-4 font-manrope text-2xl font-medium tracking-[-0.24px] text-color-text-extra ${className}`}
    >
      <li>
        <a
          href={`tel:${contactLinks.tel}`}
          className="common-transition group inline-flex items-center justify-center gap-2 hover:text-color-accent-primary focus:text-color-accent-primary"
        >
          <Tel className="h-6 w-6" /> {formatPhoneNumber(contactLinks.tel)}
        </a>
      </li>

      {location === 'contacts' && (
        <li>
          <a
            href={`mailto:${contactLinks.mail}`}
            className="common-transition group inline-flex items-center justify-center gap-2 hover:text-color-accent-primary focus:text-color-accent-primary"
          >
            <Mail className="h-6 w-6" />
            {contactLinks.mail}
          </a>
        </li>
      )}
    </ul>
  );
};
