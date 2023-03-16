import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'styles.css';
import { fetchApiSearch } from 'services/fetchApi';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';



export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    totalHits: null,
    error: null,
    status: 'idle',
    isLoading: false,
    loadMore: false,
    showModal: false,

  }

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1, images: [], loaadMore: false, });
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
    
  };

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL })
  };

  closeModal = () => {
    this.setState({ showModal: false })
  };


  componentDidUpdate(prevProps, prevState) {

    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.getImages(searchName, page)
    }
  }
  getImages = async (querry, page) => {
    this.setState({ isLoading: true })
    if (!querry) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchApiSearch(querry, page);
      if (totalHits === 0) {
        this.setState({ status: 'idle' });
        return alert(`Sorry, there is no images.Please, try again!`);
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          status: 'resolved', 
      }))
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }


  render() {
    const {  error, images, page, totalHits, status, largeImageURL, loadMore, showModal } = this.state;
    
    if (status === 'pending') {
      return <Loader />;
      }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }
    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={images} openModal ={this.openModal} />

        {totalHits >=12  && images.length >= 12 && <Button onLoadMore={this.onLoadMore} page={page} />} 

        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />}
        
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          icon={false} />
        
      </div>)

  };
};


