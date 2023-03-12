import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {
  const onCloseModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onCloseModal);
    return () => document.removeEventListener('keydown', onCloseModal);
  });

  return createPortal(
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal}>
        {/* <img src={largeImageURL} alt={tags} /> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func,
};
