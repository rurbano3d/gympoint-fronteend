import { format, parseISO } from 'date-fns';

export const formatDate = value => {
  if (!value) return null;
  const dateFormatted = format(parseISO(value), 'dd/MM/yyyy');

  return dateFormatted;
};
