import PropTypes from 'prop-types';
import '../styles/LoadingSpinner.css';

function LoadingSpinner({ size = 'medium', color = 'primary' }) {
  return (
    <div className={`loading-spinner loading-spinner-${size} loading-spinner-${color}`}>
      <div className="spinner"></div>
    </div>
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
};

export default LoadingSpinner;
