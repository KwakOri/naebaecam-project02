import { PropTypes } from "prop-types";

const ToDosTitle = ({ title }) => {
  return (
    <h2 className="w-full text-3xl font-bold py-2 border-t-2 border-gray-400">
      {title}
    </h2>
  );
};

ToDosTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export { ToDosTitle };
