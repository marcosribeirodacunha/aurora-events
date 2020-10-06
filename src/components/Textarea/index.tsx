import { useField } from '@unform/core';
import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Container, TextareaElement } from './styles';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<IProps> = ({ name, label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleTextAreaFocus = useCallback(() => {
    clearError();
    setIsFocused(true);
  }, [clearError]);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <TextareaElement
        ref={ref}
        isFocused={isFocused}
        hasError={!!error}
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        defaultValue={defaultValue}
        id={fieldName}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};

export default Textarea;
