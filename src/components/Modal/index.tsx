import React, { useCallback, useImperativeHandle, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../Button';

import { Container, Content, Card } from './styles';

export interface IModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

type TProps = React.PropsWithChildren<{
  maxWidth?: number;
}>;

const Modal: React.ForwardRefRenderFunction<IModalHandles, TProps> = (
  { children, maxWidth = 980 },
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ openModal, closeModal }));

  const openModal = useCallback(() => setIsVisible(true), []);

  const closeModal = useCallback(() => setIsVisible(false), []);

  if (!isVisible) return null;

  return (
    <Container>
      <Content maxWidth={maxWidth}>
        <Card>
          <Button
            fab
            icon={MdClose}
            variant="inverse-ghost"
            onClick={closeModal}
          />

          {children}
        </Card>
      </Content>
    </Container>
  );
};

export default React.forwardRef(Modal);
