import { PropTypes } from "prop-types";

const Input = ({ onChange, value, placeholder, inputTitle }) => {
  return (
    <>
      <label className="font-semibold text-xl">{inputTitle}</label>
      <input
        className="mb-4 mt-1"
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
