import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css';


export const ImageGallery = ({ items, openModal }) => {
 
        return (
            <ul className="ImageGallery">
                {items.map(({ id, webformatURL, tags, largeImageURL }) => {
                    return <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        alt={tags}
                        largeImageURL={largeImageURL}
                        openModal={openModal} />
                })}
            </ul>
        )
    };

ImageGallery.propTypes = {
        items:PropTypes.arrayOf(
    PropTypes.shape({id:PropTypes.number.isRequired,})
    ).isRequired,
    openModal: PropTypes.func,
    }