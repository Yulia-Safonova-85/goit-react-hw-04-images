import { useEffect } from "react";
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({largeImageURL, onClose})=> {


useEffect(() => {
    window.addEventListener('keydown', handleEscape);
  return ()=> {
window.removeEventListener('keydown', handleEscape);
  }
  });


const handleEscape = evt => {
        if (evt.code === 'Escape') {
           onClose();
        }
    }

  const  handleBackDropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
    }
}

    
        return createPortal(
            <div className="Overlay" onClick={handleBackDropClick}>
                <div className="Modal">
                    <img src={largeImageURL} alt="" />
                </div>
            </div>, modalRoot
        );
}



