import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonLink } from './styles';

export default function ButtonLink({ children, color, to, ...rest }) {
  return (
    <CustomButtonLink to={to} color={color} {...rest}>
      <span>{children}</span>
    </CustomButtonLink>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ButtonLink.defaultProps = {
  color: '#ee4d63',
};
