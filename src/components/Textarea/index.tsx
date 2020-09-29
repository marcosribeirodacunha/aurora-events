import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

type IProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<IProps> = ({ name, ...rest }) => {
  return <Container name={name} {...rest} />;
};

export default Textarea;
