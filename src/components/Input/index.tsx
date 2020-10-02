import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons/lib';

import { Container, InputWrapper } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IProps> = ({
  type = 'text',
  name,
  label,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    clearError();
    setIsFocused(true);
  }, [clearError]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <InputWrapper
        isFocused={isFocused}
        isFilled={isFilled}
        hasError={!!error}
      >
        {Icon && <Icon size={20} />}
        <input
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          type={type}
          {...rest}
        />
      </InputWrapper>

      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
