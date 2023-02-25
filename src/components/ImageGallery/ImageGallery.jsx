// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './img-gallery.module.css';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


const ImageGallery = ({items, showPost}) => {
  // const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => (
  //   <li
  //     onClick={() => showPost({ largeImageURL, tags })}
  //     key={id}
  //     className={styles.ImageGalleryItem}
  //   >
  //     <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} />
  //   </li>
  // ));

  const elements = items.map(item => (
    <ImageGalleryItem
      key={item.id}
      {...item}
      showPost={() => showPost({ ...item })}
    />
  ));

  return <ul className={styles.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
