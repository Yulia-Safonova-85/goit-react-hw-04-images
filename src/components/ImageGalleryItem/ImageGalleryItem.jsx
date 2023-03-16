import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
    return (
        <li className="ImageGalleryItem" onClick={() => openModal(largeImageURL)} >
            <img className='ImageGalleryItem-image' src={src} alt={alt} />
        </li>
    )

};


ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    largeImageURL: PropTypes.string,
    openModal: PropTypes.func,
};