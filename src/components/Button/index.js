import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './styles';

export default function Button({ children, icon, ...rest }) {
  return (
    <CustomButton>
      <button type="button" {...rest}>
        {icon}
        <span>{children}</span>
      </button>
    </CustomButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Button.defaultProps = {
  icon: null,
};
