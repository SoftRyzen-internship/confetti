export const formatPhoneNumber = (tel: string): string => {
  const cleanedNumber = tel.replace(/\D/g, '');
  const formattedNumber = cleanedNumber.replace(
    /(\d{2})(\d{3})(\d{3})(\d{3})/,
    '+$1 $2 $3 $4',
  );
  return formattedNumber;
};
