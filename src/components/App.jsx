import { Component } from 'react';

import '../index.css';

import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

import { searchPosts } from './servers/posts-api';

import Modal from './Modal/Modal';
import PostDetails from './PostDetails/PostDetails';

import Button from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    q: '',
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    showModal: false,
    postDetails: null,
  };

  componentDidUpdate(pP, pS) {
    const { q, page } = this.state;

    if (pS.q !== q || pS.page !== page) {
      // this.setState({ isLoading: true });
      // searchPosts(q, page)
      //   .then(data => {
      //     this.setState(({ items }) => ({
      //       items: [...items, ...data.hits],
      //     }));
      //   })
      //   .catch(error => this.setState({ error: error.message }))
      //   .finally(() => this.setState({ isLoading: false }));
      this.featchPosts();
    }
  }

  async featchPosts() {
    try {
      this.setState({ isLoading: true });
      const { q, page } = this.state;
      const data = await searchPosts(q, page);
      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchPost = ({ search }) => {
    this.setState({ q: search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showPost = ({ largeImageURL, tags }) => {
    this.setState({
      postDetails: {
        largeImageURL,
        tags,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      postDetails: null,
    })
  }

  render() {
    const { items, isLoading, error, showModal, postDetails } = this.state;
    const { searchPost, loadMore, showPost, closeModal } = this;

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
  }
}

export default App;