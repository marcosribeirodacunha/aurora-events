import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

// eslint-disable-next-line no-shadow
enum Variants {
  primary,
  secondary,
  'primary-ghost',
  'inverse-ghost',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof Variants;
  block?: boolean;
  size?: string;
  fab?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<IProps> = ({
  variant = 'primary',
  size = 'md',
  block,
  fab,
  icon: Icon,
  type = 'button',
  children,
  ...rest
}) => {
  return (
    <Container
      type={type}
      block={!!block}
      fab={!!fab}
      hasIcon={!!Icon}
      className={`${variant} ${size}`}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};
export default Button;
