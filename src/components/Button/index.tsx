import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  block?: boolean;
}

const Button: React.FC<IProps> = ({
  variant = 'primary',
  block = false,
  children,
  ...rest
}) => {
  return (
    <Container block={block} type="button" className={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
