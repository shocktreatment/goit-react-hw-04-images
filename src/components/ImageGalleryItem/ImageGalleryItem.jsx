import styles from './img-gallery-item.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, showPost }) => {
  return (
    <li className={styles.galleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
        onClick={showPost}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

