import PropTypes from 'prop-types';

export const Options = ({ buttons }) => {
  return (
    <>
      <div>
        {buttons.map((id, index, array) => {
          return index !== array.length - 1 ? (
            <button key={id} className={id}>
              {id}
            </button>
          ) : (
            <button key={id} className={id}>
              {id}
            </button>
          );
        })}
      </div>
    </>
  );
};

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Options;
