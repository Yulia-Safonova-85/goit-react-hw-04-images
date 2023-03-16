import { ThreeCircles } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
    return (
        <div className='Loader'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
};

