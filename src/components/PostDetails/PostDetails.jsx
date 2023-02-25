import PropTypes from 'prop-types';

const PostDetails = ({ largeImageURL, tags }) => {
  return (
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  );
};

export default PostDetails;

PostDetails.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
