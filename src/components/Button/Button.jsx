import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ onLoadMore }) => {
    return (
        <div className='Button_container' onClick={onLoadMore}>
            <button type="button" className='Button'>
                Load more
            </button>
        </div>
    )
};

Button.propTypes = {
    onLoadMore: PropTypes.func,
};
