import { Component } from "react";
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscape);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscape);
    }

    handleEscape = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackDropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
    }
}

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackDropClick}>
                <div className="Modal">
                    <img src={this.props.largeImageURL} alt="" />
                </div>
            </div>, modalRoot
        );
}

}

