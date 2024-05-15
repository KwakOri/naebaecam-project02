import { PropTypes } from "prop-types";

const Input = ({ onChange, value, placeholder, inputTitle }) => {
  return (
    <>
      <label className="text-xl font-semibold">{inputTitle}</label>
      <input
        className="mt-1 mb-4"
        type="text"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
};

export { Input };
