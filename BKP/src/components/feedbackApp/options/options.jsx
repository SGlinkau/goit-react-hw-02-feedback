import PropTypes from 'prop-types';
import css from './options.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.buttons}>
        {options.map((id, index, array) => {
          return index !== array.length - 1 ? (
            <button className={css.btn} onClick={onLeaveFeedback} key={id}>
              {id}
            </button>
          ) : (
            <button className={css.btn} onClick={onLeaveFeedback} key={id}>
              {id}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
