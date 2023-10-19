import PropTypes from 'prop-types';

export const Options = options => {
  return (
    <>
      <div>
        {options.map((id, index, array) => {
          if (index !== array.length - 1) {
            return <button key={id}>halo {id}</button>;
          } else {
            return <h2>zjebane :/</h2>;
          }
        })}
      </div>
    </>
  );
};

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Options;
