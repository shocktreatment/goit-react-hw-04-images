import s from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <button className={s.Button} type="button" onClick={onClick}>Load more</button>
    )
}

export default Button;

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
    onClick: PropTypes.func,
}