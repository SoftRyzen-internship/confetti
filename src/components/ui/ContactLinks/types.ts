export type ContactLinksData = {
  contactLinks: {
    tel: string;
    mail: string;
  };
};
export type Props = {
  className?: string;
  location?: 'header' | 'contacts';
};
export type ContactType = {
  email: string;
  phone: string;
  _id: string;
  _type: string;
};
