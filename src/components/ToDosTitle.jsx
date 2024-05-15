import { PropTypes } from "prop-types";

const ToDosTitle = ({ title }) => {
  return (
    <h2 className="w-full py-2 text-3xl font-bold border-t-2 border-gray-400">
      {title}
    </h2>
  );
};

ToDosTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export { ToDosTitle };
