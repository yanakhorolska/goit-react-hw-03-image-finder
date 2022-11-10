import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className="Button-load" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
