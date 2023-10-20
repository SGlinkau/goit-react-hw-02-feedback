import PropTypes from 'prop-types';
import styles from './options.module.css';

export const Options = ({ buttons, click }) => {
  return (
    <>
      <div className={styles.section}>
        {buttons.map((id, index, array) => {
          return index !== array.length - 1 ? (
            <button key={id} className={id} onClick={click}>
              {id}
            </button>
          ) : (
            <button key={id} className={id} onClick={click}>
              {id}
            </button>
          );
        })}
      </div>
    </>
  );
};

Options.propTypes = {
  buttons: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default Options;
