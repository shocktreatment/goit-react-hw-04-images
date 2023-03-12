import { useState, useEffect, useCallback } from 'react';

import '../index.css';

import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

import { searchPosts } from './servers/posts-api';

import Modal from './Modal/Modal';
import PostDetails from './PostDetails/PostDetails';

import Button from './Button/Button';
import Loader from './Loader/Loader';

const App = () => {
  const [q, setQ] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    if (q) {
      const featchPosts = async () => {
        try {
          setIsLoading(true);
          const data = await searchPosts(q, page);
          setItems(prevItems => {
            return [...prevItems, ...data.hits];
          });
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      featchPosts();
    }
  }, [q, page]);

  const searchPost = useCallback(({ search }) => {
    setQ(search);
    setItems([]);
    setPage(1);
  }, []);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showPost = useCallback(({ largeImageURL, tags }) => {
    setPostDetails({
      largeImageURL,
      tags,
    });
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setPostDetails(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={searchPost} />
      <ImageGallery items={items} showPost={showPost} />

      {/* {isLoading && <p>. . . l o a d i n g</p>} */}
      {isLoading && <Loader />}
      {error && <p>SORRY, try again!</p>}

      {/* {Boolean(items.length) && <button onClick={loadMore}>Load more</button>} */}
      {Boolean(items.length) && <Button onClick={loadMore} />}

      {showModal && (
        <Modal close={closeModal}>
          <PostDetails {...postDetails} />
        </Modal>
      )}
    </div>
  );
};


export default App;