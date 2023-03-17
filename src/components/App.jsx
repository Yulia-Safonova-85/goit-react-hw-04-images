import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'styles.css';
import { fetchApiSearch } from 'services/fetchApi';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';



export const App =()=> {
const [searchName, setSearchName] = useState('');
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [loadMore, setLoadMore] = useState(false);
const [showModal, setShowModal] = useState(false);
const [largeImageURL, setLargeImageURL]= useState('');
const per_page = 12;

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setImages([]);
   setLoadMore(false);
  }

   const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1 );
    
  };

  const openModal = largeImageURL => {
    setShowModal( true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

useEffect(() => {
const getImages = async (querry, page) => {
    setIsLoading (true);
    if (!querry) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchApiSearch(querry, page);
      if (totalHits === 0) {
    return alert(`Sorry, there is no images.Please, try again!`);
      } 
        setImages(prevImages => [ ...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / per_page));
      
    } catch (error) {
      setError( `Ooops... Something wrong. please try again!`);
    } finally {
      setIsLoading(false);
    }
  };

  getImages(searchName, page)
  
}, [searchName,page]);

 

    return (
      <div className='App'>
        <Searchbar onSubmit={handleFormSubmit} />
        
        {isLoading ? (<Loader/>) : (<ImageGallery items={images} openModal ={openModal} />) }
        {error && <h2> {error}</h2>}

        {loadMore && <Button onLoadMore={onLoadMore} page={page} />} 

        {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
        
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



