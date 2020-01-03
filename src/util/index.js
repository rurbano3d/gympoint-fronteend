import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const formatDate = value => {
  if (!value) return null;
  const dateFormatted = format(parseISO(value), 'dd/MM/yyyy');

  return dateFormatted;
};

export const completFormatDate = value => {
  if (!value) return null;
  const dateFormatted = format(parseISO(value), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });

  return dateFormatted;
};
