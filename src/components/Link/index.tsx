import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { LinkProps } from 'react-router-dom';

import { Container } from './styles';

interface IProps extends LinkProps {
  variant?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Link: React.FC<IProps> = ({
  variant = 'text',
  icon: Icon,
  to,
  children,
  ...rest
}) => {
  return (
    <Container to={to} className={variant} {...rest}>
      {Icon && <Icon />}
      <span>{children}</span>
    </Container>
  );
};

export default Link;
