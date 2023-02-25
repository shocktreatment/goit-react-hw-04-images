import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;
    const { onCloseModal } = this;

    
    return createPortal(
      <div className={styles.Overlay} onClick={onCloseModal}>
        <div className={styles.Modal}>
          {/* <img src={largeImageURL} alt={tags} /> */}
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func,
};