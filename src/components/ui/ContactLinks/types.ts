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
